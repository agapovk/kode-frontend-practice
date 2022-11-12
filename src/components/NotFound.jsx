import Find from '../assets/find.png';

const NotFound = () => {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-2 text-lg'>
			<img src={Find} alt='Не найдено' />
			<p className='font-bold'>Мы никого не нашли</p>
			<p className='text-gray-300'>Попробуй скорректировать запрос</p>
		</div>
	);
};

export default NotFound;
