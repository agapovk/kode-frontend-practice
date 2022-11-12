import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import DataContext from '../context/DataContext';

const Modal = ({ setShowModal }) => {
	const { sorting, setSorting } = useContext(DataContext);
	const handleClick = (e) => {
		setSorting(e.target.value);
		handleClose();
	};

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className='fixed inset-0 z-50 h-screen w-screen  overflow-y-auto overflow-x-hidden outline-none'>
				<div className='absolute left-0 top-0 right-0 bottom-0 m-auto flex h-fit w-96 flex-col gap-6 rounded-3xl bg-white p-7'>
					<div className='flex items-center justify-between'>
						<span></span>
						<p className='text-center text-xl font-bold text-black'>Сортировка</p>
						<button className='rounded-full bg-gray-200 p-1' onClick={handleClose}>
							<XMarkIcon className='h-3 w-3 font-bold text-gray-500' />
						</button>
					</div>
					<div className=''>
						<form className='flex flex-col items-start gap-6'>
							<div className='flex gap-3'>
								<input
									id='alphabet'
									type='radio'
									name='sort'
									value='alphabet'
									className='h-5 w-5 cursor-pointer'
									onChange={handleClick}
									checked={sorting === 'alphabet'}
								/>
								<label htmlFor='alphabet' className='cursor-pointer'>
									По алфавиту
								</label>
							</div>
							<div className='flex gap-3'>
								<input
									id='birthdate'
									type='radio'
									name='sort'
									value='birthday'
									className='h-5 w-5 cursor-pointer'
									onChange={handleClick}
									checked={sorting === 'birthday'}
								/>
								<label htmlFor='birthdate' className='cursor-pointer'>
									По дню рождения
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='fixed inset-0 z-40 bg-[#050510] opacity-[0.16]'></div>
		</>
	);
};

export default Modal;
