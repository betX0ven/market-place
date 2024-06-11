import { json } from "react-router-dom";
import { Product } from "../../types/product";

export type LoaderData = {
  products: Product[]
}
async function loader(){
  try {
    const data = await fetch('https://dummyjson.com/products').then(res=>res.json());
    const {products} = data
    return json<LoaderData>({products}, {status:200})
  } catch (error) {
    return json('Something went wrong', {status:500})
  }
}

export default loader