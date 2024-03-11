import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../src/pages/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import '@testing-library/jest-dom/extend-expect';

jest.mock("axios");

jest.mock("../src/utils/AuthContext", () => ({
    useAuth: () => ({
      login: jest.fn(), // Mock the login function
    }),
}));

describe("LoginPage", () => {
    it("should render login form", () => {
        const { getByLabelText, getByText } = render(<Router><LoginPage /></Router>);
    
        expect(getByLabelText("Email Address")).toBeInTheDocument();
        expect(getByLabelText("Password")).toBeInTheDocument();
        expect(getByText("Log In")).toBeInTheDocument();
    })

    it("should handle login failure (missing field)", async () => {
        const errorResponse = { message: "All fields are required" };
        axios.post.mockRejectedValueOnce({ response: { data: errorResponse } });

        const { getByLabelText, getByText } = render(<Router><LoginPage /></Router>);
        fireEvent.change(getByLabelText("Password"), { target: { value: "joebruin" } });

        fireEvent.click(getByText("Log In"));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerLogin", {
                email: "",
                password: "joebruin"
            }, { withCredentials: true });
        });
    })

    it("should handle login failure (incorrect email/password)", async () => {
        const errorResponse = { message: "Incorrect password or email" };
        axios.post.mockRejectedValueOnce({ response: { data: errorResponse } });

        const { getByLabelText, getByText } = render(<Router><LoginPage /></Router>);
        fireEvent.change(getByLabelText("Email Address"), { target: { value: "bruin2020@ucla.edu" } });
        fireEvent.change(getByLabelText("Password"), { target: { value: "bruin2020" } });

        fireEvent.click(getByText("Log In"));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerLogin", {
                email: "bruin2020@ucla.edu",
                password: "bruin2020"
            }, { withCredentials: true });
        });
    })

    it("should handle login success", async () => {
        axios.post.mockResolvedValueOnce()

        const { getByLabelText, getByText } = render(<Router><LoginPage /></Router>);
        fireEvent.change(getByLabelText("Email Address"), { target: { value: "bruin2024@ucla.edu" } });
        fireEvent.change(getByLabelText("Password"), { target: { value: "bruin2024" } });

        fireEvent.click(getByText("Log In"));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerLogin", {
                email: "bruin2024@ucla.edu",
                password: "bruin2024"
            }, { withCredentials: true });
        });
    })
})