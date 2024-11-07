import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";


const mockStore = configureStore([]);
const timeElements = ["12:00", "13:00"];
const store = mockStore({ dateField: new Date(), partySize: 2, times: timeElements })


test('render date heading element', () => {
    render(
        <Provider store={store}>
            <BookingForm />
        </Provider>
    )
    expect(screen.getByText('Date')).toBeInTheDocument();
})


test('render times from state', () => {
    render(
        <Provider store={store}>
            <BookingForm />
        </Provider>
    )
    timeElements.forEach((element) => {
        expect(screen.getByText(element)).toBeInTheDocument();
    })
})