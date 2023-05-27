import React, { useState } from 'react'
import "./one.css"

function One() {

  const [butone, setButone] = useState(false)
  const [butone2, setButone2] = useState(false)
  const [butone3, setButone3] = useState(false)
  const [butone4, setButone4] = useState(false)
  const [butone5, setButone5] = useState(false)
  const [butone6, setButone6] = useState(false)
  const [butone7, setButone7] = useState(false)
  const [butone8, setButone8] = useState(false)
  const [butone9, setButone9] = useState(false)
  const [butone10, setButone10] = useState(false)
  const [butone11, setButone11] = useState(false)
  const [butone12, setButone12] = useState(false)
  const [butone13, setButone13] = useState(false)
  const [butone14, setButone14] = useState(false)
  const [butone15, setButone15] = useState(false)
  const [butone16, setButone16] = useState(false)
  const [butone17, setButone17] = useState(false)
  const [butone18, setButone18] = useState(false)
  const [butone19, setButone19] = useState(false)
  const [butone20, setButone20] = useState(false)
  const [butone21, setButone21] = useState(false)
  const [butone22, setButone22] = useState(false)
  const [butone23, setButone23] = useState(false)
  const [butone24, setButone24] = useState(false)
  const [butone25, setButone25] = useState(false)
  const [health, setHealth] = useState(3)

  

  const healtCheck = () => {
    
    setHealth(health-1);
    
  }

 

  const but1click = () => {
    setButone(!butone);
  }

  const but2click = () => {
    setButone2(!butone2);
  }

  const but3click = () => {
    setButone3(!butone3);
  }

  const but4click = () => {
    setButone4(!butone4);
  }

  const but5click = () => {
    setButone5(!butone5);
  }

  const but6click = () => {
    setButone6(!butone6);
  }

  const but7click = () => {
    setButone7(!butone7);
  }

  const but8click = () => {
    setButone8(!butone8);
  }

  const but9click = () => {
    setButone9(!butone9);
  }

  const but10click = () => {
    setButone10(!butone10);
  }

  const but11click = () => {
    setButone11(!butone11);
  }

  const but12click = () => {
    setButone12(!butone12);
  }

  const but13click = () => {
    setButone13(!butone13);
  }

  const but14click = () => {
    setButone14(!butone14);
  }

  const but15click = () => {
    setButone15(!butone15);
  }

  const but16click = () => {
    setButone16(!butone16);
  }

  const but17click = () => {
    setButone17(!butone17);
  }

  const but18click = () => {
    setButone18(!butone18);
  }

  const but19click = () => {
    setButone19(!butone19);
  }

  const but20click = () => {
    setButone20(!butone20);
  }

  const but21click = () => {
    setButone21(!butone21);
  }

  const but22click = () => {
    setButone22(!butone22);
  }

  const but23click = () => {
    setButone23(!butone23);
  }

  const but24click = () => {
    setButone24(!butone24);
  }

  const but25click = () => {
    setButone25(!butone25);
  }

  if (health === 0) {
    return(<div className='alertmessage'><p>Üzgünüm oyunu kaybettin!<br></br> Sayfayı yenile ve baştan başla!</p>
    <a href='/one'>Yeniden Başla</a>
    </div>)
    
    
  }else if(health > 0 && (butone2 === false || butone3 === false || butone4 === false || butone6 === false || butone7 === false || butone8 === false || butone9 === false || butone11 === false || butone12 === false || butone13 === false || butone14 === false || butone17 === false || butone18 === false || butone19 === false || butone20 === false || butone21 === false || butone22 === false || butone23 === false || butone24 === false || butone25 === false)){
    return (
      <div className='one'>
        <div className='health'> 
        {health}
        </div>
        <div className='col0'>
          <div className='col0zero'>
          <button className='numberzeroone'>2 * 1</button>
          <button className='numberzerotwo'>5</button>
          <button className='numberzerothree'>5</button>
          <button className='numberzerofour'>5</button>
          <button className='numberzerofive'>2</button>
          </div>
          
        </div>
        <div className='col1'>
          <button className='numberone'>3</button>
          <button onClick= {() => {but1click(); healtCheck(); }} className={`${butone ? "but1" : "but1complete"}`}></button>
          <button onClick={but2click} className={`${butone2 ? "but2" : "but2complete"}`}></button>
          <button onClick={but3click} className={`${butone3 ? "but3" : "but3complete"}`}></button>
          <button onClick={but4click} className={`${butone4 ? "but4" : "but4complete"}`}></button>
          <button onClick= {() => {but5click(); healtCheck(); }} className={`${butone5 ? "but5" : "but5complete"}`}></button>
        </div>
        <div className='col2'>
          <button className='numbertwo'>4</button>
        <button onClick={but6click} className={`${butone6 ? "but6" : "but6complete"}`}></button>
        <button onClick={but7click} className={`${butone7 ? "but7" : "but7complete"}`}></button>
        <button onClick={but8click} className={`${butone8 ? "but8" : "but8complete"}`}></button>
        <button onClick={but9click} className={`${butone9 ? "but9" : "but9complete"}`}></button>
        <button onClick= {() => {but10click(); healtCheck(); }} className={`${butone10 ? "but10" : "but10complete"}`}></button>
        </div>
        <div className='col3'>
          <button className='numberthree'>4</button>
        <button onClick={but11click} className={`${butone11 ? "but11" : "but11complete"}`}></button>
        <button onClick={but12click} className={`${butone12 ? "but12" : "but12complete"}`}></button>
        <button onClick={but13click} className={`${butone13 ? "but13" : "but13complete"}`}></button>
        <button onClick={but14click} className={`${butone14 ? "but14" : "but14complete"}`}></button>
        <button onClick= {() => {but15click(); healtCheck(); }} className={`${butone15 ? "but15" : "but15complete"}`}></button>
        </div>
        <div className='col4'>
          <button className='numberfour'>4</button>
        <button onClick= {() => {but16click(); healtCheck(); }} className={`${butone16 ? "but16" : "but16complete"}`}></button>
        <button onClick={but17click} className={`${butone17 ? "but17" : "but17complete"}`}></button>
        <button onClick={but18click} className={`${butone18 ? "but18" : "but18complete"}`}></button>
        <button onClick={but19click} className={`${butone19 ? "but19" : "but19complete"}`}></button>
        <button onClick={but20click} className={`${butone20 ? "but20" : "but20complete"}`}></button>
        </div>
        <div className='col5'>
          <button className='numberfive'>5</button>
        <button onClick={but21click} className={`${butone21 ? "but21" : "but21complete"}`}></button>
        <button onClick={but22click} className={`${butone22 ? "but22" : "but22complete"}`}></button>
        <button onClick={but23click} className={`${butone23 ? "but23" : "but23complete"}`}></button>
        <button onClick={but24click} className={`${butone24 ? "but24" : "but24complete"}`}></button>
        <button onClick={but25click} className={`${butone25 ? "but25" : "but25complete"}`}></button>
        </div>
  
          </div>
    )
  }else if(health > 0 && (butone2 === true || butone3 === true || butone4 === true || butone6 === true || butone7 === true || butone8 === true || butone9 === true || butone11 === true || butone12 === true || butone13 === true || butone14 === true || butone17 === true || butone18 === true || butone19 === true || butone20 === true || butone21 === true || butone22 === true || butone23 === true || butone24 === true || butone25 === true)){
    return(
      <div className='onex'>
        <div className='healthxxx'><p>Hey bu oyunda çok başarılısın!</p>
        <p>ASLAN</p></div>
       
        <div className='col0'>
          <div className='col0zero'>
          <button className='numberzeroone'>2 * 1</button>
          <button className='numberzerotwo'>5</button>
          <button className='numberzerothree'>5</button>
          <button className='numberzerofour'>5</button>
          <button className='numberzerofive'>2</button>
          </div>
          
        </div>
        <div className='col1'>
          <button className='numberone'>3</button>
          <button onClick= {() => {but1click(); healtCheck(); }} className="but1x"></button>
          <button onClick={but2click} className={`${butone2 ? "but2x" : "but2complete"}`}></button>
          <button onClick={but3click} className={`${butone3 ? "but3x" : "but3complete"}`}></button>
          <button onClick={but4click} className={`${butone4 ? "but4x" : "but4complete"}`}></button>
          <button onClick= {() => {but5click(); healtCheck(); }} className="but5x"></button>
        </div>
        <div className='col2'>
          <button className='numbertwo'>4</button>
        <button onClick={but6click} className={`${butone6 ? "but6x" : "but6complete"}`}></button>
        <button onClick={but7click} className={`${butone7 ? "but7x" : "but7complete"}`}></button>
        <button onClick={but8click} className={`${butone8 ? "but8x" : "but8complete"}`}></button>
        <button onClick={but9click} className={`${butone9 ? "but9x" : "but9complete"}`}></button>
        <button onClick= {() => {but10click(); healtCheck(); }} className="but10x"></button>
        </div>
        <div className='col3'>
          <button className='numberthree'>4</button>
        <button onClick={but11click} className={`${butone11 ? "but11x" : "but11complete"}`}></button>
        <button onClick={but12click} className={`${butone12 ? "but12x" : "but12complete"}`}></button>
        <button onClick={but13click} className={`${butone13 ? "but13x" : "but13complete"}`}></button>
        <button onClick={but14click} className={`${butone14 ? "but14x" : "but14complete"}`}></button>
        <button onClick= {() => {but15click(); healtCheck(); }} className="but15x"></button>
        </div>
        <div className='col4'>
          <button className='numberfour'>4</button>
        <button onClick= {() => {but16click(); healtCheck(); }} className="but16x"></button>
        <button onClick={but17click} className={`${butone17 ? "but17x" : "but17complete"}`}></button>
        <button onClick={but18click} className={`${butone18 ? "but18x" : "but18complete"}`}></button>
        <button onClick={but19click} className={`${butone19 ? "but19x" : "but19complete"}`}></button>
        <button onClick={but20click} className={`${butone20 ? "but20x" : "but20complete"}`}></button>
        </div>
        <div className='col5'>
          <button className='numberfive'>5</button>
        <button onClick={but21click} className={`${butone21 ? "but21x" : "but21complete"}`}></button>
        <button onClick={but22click} className={`${butone22 ? "but22x" : "but22complete"}`}></button>
        <button onClick={but23click} className={`${butone23 ? "but23x" : "but23complete"}`}></button>
        <button onClick={but24click} className={`${butone24 ? "but24x" : "but24complete"}`}></button>
        <button onClick={but25click} className={`${butone25 ? "but25x" : "but25complete"}`}></button>
        </div>
  
          </div>
    )
  }
}

export default One