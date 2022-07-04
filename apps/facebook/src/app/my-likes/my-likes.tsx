import styles from './my-likes.module.css';

/* eslint-disable-next-line */
export interface MyLikesProps {}

export function MyLikes(props: MyLikesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLikes!</h1>
    </div>
  );
}

export default MyLikes;
