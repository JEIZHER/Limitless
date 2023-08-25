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
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='40'
					viewBox='0 -960 960 960'
					width='40'
					className='sm:hidden'
					fill="white"
				>
					<path d='M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z' />
				</svg>
			<ul className='hidden sm:flex p-2 gap-3 '>
			
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
