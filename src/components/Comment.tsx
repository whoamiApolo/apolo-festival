import { HeartStraight, TrashSimple } from "phosphor-react";
import { Avatar } from "./Avatar.js";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/whoamiApolo.png" alt=""
        onClick={() => alert('Hello World')}
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Dev</strong>
                <time
                  title="27 de novembro de 2023"
                  dateTime="2022-11-11 08:13:30"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <TrashSimple size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <HeartStraight /> Curtir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
