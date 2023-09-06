import Observer from '../../Utils/Observer'

const Sidebar = () => {
	
    const activeStyle = Observer()
	return (
		// Sidebar

		<nav className=' hidden fixed top-0 h-12 lg:h-full  w-full lg:w-[250px] z-1000 bg-blue-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			<ul className='menu flex flex-row lg:flex-col gap-3'>
				<li>
					<a href='#intro' className={activeStyle}>
						WELCOME
					</a>
				</li>
				<li>
					<a href='#one' className=''>
						WHO WE ARE
					</a>
				</li>
				<li>
					<a href='#two' className=''>
						WHAT WE DO
					</a>
				</li>
				<li>
					<a href='#three' className=''>
						GET IN TOUCH
					</a>
				</li>
			</ul>
		</nav>
	)
}
export default Sidebar
