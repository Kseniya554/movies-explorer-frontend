import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__name'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__points'>
        <p className='techs__point'>HTML</p>
        <p className='techs__point'>CSS</p>
        <p className='techs__point'>JS</p>
        <p className='techs__point'>React</p>
        <p className='techs__point'>Git</p>
        <p className='techs__point'>Express.js</p>
        <p className='techs__point'>momgoDB</p>
      </div>
    </section>
  );
}

export default Techs;
