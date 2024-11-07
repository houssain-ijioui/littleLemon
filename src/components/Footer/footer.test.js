import { render, screen } from "@testing-library/react";
import Footer from "./Footer";


test('render the footer text element', () => {
    render(<Footer />)
    expect(screen.getByText('Made By')).toBeInTheDocument();
})

