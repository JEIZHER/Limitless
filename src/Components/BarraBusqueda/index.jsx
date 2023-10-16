//const CardsCryptos = React.lazy(() => import('../Components/CardsCryptos'))
import { useState } from 'react'
import CardsCryptos from '../CardsCryptos'
const BarraBusqueda = (props) => {
	const [pag, setPag] = useState(0)
	const [vista, setVista] = useState('blocks')
	return (
		<div className='flex flex-row flex-wrap gap-2 justify-center mb-8 '>
			<div className='flex flex-row justify-between items-center w-full h-12 px-4 bg-gray-900 rounded-lg'>
				<div className='flex '>
					<p className='text-sm py-2 '>
						Showing <span className='font-medium'>{pag + 1}</span> to{' '}
						<span className='font-medium'>{pag + 10}</span> of{' '}
						<span className='font-medium'>{props.data.length}</span> results
					</p>
					<div className='flex'>
						<div
							onClick={() => {
								pag > 0 ? setPag(pag - 10) : null
							}}
							className='h-8 mx-3 px-2 pt-1 border rounded-md cursor-pointer hover:shadow-accent hover:shadow-md '
						>
							<span className='sm:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 -960 960 960'
									width='24'
									fill='white'
								>
									<path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
								</svg>
							</span>
							<span className='hidden sm:block'>Previous</span>
						</div>
						<div
							onClick={() => {
								pag < 90 ? setPag(pag + 10) : null
							}}
							className='h-8 mx-3 px-2 pt-1 border rounded-md cursor-pointer hover:shadow-accent hover:shadow-md'
						>
							<span className='sm:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 -960 960 960'
									width='24'
									fill='white'
								>
									<path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
								</svg>
							</span>
							<span className='hidden sm:block'>Next</span>
						</div>
					</div>
				</div>

				<div className='hidden sm:flex lg:justify-between lg:w-14'>
					<span
						onClick={() => {
							setVista('blocks')
						}}
						className={`hover:shadow-accent hover:shadow-md cursor-pointer ${
							vista === 'blocks' ? 'border border-white' : 'border-none'
						}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24'
							viewBox='0 -960 960 960'
							width='24'
							fill='grey'
						>
							<path d='M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z' />
						</svg>
					</span>
					<span
						onClick={() => {
							setVista('list')
						}}
						className={`hover:shadow-accent hover:shadow-md cursor-pointer ${
							vista === 'list' ? 'border border-white' : 'border-none'
						}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24'
							viewBox='0 -960 960 960'
							width='24'
							fill='grey'
						>
							<path d='M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z' />
						</svg>
					</span>
				</div>
			</div>

			<div className={`hidden  w-full border rounded-lg font-bold ${vista === 'blocks' ? 'hidden' : 'lg:flex'}`}>
				<p className='w-[230px] ml-4'>Crypto</p>
				<p className='w-40 px-2 mx-1'>Current price</p>{' '}
				<p className='w-40 px-2 mx-1'>Higth 24h</p>{' '}
				<p className='w-40 px-2 mx-1'>Low 24h</p>
			</div>

			{props.data.slice(pag, pag + 10)?.map((dat, index) => (
				<CardsCryptos
					key={pag + index}
					id={dat.symbol.toUpperCase() + 'USDT'}
					symbol={dat.symbol.toUpperCase()}
					price={dat.current_price}
					higth={dat.high_24h}
					low={dat.low_24h}
					icon={dat.image}
					orden={vista}
				/>
			))}
		</div>
	)
}
export default BarraBusqueda
