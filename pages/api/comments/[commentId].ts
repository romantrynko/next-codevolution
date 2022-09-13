import { NextApiRequest, NextApiResponse } from 'next';
import { comments } from '../../../data/comments';

type IQuery = {
  commentId: Partial<{
    [key: string]: string | string[];
  }>
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const commentId: string = req.query.commentId as string;

  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
};

export default handler;
