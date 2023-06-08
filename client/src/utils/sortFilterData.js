export const sortFilterData = (data, op) => {
  switch (op) {
    case "A-z":
     
      return data.sort((a, b) => a.name.localeCompare(b.name));

    case "Z-a":
    
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case "Population Asc":
     
      return data.sort((a, b) => Number(b.population) - Number(a.population));

    case "Population Desc":
   
      return data.sort((a, b) => Number(a.population) - Number(b.population));

    default:
      return data
  }
};
