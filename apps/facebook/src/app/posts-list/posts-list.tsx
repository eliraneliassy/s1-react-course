import styles from './posts-list.module.css';

/* eslint-disable-next-line */
export interface PostsListProps {}

export function PostsList(props: PostsListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostsList!</h1>
    </div>
  );
}

export default PostsList;
