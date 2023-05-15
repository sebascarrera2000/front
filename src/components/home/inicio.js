import React from 'react';
import './inicio.css';



const Inicio = () => {
  return (
    <div className="ambulancia-container">
      <div className="ambulancia-container-title">
          <h1>Modulo de transporte</h1>
          <a></a>
      </div>
       
      <div class="road">
        <div class="ambulance">
        <div class="ambulance__battenberg-row-upper">
          <div class="ambulance__battenberg"></div>
          <div class="ambulance__battenberg ambulance__battenberg--alt"></div>
          <div class="ambulance__battenberg"></div>
          <div class="ambulance__battenberg ambulance__battenberg--alt"></div>
          <div class="ambulance__battenberg"></div>
        </div>
        <div class="ambulance__battenberg-row">
          <div class="ambulance__battenberg"></div>
          <div class="ambulance__battenberg ambulance__battenberg--alt"></div>
          <div class="ambulance__battenberg"></div>
          <div class="ambulance__battenberg  ambulance__battenberg--alt"></div>
          <div class="ambulance__battenberg"></div>
          <div class="ambulance__battenberg  ambulance__battenberg--alt"></div>
        </div>
        <div class="ambulance__cab"></div>
        <div class="ambulance__bonnet">
        </div>
        <div class="ambulance__bumper">
          <div class="ambulance__headlight"></div>
        </div>
        <div class="ambulance__box">
          <div class="ambulance__side-window"></div>
          <div class="light light--blue ambulance__top-left-light"></div>
          <div class="light light--blue ambulance__top-left-mid-light light--flash-offset"></div>
          <div class="light light--blue ambulance__top-right-light light--flash-offset"></div>
          <div class="light light--blue ambulance__top-right-mid-light"></div>
        </div>
        <div class="ambulance__wheel ambulance__wheel--front"></div>
        <div class="ambulance__wheel ambulance__wheel--back"></div>
      </div>
      </div>
    </div>
  );
};

export default Inicio;


