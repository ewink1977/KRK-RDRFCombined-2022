import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import BBSMain from './pages/BBSMain'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} exact />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					{/* Protected Routes go below! */}
					<Route path='/bbs' element={<BBSMain />} exact />
				</Routes>
			</Router>
			<Footer />
			<ToastContainer autoClose={5000} />
		</div>
	)
}

export default App
