import React from 'react';
import axios from 'axios';
import { API_URL } from '../config';

export const PostComments = ({ onAddComment }) => {
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');

  const nowTime = (UNIX_timestamp) => {
    let a = new Date();
    let months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let time = `${hours}:${minutes} / ${date} ${month} ${year} `;
    return time;
  };

  const addComment = (event) => {
    event.preventDefault();
    const time = nowTime();
    const comment = { name, text, time };
    console.log(comment);
    if (comment.name.trim().length >= 3 && comment.text.trim().length >= 3) {
      axios.post(`${API_URL}posts`, comment).then((res) => {
        onAddComment(res.data);
        setName('');
        setText('');
        console.log(res);
        console.log('post', res.data);
      });
    }
  };
  return (
    <div className="input_box">
      <form className="add cf">
        <input
          placeholder="Введите имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="reviews_add_text0"
        />
        <input
          placeholder="Введите текст"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="reviews_add_text"
        />
        <button type="button" onClick={addComment} className="reviews_add_button">
          Оставить комментарий
        </button>
      </form>
    </div>
  );
};

export default PostComments;