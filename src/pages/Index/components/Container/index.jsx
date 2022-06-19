import Item from '../Item';
import InputItem from '../InputItem';
import React from 'react';

import './index.css'
import Draggable from 'react-draggable';

export default function Container(props) {
  const [list, setList] = React.useState(props.list);
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(true);
  }
  // 增加元素
  const handleReceiveContent = (msg) => {
    if (list.includes(msg) || msg === '') {
      alert('请重新输入！');
    }
    else {
      const newList = list;
      newList.push(msg);
      props.onListChange(list, props.id);
      setList(newList);
      setShow(false);
    }
  }
  const handleDeleteContent = (msg) => {
    if (!list.includes(msg) || msg === '') {
      setShow(false);
    } else {
      const newList = list.slice(0);
      newList.splice(newList.indexOf(msg), 1);
      setList(newList);
      console.log('container', newList);
      props.onDeleteItem(newList, props.id);
      setShow(false);
    }
  }
  return (
    <div className='container'>
      <Draggable>
        <div className='container-header' style={{ backgroundColor: props.color }}>{props.title}</div>
      </Draggable>
      <div className='container-body' style={{ backgroundColor: props.color }}>
        {
          list.map((item) => (
            <Item key={item} content={item} onDeleteContent={handleDeleteContent} />
          ))
        }
        <div className={show ? '' : 'hidden'}>
          <InputItem onReceiveContent={handleReceiveContent} />
        </div>
        <div className={props.isShow ? 'add' : 'hidden'} onClick={handleClick}>＋</div>
      </div>
    </div>
  );
}