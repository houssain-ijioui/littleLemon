import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from "../../components/footer/Footer";
import './policy.css';


function Policy() {
  return (
    <>
      <Nav />
      <div className='policy-content'>
        <h1>Our Policy</h1>
        <p>
          Welcome to Little Lemon! Our policies are designed to ensure that all
          guests have an enjoyable and memorable dining experience. We
          appreciate your understanding and cooperation. We recommend making a
          reservation to secure a table, especially during weekends and peak
          hours. Walk-ins are welcome, and we will accommodate as best as
          possible based on table availability. Please arrive within 15 minutes
          of your reservation time to avoid forfeiting your table, as we hold
          reservations for 15 minutes past the scheduled time. Little Lemon
          offers vegetarian, vegan, and gluten-free options. Please inform our
          staff of any allergies or dietary needs, and we will do our best to
          accommodate you. While we take utmost care to handle all food safely,
          cross-contamination may occur. Guests with severe allergies should
          notify staff upon arrival. We accept cash, major credit cards, and
          mobile payments. A 15% gratuity is recommended, and for groups of 6 or
          more, an 18% gratuity is added to the bill. We kindly ask that
          cancellations be made at least 24 hours in advance to allow others to
          enjoy our restaurant. Repeated no-shows may result in restrictions on
          future reservations. Orders can be placed directly by phone or online
          through our website or partnering delivery platforms. We aim to have
          orders ready at the scheduled time, so please arrive promptly to
          ensure your meal’s freshness. Little Lemon is committed to using
          fresh, locally sourced ingredients and minimizing waste wherever
          possible. We partner with local farmers and suppliers to provide
          sustainable and high-quality ingredients. To ensure a pleasant
          experience for all guests, we ask everyone to be respectful and
          courteous. While there is no strict dress code, we encourage smart
          casual attire. We look forward to serving you and hope you enjoy your
          meal at Little Lemon!
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Policy
