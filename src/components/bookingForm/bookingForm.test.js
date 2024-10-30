// Import React library
import React from 'react';
// Import necessary functions from React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Provider component from react-redux for connecting to the Redux store
import { Provider } from 'react-redux';
// Import configureStore to create a mock Redux store
import configureStore from 'redux-mock-store';
// Import the BookingForm component to test
import BookingForm from './BookingForm';
// Import action creators to verify actions dispatched during tests
import { updateTimes } from '../../features/times/timesSlice.js';
import { resetPS } from '../../features/partySize/partySizeSlice.js';
import { resetDate } from '../../features/dateField/dateFieldSlice.js';
// Import the toast notification function to check if it gets called correctly
import toast from 'react-hot-toast';

// Create a mock store for testing
const mockStore = configureStore([]);

// Mock the toast function to prevent actual notifications during tests
jest.mock('react-hot-toast', () => ({
    __esModule: true,
    default: jest.fn(),
}));

// Describe the test suite for the BookingForm component
describe('BookingForm Component', () => {
    let store; // Declare a variable to hold the mock store

    // Set up the mock store before each test
    beforeEach(() => {
        // Create a new mock store with initial state
        store = mockStore({
            partySize: { partySize: 2 }, // Mock party size state
            dateField: { dateField: new Date() }, // Mock date state
            times: { times: ['17:00', '18:00', '19:00'] }, // Mock available times
        });
    });

    // Test case to check if the form elements render correctly
    test('renders form elements', () => {
        // Render the BookingForm component wrapped in the Provider with the mock store
        render(
            <Provider store={store}>
                <BookingForm />
            </Provider>
        );

        // Check if the date input field is present in the document
        expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
        // Check if the party size input field is present in the document
        expect(screen.getByLabelText(/party size/i)).toBeInTheDocument();
        // Check if the occasion input field is present in the document
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        // Check if the email input field is present in the document
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        // Check if the button to book is present in the document
        expect(screen.getByRole('button', { name: /book/i })).toBeInTheDocument();
    });

    // Test case to check if a toast message is shown when fields are empty
    test('shows a toast message when fields are empty', () => {
        // Render the BookingForm component wrapped in the Provider with the mock store
        render(
            <Provider store={store}>
                <BookingForm />
            </Provider>
        );

        // Simulate a click on the Book button
        fireEvent.click(screen.getByRole('button', { name: /book/i }));

        // Check that the toast function is called with the expected message
        expect(toast).toHaveBeenCalledWith("Fill out all Information!", { duration: 1900 });
    });

    // Test case to check if actions are dispatched on successful form submission
    test('dispatches actions and shows toast on successful form submission', () => {
        // Render the BookingForm component wrapped in the Provider with the mock store
        render(
            <Provider store={store}>
                <BookingForm />
            </Provider>
        );

        // Fill in the occasion select input with 'Birthday'
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
        // Fill in the email input with a test email
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        // Select a time from the available times
        fireEvent.change(screen.getByRole('combobox', { name: /select an option/i }), { target: { value: '17:00' } });

        // Simulate a click on the Book button to submit the form
        fireEvent.click(screen.getByRole('button', { name: /book/i }));

        // Get all actions that were dispatched to the store
        const actions = store.getActions();
        // Check if the updateTimes action was dispatched with the correct payload
        expect(actions).toContainEqual(updateTimes('17:00'));
        // Check if the resetPS action was dispatched
        expect(actions).toContainEqual(resetPS());
        // Check if the resetDate action was dispatched
        expect(actions).toContainEqual(resetDate());

        // Check that the toast function is called with the expected confirmation message
        expect(toast).toHaveBeenCalledWith("Reservation Confirmed", { duration: 1900 });
    });
});
