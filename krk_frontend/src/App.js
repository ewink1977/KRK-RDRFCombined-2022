import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './pages/Landing'
import Footer from './components/Footer'
import Container from 'react-bootstrap/esm/Container'

function App() {
	return (
		<Container fluid className='p-0 m-0'>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
				</Routes>
			</Router>
			<Footer />
		</Container>
	)
}

export default App
