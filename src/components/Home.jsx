import Error from './Error';
import Navbar from './Navbar';
import UserList from './UserList';
import Loading from './Loading';
import { useSelector } from 'react-redux';

const Home = () => {
	const { error } = useSelector((state) => state.users);
	const loading = false;
	return (
		<div className='flex h-full flex-col'>
			<Navbar />
			<div className='grow p-4 pt-0'>
				{error ? <Error /> : loading ? <Loading /> : <UserList />}
			</div>
		</div>
	);
};

export default Home;
