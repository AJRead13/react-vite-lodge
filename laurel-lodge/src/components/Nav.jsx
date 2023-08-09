import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Members"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Members' ? 'nav-link active' : 'nav-link'}
        >
          Members
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Calendar"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Calendar' ? 'nav-link active' : 'nav-link'}
        >
          Calendar
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
