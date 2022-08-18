import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/style.css'

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div className="container-content">
      <div>
        <Header currentUser={currentUser} />
        <div>
          <Component currentUser={currentUser} {...pageProps} />
        </div>
      </div>
   
      <div>
        <Footer />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  console.log("🚀 ~ file: _app.js ~ line 28 ~ AppComponent.getInitialProps= ~ data", data)

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
