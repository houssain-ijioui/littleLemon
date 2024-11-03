import React, { useEffect, useState } from 'react';
import DateInput from '../dateInput/DateInput';
import PsButton from '../psButton/PsButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { initialTimes, updateTimes } from '../../features/times/timesSlice';
import { resetPS } from '../../features/partySize/partySizeSlice';
import { resetDate } from '../../features/dateField/dateFieldSlice';
import './bookingForm.css';
import { fetchAPI, submitAPI } from '../../utils/api';
import { useNavigate } from 'react-router-dom';



export default function BookingForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("");
    const [selectedTime, setSelectedTime ] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    const partySize = useSelector((state) => state.partySize.partySize);
    const times = useSelector(state => state.times.times)



    async function initialiseTimes() {
      const today = new Date()
      const availableTimes = fetchAPI(today)
      dispatch(initialTimes(availableTimes))
    }



    useEffect(() => {
        initialiseTimes()
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        if (selectedTime === "" || occasion === "" || email === "" || partySize === 0 || selectedDate === null) {
            toast("Fill out all Information!", { duration: 1900 })
        }
        else {
            const response = submitAPI({
              email,
              occasion,
              selectedDate,
              selectedTime,
              partySize,
            })
            if (response) {
                dispatch(updateTimes(selectedTime))
                dispatch(resetPS())
                dispatch(resetDate())
                setSelectedDate(null)
                setSelectedTime("")
                setEmail("")
                setOccasion("")
                toast("Reservation Confirmed", { duration: 1900 })
                // navigate("/")
            }
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
