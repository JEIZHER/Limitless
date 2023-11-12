import { useRoutes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../../Components/SideBar'
import Footer from '../../Components/Footer'
import Home from '../Home'
import Graficos from '../Graficos'
import {ContextCryptosProvider} from '../../Context'
import './App.css'

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/Graficos', element: <Graficos /> },
		
	])
	return routes
}

		const App = () => {
			return (
		
				<BrowserRouter>
			<ContextCryptosProvider>	
					<Sidebar />
					<AppRoutes />
			</ContextCryptosProvider>		
					<Footer />
				</BrowserRouter>
		
			)
		}

export default App
