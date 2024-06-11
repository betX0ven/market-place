import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "./loader";
import ProductCard from "../../components/product-card";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const PageHome: FC<Props> = () => {
  const { products } = useLoaderData() as LoaderData;
  return (
    <main className={css.root}>
      <div className="container">
        <div className={css["catalog"]}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PageHome;
