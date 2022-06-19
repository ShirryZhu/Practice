import React from 'react';

import './index.css'
import del from '../../../../assets/del.svg'

export default function Item(props) {
  const [showDel, setShowDel] = React.useState(false);
  const [value, setValue] = React.useState(props.content);

  const handleOver = () => {
    setShowDel(true);
  }
  const handleLeave = () => {
    setShowDel(false);
  }
  const handleClick = () => {
    console.log(props.content);
    props.onDeleteContent(value);
    setValue('');
  }
  const handleChange = () => {

  }

  return (
    <div className='item' onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <input type='text' value={value} onChange={handleChange} />
      <div className={showDel ? 'del' : 'del hidden'} onClick={handleClick}>
        <img className='del-img' src={del} alt='' />
      </div>
    </div>
  );
}