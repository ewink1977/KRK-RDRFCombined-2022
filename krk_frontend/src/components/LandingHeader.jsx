import { Grid, Button, IconButton } from '@mui/material'

function LandingHeader() {
	return (
		<header className='appbar'>
			<IconButton size='small'>
				<img
					src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
					alt='KRK Logo'
					className='menuIcon'
				/>
			</IconButton>

			<Grid className='menuButton'>
				<Button href='/register' color='primary'>
					Register
				</Button>
				<Button href='/login' color='secondary'>
					Login
				</Button>
			</Grid>
		</header>
	)
}

export default LandingHeader
