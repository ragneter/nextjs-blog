import React, { useState } from 'react'

function ColorPicker() {
  const [color, setColor] = useState('') //returns an array of two values: value and update function; use array destructuring to set these values to their own variables
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h2>Pick your colour!</h2>
        <button className='red button' onClick={() => setColor('red')}>red</button>
        <button className='blue' onClick={() => setColor('blue')}>blue</button>
        <button className='yellow' onClick={() => setColor('yellow')}>yellow</button>
      </div>
    </div>
  );
}

export default ColorPicker;
