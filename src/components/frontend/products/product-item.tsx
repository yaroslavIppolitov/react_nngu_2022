import React from 'react';
import './products.css';

type productItemsPropsType = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// type numbersPropsType = number[];
const ProductItem = (props: productItemsPropsType) => {
  //   const { id, name, price, image } = props;
  const { id, name, price, image } = props;
  const [count, setCount] = React.useState('Добавить в корзину');
  const addHandler = () => {
    setCount('Товар уже в корзине');
  };
  return (
    <div className="card">
      <div className="inner-card">
        <div>
          <img className="product-image" src={image} alt={name} />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-price">{price} ₽</div>
        <div>
          <button type="button" className="product-add-button" onClick={addHandler}>
            {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
