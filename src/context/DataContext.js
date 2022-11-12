import { createContext, useMemo, useState } from 'react';
import moment from 'moment';
import ru from 'moment/locale/ru';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [sorting, setSorting] = useState('none');
	const [filter, setFilter] = useState('all');
	const [search, setSearch] = useState('');

	const alphabetSort = (a, b) => {
		const nameA = a.firstName.toLowerCase();
		const nameB = b.firstName.toLowerCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	};

	const birthdaySort = (a, b) => {
		const birthA = moment(a.birthday);
		const birthB = moment(b.birthday);
		return birthA.diff(birthB);
	};

	moment.updateLocale('ru', ru);
	const birthday = (user) => moment(user.birthday).format('DD MMMM YYYY');
	const shortBirthday = (user) => moment(user.birthday).format('D MMM');
	const age = (user) => moment(user.birthday).fromNow(true);

	// useMemo
	const value = useMemo(
		() => ({
			sorting,
			setSorting,
			filter,
			setFilter,
			birthday,
			shortBirthday,
			age,
			search,
			setSearch,
			alphabetSort,
			birthdaySort,

			departments: {
				all: 'Все',
				android: 'Android',
				ios: 'iOS',
				design: 'Дизайн',
				management: 'Менеджмент',
				qa: 'QA',
				back_office: 'Бэк-офис',
				frontend: 'Frontend',
				hr: 'HR',
				pr: 'PR',
				backend: 'Backend',
				support: 'Техподдержка',
				analytics: 'Аналитика',
			},
		}),
		[sorting, filter, search]
	);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContext;
