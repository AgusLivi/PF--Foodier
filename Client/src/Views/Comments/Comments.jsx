import axios from 'axios';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { createPost } from '../../Redux/actions';

function Comments({user_ID, seller_ID }) {
  const [rating, setRating] = useState(0);
  const [comments, setComment] = useState('');

  const dispatch = useDispatch()
  
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rating > 0 && comments.trim() !== '') {
      // Aquí puedes enviar los datos del comentario y la valoración al servidor o a algún otro lugar donde los almacenes.
      const newComment = {
        user_ID,
        seller_ID,
        comments,
        rating,
      };
      console.log(newComment);
      dispatch(createPost(newComment))

      setRating(0);
      setComment('');
    }
  };

  return (
    <div>
      <h2>Dejar Comentario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Selecciona una valoración</option>
            <option value={1}>1 Estrella</option>
            <option value={2}>2 Estrellas</option>
            <option value={3}>3 Estrellas</option>
            <option value={4}>4 Estrellas</option>
            <option value={5}>5 Estrellas</option>
          </select>
        </div>
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="Escribe tu comentario..."
            value={comments}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Enviar Comentario</button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
