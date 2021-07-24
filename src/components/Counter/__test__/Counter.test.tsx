import React from "react"
import {Counter} from "../Counter"
import {fireEvent, Matcher, MatcherOptions, render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId: { (arg0: string): any; (text: Matcher, options?: MatcherOptions | undefined, waitForElementOptions?: unknown): HTMLElement }

beforeEach(() => {
    const component = render(<Counter/>)
    getByTestId = component.getByTestId
})

test("header renders with correct text", () => {
    const headerEl = getByTestId("header")
    expect(headerEl.textContent).toBe("My counter")
})

test("counter initially start with text of 0", () => {
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test("add button renders with +", () => {
    const addBtn = getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
})

test("add button renders with -", () => {
    const minusBtn = getByTestId("minus-btn")

    expect(minusBtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    expect(inputEl.value).toBe("5")
})

test("click on plus btn add 1 to counter", () => {
    const btnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("1")
})

test("click on minus btn subtracts 1 to counter", () => {
    const btnEl = getByTestId("minus-btn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add btn works correctly", () => {
    const btnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on minus btn works correctly", () => {
    const btnEl = getByTestId("minus-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    expect(counterEl.textContent).toBe("0")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(btnEl)

    expect(counterEl.textContent).toBe("-5")
})

test("counter element contains correct className", () => {
    const counter = getByTestId("counter")
    const inputEl = getByTestId("input")
    const addBtnEl = getByTestId("add-btn")
    const minusBtnEl = getByTestId("minus-btn")


    expect(counter.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "100"
        }
    })

    fireEvent.click(addBtnEl)

    expect(counter.className).toBe("green")

    fireEvent.click(minusBtnEl)
    fireEvent.click(minusBtnEl)

    expect(counter.className).toBe("red")
})