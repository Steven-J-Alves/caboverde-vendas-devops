import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sell Item', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <Link href="/">
        <a >Cabo Verde Vendas 🇨🇻</a>
      </Link>

      <div>
        <ul>{links}</ul>
      </div>
    </nav>
  );
};
