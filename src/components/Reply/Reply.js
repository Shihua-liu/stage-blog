import React, { useState } from 'react';
import "./Reply.css"
function ReplySection() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    setComments([...comments, { name, comment }]);
    e.target.reset();
  };

  return (
    <div className='commentcontainer'>
      <h2>Reply Section</h2>
      <form onSubmit={handleSubmit} >
        <label>
          Naam:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Comment:
          <textarea name="comment" required></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <h4>{comment.name}</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReplySection;