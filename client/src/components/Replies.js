import React, { useState } from 'react';

const Replies = () => {
    const [reply, setReply] = useState("");

    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    }

    return (
        <main className='replies'>
            <form className='modal__content' onSubmit={handleSubmitReply}>
                <label htmlFor="reply">Comentar post</label>
                <textarea
                    rows={5}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />

                <button className='modalBtn'>Enviar</button>
            </form>
        </main>
    )
}

export default Replies