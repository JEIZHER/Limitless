const Footer = () => {
	return (
		//  Footer
		<footer
			id='footer'
			className=' bg-gradient-to-r from-violet-600 to-blue-900 px-7 pt-12 pb-8 sm:px-16 lg:ml-[200px]'
		>
			<ul className='md:flex md:gap-3'>
				<li>&copy; X-Limitless. All rights reserved.</li>
				<li className='md:pl-2 mt-2 md:mt-0 md:border-l md:border-l-black'>
					Design: <a href='#'>Joseph Izarra</a>
				</li>
				<li className="md:pl-2 md:border-l md:border-l-black">
					Imagen de <a href="https://www.freepik.es/vector-gratis/fondo-conexion-red-degradado_12789069.htm#page=2&query=fondo%20internet&position=24&from_view=keyword&track=ais">Freepik</a>
				</li>
			</ul>
		</footer>
	)
}
export default Footer
