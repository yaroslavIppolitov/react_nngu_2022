import React from 'react';
import './products.css';
import data from '../../backend/Data/Data';
import ProductItem from './product-item';
import Aladdin from '../../../pictures/Aladdin.png';
import ContraForce from '../../../pictures/ContraForce.png';
import SuperMario from '../../../pictures/SuperMario.png';
import DuckTales from '../../../pictures/DuckTales.png';
import PrinceOfPersia from '../../../pictures/PrinceOfPersia.png';
import ChipDale from '../../../pictures/Chip&Dale.png';
import Boogerman from '../../../pictures/Boogerman.png';
import battletoads2 from '../../../pictures/battletoads2.png';
import Sonic from '../../../pictures/Sonic.png';
import Turtles from '../../../pictures/Turtles.png';
import JungleBook from '../../../pictures/JungleBook.png';
import Darkwingduck from '../../../pictures/darkwingduck.png';

const Products = () => (
  <div className="products">
    <ProductItem
      id={data.productItems[0].id}
      name={data.productItems[0].name}
      price={data.productItems[0].price}
      image={battletoads2}
    />
    <ProductItem
      id={data.productItems[1].id}
      name={data.productItems[1].name}
      price={data.productItems[1].price}
      image={ContraForce}
    />
    <ProductItem
      id={data.productItems[2].id}
      name={data.productItems[2].name}
      price={data.productItems[2].price}
      image={SuperMario}
    />
    <ProductItem
      id={data.productItems[3].id}
      name={data.productItems[3].name}
      price={data.productItems[3].price}
      image={DuckTales}
    />
    <ProductItem
      id={data.productItems[4].id}
      name={data.productItems[4].name}
      price={data.productItems[4].price}
      image={PrinceOfPersia}
    />
    <ProductItem
      id={data.productItems[5].id}
      name={data.productItems[5].name}
      price={data.productItems[5].price}
      image={ChipDale}
    />
    <ProductItem
      id={data.productItems[6].id}
      name={data.productItems[6].name}
      price={data.productItems[6].price}
      image={Boogerman}
    />
    <ProductItem
      id={data.productItems[7].id}
      name={data.productItems[7].name}
      price={data.productItems[7].price}
      image={Aladdin}
    />
    <ProductItem
      id={data.productItems[8].id}
      name={data.productItems[8].name}
      price={data.productItems[8].price}
      image={Sonic}
    />
    <ProductItem
      id={data.productItems[9].id}
      name={data.productItems[9].name}
      price={data.productItems[9].price}
      image={Turtles}
    />
    <ProductItem
      id={data.productItems[10].id}
      name={data.productItems[10].name}
      price={data.productItems[10].price}
      image={JungleBook}
    />
    <ProductItem
      id={data.productItems[11].id}
      name={data.productItems[11].name}
      price={data.productItems[11].price}
      image={Darkwingduck}
    />
  </div>
);

export default Products;
