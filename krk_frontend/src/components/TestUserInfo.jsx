import { Link } from 'react-router-dom'

function TestUserInfo() {
	return (
		<>
			<h4 className='testUserHeader'>Test Users!</h4>
			<p className='testUserText'>
				If you want to take a look around the system, please feel free
				to <Link to='/register'>create an account</Link>. You can also
				log in with the test user account, username: {''}
				<strong>testuser</strong> and the password: {''}
				<strong>testuserpassword</strong>.
			</p>
			<p className='testUserText'>
				This will give you basic user access which will let you post
				messages, reply to messages, and view events!
			</p>
			<p className='testUserText'>
				You can check out all of the features via the {''}
				<a
					href='https://krkboard.com/documentation/'
					target='_blank'
					rel='noopener noreferrer'>
					project's documentation
				</a>
				!
			</p>
		</>
	)
}

export default TestUserInfo
