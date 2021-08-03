import { useRouter } from "next/router";
export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Product Details Page about {productId}</div>;
}
