import React, { useState, useEffect } from "react";
import { fetchImage } from "./fetchService";

export default function ImageModal({ isVisible, id, closeModal }) {
    const [data, setData] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            fetchImage(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(res => {
                setLoading(false);
                setData(res);
            })
        }
    }, [isVisible, id])

    return (
        <div className="modal-wrapper">
            <div className={isVisible ? "image-modal__bg" : "hidden"} onClick={closeModal}/>
            <div className={isVisible ? "image-modal active" : "image-modal"}>
                {loading ? <p>Loading...</p> : null}
                <img classname="image-modal__img" src={data.url} alt="big"/>
            </div>
        </div>

    )
} 