import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import './style.css'

export const NextBtn = ({ onClick }) => {
  return (
    <div className="icon Next" onClick={onClick}>
      <IoArrowForwardCircleOutline className='icon' />
    </div>
  );
};
export const PrevBtn = ({ onClick }) => {
  return (
    <div onClick={onClick} className='icon Prev'>
      <IoArrowBackCircleOutline className='icon' />
    </div>
  );
};


