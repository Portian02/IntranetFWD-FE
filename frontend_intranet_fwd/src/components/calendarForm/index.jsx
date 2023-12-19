import React, { useState } from 'react';

const CalendarForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [linkpdf, setLinkpdf] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Date:', date);
    console.log('linkpdf:', linkpdf);
    // Reset form
    setName('');
    setDescription('');
    setDate('');
    setLinkpdf('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
     <label htmlFor="linkpdj">Linkpdf:</label>
      <input
        type="file"
        id="linkpdf"
        value={linkpdf}
        onChange={(e) => setLinkpdf(e.target.value)}
        required
      />


      <button type="submit">Send</button>
    </form>
  );
};

export default CalendarForm;
