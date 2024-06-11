import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { BasketProduct, useBasket } from "../../store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { currencyFormatter } from "../../utils/currencyFormatter";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  product: BasketProduct;
}

const BasketItem: FC<Props> = ({ product }) => {
  const formattedPrice = currencyFormatter.format(product.totalPrice);
  const formattedDiscountedPrice = currencyFormatter.format(
    product.discountedTotalPrice
  );

  const addProduct = useBasket((store) => store.addProduct);
  const removeOneProductById = useBasket((store) => store.removeOneProductById);
  const removeProductById = useBasket((store) => store.removeProductById);
  return (
    <article className={css.root}>
      <div className={css["thumbnail"]}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={css["info"]}>
        <h3>{product.title}</h3>
        <p></p>
      </div>
      <div className={css["buttons"]}>
        <button
          disabled={product.quantity === 1}
          onClick={() => removeOneProductById(product.id)}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => addProduct(product)}>+</button>
      </div>
      <div className={css["price"]}>
        <span>{formattedDiscountedPrice} </span>
        <s>{formattedPrice} </s>
      </div>
      <button
        className={css["remove"]}
        onClick={() => removeProductById(product.id)}
      >
        <Icon icon="material-symbols:delete" />
      </button>
    </article>
  );
};

export default BasketItem;

//кнопки удаления и изменения количества.
//страница продукта.
//стилизация
