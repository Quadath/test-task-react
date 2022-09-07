import React from "react";

export default function ImageCard({url, showModal, id}) {
    return (
        <div className="list-item">
            <img src={url} alt="img" onClick={() => showModal(id)}></img>
        </div>
    )
}