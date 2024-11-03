import React, { useState } from 'react';
import DateInput from '../dateInput/DateInput';
import PsButton from '../psButton/PsButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { updateTimes } from '../../features/times/timesSlice';
import { resetPS } from '../../features/partySize/partySizeSlice';
import { resetDate } from '../../features/dateField/dateFieldSlice';
import './bookingForm.css';



export default function BookingForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("");
    const [selectedTime, setSelectedTime ] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    const partySize = useSelector((state) => state.partySize.partySize);
    const date = useSelector(state => state.dateField.dateField)
    const times = useSelector(state => state.times.times)


    const submitForm = (e) => {
        e.preventDefault();
        if (selectedTime === "" || occasion === "" || email === "" || partySize === 0 || selectedDate === null) {
            toast("Fill out all Information!", { duration: 1900 })
        }
        else {
            dispatch(updateTimes(selectedTime));
            dispatch(resetPS());
            dispatch(resetDate());
            setSelectedDate(null);
            setSelectedTime("");
            setEmail("");
            setOccasion("");
            toast("Reservation Confirmed", { duration: 1900 });
        }
    }



    return (
        <form action='#' className='booking-form'>
            <div className='top'>
                <fieldset id='dateField'>
                    <label>Date</label>
                    <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </fieldset>
                <fieldset id="lastField">
                    <label htmlFor='party-size'>Party Size</label>
                    <PsButton />
                </fieldset>
            </div>
            <fieldset className="contact">
                <label htmlFor='occasion'>Occasion</label>
                <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="" disabled>Select an option</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                </select>
                <label htmlFor="time">Time</label>
                <select id='time' value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    <option value="" disabled >Select an option</option>
                    {times.map((item, key) => {
                        return (<option key={key} value={item}>{item}</option>)
                    })}
                </select>


                <label htmlFor='email'>Email</label>
                <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' required />

                <PrimaryButton onClick={submitForm} type={"submit"} text={"Book"} />
            </fieldset>
        </form>
    )
}
