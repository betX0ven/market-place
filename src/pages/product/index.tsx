import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { Product } from "../../types/product";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  product: Product;
  description: string;
  price: number;
  thumbnail: string;
}

const PageProduct: FC<Props> = (product) => {
  return (
    <main className={css.root}>
      <img src={product.thumbnail} alt="product" />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        <button>Добавить в корзину</button>
      </div>
    </main>
  );
};

export default PageProduct;
