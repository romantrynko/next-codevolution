import { getSession, useSession, signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FormEvent, MouseEvent } from 'react';
import { useEffect, useReducer, useState } from 'react';
import EventForm from '../../components/event-form/EventForm';
import styles from './styles.module.css';
import type { Event, State } from './types';

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

const formReducer = (state: State, e: FormEvent<HTMLInputElement>) => {
  return {
    ...state,
    id: Date.now(),
    [e.target.name]: e.target.value
  };
};

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession();
  console.log('session', session);
  console.log('status', status);


  const [{formData, isLoading, error}, dispatch] = useReducer(formReducer, {});

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();

      setEvents(data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, [])

  if (loading) return <h2>Loading...</h2>

  // const fetchSportsEvents = async () => {
  //   const response = await fetch('/api/events?category=sports');
  //   const data = await response.json();

  //   setEvents(data);
  //   router.push('events?category=sports', undefined, { shallow: true });
  // };

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
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
          {open ? 'x' : '+'}
        </button>
      </div>

      {open && (
        <EventForm setFormData={dispatch} handleSubmit={handleSubmit} />
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
