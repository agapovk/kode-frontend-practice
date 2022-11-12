import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import DefaultAvatar from '../assets/goose.png';

const UserCard = ({ user, showBirthday }) => {
	const { shortBirthday } = useContext(DataContext);
	return (
		<li className='flex items-center justify-between'>
			<Link to={`/profile/${user.id}`} className='flex w-fit gap-4 p-4 pl-0'>
				<img
					src={user.avatarUrl ? user.avatarUrl : { DefaultAvatar }}
					alt=''
					className='h-[72px] w-[72px] rounded-full'
				/>
				<div className='flex flex-col justify-center'>
					<div>
						<span className='text-lg font-[500] text-[#050510]'>{`${user.firstName} ${user.lastName}`}</span>
						<span className='pl-2 text-[#97979B]'>{user.userTag}</span>
					</div>
					<p className='text-sm text-[#55555C]'>{user.position}</p>
				</div>
			</Link>
			{showBirthday && <p className='text-[#55555C]'>{shortBirthday(user).slice(0, -1)}</p>}
		</li>
	);
};

export default UserCard;
