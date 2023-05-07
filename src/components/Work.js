import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WordCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WordCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgscr}
                            title={val.title}
                            desc={val.desc}
                            view={val.view}
                            source={val.source}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Work