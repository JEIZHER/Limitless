import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import CriptoProject from '../CriptoProject'
import './App.css'
const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home/> },
		{ path: '/Cripto-Project', element: <CriptoProject /> },
	])
	return routes
}
const App = () => {	   
	return (	
		<BrowserRouter>
			<Navbar/>
			<AppRoutes />
		</BrowserRouter>
	)
}
export default App
