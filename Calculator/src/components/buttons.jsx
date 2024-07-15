import React from "react";

const buttons = [
    "%",
    "C",
    "/",
    "❌",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
];

export default function Buttons({ handleButtonClick }) {
    return (
        <>
            {buttons.map((button) => (
                <button key={button} onClick={() => handleButtonClick(button)}>
                    {button}
                </button>
            ))}
        </>
    );
}
