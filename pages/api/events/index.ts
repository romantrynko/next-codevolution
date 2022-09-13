import { events } from '../../../data/events';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else if (req.method === 'POST') {
    const { title, description, category, date } = req.body.event;

    const newEvent = {
      id: Date.now(),
      title,
      description,
      category,
      date
    };

    events.push(newEvent);
    res.status(201).json(newEvent);
  }
}
