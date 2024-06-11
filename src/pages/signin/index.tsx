import { ComponentProps, FC, HTMLAttributes } from "react";
import css from "./style.module.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../supabase";
interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const PageSignIn: FC<Props> = () => {
  return (
    <main className={css.root}>
      <div className={css.container}>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    </main>
  );
};

export default PageSignIn;

//стилизация карточек и страницы регистрации. читать докс про переменные окружения,
//спросить у гпт: Как подключитиь аутентификацию гугл oauth к supabase (txt файл)
//зарегистрировать в гугле oauth приложение
