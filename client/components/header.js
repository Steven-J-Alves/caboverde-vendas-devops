import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Login', href: '/auth/signin' },
    !currentUser && { label: 'Register', href: '/auth/signup' },
    !currentUser && { label: 'About', href: '/' },
    !currentUser && { label: 'Contact', href: '/' },
    currentUser && { label: 'Create Item', href: '/tickets/new' },
    currentUser && { label: 'Item', href: '/orders' },
    currentUser && { label: 'Contact', href: '/' },
    currentUser && { label: 'Logoff', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li className="link" key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light header-nav">
      <Link href="/">
        <a >Cabo Verde Vendas 🇨🇻</a>
      </Link>

      <div>
        <ul className="link-container">{links}</ul>  
      </div>
    </nav>
  );
};
