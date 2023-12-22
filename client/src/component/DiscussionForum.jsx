

import React from 'react';


const DiscussionForum = () => {
  return (
    <section className="discussion-forum">
      <h2>Community Discussion Forum</h2>
      {/* Add discussion forum content here */}
      {/* For example: */}
      <div className="post">
        <h3>Topic: Financial Literacy Tips</h3>
        <p>
          Share your favorite financial literacy tips and strategies that have helped you manage your finances better.
        </p>
        <p className="author">Posted by: JohnDoe</p>
      </div>
      <div className="post">
        <h3>Question: Investment Advice Needed</h3>
        <p>
          I'm new to investing and looking for advice on getting started. Any recommendations or resources?
        </p>
        <p className="author">Posted by: JaneSmith</p>
      </div>

      
    </section>
  );
};

export default DiscussionForum;
