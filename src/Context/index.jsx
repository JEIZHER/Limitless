import { createContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Websocket } from '../Hooks/useWebSocket'

export const ContextDatCryptos = createContext()

export const ContextCryptosProvider = ({ children }) => {
	let { pathname} = useLocation()
	let hClose
	let data_sec = {}
	try {
		data_sec = Websocket()
	} catch {
		(e) => {
			console.log(e)
		}
	}
	data_sec && pathname==='/'?
		data_sec?.map((cripto) => {
			let allChildren = []
			let color = 'white'
			allChildren = document.getElementById(cripto.s)?.childNodes
			if (allChildren) {
				let gValor
				let price =
					Number(cripto.c) > 1 ? Number(cripto.c).toFixed(2) : Number(cripto.c)
				color =
					Number(cripto.c) > Number(cripto.o)
						? '#0ECB81'
						: Number(cripto.c) === Number(cripto.o)
						? 'white'
						: '#F6465D'
				gValor = cripto.h - cripto.l
				hClose = -(((cripto.c - cripto.o) * 25) / gValor)
				let id = 'I' + cripto.s
				let canvas = document.getElementById(id)
				if (canvas) {
					let ctx = canvas.getContext('2d')
					ctx.clearRect(0, 0, 20, 50)
					ctx.fillStyle = color
					ctx.fillRect(0, 25, 20, hClose)
					ctx.beginPath()
					ctx.lineWidth = 2
					ctx.strokeStyle = color
					ctx.moveTo(0, 25)
					ctx.lineTo(20, 25)
					ctx.moveTo(10, 0)
					ctx.lineTo(10, 50)
					ctx.stroke()
				}
				allChildren[1].children[0].children[1].style.color = color
				allChildren[1].children[0].children[1].textContent = price
				allChildren[1].children[0].children[2].textContent =
					cripto.h > 1 ? Number(cripto.h).toFixed(2) : Number(cripto.h)
				allChildren[1].children[0].children[3].textContent =
					cripto.l > 1 ? Number(cripto.l).toFixed(2) : Number(cripto.l)
			}
		}):null

	return (
		<ContextDatCryptos.Provider value={{}}>
			{children}
		</ContextDatCryptos.Provider>
	)
}
