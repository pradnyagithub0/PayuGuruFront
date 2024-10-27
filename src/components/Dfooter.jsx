import React from "react";
import './Dfooter.css';

function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div>
            <footer className="mt-5 footer">
                <div className="bg-grey h-theme d-flex flex-row mx-0">
                    <p className="mt-3 mx-auto">Copyright © {currentYear}. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
