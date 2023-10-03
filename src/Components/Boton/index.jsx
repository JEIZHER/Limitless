import React from "react"
const Boton = ({ referencia, Titulo }) => {
	return (
		<ul>
			<li>
				<a
					href={referencia != '#' ? `#${referencia}` : '#'}
					className='flex flex-col min-w-[100px] max-w-[300px] items-center  border rounded-full mb-7  w-full py-2 text-[9px] font-bold tracking-[2.2px] sm:max-w-[250px] hover:shadow-slate-50 hover:transition-shadow hover:shadow-md '
				>
					{Titulo}
				</a>
			</li>
		</ul>
	)
}
export default React.memo(Boton)
