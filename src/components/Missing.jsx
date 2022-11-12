import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
	return (
		<>
			<div className='h-full'>
				<div className='flex h-full flex-col items-center justify-center gap-2 text-lg'>
					<p className='text-gray-500'>Ошибка. Такой страницы нет</p>
					<Link to='/' className='font-bold text-blue-500'>
						Вернуться на галвную
					</Link>
				</div>
			</div>
		</>
	);
};

export default Missing;
