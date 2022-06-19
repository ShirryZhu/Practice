import { useHistory } from 'react-router-dom';
import './index.css'

export default function Login() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/index');
  };

  return (
      <div className='login-btn' onClick={handleClick}>Start App</div>
  );
}
