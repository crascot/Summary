import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { content } from '../content/content';
import s from './skills.module.css';


const Skills = () => {
    const [variable, setVariable] = useState('h3');

    useEffect(() => {
        if (window.innerWidth <= 400) setVariable('h4');
        else setVariable('h3');
    }, []);

    const skills = content.skills.map((el, i) => (
        <div key={i}>
            <Typography className={s.name} variant="h5" fontWeight={700}>
                {el.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
                {el.title}
            </Typography>
            <ul>
                {el.list.map(skill => <li key={skill}><Typography variant="overline">{skill}</Typography></li>)}
            </ul>
        </div>
    ))

    return (
        <div className={s.skills}>
            <Typography variant={variable} className={s.title}>
                Навыки
            </Typography>
            {skills}
        </div>
    )
}

export default Skills;