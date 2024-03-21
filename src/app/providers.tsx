import { Provider } from 'react-redux'
import { IChildrenProps } from './type'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store/index'

export default function Providers({ children }: IChildrenProps) {
	return (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	)
}
