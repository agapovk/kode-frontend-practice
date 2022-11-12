import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<DataProvider>
					<App />
				</DataProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
