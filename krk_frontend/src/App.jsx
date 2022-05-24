import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './pages/Landing'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} exact />
				</Routes>
			</Router>
			<Footer />
			<ToastContainer autoClose={5000} />
		</div>
	)
}

export default App
