import { LoaderFunctionArgs, json } from "react-router-dom";
import { Product } from "../../types/product";
export type LoaderData = {product: Product}

async function loader({params}:LoaderFunctionArgs){
  const productId = params.id
  const product = await fetch(`https://dummyjson.com/products/${productId}`).then(res=>res.json()) as Product
  if(!product) return json('Product not found', {status:404})
  console.log(product);
  return json<LoaderData>({product}, {status:200})
}
export default loader;