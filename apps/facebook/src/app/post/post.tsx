import { Post } from '../post.interface';
import styles from './post.module.css';

export interface PostProps {
  post: Post;
}

export function PostCmp(props: PostProps) {
  const { post } = props;
  return (
    <div className={styles['container']}>
      <div className="id">{post.id}</div>
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>
    </div>
  );
}

export default PostCmp;
