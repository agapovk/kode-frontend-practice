import NotFound from './NotFound';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Loading from './Loading';
import moment from 'moment';
import UserCard from './UserCard';

const UserList = ({ loading }) => {
	const { sorting, error, search, alphabetSort, birthdaySort } = useContext(DataContext);

	const { users } = useSelector((state) => state.users);

	const currentYear = moment().format('YYYY');

	const formatUsersBirthday = [...users].map((user) => {
		return { ...user, birthday: moment(user.birthday).year(currentYear) };
	});

	const thisYearUsersBirthday = formatUsersBirthday
		.filter((u) => moment(u.birthday).isAfter())
		.sort(birthdaySort);

	const nextYearUsersBirthday = formatUsersBirthday
		.filter((u) => moment(u.birthday).isBefore())
		.sort(birthdaySort);

	const searchResult = [...users].filter(
		(user) =>
			user?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.lastName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.userTag?.toLowerCase().includes(search.toLowerCase()) ||
			`${user?.firstName} ${user?.lastName}`.toLowerCase().includes(search.toLowerCase())
	);

	const thisYearSearchResult = [...thisYearUsersBirthday].filter(
		(user) =>
			user?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.lastName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.userTag?.toLowerCase().includes(search.toLowerCase()) ||
			`${user?.firstName} ${user?.lastName}`.toLowerCase().includes(search.toLowerCase())
	);

	const nextYearSearchResult = [...nextYearUsersBirthday].filter(
		(user) =>
			user?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.lastName?.toLowerCase().includes(search.toLowerCase()) ||
			user?.userTag?.toLowerCase().includes(search.toLowerCase()) ||
			`${user?.firstName} ${user?.lastName}`.toLowerCase().includes(search.toLowerCase())
	);

	const usersToShow = (sort) => {
		switch (sort) {
			case 'alphabet':
				return [...searchResult].sort(alphabetSort);
			case 'birthday':
				return { thisYearSearchResult, nextYearSearchResult };
			default:
				return searchResult;
		}
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : error ||
			  !usersToShow('alphabet').length ||
			  !usersToShow('none').length ||
			  !usersToShow('birthday')?.thisYearSearchResult?.length &
					!usersToShow('birthday')?.nextYearSearchResult?.length ? (
				<NotFound />
			) : sorting === 'birthday' ? (
				<>
					<div>
						<ul>
							{usersToShow(sorting).thisYearSearchResult.map((user) => (
								<UserCard key={user.id} user={user} showBirthday={true} />
							))}
						</ul>
					</div>
					<div className='flex items-center justify-between p-6'>
						<div className='flex-grow border-t border-[#C3C3C6]'></div>
						<div className=' fw-[500] px-12 text-[#C3C3C6]'>{Number(currentYear) + 1}</div>
						<div className='flex-grow border-t border-[#C3C3C6]'></div>
					</div>
					<div>
						<ul>
							{usersToShow(sorting).nextYearSearchResult.map((user) => (
								<UserCard key={user.id} user={user} showBirthday={true} />
							))}
						</ul>
					</div>
				</>
			) : (
				<ul>
					{usersToShow(sorting).map((user) => (
						<UserCard key={user.id} user={user} showBirthday={false} />
					))}
				</ul>
			)}
		</>
	);
};

export default UserList;
