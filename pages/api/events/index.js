import { events } from '../../../data/events';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else if (req.method === 'POST') {
    const title = req.body.event.title;
    const description = req.body.event.description;
    const category = req.body.event.category;
    const date = req.body.event.date;

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
