import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import EventForm from '../../components/event-form/EventForm';
import styles from './styles.module.css';

type IEvent = {
  id: string
  title: string
  description: string
  category: string
  date: string
}


// export const getServerSideProps = async (context) => {
//   const { query } = context;
//   const { category } = query;
//   const queryString = category ? 'category=sports' : '';

//   const response = await fetch(`http://localhost:4000/events${queryString}`);
//   const data = await response.json();

//   return {
//     props: {
//       eventList: data
//     }
//   };
// };

const formReducer = (state, event) => {
  return {
    ...state,
    id: Date.now(),
    [event.target.name]: event.target.value
  };
};

const EventList = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [addButtonText, setAddButtonText] = useState<string>('+');

  const [formData, setFormData] = useReducer(formReducer, {});

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();

      setEvents(data);
    };
    fetchEvents();

    if (open) {
      setAddButtonText('x');
    } else {
      setAddButtonText('+');
    }
  }, [events, open]);

  // const fetchSportsEvents = async () => {
  //   const response = await fetch('/api/events?category=sports');
  //   const data = await response.json();

  //   setEvents(data);
  //   router.push('events?category=sports', undefined, { shallow: true });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ event: formData }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      {/* <button onClick={fetchSportsEvents} className="sort-button sport">
        Sports Events
      </button> */}
      <div className={styles.title}>
        <h1>List of events</h1>
        <button onClick={() => setOpen(!open)} className={styles.addButton}>
          {addButtonText}
        </button>
      </div>

      {open && (
        <EventForm setFormData={setFormData} handleSubmit={handleSubmit} />
      )}

      {events.map((event) => {
        const { id, title, description, category, date } = event;

        return (
          <div key={id} className={styles.eventCard}>
            <h2>
              {id}. {title}
            </h2>
            <h5>Date: {date}</h5>
            <h4>Category - {category}</h4>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default EventList;
