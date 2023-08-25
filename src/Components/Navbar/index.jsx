import { NavLink } from 'react-router-dom'
const Navbar = () => {
	const activeStyle = 'underline underline-offset-4'
	return (
		<nav className='flex justify-between items-center bg-gray-800 w-full h-10 top-0 pl-3 pr-5 text-white fixed'>
			<img
				className=' rounded-full w-8 h-8'
				src='/ABEJA.png'
				alt='Abeja-icono'
			/>
			<ul className='flex p-2 gap-3 '>
				<li>
					<NavLink
						to='/Cripto-Project'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Cripto-Project
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Home
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
