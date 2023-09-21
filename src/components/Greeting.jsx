import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { greetingDataFetch } from '../redux/greeting/greetingSlice';
import { Link} from 'react-router-dom';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetingItem } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(greetingDataFetch());
  }, [dispatch]);

  if (!greetingItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/"><button>Back Home</button></Link>
      <h2>{greetingItem.greeting}</h2>
    </>
  );
};

export default Greeting;