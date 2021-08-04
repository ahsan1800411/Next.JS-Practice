import useSWR from "swr";

export default function UserPostsSWR() {
  const fetcher = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("posts", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      {data.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </>
  );
}
