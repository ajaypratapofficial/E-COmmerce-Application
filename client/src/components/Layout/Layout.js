// rafce react arrow function export components
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast"; // or react-toastify
import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  children, // layout can be child of diferent component - like homepage,register user admin etc
  title = "E-COMMERCE APP",
  description = "description",
  keywords = "keywords",
  author = "author",
}) => {
  return (
    // Helmet Header Main(Toaster and children) Footer => in layout
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header></Header>
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

// if not given upside
// Layout.defaultProps = {
//   title : "E-COMMERCE APP",
//   description : "description",
//   keywords : "keywords",
//   author : "author"
// }

export default Layout;
