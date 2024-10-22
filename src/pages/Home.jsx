import React from 'react';
import Main from "../components/Main";
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
