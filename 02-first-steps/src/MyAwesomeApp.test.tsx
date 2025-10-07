import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {

        const { container } = render(<MyAwesomeApp />)

        screen.debug()

        const h1 = container.querySelector('h1')
        const h3 = container.querySelector('h3')

        expect(h1?.innerHTML).toContain('Fernando')
        expect(h3?.innerHTML).toContain('Herrera')

        // console.log(container.innerHTML)
    })

    // test('should render firstName and lastName - screen', () => {

    //     render(<MyAwesomeApp />);

    //     screen.debug();

    //     const h1 = screen.getByRole('heading', {
    //         level: 1,
    //     })

    //     console.log(h1.innerHTML);


    //     // console.log(container.innerHTML)
    // })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)

        expect(container).toMatchSnapshot()

    })
});