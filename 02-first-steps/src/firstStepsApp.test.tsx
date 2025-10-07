/* eslint-disable @typescript-eslint/no-unused-vars */
import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./firstStepsApp";



const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />
})


vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
// ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.productName} quantity={props.quantity} />
// }))

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)

        expect(container).toMatchSnapshot()

    })
    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />)

        const itemCounterElements = screen.getAllByTestId('ItemCounter')

        expect(itemCounterElements.length).toBe(4)


    })
    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(4)
        expect(mockItemCounter).toHaveBeenCalledWith({
            productName: 'Nintendo Switch 2',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            productName: 'PS5',
            quantity: 2
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            productName: 'Xbox One',
            quantity: 5
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            productName: 'PC',
            quantity: 1
        })

    })
})