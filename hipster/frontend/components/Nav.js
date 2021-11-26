import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <Link href="/product">products</Link>
      <Link href="/sell">sell </Link>
      <Link href="/orders">orders </Link>
      <Link href="/account">account </Link>
    </>
  );
}
