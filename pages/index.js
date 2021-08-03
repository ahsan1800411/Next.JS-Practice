import Link from "next/link";
export default function Index() {
  return (
    <div>
      Home Page
      <Link href='/product/2'>
        <a>Product Details Page</a>
      </Link>
    </div>
  );
}
