import Observer from '../../Utils/Observer'

const Sidebar = () => {
	
    const activeStyle = Observer()
	return (
		// Sidebar

		<nav className=' hidden fixed top-0 h-12 lg:h-full  w-full lg:w-[250px] z-1000 bg-blue-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			<ul className='menu flex flex-row lg:flex-col gap-3'>
				<li className='w-30 hover:ring-4'>
					<a href='#intro' className={`tracking-[2.2px] underline-offset-4   ${activeStyle}`}>
						WELCOME
					</a>
				</li >
				<li  className='w-30 hover:ring-4'>
					<a href='#one' className='tracking-[2.2px] underline-offset-4'>
						WHO WE ARE
					</a>
				</li>
				<li  className='w-30 hover:ring-4'>
					<a href='#two' className='tracking-[2.2px] underline-offset-4'>
						WHAT WE DO
					</a>
				</li>
				<li className='w-30 hover:ring-4'>
					<a href='#three' className='tracking-[2.2px] underline-offset-4'>
						GET IN TOUCH
					</a>
				</li>
			</ul>
		</nav>
	)
}
export default Sidebar
