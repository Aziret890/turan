import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home'
import News from '../../pages/News'
import NewsDetail from '../../pages/NewsDetail'
import Catalog from '../../pages/Catalog'
import AboutUs from '../../pages/AboutUs'
import ProductDetail from '../../pages/ProductDetail'
import Login from '../../pages/Login'
import Registration from '../../pages/Registration'
import BasketPage from '../../pages/Basket'
import Favorites from '../../pages/Favorites'
import NotFoundPage from '../../pages/_404'

export default function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/news' element={<News />} />
			<Route path='/news/:newsId' element={<NewsDetail />} />
			<Route path='/catalog' element={<Catalog />} />
			<Route path='/about' element={<AboutUs />} />
			<Route path='/product/:productId' element={<ProductDetail />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/basket' element={<BasketPage />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
