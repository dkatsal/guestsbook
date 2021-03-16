import React from 'react';

export const ShowComments = ({ id, name, text, time, deleteId }) => {
  return (
    <div className="reviews">
      <div id="reviews_add" className="reviews_add">
        <div>
          <div className="reviews_item">
            <p className="reviews_item_author">
              <span>{name}</span>
              <span className="reviews_item_date">{time}</span>
            </p>
            <p className="reviews_item_text" onClick={() => deleteId(id)}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComments;
