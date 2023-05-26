import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/input/Input";
import styles from "./CreateActivity.module.css";
import { useEffect, useState } from "react";
import { fecthData } from "../../redux/actions/fetchData";
import { Button } from "../../components/button/button";
import { validateForm } from "../../utils/validateForm";
import { useDataForm } from "../../hooks/useDataForm";
import { LoaderForm } from "../../components/loader/LoaderForm";

const CreateActivity = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.fetchDataReducer.requests);
  const {valueForm,errors,loading,response,handleOnSubmit,handleValidateFormBlur,handleValueInputChange} = useDataForm({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countries: [],
  });
 
 
  useEffect(() => {
    if (countries === undefined) {
      dispatch(
        fecthData(process.env.REACT_APP_API_URL_COUNTRIES_ALL, "countries")
      );
    }
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleOnSubmit} action="">
        <div>
          <Input
            label={"Name"}
            type={"text"}
            name={"name"}
            styleName={"containerTextAndTime"}
            styleLabel={"labelName"}
            styleInput={"inputName"}
            evento={handleValueInputChange}
            value={valueForm.name}
            onBlur={handleValidateFormBlur}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          <Input
            label={"Duration"}
            type={"time"}
            name={"duration"}
            styleName={"containerTextAndTime"}
            styleLabel={"labelDuration"}
            styleInput={"inputDuration"}
            evento={handleValueInputChange}
            value={valueForm.duration}
            onBlur={handleValidateFormBlur}
          />
          {errors.duration && (
            <span style={{ color: "red" }}>{errors.duration}</span>
          )}
        </div>
        <div>
          <span className={styles.span}>Difficulty</span>
          <div className={styles.containerDuration}>
            <Input
              label={"1"}
              type={"radio"}
              name={"difficulty"}
              styleName={"containerDifficulty"}
              styleLabel={"labelDifficulty"}
              evento={handleValueInputChange}
              value={"1"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.difficulty==='1'}
            />
            <Input
              label={"2"}
              type={"radio"}
              name={"difficulty"}
              styleName={"containerDifficulty"}
              styleLabel={"labelDifficulty"}
              evento={handleValueInputChange}
              value={"2"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.difficulty==='2'}
            />
            <Input
              label={"3"}
              type={"radio"}
              name={"difficulty"}
              styleName={"containerDifficulty"}
              styleLabel={"labelDifficulty"}
              evento={handleValueInputChange}
              value={"3"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.difficulty==='3'}
            />
            <Input
              label={"4"}
              type={"radio"}
              name={"difficulty"}
              styleName={"containerDifficulty"}
              styleLabel={"labelDifficulty"}
              evento={handleValueInputChange}
              value={"4"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.difficulty==='4'}
            />
            <Input
              label={"5"}
              type={"radio"}
              name={"difficulty"}
              styleName={"containerDifficulty"}
              styleLabel={"labelDifficulty"}
              evento={handleValueInputChange}
              value={"5"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.difficulty==='5'}
            />
            {errors.difficulty && (
              <span style={{ color: "red" }}>{errors.difficulty}</span>
            )}
          </div>
        </div>
        <div>
          <span className={styles.span}>Seasson</span>
          <div className={styles.containerTemporada}>
            <Input
              label={"Summer"}
              type={"radio"}
              name={"season"}
              styleName={"containerSeasson"}
              styleLabel={"labelSeasson"}
              evento={handleValueInputChange}
              value={"summer"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.season==='summer'}
            />
            <Input
              label={"Autumn"}
              type={"radio"}
              name={"season"}
              styleName={"containerSeasson"}
              styleLabel={"labelSeasson"}
              evento={handleValueInputChange}
              value={"autumn"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.season==='autumn'}
            />
            <Input
              label={"Winter"}
              type={"radio"}
              name={"season"}
              styleName={"containerSeasson"}
              styleLabel={"labelSeasson"}
              evento={handleValueInputChange}
              value={"winter"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.season==='winter'}
            />
            <Input
              label={"Spring"}
              type={"radio"}
              name={"season"}
              styleName={"containerSeasson"}
              styleLabel={"labelSeasson"}
              evento={handleValueInputChange}
              value={"spring"}
              onBlur={handleValidateFormBlur}
              checked={valueForm.season==='spring'}
            />
            {errors.season && (
              <span style={{ color: "red" }}>{errors.season}</span>
            )}
          </div>
        </div>
        <select
          className={styles.containerSelect}
          name="countries"
          onChange={handleValueInputChange}
          onBlur={handleValidateFormBlur}
          value={valueForm.countries.length > 0 ? valueForm.countries[valueForm.countries.length - 1] : "Select a country"}
        
        >
          <option disabled selected value="Select a country">
            Select a country
          </option>
          {!countries?.loading &&
            countries?.data.map((op) => {
              return (
                <option key={op.id} value={op.name}>
                  {op.name}
                </option>
              );
            })}
        </select>
        {errors.countries && (
          <span style={{ color: "red" }}>{errors.countries}</span>
        )}
    {/*  <button name="button submit" type="submit" onChange={(e)=>handleValueInputChange(e)}>enviar</button> */}
        <Button
          type={"submit"}
          texto={"create activity"}
          styleName={"buttonCreateACtivity"}
         
        />
        {response&&<p className={styles.messageForm}>enviado con exito</p>}
      </form>
      <div> {loading&&<LoaderForm/>}
      </div>
     
    </div>
  );
};

export default CreateActivity;
