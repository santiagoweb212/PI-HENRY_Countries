export const sortFilterData = (data, op) => {
  switch (op) {
    case "A-z":
      console.log('op1-->',op)
      return data.sort((a, b) => a.name.localeCompare(b.name));

    case "Z-a":
      console.log('op2-->',op)
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case "ascending":
      console.log('op3-->',op)
      return data.sort((a, b) => Number(b.population) - Number(a.population));

    case "descending":
      console.log('op4-->',op)
      return data.sort((a, b) => Number(a.population) - Number(b.population));

    default:
      return data
  }
};
