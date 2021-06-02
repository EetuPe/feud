import React, { useState } from 'react';
import '../App.css'
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Button from '@material-ui/core/Button';

function Footer() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number+1)
    localStorage.setItem('number', number)
  }

  function decrease() {
    setNumber(number-1)
    localStorage.setItem('number', number)
  }

  return(
  
  )
};

export default Footer;
