import React from "react";
import "./Socials.css";
import PhoneImage from "../assets/phone-in-hand.png";

export default function Socials() {
    return (
        <section className="socials">
            <div className="socials-left">
                <h2 className="red-rose">
                    Tangerine is active on all your favourite social media networks
                </h2>
                <div className="icons">
                    <a href="https://instagram.com/thetangerineshopper" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://snapchat.com/add/tangerine_shop" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-snapchat"></i>
                    </a>

                    <a href="https://wa.me/233572954845" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>

                    {/* <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a> */}
                </div>

            </div>

            {/* <div className="socials-right">
                <img src={PhoneImage} alt="Mobile app" className="phone-img" />
            </div> */}
        </section>
    );
}
