import React, { useState } from 'react';
import DateInput from '../dateInput/DateInput';
import PsButton from '../psButton/PsButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



export default function BookingForm() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const partySize = useSelector((state) => state.partySize.partySize);
    const date = useSelector(state => state.dateField.dateField)

    const submitForm = (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || partySize === 0 || date === null) {
            toast("Fill out all Information!", { duration: 1900 })
        }
        else {
            toast("Reservation Confirmed", { duration: 1900 });
            window.location.reload();
        }
    }


    return (
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
                <label htmlFor=''>Occasion</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' required />

                <label htmlFor=''>Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' required />

                <label htmlFor=''>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required />

                <PrimaryButton onClick={submitForm} type={"submit"} text={"Book"} />
            </fieldset>
        </form>
    )
}
