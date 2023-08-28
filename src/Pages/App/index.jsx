import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
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
			<Footer/>

		</BrowserRouter>
	)
}
export default App
