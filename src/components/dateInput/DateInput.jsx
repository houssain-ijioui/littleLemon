import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../features/dateField/dateFieldSlice';


export default function DateInput() {

  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDate({
      year: date?.$y,
      month: date?.$M + 1,
      day: date?.$D
    }))
  }, [date])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={date} onChange={(newValue) => setDate(newValue)} slotProps={{
        textField: {
          required: true
        }
      }} />
    </LocalizationProvider>
  )
}
