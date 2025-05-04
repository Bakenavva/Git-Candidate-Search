import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPath = useLocation().pathname;

  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link
          to='/'
          className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
      </li>
      
      <li className='nav-item'>
        <Link
          to='/SavedCandidates'
          className={`nav-link ${currentPath === '/SavedCandidates' ? 'active' : ''}`}
        >
          Potential Candidates
        </Link>
      </li>
    </ul>
  )
};

export default Nav;