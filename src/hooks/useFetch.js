/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import DataContext from '../context/DataContext';
import { setUsers } from '../store/usersSlice';

const useFetch = () => {
	const loading = useRef(false);
	const error = useRef(null);

	const { filter, sorting } = useContext(DataContext);

	const dispatch = useDispatch();

	const fetchOptions = {
		method: 'GET',
		url: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users',
		params: { __example: filter },
		// params: { __dynamic: true },
		// params: { __code: 500, __dynamic: true },
		headers: { 'Content-Type': 'application/json' },
	};

	const fetchData = async (from) => {
		try {
			loading.current = true;
			const response = await axios.request(fetchOptions);
			dispatch(setUsers(response.data.items));
			loading.current = false;
		} catch (err) {
			loading.current = false;
			error.current = err.response.status;
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [filter, sorting]);

	return { loading, error, fetchData };
};

export default useFetch;
