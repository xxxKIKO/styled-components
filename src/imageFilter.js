import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono, IconoTema } from "./Components/UI";


export default (type) => {
    // console.log(type)
    const images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"/>,
        // Otros: <IconoTema src={otros} alt="Otros"/>,
        Salud: <IconoTema src={salud} alt="Salud"/>,
        Transporte: <IconoTema src={transporte} alt="Transporte"/>,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades"/>,
        default: <IconoTema src={otros} alt="Otros"/>,
    }

    return images[type] || images["default"];
}

