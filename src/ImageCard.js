import React from "react";

export default function ImageCard({url}) {
    return (
        <div className="list-item">
            <img src={url} alt="img"></img>
        </div>
    )
}