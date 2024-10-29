import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import './booking.css';
import BookingForm from "../../components/bookingForm/BookingForm";


export default function Booking() {


  return (
    <>
      <Nav />
      <section className='booking-page'>
        <header>
          <h1>Reserve Your Spot at Little Lemon.</h1>
          <p>
            Enjoy a personalized dining experience by reserving your table in
            advance.
          </p>
        </header>
        <BookingForm />
      </section>
      <Footer />
    </>
  )
}
