import { sortFilterData } from "./sortFilterData";

export const dataFilter = (array, option) => {
  let arrayFiltrado = [...array.data];
  if( option.continents === "All Continents" &&
  option.activities === "All Activities" &&
  option.sort === "random"){
 
    return arrayFiltrado;
  }
  if (
    option.continents === "All Continents" &&
    option.activities === "All Activities" &&
    option.sort !== "random"
  ) {
    arrayFiltrado = sortFilterData(arrayFiltrado, option.sort);
    return arrayFiltrado;
  }

  if (
    option.continents !== "All Continents" &&
    option.activities !== "All Activities" &&
    option.sort !== "random"
  ) {
    arrayFiltrado =
    array &&
    array.data
      .filter((item) => {
        return item.continents.some((c) => {
          return c.includes(option.continents);
        });
      })
      .filter((item) => {
        return item.activities.some((item) => {
          return item.name === option.activities;
        });
      })
arrayFiltrado = sortFilterData(arrayFiltrado, option.sort);
  if (arrayFiltrado.length=== 0) {
    let message = `there is no ${option.activities} in ${option.continents}`;
    return { arrayFiltrado, message };
  }

  return arrayFiltrado
 
  }
  if (
    option.continents === "All Continents" &&
    option.activities !== "All Activities"&&option.sort !== "random"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.activities.some((item) => item.name === option.activities);
      });
   
    return sortFilterData(arrayFiltrado, option.sort);
  }

  if (
    option.continents !== "All Continents" &&
    option.activities === "All Activities"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.continents.some((c) => {
          return c.includes(option.continents);
        });
      });
    return sortFilterData(arrayFiltrado, option.sort)
  }
  if (
    option.continents === "All Continents" &&
    option.activities === "All Activities"
  ) {
   
    return (arrayFiltrado = array.data);
  }
  if (
    option.continents !== "All Continents" &&
    option.activities === "All Activities"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.continents.some((c) => {
          return c.includes(option.continents);
        });
      });
  
    return arrayFiltrado;
  }
  if (
    option.activities !== "All Activities" &&
    option.continents !== "All Continents"
  ) {
    arrayFiltrado =
      array &&
      array.data
        .filter((item) => {
          return item.continents.some((c) => {
            return c.includes(option.continents);
          });
        })
        .filter((item) => {
          return item.activities.some((item) => {
            return item.name === option.activities;
          });
        });
    if (arrayFiltrado.length === 0) {
      let message = `there is no ${option.activities} in ${option.continents}`;
      return { arrayFiltrado, message };
    }

    return arrayFiltrado;
  }
  if (
    option.continents === "All Continents" &&
    option.activities !== "All Activities"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.activities.some((item) => item.name === option.activities);
      });
   
    return arrayFiltrado;
  }
};
