import { NextApiRequest, NextApiResponse } from 'next';
import { events } from '../../../data/events';

type Event = {
  id: number
  title: string
  description: string
  category: string
  date: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Event | Event[]>) {
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
    } as Event;

    events.push(newEvent);
    res.status(201).json(newEvent);
  }
}
