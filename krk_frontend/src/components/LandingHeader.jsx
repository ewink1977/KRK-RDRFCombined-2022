import { Grid, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

function LandingHeader() {
	return (
		<header className='appbar'>
			<Link to='/'>
				<IconButton size='small'>
					<img
						src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
						alt='KRK Logo'
						className='menuIcon'
					/>
				</IconButton>
			</Link>

			<Grid className='menuButton'>
				<Link to='/register'>
					<Button color='primary'>Register</Button>
				</Link>
				<Link to='/login'>
					<Button color='secondary'>Login</Button>
				</Link>
			</Grid>
		</header>
	)
}

export default LandingHeader
