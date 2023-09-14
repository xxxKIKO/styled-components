import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI"

export default ({ tema }) => {
    const claro = <Icono src={themeOn} alt="Tema Oscuro" />;
    const oscuro = <Icono src={themeOff} alt="Tema Claro" />;

    return <>{tema ? oscuro : claro}</>;
}