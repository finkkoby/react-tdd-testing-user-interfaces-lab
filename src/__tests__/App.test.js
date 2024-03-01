import { render, screen, logRoles } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />)
    const heading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    expect(heading).toBeInTheDocument()
})

test("An image of yourself", () => {
    render(<App/>)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
})

test("image contains alt text describing its contents", () => {
    render(<App/>)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt')
})

test("A second-level heading with the text `About Me`", () => {
    render(<App/>)
    const heading = screen.getByRole("heading", {
        name: "About Me",
        exact: false,
        level: 2
    })
})

test("should contain a paragraph for your biography", () => {
    const { container } = render(<App />)
    expect(container.querySelector('p')).toBeInTheDocument()
})

test("contains one to your GitHub profile", () => {
    render(<App/>)
    const target = screen.getAllByRole("link")[0]
    expect(target).toHaveAttribute('href', (expect.stringContaining('github')))
})

test("contains one to your LinkedIn profile", () => {
    render(<App/>)
    const target = screen.getAllByRole("link")[1]
    expect(target).toHaveAttribute('href', (expect.stringContaining('linkedin')))
})


