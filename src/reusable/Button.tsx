/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import '../App.css'

interface ReusableButtonProps {
    text: string;
    onClick: () => void;
  }

const ReusableButtonFill: React.FC<ReusableButtonProps> = ({ text, onClick }) => {
    return (
      <button className='button-fill' onClick={onClick}>
        {text}
      </button>
    );
  }

const ReusableButtonStroke: React.FC<ReusableButtonProps> = ({ text, onClick }) => {
    return (
      <button className='button-stroke' onClick={onClick}>
        {text}
      </button>
    );
  }

  export {ReusableButtonFill, ReusableButtonStroke};