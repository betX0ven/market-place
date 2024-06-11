import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";
import { toBasketProduct, useBasket } from "../../store";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const ProductCard: FC<Props> = ({ product, ...props }) => {
  const addProduct = useBasket((store) => store.addProduct);

  return (
    <article className={css["card"]} {...props}>
      <Link to={`/product/${product.id}`} className={css["link"]} />
      <div className={css["top-wrap"]}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={css["middle-wrap"]}>
        <h3 className={css["price"]}>{product.price} $</h3>
        <p className={css["name"]}>
          {product.title}{" "}
          <span className={css["category"]}>/ {product.category}</span>
        </p>
      </div>
      <div className={css["bottom-wrap"]}>
        <p>
          <Icon icon="material-symbols:star" className={css["star"]} />{" "}
          <span>{product.rating}</span>
          <span className={css["reviews"]}>
            {" "}
            • {product.reviews.length} оценки
          </span>
        </p>
        <button
          className={css["on-basket"]}
          onClick={() => addProduct(toBasketProduct(product))}
        >
          <Icon icon="vaadin:cart" /> В корзину
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
