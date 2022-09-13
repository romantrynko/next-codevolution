import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.css';
import { IComment } from './types';

const CommentDetails = ({ comment }: { comment: IComment }) => {
  const { id, text } = comment;
  const router = useRouter();

  return (
    <div>
      <h2>
        {id}. {text}
      </h2>
      <button
        className={styles.button}
        onClick={() => router.push('/comments')}
      >
        &larr; Back
      </button>
    </div>
  );
};

export default CommentDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/comments');
  const comments = await response.json();

  const paths = comments.map((comment: IComment) => ({
    params: {
      commentId: `${comment.id}`
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { commentId } = params;

  const response = await fetch(
    `http://localhost:3000/api/comments/${commentId}`
  );
  const comment = await response.json();

  return {
    props: {
      comment
    }
  };
};
