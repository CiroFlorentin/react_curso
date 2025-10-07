import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Test Item'


        render(<ItemCounter productName={name} />)

        expect(screen.getByText(name)).toBeDefined()
        expect(screen.getByText(name)).not.toBeNull()
    })
    test('should render with custom quantity', () => {
        const name = 'Test Item'
        const quantity = 5


        render(<ItemCounter productName={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined()
        expect(screen.getByText(quantity)).not.toBeNull()
    })

    test('should increase count when +1 btn is pressed', () => {
        render(<ItemCounter productName={"Test Item"} quantity={5} />)

        const quantity = 5
        render(<ItemCounter productName={"Test Item"} quantity={quantity} />)

        const [btnAdd] = screen.getAllByRole('button')
        fireEvent.click(btnAdd)

        expect(screen.getByText(quantity + 1)).toBeDefined()

    })
    test('should decrease count when -1 btn is pressed', () => {
        const quantity = 5
        render(<ItemCounter productName={"Test Item"} quantity={quantity} />)

        const [, btnSub] = screen.getAllByRole('button')
        fireEvent.click(btnSub)

        expect(screen.getByText(quantity - 1)).toBeDefined()
    })
    test('should decrease count when -1 btn is pressed and quantity is 0', () => {
        const quantity = 0
        render(<ItemCounter productName={"Test Item"} quantity={quantity} />)

        const [, btnSub] = screen.getAllByRole('button')
        fireEvent.click(btnSub)

        expect(screen.getByText(quantity)).toBeDefined()
    })
    test('should change to red when counter is 0', () => {
        const quantity = 0
        const name = 'Test Item'
        render(<ItemCounter productName={name} quantity={quantity} />)

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('red')
    })
    test('should change to black when counter is greather than 0', () => {
        const quantity = 1
        const name = 'Test Item'
        render(<ItemCounter productName={name} quantity={quantity} />)

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('black')
    })
})