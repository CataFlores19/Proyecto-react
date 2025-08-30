import React from "react";

const Jumbotron = ({ 
    title = "A Warm Welcome!",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi vel laoreet aliquet. In hac habitasse platea dictumst. Pellentesque quis ultrices nulla. In hac habitasse platea dictumst. Ut ex magna, maximus a placerat vel, imperdiet eu neque. Aliquam posuere vehicula ante, at volutpat nibh viverra vitae.",
    buttonText = "Call to action!",
    buttonHref = "#",
    showButton = true,
    buttonVariant = "btn-primary",
    buttonSize = "btn-lg",
    titleClass = "display-3",
    containerFluid = false
}) => {
    return (
        <div className="jumbotron">
            <div className={containerFluid ? "container-fluid" : "container"}>
                <h1 className={titleClass}>{title}</h1>
                <p>{description}</p>
                {showButton && (
                    <p>
                        <a 
                            className={`btn ${buttonVariant} ${buttonSize}`} 
                            href={buttonHref} 
                            role="button"
                        >
                            {buttonText}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Jumbotron;
