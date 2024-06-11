import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../store";
import cn from "classnames";

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Header: FC<Props> = () => {
  const totalQuantity = useBasket((store) => store.totalQuantity);
  console.log(totalQuantity);

  return (
    <header className={css.root}>
      <div className="container">
        <div className={css["inner"]}>
          <div className={css["sitelogo"]}>
            <Link to={"/"}>
              <img
                src="https://static-basket-01.wbbasket.ru/vol0/i/v3/header/logo.svg"
                alt="sitelogo"
              />
            </Link>
          </div>
          <div className={css["buttons"]}>
            <button className={css["button"]}>
              <Link to={"/signin"} />
              <Icon icon="uil:signin" />
              <span>Войти</span>
            </button>
            <button
              className={cn(css["button"], css["basket"])}
              data-product-count={totalQuantity}
            >
              <Link to={"/basket"} />
              <Icon icon="ph:basket" />
              <span>Корзина</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
