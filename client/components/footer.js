import Link from 'next/link';

const appVersion = process.env.NEXT_PUBLIC_APP_VERSION
console.log("🚀 ~ file: footer.js ~ line 4 ~ appVersion", appVersion)

export default ({ currentUser }) => {
  return (
    <footer className="navbar navbar-light footer">
      <p >Cabo Verde Vendas - Ecommerce</p>
      <p>2022</p>
      <p>Release -  v2.7.4</p>
    </footer>
  );
};
