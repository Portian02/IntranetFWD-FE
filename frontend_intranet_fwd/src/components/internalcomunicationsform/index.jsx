import React, { useState } from 'react';

const InternalCommunicationsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Date:', date);
    console.log('User ID:', userId);
    // Reset form
    setTitle('');
    setContent('');
    setDate('');
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />


      <button type="submit">Send</button>
    </form>
  );
};

export default InternalCommunicationsForm;
