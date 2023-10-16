import React from 'react';
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiTypescript,
    SiFirebase,
    SiNextdotjs,
    SiMysql,
} from "react-icons/si";
import {BiLogoSpringBoot} from "react-icons/bi"
import "./Techstack.css";

const icons = [
    { icon: <CgCPlusPlus />, label: 'C++' },
    { icon: <DiJavascript1 />, label: 'JavaScript' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <DiNodejs />, label: 'Node.js' },
    { icon: <DiReact />, label: 'React' },
    { icon: <BiLogoSpringBoot />, label: 'Spring Boot' },
    { icon: <DiMongodb />, label: 'MongoDB' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <DiGit />, label: 'Git' },
    { icon: <SiFirebase />, label: 'Firebase' },
    { icon: <SiMysql />, label: 'MySQL' },
    { icon: <DiPython />, label: 'Python' },
    { icon: <DiJava />, label: 'Java' },
];

export default function Techstack({ columnsPerRow }) {
    const rows = [];
    let currentRow = [];

    icons.forEach((item, index) => {
        if (index % columnsPerRow === 0 && index > 0) {
            rows.push(<Row key={index} style={{textAlign:"center"}}>{currentRow}</Row>);
            currentRow = [];
        }

        currentRow.push(
            <Col xs={6} md={3} className="tech-icons" key={index} title={item.label}>
                {item.icon}
            </Col>
        );
    });

    // Add the last row if it's not complete
    if (currentRow.length > 0) {
        rows.push(<Row key="last" style={{textAlign:"center"}}>{currentRow}</Row>);
    }

    return <>{rows}</>;
}
