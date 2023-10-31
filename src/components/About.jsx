import React, { useEffect, useState } from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-title">
        <h2>
          Sobre <neg>nosotros</neg>
        </h2>
      </div>
      <div className="about-cont">
        <div className="content">
          <h3>¿Quienes somos?</h3>
          <p>
            Somos una empresa dedicada a la venta de suplementos alimenticios de
            la mejor calidad, utilizando las mejores materias primas para
            alcanzar los mejores estándares de la industria.
          </p>
        </div>
        <div className="parallax-container">
          <div className="parallax-bg">.asdasdasdasd</div>
        </div>
      </div>
      <div className="about-cont">
        <div className="content">
          <h3>Misión</h3>
          <p>
            Ofrecer los mejores suplementos con la mayor tecnología y calidad
            para nuestros clientes y atletas.
          </p>
        </div>
      </div>
      <div className="about-cont">
        <div className="content">
          <h3>Visión</h3>
          <p>
            Consolidarnos para Ser la marca mexicana líder en calidad de
            suplementos a nivel mundial.
          </p>
        </div>
      </div>
      <div className="about-cont">
        <div className="content">
          <h3>Valores</h3>
          <p>
            Somos una empresa comprometida con la Buena salud y la actividad
            física, creemos que una buena suplementacion de calidad puede ayudar
            a lograr tus metas que también son nuestras, el trabajo en equipo,
            la disciplina y la ética de trabajo nos une para lograr tus
            objetivos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
