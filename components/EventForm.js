import React from 'react'

const EventForm = ({ setFormData, handleSubmit }) => {
  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        onChange={setFormData}
        name="title"
        placeholder="Title"
        className="event-input"
      />
      <input
        onChange={setFormData}
        name="description"
        placeholder="Description"
        className="event-input"
      />
      <input
        onChange={setFormData}
        name="category"
        placeholder="Category"
        className="event-input"
      />
      <input
        type="date"
        onChange={setFormData}
        name="date"
        className="event-input"
      />

      <button className="button">Submit event</button>
    </form>
  );
};

export default EventForm