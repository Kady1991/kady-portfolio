import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython } from "react-icons/si";

const LangageIcons = () => {
    return (
        <div className="flex flex-block items-center space-x-4 mt-50 left-50">
            <SiHtml5 size={40} style={{ color: " #9f7a56" }} />
            <SiCss3 size={40} style={{ color: " #9f7a56" }} />
            <SiJavascript size={40} style={{ color: "#9f7a56" }} />
            <SiReact size={40} style={{ color: "#9f7a56" }} />
            <SiPython size={40} style={{ color: "#9f7a56" }} />
        </div>
    );
};

export default LangageIcons;
