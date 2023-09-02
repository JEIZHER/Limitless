import { NavLink } from 'react-router-dom'
const Navbar = () => {
	const activeStyle = 'underline underline-offset-4'
	return (
		<nav className='flex justify-between items-center rounded-md bg-gray-800 w-full h-10 z-20 top-0 left-0 pl-3 pr-5 text-white fixed '>
			<img
				className=' rounded-full w-8 h-8'
				src='/ABEJA.png'
				alt='Abeja-icono'
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='w-6 h-6'
			>
				<path
					fillRule='evenodd'
					d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
					clipRule='evenodd'
				/>
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
