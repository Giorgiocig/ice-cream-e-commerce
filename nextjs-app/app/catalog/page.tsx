import { getAllProducts } from "../storefrontApi";

export default async function catalog() {
  const response = await getAllProducts();
  console.log(response);
  return <div>catalog</div>;
}
