import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';

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
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useReducer(formReducer, {});
  console.log(formData);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();

      setEvents(data);
    };
    fetchEvents();
  }, []);

  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();

    setEvents(data);
    router.push('events?category=sports', undefined, { shallow: true });
  };

  const handleSubmit = async () => {
    const { id, title, description, category, date } = formData;

    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ event: formData }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <button onClick={fetchSportsEvents} className="sort-button sport">
        Sports Events
      </button>
      <h1>List of events</h1>

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

      {events.map((event) => {
        const { id, title, description, category, date } = event;

        return (
          <div key={id} className="event-card">
            <h2>
              {id}. {title} - {date} | {category}
            </h2>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default EventList;
