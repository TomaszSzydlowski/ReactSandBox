import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import {Contact} from "./contact";

jest.mock("../hello/hello", () => ({
    Hello: () => (<span data-testid="hello-stranger">Hey, stranger</span>)
}));

let container: HTMLDivElement | null = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

it("should render contact information", () => {
    act(() => {
        render(
            <Contact
                name="Joni Baez"
                email="test@example.com"
                site="http://test.com"
            />,
            container
        );
    });
    expect(
        container?.querySelector("[data-testid='email']")?.getAttribute("href")
    ).toEqual("mailto:test@example.com");

    expect(
        container?.querySelector('[data-testid="site"]')?.getAttribute("href")
    ).toEqual("http://test.com");

    const test = container?.querySelector('[data-testid="hello-stranger"]')
    expect(test?.textContent).toBe("Hey, stranger");
});