export const validateForm = (value) => {
  const errors = {};

  if (value.name.trim().length === 0) {
    errors.name = "Please enter a name";
  } else if (!/^[A-Za-z\s]{1,50}$/.test(value.name)) {
    errors.name = "The activity name is not valid.";
  }

  if (value.duration.trim().length === 0) {
    errors.duration = "Please enter a duration";
  }
  if (value.difficulty.trim().length === 0) {
    
    errors.difficulty = "Please select a difficulty";
  }
  if (value.season.trim().length === 0) {
    errors.season = "Please select a season";
  }
  if (value.countries.length === 0) {
    errors.countries = "Please select a country";
  }

  return errors;
};
