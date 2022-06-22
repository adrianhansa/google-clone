import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-between items-center h-screen'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
