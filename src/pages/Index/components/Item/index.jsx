import React from 'react';

import './index.css'
import del from '../../../../assets/del.svg'

export default function Item(props) {
  // 控制删除按钮的显示和隐藏
  const [showDel, setShowDel] = React.useState(false);
  // 保存input中value的值
  const [value, setValue] = React.useState(props.content);

  // 鼠标移动到input元素上显示删除按钮
  const handleOver = () => {
    setShowDel(true);
  }
  // 鼠标离开input元素上隐藏删除按钮
  const handleLeave = () => {
    setShowDel(false);
  }
  // 向container组件中传递需要删除的数据
  const handleClick = () => {
    console.log(props.content);
    props.onDeleteContent(value);
    setValue('');
  }
  const handleChange = () => {
    // item组件只需要获取当前的值并不要进行双向绑定
  }

  return (
    <div className='item' onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <input type='text' value={value} onChange={handleChange} />
      <div className={showDel ? 'del' : 'hidden'} onClick={handleClick}>
        <img className='del-img' src={del} alt='' />
      </div>
    </div>
  );
}