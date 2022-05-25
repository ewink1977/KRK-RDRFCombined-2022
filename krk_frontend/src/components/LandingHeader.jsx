import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

function LandingHeader() {
	return (
		<header className='appbar'>
			<Navbar bg='dark' fixed='top'>
				<Container>
					<Link to='/'>
						<Navbar.Brand>
							<img
								src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
								alt='KRK Logo'
								className='d-inline-block align-top menuIcon'
							/>
						</Navbar.Brand>
					</Link>
					<Link to='/register'>
						<Button color='primary'>Register</Button>
					</Link>
					<Link to='/login'>
						<Button color='secondary'>Login</Button>
					</Link>
				</Container>
			</Navbar>
		</header>
	)
}

export default LandingHeader
