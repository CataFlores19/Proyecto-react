import React from "react";

const Card = ({
    imgUrl = "",
    imgAlt = "img",
    title = "Card Title",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst. Ut ex magna, maximus a placerat vel, imperdiet eu neque.",
    linkUrl = "#",
    linkText = "Find Out More!"
}) => {
    return (
        <div className="card" >
            <div className="card-img-container">
            <img src={imgUrl} alt={imgAlt} className="card-img" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href={linkUrl} className="btn btn-primary card-link">{linkText}</a>
            </div>
        </div>
    );
};

export default Card;
