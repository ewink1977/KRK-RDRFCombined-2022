import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

function BBSHeader() {
	return (
		<header>
			<Navbar bg='primary'>
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
					<Stack direction='horizontal' gap={2}>
						<Link to='/register'>
							<Button color='light'>Register</Button>
						</Link>
						<Link to='/login'>
							<Button color='secondary'>Login</Button>
						</Link>
					</Stack>
				</Container>
			</Navbar>
		</header>
	)
}

export default BBSHeader
