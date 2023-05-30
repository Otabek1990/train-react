import React from 'react';
import Kola from '../assets/images/kola.jpg';
import ProductCard from './ProductCard';

let datas = [
  { title: 'olma', image: Kola, price: 10000, id: 1 },
  { title: 'banan', image: Kola, price: 15000, id: 2 },
  { title: 'yogurt', price: 45000, image: Kola, id: 3 },
  { title: 'apelsin', price: 30000, image: Kola, id: 4 },
  { title: 'apelsin', price: 30000, image: Kola, id: 5 },
];

function Main() {
  return (
    <main className='min-h-screen'>
      <div className="gap-x-4  bg-white justify-start
       dark:bg-gray-700 gap-y-8 py-5 px-10 grid grid-cols-1
        tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
        {datas.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Main;
