import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "./loader";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const PageProduct: FC<Props> = () => {
  const { product } = useLoaderData() as LoaderData;
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

//https://github.com/alex13slem/hw-react-marketplace/tree/main/src
