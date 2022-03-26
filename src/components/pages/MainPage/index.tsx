import React from 'react';
import data from '../../Input/Data';
import PageWrapper from '../../common/PageWrapper';
import ProductCard from '../../ProductCard';
import style from './MainPage.module.scss';

const MainPage = () => (
  <PageWrapper>
    <main className={style.main_page_wrapper}>
      <ProductCard
        name={data.productItems[0].name}
        price={data.productItems[0].price}
        image={data.productItems[0].image}
      />
      <ProductCard
        name={data.productItems[1].name}
        price={data.productItems[1].price}
        image={data.productItems[1].image}
      />
      <ProductCard
        name={data.productItems[2].name}
        price={data.productItems[2].price}
        image={data.productItems[2].image}
      />
      <ProductCard
        name={data.productItems[3].name}
        price={data.productItems[3].price}
        image={data.productItems[3].image}
      />
      <ProductCard
        name={data.productItems[4].name}
        price={data.productItems[4].price}
        image={data.productItems[4].image}
      />
      <ProductCard
        name={data.productItems[5].name}
        price={data.productItems[5].price}
        image={data.productItems[5].image}
      />
      <ProductCard
        name={data.productItems[6].name}
        price={data.productItems[6].price}
        image={data.productItems[6].image}
      />
      <ProductCard
        name={data.productItems[7].name}
        price={data.productItems[7].price}
        image={data.productItems[7].image}
      />
      <ProductCard
        name={data.productItems[8].name}
        price={data.productItems[8].price}
        image={data.productItems[8].image}
      />
      <ProductCard
        name={data.productItems[9].name}
        price={data.productItems[9].price}
        image={data.productItems[9].image}
      />
      <ProductCard
        name={data.productItems[10].name}
        price={data.productItems[10].price}
        image={data.productItems[10].image}
      />
      <ProductCard
        name={data.productItems[11].name}
        price={data.productItems[11].price}
        image={data.productItems[11].image}
      />
    </main>
  </PageWrapper>
);

export default MainPage;
