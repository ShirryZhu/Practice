import Item from '../Item';
import InputItem from '../InputItem';
import React from 'react';

import './index.css';

export default function Container(props) {
  // 保存容器中待办列表数据的数组
  const [list, setList] = React.useState(props.list);
  // 控制InputItem显示和隐藏
  const [show, setShow] = React.useState(false);

  // 点击加号显示InputItem
  const handleClick = () => {
    setShow(true);
  }
  // 接收InputItem组件中添加的数据
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
  // 接收Item组件中即将删除的数据
  const handleDeleteContent = (msg) => {
    const newList = list.slice(0);
    newList.splice(newList.indexOf(msg), 1);
    setList(newList);
    props.onDeleteItem(newList, props.id);
  }
  const handleClosedClick = () => {
    setShow(false);
  }
  return (
    <div className='container'>
      <div className='container-header' style={{ backgroundColor: props.color }}>{props.title}</div>
      <div className='container-body' style={{ backgroundColor: props.color }}>
        {/* 渲染list数据中的数据到Item组件中 */}
        {
          list.map((item) => (
            <Item key={item} content={item} onDeleteContent={handleDeleteContent} />
          ))
        }
        <div className={show ? '' : 'hidden'}>
          <InputItem onReceiveContent={handleReceiveContent} onClosedClick={handleClosedClick} />
        </div>
        <div className={props.isShow ? 'add' : 'hidden'} onClick={handleClick}>＋</div>
      </div>
    </div>
  );
}