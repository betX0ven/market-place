import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { useBasket } from "../../store";
import BasketItem from "../../components/basket-item";
import cn from "classnames";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { Link } from "react-router-dom";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const PageBasket: FC<Props> = () => {
  const basket = useBasket((store) => ({
    products: store.products,
    totalPrice: store.totalPrice,
    discount: store.discount,
    discountedTotalPrice: store.discountedTotalPrice,
    totalProducts: store.totalProducts,
    totalQuantity: store.totalQuantity,
  }));
  const formattedPrice = currencyFormatter.format(basket.totalPrice);
  const formattedDiscount = currencyFormatter.format(basket.discount);
  const formattedDiscountedPrice = currencyFormatter.format(
    basket.discountedTotalPrice
  );
  return (
    <main className={css.root}>
      <div className="container">
        <div className={css["wrapper"]}>
          {!!basket.products.length && (
            <>
              <div className={css["products"]}>
                <h1>Корзина</h1>
                <div className="product-list">
                  {basket.products.map((product) => (
                    <BasketItem key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <div className={css["info"]}>
                <div className={cn(css["quantity"], css["info-item"])}>
                  <p>Товары, {basket.totalQuantity}</p>
                  <span>{formattedPrice}</span>
                </div>
                <div className={cn(css["discount"], css["info-item"])}>
                  <p>
                    <b>Скидка</b>
                  </p>
                  <span>
                    <b>{formattedDiscount}</b>
                  </span>
                </div>
                <div className={cn(css["total"], css["info-item"])}>
                  <h2>Итого: </h2>
                  <h2>{formattedDiscountedPrice}</h2>
                </div>
                <button className={css["order"]}>Заказать</button>
              </div>
            </>
          )}
          {!basket.products.length && (
            <section>
              <h1>Корзина пуста</h1>
              <button>
                <Link to="/">Перейти в каталог</Link>
              </button>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default PageBasket;
