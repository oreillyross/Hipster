import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  background-color: red;
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  position: relative;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">Hipster </Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>search bar goes here</p>
      </div>
      <Nav />
    </HeaderStyle>
  );
}
