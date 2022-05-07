import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

export const meta = () => ({
  charset: "utf-8",
  title: "CodeSnippetSaver",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </Document>
  );
}

function Document({ children}){
  return(
    <html lang="en" className="">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout ({children}){
 return(
    <>
      <Header></Header>
      <div className="pt-12 md:flex">
        <Sidebar></Sidebar>
        <Wrapper>
          {children}
        </Wrapper>
      </div>
    </>
 );
}