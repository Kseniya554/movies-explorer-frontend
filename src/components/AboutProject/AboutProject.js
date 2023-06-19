import React from 'react';
import './AboutProject.css';

function AboutPoject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__block'>
        <div className='about-project__info'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__info'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__plan'>
        <div className='about-project__plan-info'>
          <div className='about-project__plan-one'>1 неделя</div>
          <p className='about-project__plan-text'>Back-end</p>
        </div>
        <div className='about-project__plan-info '>
          <div className='about-project__plan-two'>4 недели</div>
          <p className='about-project__plan-text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPoject;
