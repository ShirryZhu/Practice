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

  const handleListChange = (list, id) => {
    data[id].list = list;
    setArr(data);
  };
  const handleDeleteItem = (list, id) => {
    console.log('index:', list);
    data[id].list = list;
    setArr(data);
  }
  useEffect(() => { }, [arr])
  return (
    <div className='main'>
      {
        arr.map((item) => (
          <Container key={item.id} {...item} onListChange={handleListChange} onDeleteItem={handleDeleteItem} />
        ))
      }
    </div>
  )
}