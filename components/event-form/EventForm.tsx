import React, { DispatchWithoutAction } from 'react';
import styles from './styles.module.css';

const EventForm = ({ setFormData, handleSubmit }: { setFormData: DispatchWithoutAction, handleSubmit: () => {} }) => {
  return (
    <form className={styles.eventForm} onSubmit={handleSubmit}>
      <input
        onChange={setFormData}
        name="title"
        placeholder="Title"
        className={styles.eventInput}
      />
      <input
        onChange={setFormData}
        name="description"
        placeholder="Description"
        className={styles.eventInput}
      />
      <input
        onChange={setFormData}
        name="category"
        placeholder="Category"
        className={styles.eventInput}
      />
      <input
        type="date"
        onChange={setFormData}
        name="date"
        className={styles.eventInput}
      />

      <button className={styles.button}>Submit event</button>
    </form>
  );
};

export default EventForm;
