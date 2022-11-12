/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext } from 'react';
import { MagnifyingGlassIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import Modal from './Modal';
import DataContext from '../context/DataContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Navbar = () => {
	const [network, setNetwork] = useState({
		online: false,
		reloaded: true,
	});
	const [showModal, setShowModal] = useState(false);

	const searchInput = useRef();

	const { fetchData } = useFetch();

	const { departments, filter, setFilter, search, setSearch } = useContext(DataContext);

	const handleOnline = async () => {
		setNetwork((prev) => ({ ...prev, online: true }));
		await fetchData();
		setNetwork((prev) => ({ ...prev, reloaded: true }));
	};

	const handleOffline = () => setNetwork((prev) => ({ online: false, reloaded: false }));

	useEffect(() => {
		setNetwork((prev) => ({ ...prev, online: navigator.onLine }));
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleShowModal = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const handleFilter = (data) => {
		setFilter(data);
	};

	return (
		<>
			<div className='sticky top-0 flex flex-col gap-3 border-b border-gray-200 bg-white'>
				<div
					className={`p-4 ${
						!network.online
							? 'bg-[#F44336] text-white'
							: !network.reloaded
							? 'bg-[#6534FF] text-white'
							: ''
					}`}>
					<h1 className='py-2 px-4 text-2xl font-bold'>Поиск</h1>
					{network.reloaded ? (
						<form action='' className='flex w-full rounded-2xl bg-zinc-100'>
							<MagnifyingGlassIcon
								onClick={() => searchInput.current.focus()}
								className='my-2 mx-4 h-6 w-6 cursor-pointer text-xl text-gray-500'
							/>
							<input
								className='w-full bg-transparent py-2 outline-none'
								type='text'
								placeholder='Введите имя, тег, почту...'
								value={search}
								onChange={handleSearch}
								ref={searchInput}
							/>
							<button className='cursor-pointer py-2 px-4' onClick={handleShowModal}>
								<ListBulletIcon className='h-6 w-6 text-gray-500 hover:text-blue-500' />
							</button>
						</form>
					) : !network.online ? (
						<p className='line mt-2 px-4 pb-4 text-[15px] leading-4'>
							Не могу обновить данные. Проверь соединение с интернетом.
						</p>
					) : (
						<p className='line mt-2 px-4 pb-4 text-[15px] leading-4'>Секундочку, гружусь...</p>
					)}
				</div>
				<ul className='flex gap-1 overflow-scroll bg-white text-base text-gray-400'>
					{Object.keys(departments).map((dep, i) => (
						<li
							key={i}
							className={`cursor-pointer whitespace-nowrap border-b-2 border-transparent px-4 py-2 hover:border-blue-500 hover:font-bold hover:text-black ${
								filter === dep && 'border-blue-500 font-bold text-black'
							}`}
							onClick={() => handleFilter(dep)}>
							{departments[dep]}
						</li>
					))}
				</ul>
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}
		</>
	);
};

export default Navbar;
