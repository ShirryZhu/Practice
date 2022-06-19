import React from 'react';
import { useEffect } from 'react';
import Container from './components/Container';
import './index.css'

const data = [
  {
    id: 0,
    color: '#f5e0e1',
    title: 'Prepare to study',
    list: [],
    isShow: true
  },
  {
    id: 1,
    color: '#a3d09b',
    title: 'Learning...',
    list: [],
    isShow: false
  },
  {
    id: 2,
    color: '#e2e2e2',
    title: 'Complete',
    list: [],
    isShow: false
  }
]

export default function Index() {
  const [arr, setArr] = React.useState(data);

  // 接收InputItem组件的内容并在Index组件中保存
  const handleListChange = (list, id) => {
    data[id].list = list;
    setArr(data);
  };
  // 接收Item组件内容并在Index组件中删除
  const handleDeleteItem = (list, id) => {
    data[id].list = list;
    setArr(data);
  }
  useEffect(() => { }, [arr])
  return (
    <div className='main'>
      {/* 渲染三个容器 */}
      {
        arr.map((item) => (
          <Container key={item.id} {...item} onListChange={handleListChange} onDeleteItem={handleDeleteItem} />
        ))
      }
    </div>
  )
}