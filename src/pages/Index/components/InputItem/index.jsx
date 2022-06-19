import '../Item/index.css';
import del from '../../../../assets/del.svg';
import React from 'react';

export default function InputItem(props) {
  const [showDel, setShowDel] = React.useState(false);
  const inputRef = React.useRef(null);

  // 控制鼠标移动到input框中显示叉叉
  const handleOver = () => {
    setShowDel(true);
  }
  // 控制鼠标离开input框中叉叉隐藏
  const handleLeave = () => {
    setShowDel(false);
  }
  // 向container组件中传递需要添加的数据
  const handleBlur = () => {
    props.onReceiveContent(inputRef.current.value);
    inputRef.current.value = '';
  }
  // 触发Container中将InputItem隐藏的事件
  const handleClick = () => {
    props.onClosedClick();
  }

  return (
    <div className='item' onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <input type='text' ref={inputRef} onBlur={handleBlur} />
      <div className={showDel ? 'del' : 'hidden'} onClick={handleClick}>
        <img className='del-img' src={del} alt='' />
      </div>
    </div>
  );
}