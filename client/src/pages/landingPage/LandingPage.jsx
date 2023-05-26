import style from "./LandingPage.module.css";
import planeta from "../../assets/globalPlanet.png";
import mapa from "../../assets/Map-with-route-and-camera-for-travel.png";
import { Button } from "../../components/button/button";

import { useDispatch, useSelector } from "react-redux";
import { autRequest } from "../../redux/actions/authRequest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LandingPage = () => {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  const handleClick = () => {
    dispatch(autRequest())
    navigate("/");
  };



  return (
    <div className={style.container}>
      <div className={style.containerTextoImg}>
        <p className={style.ptexto}>
          ¡Bienvenido/a a nuestra página de países! Descubre la belleza de cada
          lugar y aprende sobre las personas y culturas que hacen que cada país
          sea único. ¡Esperamos que disfrutes de tu visita!
        </p>
        <img className={style.imgMapa} src={mapa} alt="mapa" />
        <Button
          texto={"empezar"}
          styleName={"buttonLanding"}
          onClick={handleClick}
        />
      </div>

      <div className={style.containerImg}>
        <img src={planeta} alt="" className={style.imgPlaneta} />
      </div>
    </div>
  );
};
