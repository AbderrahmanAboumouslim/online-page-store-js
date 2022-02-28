import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useProductsContext } from '../../context/product_context';

const Navbar = () => {
  const navLinks = ['home', 'products', 'faq', 'contact'];
  const location = useLocation();
  const { openSidebar } = useProductsContext();

  return (
    <Wrapper>
      <div className="img-bars">
        <img src={logo} alt="logo" />
        <FaBars onClick={openSidebar} className="nav-toggle" />
      </div>
      <ul>
        {navLinks.map(navLink => {
          return (
            <li>
              <Link
                to={`/${navLink}`}
                className={
                  location.pathname === `/${navLink}` ? 'active' : 'not-active'
                }
              >
                {navLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: static;
  height: 100px;
  left: 0px;
  top: 0px;

  width: 90vw;
  margin: 0 auto;
  max-width: 1070px;

  img {
    width: 200px;
    height: 100px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: gray;
      font-size: 1rem;
      letter-spacing: 0.25rem;
      padding: 0.5rem;
    }
  }

  .active {
    color: #fa4a0c;
  }
`;

export default Navbar;
