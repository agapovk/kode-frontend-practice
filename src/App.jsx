import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import Missing from './components/Missing';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile/:id' element={<Profile />} />
			<Route path='*' element={<Missing />} />
		</Routes>
	);
}

export default App;
