import React from 'react'

const EventForm = ({ setFormData, handleSubmit }) => {
  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input onChange={setFormData} name="title" placeholder="Title" />
      <input
        onChange={setFormData}
        name="description"
        placeholder="Description"
      />
      <input onChange={setFormData} name="category" placeholder="Category" />
      <input type="date" onChange={setFormData} name="date" />

      <button className="sort-button sport">Submit event</button>
    </form>
  );
};

export default EventForm