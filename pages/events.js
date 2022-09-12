import { useRouter } from 'next/router';
import { useState } from 'react';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=cports' : '';

  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data
    }
  };
};

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();

    setEvents(data);
    router.push('events?category=sports', undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents} className="sort-button sport">
        Sports Events
      </button>
      <h1>List of events</h1>
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
