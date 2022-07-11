import { Post } from '../post.interface';
import styles from './post.module.css';

export interface PostProps {
  post: Post;
  onLike?: (post: Post) => void;
  onUnlike?: (post: Post) => void;
  isLiked?: boolean;
}

export function PostCmp(props: PostProps) {
  const { post } = props;

  const likeHandler = () => {
    props.onLike && props.onLike(post);
  };

  const unLikeHandler = () => {
    props.onUnlike && props.onUnlike(post);
  }
  return (
    <div className={styles['container']}>
      <div className="id">{post.id}</div>
      <div className="title">{post.title}</div>
      <div className="body">{post.body}</div>

      {!props.isLiked ? (
        <button onClick={likeHandler}>Like</button>
      ) : (
        <button onClick={unLikeHandler}>Unlike</button>
      )}
    </div>
  );
}

export default PostCmp;
