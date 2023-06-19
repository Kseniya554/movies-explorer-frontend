import React from 'react';
import './Promo.css';
import promoImg from '../../images/Promo-main-banner.svg';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className='promo__img' src={promoImg} alt='логотип практикума' />
    </section>
  );
}

export default Promo;
