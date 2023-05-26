export const getOptionsContinent = (data) => {
  const optionsContinent = new Set();
  console.log("data1--->", data);

  data &&
    data.forEach((element) => {
      element.continents.forEach((data) => optionsContinent.add(data));
    });

  return Array.from(optionsContinent);
};

export const getOptionsActivities = (data) => {
  console.log("data2--->", data);
  const optionsActivities = new Set();
  if (Array.isArray(data)) {
    data &&
      data.forEach((element) => {
        optionsActivities.add(element.name);
      });
    return Array.from(optionsActivities);
  } else {
    return [];
  }
};
