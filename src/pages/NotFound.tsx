import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1>404 Page Not Found</h1>
      <Link to="/" className='underline'>HomePage</Link>
    </div>
  )
}

export default NotFound;