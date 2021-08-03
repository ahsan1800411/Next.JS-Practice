import Link from "next/link";

export default function Index() {
  return (
    <div>
      Home Page
      <Link href='/posts'>
        <a>Post Page</a>
      </Link>
    </div>
  );
}
