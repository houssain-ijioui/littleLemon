import React, { useState } from "react"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import DateInput from "../../components/dateInput/DateInput"
import PsButton from "../../components/psButton/PsButton";
import './booking.css';
import CtaButton from "../../components/ctaButton/CtaButton";

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
        <form action='#' className='booking-form'>
          <div>
            <fieldset>
              <label>Date</label>
              <DateInput />
            </fieldset>
            <fieldset id="lastField">
              <label>Party Size</label>
              <PsButton />
            </fieldset>
          </div>
          <fieldset className="contact">
            <label htmlFor=''>Name</label>
            <input type='text' />

            <label htmlFor=''>Phone Number</label>
            <input type='tel' />

            <label htmlFor=''>Email</label>
            <input type='email' />

            <CtaButton text={"Submit"} />
          </fieldset>
        </form>
      </section>
      <Footer />
    </>
  )
}
