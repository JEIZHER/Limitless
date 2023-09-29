import { useRoutes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../../Components/SideBar'
import Footer from '../../Components/Footer'
import Home from '../Home'
import './App.css'

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		
	])
	return routes
}
const App = () => {
	return (
		<BrowserRouter>
		    <Sidebar />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	)
}
export default App
