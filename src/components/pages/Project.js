import React from "react";
import "../styles/project.css";
import Data from "../Data/Projectlist.json";

function Projects() {
    return (
        <div className="head">
            {Data.map((post) => {
                return (
                    <div className="cards">
                        <div className="card">
                            <img
                                className="card_img"
                                src={post.img}
                                alt="project thumbnail"
                            />
                            <div className='card_info'> 
                            <h2 className="card_category">{post.name}</h2>
                            <h3 className="card_title">{post.Skill}</h3>
                            <a href={post.btn} target="_blank" rel="noopener noreferrer">
                                <button className="code-btn">View Code</button>
                            </a>
                        </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;
