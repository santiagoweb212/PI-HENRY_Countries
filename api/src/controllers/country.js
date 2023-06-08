const { Op} = require("sequelize");
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  //Definimos la función getCountries que será exportada y que recibirá los parámetros req (request) y res (response)
  try {
    //Iniciamos un bloque try-catch para manejar errores
    const { name } = req.query; //Extraemos el parámetro "name" de la query en la variable "name"
    console.log('-->name',name);
    if (!name || name === "") {
      //Verificamos si el parámetro "name" no está presente o si es una cadena vacía
      const countries = await Country.findAll({include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
        },
      ]}); //En caso afirmativo, buscamos todos los países en la base de datos
      res.json(countries); //Enviamos la lista de países como respuesta en formato JSON
    } else {
      //En caso contrario, es decir, si se especificó un nombre de país en la query
      const nameCountry = name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //Normalizamos el texto para eliminar las tildes y diacríticos y lo almacenamos en la variable "nameCountry"

      const countries = await Country.findAll({
        //Buscamos los países en la base de datos según el nombre proporcionado
        where: { name: { [Op.iLike]: `${nameCountry}%`/* Sequelize.fn("lower", nameCountry) */ } }, //Utilizamos el operador de Sequelize "iLike" para hacer una búsqueda case-insensitive y la función "lower" de Sequelize para convertir el texto a minúsculas
        
      });
      
      if (countries.length > 0) res.json(countries);
      //Enviamos la lista de países como respuesta en formato JSON
      else
        throw  {
          message: "No se encontraron países que coincidan con la búsqueda.",
          statusCode: 404,
        } /* res.status(404).send('No se encontraron países que coincidan con la búsqueda.') */; //. Si no hay elementos en la lista, se devuelve un error 404
    }
  } catch (error) {
    //Capturamos cualquier error que se produzca durante la ejecución del código
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({error:error}); //Enviamos un mensaje de error con un status code 500 al cliente
  }
};
const getCountriesById = async (req, res) => {
  try {
    const idCountry = req.params.id;

    const countryById = await Country.findByPk(idCountry, {
      include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
        },
      ],
    });

    if (countryById) res.json(countryById);
    else
      throw {
        message: "no se encontraron resultados para la búsqueda por id",
        statusCode: 404,
      };
  } catch (error) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).send(error.message);
  }
};

module.exports = { getCountries, getCountriesById };
