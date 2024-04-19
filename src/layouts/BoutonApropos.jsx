import React from "react";
import { Link } from "react-router-dom";

const BoutonApropos = () => {
    return (
        <div className="m-20 flex justify-center">
            <Link to="/apropos">
                <button className="bg-iconBrun hover:bg-cc text-white font-bold py-3 px-8 rounded-xl transition duration-300 ease-in-out flex items-center">
                    <span className="text-3xl mx-auto">À propos</span>
                </button>
            </Link>
        </div>
    );
};

export default BoutonApropos;
