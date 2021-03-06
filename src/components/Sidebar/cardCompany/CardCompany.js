import React, {useContext, useEffect, useState} from "react";
import classes from "./CardCompany.module.css";
import {load} from "@2gis/mapgl";
import {ReactComponent as LogoSave} from "./save.svg";
import {ReactComponent as LogoShare} from "./share.svg" 
import {ReactComponent as LogoGo} from "./go.svg";
import {ReactComponent as LogoStarFull} from "./star1.svg";
import {ReactComponent as LogoStar} from "./star2.svg";
import {ReactComponent as LogoTime} from "./time.svg";
import {ReactComponent as LogoRuble} from "./ruble.svg";
import {gisAPI} from "../../../api/api";




const CardCompany = (props) => {
    if(props.shop == null){
        return (
            <div className={classes.cardComp}>
                <div className={classes.actionCards}>
                    <span className={classes.actionCard}>
                        <LogoSave/>
                        <span>Сохранить</span>
                    </span>
                    <span className={classes.actionCard}>
                        <LogoShare/>
                        <span>Отправить</span>
                    </span>
                    <span className={classes.actionCard}>
                        <LogoGo/>
                        <span>Проехать</span>
                    </span>
                </div>
                <div className={classes.Stars}>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStar/>
                </div>
                <h2>
                    Радуга Парк
                </h2>
                <h5>
                    Торгово - разлекательный центр <LogoRuble/> <LogoRuble/>
                </h5>

                <div className={classes.operatinMode}>
                    <span>Ежедневно с 10:00 до 22:00
                        <LogoTime/><br/>Открыто</span>
                </div>
            </div>
        )
    }else {
        return (
            <div className={classes.cardComp}>
                <div className={classes.actionCards}>
                    <span onClick={()=>{
                        gisAPI.addToFavourite(props.shop.id)
                    }} className={classes.actionCard}>
                        <LogoSave/>
                        <span>Сохранить</span>
                    </span>
                    <span className={classes.actionCard}>
                        <LogoShare/>
                        <span>Отправить</span>
                    </span>
                    <span className={classes.actionCard}>
                        <LogoGo/>
                        <span>Проехать</span>
                    </span>
                </div>
                <div className={classes.Stars}>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStarFull/>
                    <LogoStar/>
                </div>
                <h2>
                    {props.shop.name}
                </h2>
                <h5>
                    {props.shop.rubrics[0].name} <LogoRuble/> <LogoRuble/>
                </h5>

                <div className={classes.operatinMode}>
                    <span>Ежедневно с {props.shop.schedule.Fri.working_hours[0].from} до {props.shop.schedule.Fri.working_hours[0].to}
                        <LogoTime/><br/>Открыто</span>
                </div>
            </div>
        )
    }
};

export default CardCompany;