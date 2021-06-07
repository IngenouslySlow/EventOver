import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

//Default
Layout.defaultProps = {
  title: "DJ Events | Find the hottest DJ events out there",
  description: "Your best way to find all the events about DJ online",
  keywords: "DJ,EDM,Music",
};
export default Layout;
