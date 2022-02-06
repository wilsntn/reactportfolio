import './intro.scss';
import { init } from 'ityped'
import { useEffect, useRef, userRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
       showCursor: false, 
       backDelay:1500,
       showCursor: true,
       strings: [' Desenvolvedor', ' Cibersecurity pro' ] })
  },[]);
  return (
      <div className="intro" id="Intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/logo.png" alt="" />
          </div>
      
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Olá, me chamo</h2>
            <h1>Wilcson</h1>
            <h3>Freelance<span ref={textRef}></span></h3>
          </div>
          <a href="#Portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
  </div>
  )
}
