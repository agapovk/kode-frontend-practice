import UfoImg from '../assets/nlo.png';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-2 text-lg'>
			<img src={UfoImg} alt='Ошибка' />
			<p className='font-bold'>Какой-то сверхразум все сломал</p>
			<p className='text-gray-300'>Постараемся быстро починить</p>
			<Link to='/' className='font-bold text-blue-500'>
				Попробовать снова
			</Link>
		</div>
	);
};

export default Error;
