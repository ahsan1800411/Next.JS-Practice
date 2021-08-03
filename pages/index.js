import Link from "next/link";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blog");
  };
  return (
    <div>
      Home Page
      <Link href='/product/2'>
        <a>Product Details Page</a>
      </Link>
      <button onClick={handleClick}>Read a Blog</button>
    </div>
  );
}
