import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from "../../components/Footer/Footer";
import './Policy.css';

function Policy() {
  return (
    <>
      <Nav />
      <div className="policy-content">
        <h1>Privacy Policy</h1>

        <p>At <strong>Little Lemon</strong>, your privacy is important to us. This policy explains how we handle your information.</p>

        <h2>1. Information We Collect</h2>
        <ul>
            <li><strong>Personal Info:</strong> We may collect your name, email, address, and payment details when you place an order or contact us.</li>
            <li><strong>Non-Personal Info:</strong> We gather data like your browser type and site usage to improve our services.</li>
        </ul>

        <h2>2. How We Use Your Info</h2>
        <ul>
            <li>To process orders and provide customer support.</li>
            <li>To send updates, promotions, and improve our website.</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Policy
