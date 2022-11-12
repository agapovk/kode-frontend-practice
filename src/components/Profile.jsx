import { useContext } from 'react';
import { PhoneIcon, StarIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataContext from '../context/DataContext';

const Profile = () => {
	const { birthday, age } = useContext(DataContext);
	const { id } = useParams();
	const { users } = useSelector((state) => state.users);

	const navigate = useNavigate();

	const user = users.find((u) => u.id === id);

	const gradient = { background: 'linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%' };

	return (
		<>
			<div className='flex flex-col'>
				<div className='relative top-0 flex flex-col  items-center justify-center gap-3  bg-gray-100 pt-16 pb-6'>
					{user ? (
						<img src={user.avatarUrl} alt='avatar' className='h-[104px] w-[104px] rounded-full' />
					) : (
						<div
							style={gradient}
							className='h-[104px] w-[104px] rounded-full border border-gray-300'
						/>
					)}
					{user ? (
						<p className='mt-3 text-2xl font-bold'>
							{user?.firstName} {user?.lastName}
						</p>
					) : (
						<div
							style={gradient}
							className='mt-3 h-[32px] w-[120px] rounded-full border border-gray-300'></div>
					)}
					{user ? (
						<p className='text-sm text-gray-500'>{user?.position}</p>
					) : (
						<div
							style={gradient}
							className='h-[20px] w-[62px] rounded-full border border-gray-300'></div>
					)}
					<button className='absolute top-7 left-7 cursor-pointer' onClick={() => navigate('/')}>
						<ChevronLeftIcon className='h-5 w-5 text-sm font-bold text-gray-500 hover:text-blue-500' />
					</button>
				</div>
				<div className='flex h-full flex-col gap-5'>
					<div className='flex justify-between  px-5 py-7'>
						<div className='flex  gap-3'>
							<span>
								<StarIcon className='h-5 w-5' />
							</span>
							{user ? (
								<p>{birthday(user)}</p>
							) : (
								<div style={gradient} className='h-[24px] w-[120px] rounded-full'></div>
							)}
						</div>
						{user ? (
							<p className='text-gray-500'>{user && age(user)}</p>
						) : (
							<div style={gradient} className='h-[24px] w-[62px] rounded-full'></div>
						)}
					</div>
					<div className='flex justify-between  px-5 py-7'>
						<div className='flex  gap-3'>
							<span>
								<PhoneIcon className='h-5 w-5' />
							</span>
							{user ? (
								<a className='' href={`tel:${user.phone}`}>
									{user.phone}
								</a>
							) : (
								<div style={gradient} className='h-[24px] w-[120px] rounded-full'></div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
