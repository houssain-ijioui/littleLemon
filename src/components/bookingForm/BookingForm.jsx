import React, { useState } from 'react';
import DateInput from '../dateInput/DateInput';
import PsButton from '../psButton/PsButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';



export default function BookingForm() {

    const [email, setEmail] = useState("");
    const [duration, setDuration] = useState("");
    const [occasion, setOccasion] = useState("");

    const partySize = useSelector((state) => state.partySize.partySize);
    const date = useSelector(state => state.dateField.dateField)


    const submitForm = (e) => {
        e.preventDefault();
        if (duration === "" || occasion === "" || email === "" || partySize === 0 || date === null) {
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
                <label>Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="" disabled>Select an option</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                </select>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="" disabled>Select an option</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                </select>


                <label htmlFor=''>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required />

                <PrimaryButton onClick={submitForm} type={"submit"} text={"Book"} />
            </fieldset>
        </form>
    )
}
