import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython } from "react-icons/si";

const LangageIcons = () => {
    return (
        <div className="flex items-center justify-center space-x-8 mt-50 left-50">
            <SiHtml5 size={40} style={{ color: "#45352a", marginRight: "16px" }} />
            <SiCss3 size={40} style={{ color: "#45352a", marginRight: "16px" }} />
            <SiJavascript size={40} style={{ color: "#45352a", marginRight: "16px" }} />
            <SiReact size={40} style={{ color: "#45352a", marginRight: "16px" }} />
            <SiPython size={40} style={{ color: "#45352a", marginRight: "16px" }} />
        </div>
    );
};

export default LangageIcons;
