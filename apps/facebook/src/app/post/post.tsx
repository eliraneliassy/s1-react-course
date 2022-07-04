import { Post } from '../post.interface';
import styles from './post.module.css';

export interface PostProps {
  post: Post;
  onLike: (post: Post) => void;
}

export function PostCmp(props: PostProps) {
  const { post } = props;

  const likeHandler = () => {
    props.onLike(post);
  }
  return (
    <div className={styles['container']}>
      <div className="id">{post.id}</div>
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>


      <button onClick={likeHandler}>Like</button>
    </div>
  );
}

export default PostCmp;
