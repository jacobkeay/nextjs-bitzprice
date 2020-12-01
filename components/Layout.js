import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <head>
      <title>BitzPrice</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/lux/bootstrap.min.css"
      />
    </head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
