import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename="/goit-react-hw-07-phonebook">
		<Provider store={store}>
			<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
