import { useRoutes, BrowserRouter } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Home from '../Home'
import './App.css'
const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		// { path: '/Cripto-Project', element: <CriptoProject /> },
	])
	return routes
}
const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	)
}
export default App
