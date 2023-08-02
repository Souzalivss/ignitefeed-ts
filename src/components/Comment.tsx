import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment() {
  onDeleteComment(content);
}

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });

}
    return (
    <div className={styles.comment}> 
        <Avatar hasBorder={false} 
        src="https://github.com/Souzalivss.png" 
        alt="" 
        onClick={() => alert('hello world')}
        />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Lívia Souza</strong>
                        <time title="11 de julho às 08:13h" dateTime="2023-07-11 08:13:30">Cerca de 1 hora atrás</time>

                    </div>
                    <button onClick={handleDeleteComment} title="deletar comentário">
                        <Trash size={24} /> 

                    </button>
                </header>
                <p>{content}</p>
            </div>
<footer>
    <button onClick={handleLikeComment} >
        < ThumbsUp />
        aplaudir <span>{likeCount}</span>
    </button>
</footer>

        </div>

     </div>
    )
}