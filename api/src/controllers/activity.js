const { Activity, Country } = require("../db");
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    activities.length > 0
      ? res.json(activities)
      : res.json({
          message: "la lista de actividades esta vacia",
          activities: activities,
        });
   
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createACtivities = async (req, res) => {

  const { name, difficulty, duration, season, countries } = req.body;

  try {
    // Creamos una nueva actividad utilizando el modelo Activity y los datos proporcionados en el cuerpo de la solicitud
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    let matchingCountries = await Country.findAll({
      where: {
        name: countries,
      },
    });

    await newActivity.addCountry(matchingCountries);

    // Enviamos una respuesta HTTP 200 al cliente con un mensaje indicando que la actividad ha sido creada
    return res.status(200).json(`La actividad ${name} ha sido creada`);
  } catch (error) {
    // Si ocurre un error durante la creación de la actividad, enviamos una respuesta HTTP 400 al cliente con un mensaje de error
    res.status(400).json({ error: "Los datos son incorrectos" });
  }
};

module.exports = {
  getActivities,
  createACtivities,
};
