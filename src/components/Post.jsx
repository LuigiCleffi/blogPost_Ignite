import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import React from "react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";



export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Post muito bacana, hein ?!"])
    const [newCommentText, setNewCommentsText] = useState("")
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentsText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')

        setNewCommentsText(event.target.value)
    }
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }
    function deleteComment(commentsToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentsToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === "link") {
                        return <a key={line.content} href="">{line.content}</a>
                    }
                })}
            </div>

            <form action="" onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea onChange={handleNewCommentChange} onInvalid={handleNewCommentInvalid} value={newCommentText} name="comment" placeholder="Deixe um comentário" required></textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment} />
                    )
                })}
            </div>
        </article >
    );
}
