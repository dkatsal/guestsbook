import React from 'react';
import './css/style.css';
import ShowComments from './Components/ShowComments';
import PostComments from './Components/PostComments';
import axios from 'axios';
import { API_URL } from './config';

function App() {
  const [comments, setComments] = React.useState([]);

  const getComments = async () => {
    const response = await axios.get(`${API_URL}posts`);
    if (response && response.data) setComments(response.data);
  };

  React.useEffect(() => {
    getComments();
  }, []);

  const onAddComment = (comment) => {
    setComments((prevComments) => [
      ...prevComments,
      { name: comment.name, text: comment.text, time: comment.time },
    ]);
  };

  const deleteComment = async (id) => {
    await axios.delete(`${API_URL}posts/${id}`).then((res) => {
      console.log(res);
      console.log('delete:', res.data);
    });
  };

  return (
    <div className="allDoc">
      <h1 style={{ textAlign: 'center' }}>Lorem ipsum</h1>
      <div className="allComments">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eos, corrupti repellendus
        at ad assumenda. Sunt praesentium, dicta consequatur repudiandae voluptas eius optio quos
        architecto dolorem, eligendi animi assumenda aliquam!
      </div>
      {comments.map((comment, index) => (
        <ShowComments
          key={index}
          id={comment._id}
          name={comment.name}
          text={comment.text}
          time={comment.time}
          deleteId={deleteComment}
        />
      ))}
      <PostComments onAddComment={onAddComment} />
    </div>
  );
}

export default App;
