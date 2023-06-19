import React from 'react';
import './AboutMe.css';
import photo from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info-blocks'>
        <div className='about-me__info-block'>
          <h3 className='about-me__name'>Ксения</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__info'>
            Родилась в Чебоксарах, но уже больше 10 лет живу в Москве. Закончила
            с красным дипломом институт по специальности "экономика и управление
            на преприятии строительства". Также обучалась в FPA на курсе
            "персональный тренер по фитнесу и бодибилдингу". Занималась конным
            спортом(конкуром). Ещё занималась полдэнсом и воздушной гимнастикой
            на полотнах и однажды спрыгнула с парашютом. У меня трое детей.
            Старшая в этом году пойдёт в школу, средний - в садик, а младшей
            пока 7 месяцев. На данный момент нахожусь в декрете и заканчиваю
            обучение по веб-разработке.{' '}
          </p>
          <a
            className='about-me__github'
            href='https://github.com/Kseniya554'
            rel='noreferrer'
            target='_blank'
          >
            Github
          </a>
        </div>
        <img className='about-me__photo' src={photo} alt='фото' />
      </div>
    </section>
  );
}

export default AboutMe;
