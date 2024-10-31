import React from 'react';
import Main from "../../components/main/Main";
import Nav from '../../components/nav/Nav';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './home.css';



export default function Home() {
  return (
    <>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </>
  )
}
