import React from "react";

export default function Display({ displayValue }) {
    return (
        <>
            <div className="input">
                <input type="text" value={displayValue} readOnly />
            </div>
        </>
    );
}
