import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/home/Home';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Home />
		</BrowserRouter>
	);
};

export default App;
