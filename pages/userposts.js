import { useState, useEffect } from "react";

export default function UserPosts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 3));
      setLoading(false);
    }
    fetchPosts();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {posts.map((post) => {
            return <h1>{post.title}</h1>;
          })}
        </>
      )}
    </>
  );
}
