import { NextApiRequest, NextApiResponse } from 'next';
import { comments } from '../../../data/comments';
import { Comment, Comments } from './types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Comment | Comments>) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body.comment;

    const newComment = {
      id: Date.now(),
      text: comment
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
