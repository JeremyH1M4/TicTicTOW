
import './App.css';
import { useState } from 'react';

function Square({}) {
    const [value, setValue] = useState(null);
    function handleClick() {
        setValue('X');
        if (value === 'X') {
            setValue('O');
        }
    }
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}

export default function Board() {
  return (
    <>
    <div className="row1">
     <Square/>
     <Square/>
     <Square/>
     </div>
     <div className="row2">
     <Square/>
     <Square/>
     <Square/>
     </div>
     <div className="row3">
     <Square/>
     <Square/>
     <Square/>
     </div>
     </>
  );
    
};



