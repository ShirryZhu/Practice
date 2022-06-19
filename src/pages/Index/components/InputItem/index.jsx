import '../Item/index.css';
import del from '../../../../assets/del.svg';
import React from 'react';

export default function InputItem(props) {
  const [showDel, setShowDel] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleOver = () => {
    setShowDel(true);
  }
  const handleLeave = () => {
    setShowDel(false);
  }
  const handleBlur = () => {
    props.onReceiveContent(inputRef.current.value);
    inputRef.current.value = '';
  }
  const handleClick = () => {

  }

  return (
    <div className='item' onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <input type='text' ref={inputRef} onBlur={handleBlur} />
      <div className={showDel ? 'del' : 'del hidden'} onClick={handleClick}>
        <img className='del-img' src={del} alt='' />
      </div>
    </div>
  );
}