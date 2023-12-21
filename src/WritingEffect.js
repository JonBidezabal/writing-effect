import React, { useState, useEffect } from 'react';

const WritingEffect = () => {
  const [text, setText] = useState('');
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < loremIpsum.length) {
        setText((prevText) => prevText + loremIpsum.charAt(index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default WritingEffect;