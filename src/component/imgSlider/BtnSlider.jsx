import React from "react";
import "./img_slider.css";

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {direction === "next" ?
                <span className="material-symbols-rounded">
                    arrow_forward
                </span> :
                <span className="material-symbols-rounded">
                    arrow_back
                </span>}
        </button>
    );
}