import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { changeDate } from '../../features/dateField/dateFieldSlice';
import TextField from '@mui/material/TextField';



export default function DateInput({ selectedDate, setSelectedDate }) {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDate({
      year: selectedDate?.$y,
      month: selectedDate?.$M + 1,
      day: selectedDate?.$D
    }))
  }, [selectedDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        slotProps={{
          textField: {
            required: true,
          },
          
        }}
      />
    </LocalizationProvider>
  )
}
