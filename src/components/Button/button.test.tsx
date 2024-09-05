import { describe, expect, test } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import { Button } from "./button";

describe('button tests', () => {
    test("should render button", () => {
        render(<Button onClick={() => {}} text="Helo"></Button>);

        const element = screen.getByTestId("button-test");
        expect(element).toBeTruthy();
    })
})