import Observer from '../../Utils/Observer'

const Sidebar = () => {
	
    const activeStyle = Observer()
	return (
		// Sidebar

		<nav className=' hidden fixed top-0 h-12 lg:h-full  w-full lg:w-[250px] z-1000 bg-blue-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			<ul className='menu flex flex-row lg:flex-col gap-3'>
				<li className='w-20 hover:ring-4'>
					<a href='#intro' className={`underline-offset-4   ${activeStyle}`}>
						WELCOME
					</a>
				</li >
				<li  className='w-20 hover:ring-4'>
					<a href='#one' className='underline-offset-4'>
						WHO WE ARE
					</a>
				</li>
				<li  className='w-20 hover:ring-4'>
					<a href='#two' className='underline-offset-4'>
						WHAT WE DO
					</a>
				</li>
				<li>
					<a href='#three' className='underline-offset-4'>
						GET IN TOUCH
					</a>
				</li>
			</ul>
		</nav>
	)
}
export default Sidebar
