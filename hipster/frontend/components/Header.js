import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Hipster</Link>
      </div>
      <div className="sub-bar">
        <p>search bar goes here</p>
      </div>
      <Nav />
    </header>
  );
}
