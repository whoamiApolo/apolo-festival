import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

/* array de comentarios
const comments = [
  1,
  2,
  3,
]
*/

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  //estado = varíaveis que eu quero que o componente monitore
  const [comments, setComments] = useState(["Eu fui, eu tava!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    post.publishedAt,
    "05 'de' MMM 'às' HH:mm'h' - eeee ",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    //imutabilidade
    setComments([...comments, newCommentText]);
    setNewCommentText("");

    /*
      pegar o texto do textarea
      const newCommentText = event.target.input.value;
    */

    /*
      limpar a textarea
      event.target.input.value = "";
    */
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteComment(commentToDelete: string) {
    // imutabilidade = não alteramos uma variável na memoria da nossa aplicação
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={post.author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time title="" dateTime={post.publishedAt.toISOString()}>
            {publishedDateFormatted}
            
              {publishedDateRelativeToNow} 
             
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="input"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
