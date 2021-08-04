import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <div>
      <button onClick={fetchComments}>Fetch Comments</button>
      {comments.map((comment) => {
        return (
          <div>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
}
