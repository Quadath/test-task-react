import React, { useState, useEffect } from "react";
import { fetchImage } from "../fetchService";
import './ImageModal.sass'

export default function ImageModal({ isVisible, id, closeModal }) {
    const [data, setData] = useState(0)
    const [loading, setLoading] = useState(true);
    const [commentText, setCommentText] = useState('');

    const comments = data.comments?.map(item => {
        const time = new Date();
        time.setTime(item.date);
        return (
            <div key={item.id} className="comment-item">
                <span className="comment-item__time">
                    {addZero(time.getDate())}.{addZero(time.getMonth() + 1)}.{addZero(time.getFullYear())}
                </span>
                <span className="comment-item__text">{item.text}</span>
            </div>
        )
    })

    function addZero(value) {
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }

    function addComment() {
        if (commentText.match("^[A-Za-z0-9_-]*$") && commentText.trim().length !== 0) {
            const comments = data.comments;
            comments.push({ id: comments.length + 1, text: commentText, date: new Date().getTime() });
            setData({
                ...data,
                comments
            })
            setCommentText('')
        }
    }

    useEffect(() => {
        if (isVisible) {
            fetchImage(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(res => {
                setLoading(false);
                setData(res);
            })
        } else {
            setData(0)
            setLoading(true)
        }
    }, [isVisible, id])

    return (
        <div className={isVisible ? "image-modal__bg" : "hidden"} onClick={(e) => closeModal(e)}>
            <div className={isVisible ? "image-modal active" : "image-modal"}>
                {loading ? <p>Loading...</p> : null}
                <img className="image-modal__img" src={data.url} alt="big" />
                <div className="image-modal__comments">
                    {comments}
                </div>
                <div className="image-modal__comment">
                    <span className="comment-label">Comment</span>
                    <textarea onChange={(e) => setCommentText(e.target.value)} value={commentText} required className="comment-form">

                    </textarea>
                    <span className="comment-help">Write a few sentences about the photo.</span>
                </div>
                <button className="comment-btn" onClick={addComment}>Save</button>
            </div>
        </div>
    )
} 