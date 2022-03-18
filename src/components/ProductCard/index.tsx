import React from 'react';
import style from './ProductCard.module.scss';

type productCardPropsType = {
  name: string;
  price: number;
  image: string;
};

const ProductCard = (props: productCardPropsType) => {
  const { name, price, image } = props;
  const [count, setCount] = React.useState('Добавить в корзину');
  const addHandler = () => {
    setCount('Товар уже в корзине');
  };
  return (
    <div className={style.card}>
      <div className={style.inner_card}>
        <div>
          <img className={style.product_image} src={image} alt={name} />
        </div>
        <div className={style.product_name}>{name}</div>
        <div className={style.product_price}>{`${price} ₽`}</div>
        <div>
          <button type="button" className={style.product_add_button} onClick={addHandler}>
            {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
