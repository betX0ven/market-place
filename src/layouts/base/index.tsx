import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css'
import Header from '../header';
import { Outlet } from 'react-router-dom';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const BaseLayout: FC<Props> = () => {
 
 return (
   <div className={css.root}>
      <Header/>
      <Outlet/>
   </div>
 )
}

export default BaseLayout