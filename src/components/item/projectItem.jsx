import React from "react";
import PropTypes from "prop-types";

const ProjectItem = (props) => {
    const { title = "", links = {}, subject = "", img = "", descriptionList = [] } = props.data;

    return (
        <div className="project-item">
            <div className="flex-view">
                <h4>{title}</h4>
                {links.link && (
                    <a
                        href={"/#"}
                        target="_blank"
                        rel="noreferrer"
                        title="Link"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("없지롱~");
                        }}
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                )}
                {links.demo && (
                    <a href={links.demo} target="_blank" rel="noreferrer" title="Demo">
                        <i className="fa-solid fa-desktop"></i>
                    </a>
                )}
                {links.github && (
                    <a href={links.github} target="_blank" rel="noreferrer" title="Github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                )}
            </div>

            <p className="description">{subject}</p>

            <div className="img-wrapper">
                <img src={img} alt="pepsi-man project img" />
            </div>

            <ul>
                {descriptionList.map((item, index) => (
                    <li key={item + index}>• {item}</li>
                ))}
            </ul>
        </div>
    );
};

ProjectItem.propTypes = {
    data: PropTypes.object,
};

export default ProjectItem;
