import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { content } from '../content/content';
import s from './works.module.css';


const Works = () => {
    const [variable, setVariable] = useState('h3');

    useEffect(() => {
        if(window.innerWidth <= 400) setVariable('h4');
        else setVariable('h3');
    }, []);

    return (
        <div className={s.works}>
            <Typography variant={variable} className={s.title}>
                Опыт работы
            </Typography>
            {
                content.works.map((work, i) => (
                    <div className={s.block} key={i}>
                        <div className={s.header}>
                            <Typography variant="h5" fontWeight={700}>
                                {work.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {work.time}
                            </Typography>
                        </div>
                        <Typography variant="body1" className={s.text}>
                            {work.text}
                        </Typography>
                    </div>
                ))
            }
        </div>
    )
}

export default Works;