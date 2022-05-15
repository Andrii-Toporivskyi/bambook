import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faInstagram, faFacebook, } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
    return (
        <footer className="footer" style={{paddingLeft: "12%",paddingRight: "12%"}}>
            <div className="footer-container" style={{ display: "flex", flexWrap: "wrap" ,}}>
                <div className='logo-footer'>
                    <img src="image/logo.png" width="185" height="60" cursor="pointer" onClick={() => { window.location.href = "/home" }} />
                </div>
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Bambook-sushi. All Rights
                        Reserved.
                    </span>
                </div>
                <div className="button-info" style={{display:"flex", flexDirection:"row",columnGap: 42, }}>
                    <a
                        href="https://instagram.com/bambook.sushi?igshid=YmMyMTA2M2Y="
                        target="_blank"
                        className="item3"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a 
                        href="https://www.facebook.com/profile.php?id=100080636034873"
                        target="_blank"
                        className="item4"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a style={{ textDecoration: "none" }}

                        href="https://www.work.ua/jobs/by-company/2004042/"
                        target="_blank"
                        className="item5"
                    >
                        <p>Вакансії</p>
                    </a>
                </div>



            </div>
        </footer>
    );
};

export default Footer;