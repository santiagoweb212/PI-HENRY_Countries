import { sortFilterData } from "./sortFilterData";

export const dataFilter = (array, option) => {
  let arrayFiltrado = [...array.data];
  if( option.continents === "all continents" &&
  option.activities === "all activities" &&
  option.sort === "random"){
    console.log("op0-->",option.sort)
  
    console.log("arrayFiltrado-->",arrayFiltrado)
    return arrayFiltrado;
  }
  if (
    option.continents === "all continents" &&
    option.activities === "all activities" &&
    option.sort !== "random"
  ) {
    arrayFiltrado = sortFilterData(arrayFiltrado, option.sort);
    return arrayFiltrado;
  }

  if (
    option.continents !== "all continents" &&
    option.activities !== "all activities" &&
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
    option.continents === "all continents" &&
    option.activities !== "all activities"&&option.sort !== "random"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.activities.some((item) => item.name === option.activities);
      });
    console.log("4-->", arrayFiltrado);
    return sortFilterData(arrayFiltrado, option.sort);
  }

  if (
    option.continents !== "all continents" &&
    option.activities === "all activities"
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
    option.continents === "all continents" &&
    option.activities === "all activities"
  ) {
    console.log("1-->", array.data);
    return (arrayFiltrado = array.data);
  }
  if (
    option.continents !== "all continents" &&
    option.activities === "all activities"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.continents.some((c) => {
          return c.includes(option.continents);
        });
      });
    console.log("2-->", arrayFiltrado);
    return arrayFiltrado;
  }
  if (
    option.activities !== "all activities" &&
    option.continents !== "all continents"
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
    console.log("3-->", arrayFiltrado);
    return arrayFiltrado;
  }
  if (
    option.continents === "all continents" &&
    option.activities !== "all activities"
  ) {
    arrayFiltrado =
      array &&
      array.data.filter((item) => {
        return item.activities.some((item) => item.name === option.activities);
      });
    console.log("4-->", arrayFiltrado);
    return arrayFiltrado;
  }
};
