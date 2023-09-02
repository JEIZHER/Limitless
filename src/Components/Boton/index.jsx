const Boton = ({ referencia }) => {
	return (
		<ul>
			<li>
				<a
					href={referencia != '#' ? `#${referencia}` : '#'}
					className='flex flex-col min-w-[100px] items-center  border rounded-full mb-7  w-full py-2 text-[9px] font-bold tracking-[2.2px] sm:max-w-[250px] '
				>
					LEARN MORE
				</a>
			</li>
		</ul>
	)
}
export default Boton
