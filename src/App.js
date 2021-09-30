
import React from "react";
import { useState } from 'react';

import  html2canvas  from 'html2canvas';
import './App.css';


function App() {

  const [phraseTop, setPhraseTop] = useState('');
  const [phraseBottom, setPhraseBottom] = useState('');
  const [image, setImage] = useState('');
  const addPhraseTop = (event) => {
    setPhraseTop(event.target.value);
  }

  const addPhraseBottom =  (event) => {
    setPhraseBottom(event.target.value);
  }

  const addImage = (event) => {
    setImage(event.target.value);
  }

  const saveImg = function () {
    html2canvas(document.querySelector('#container')).then(canvas => {
      
      let img = canvas.toDataURL('image/jpg');
      let link = document.createElement('a');
      link.download = 'image.jpg';
      link.href = img;
      link.click();
  });
}

  return (
    <div className="App">
      <div className="image__container" id="container">
        <span className="phrase-top">{phraseTop}</span>
        <span className="phrase-bottom">{phraseBottom}</span>
        <img className="image" src={'/img/' + image + '.jpg'}  />
      </div>
      
      <h4>Choose your image</h4>
      <select onChange={addImage} className="input" id="select__img">
        <option value="alone">Alone</option>
        <option value="climb">Climb</option>
        <option value="forest">Forest</option>
        <option value="partners">Partners</option>
        <option value="friends-jump">Friend Jumping</option>
        <option value="mountain">Mountain</option>
        <option value="sadness">Sadness</option>
        <option value="success">Success</option>
        <option value="sunset">Sunset</option>
        <option value="sunset-guy">Sunset guy</option>
        <option value="think">Think</option>
        <option value="jerry">Jerry</option>
        <option value="dog">Dog</option>
        <option value="evil-kid">Evil kid</option>
        <option value="hug">Hug</option>
      </select>
    {/*<form className="upload__img--container">
        <input  className="input" id="upload__img" type="file" name="image" ref={fileInputRef}/>
        <button className="upload__btn">Upload .jpg img</button>
  </form>**/}
      
      <input onChange={addPhraseTop} className="input" id="phrase__top" placeholder="Insert your top phrase" type="text"/>
      <input onChange={addPhraseBottom} className="input" id="phrase__bottom" placeholder="Insert your bottom phrase" type="text"/>
      
      <button onClick={saveImg} className="save__img--btn">Save Image</button>
    </div>
  );
}

export default App;
