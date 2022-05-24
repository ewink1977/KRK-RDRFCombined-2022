import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function TestUserInfo() {
	return (
		<>
			<Typography variant='h4' className='testUserHeader'>
				Test Users!
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className='testUserText'>
				If you want to take a look around the system, please feel free
				to <Link to='/register'>create an account</Link>. You can also
				log in with the test user account, username: {''}
				<strong>testuser</strong> and the password: {''}
				<strong>testuserpassword</strong>.
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className='testUserText'>
				This will give you basic user access which will let you post
				messages, reply to messages, and view events!
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className='testUserText'>
				You can check out all of the features via the {''}
				<a
					href='https://krkboard.com/documentation/'
					target='_blank'
					rel='noopener noreferrer'>
					project's documentation
				</a>
				!
			</Typography>
		</>
	)
}

export default TestUserInfo
