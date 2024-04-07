import React from "react";

export default function Suggestion({ name, className }) {
    return (
        <button className={className}>
            {name}
        </button>
    )
}