import React from "react";

const NavBar = ({ 
    brandText = "Expand at sm", 
    brandHref = "#",
    menuItems = [
        { text: "Home", href: "#", active: true },
        { text: "About", href: "#", active: false },
        { text: "Services", href: "#", active: false },
        { text: "Contact", href: "#", active: false },
    ]
}) => {
    return (
        <>
            {/* Estilos locales */}
            <style>
                {`
                @media (max-width: 576px) {
                  .custom-collapse {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: #212529;
                    z-index: 1050;
                    padding: 1rem;
                  }
                }
                `}
            </style>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark position-relative" aria-label="Third navbar example">
                <div className="container px-3">
                    <a className="navbar-brand" href={brandHref}>
                        {brandText}
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarsExample03" 
                        aria-controls="navbarsExample03" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse custom-collapse" id="navbarsExample03">
                        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a 
                                        className={`nav-link ${item.active ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                                        aria-current={item.active ? "page" : undefined}
                                        aria-disabled={item.disabled ? "true" : undefined}
                                        href={item.disabled ? undefined : item.href}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
