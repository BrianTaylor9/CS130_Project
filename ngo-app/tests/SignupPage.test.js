import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignupPage from "../src/pages/SignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import '@testing-library/jest-dom/extend-expect';

jest.mock("axios");

jest.mock("../src/utils/AuthContext", () => ({
    useAuth: () => ({
      login: jest.fn(), // Mock the login function
    }),
}));

describe("SignupPage", () => {
  it("should render signup form", () => {
    const { getByLabelText, getByText } = render(<Router><SignupPage /></Router>);
    
    expect(getByLabelText("Email Address")).toBeInTheDocument();
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
  });

  it("should handle signup failure (user already exists)", async () => {
    const errorResponse = { message: "User already exists" };
    axios.post.mockRejectedValueOnce({ response: { data: errorResponse } });

    const { getByLabelText, getByText } = render(<Router><SignupPage /></Router>);
    fireEvent.change(getByLabelText("Email Address"), { target: { value: "bruin2024@ucla.edu" } });
    fireEvent.change(getByLabelText("Username"), { target: { value: "bruin2024" } });
    fireEvent.change(getByLabelText("Password"), { target: { value: "bruin2024" } });

    fireEvent.click(getByText("Sign Up"));

    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerSignup", {
            email: "bruin2024@ucla.edu",
            username: "bruin2024",
            password: "bruin2024"
        }, { withCredentials: true });
    });
  });

  it("should handle signup failure (missing value)", async () => {
    const errorResponse = { message: "User already exists" };
    axios.post.mockRejectedValueOnce({ response: { data: errorResponse } });

    const { getByLabelText, getByText } = render(<Router><SignupPage /></Router>);
    fireEvent.change(getByLabelText("Username"), { target: { value: "joebruin" } });
    fireEvent.change(getByLabelText("Password"), { target: { value: "joebruin" } });

    fireEvent.click(getByText("Sign Up"));

    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerSignup", {
            email: "",
            username: "joebruin",
            password: "joebruin"
        }, { withCredentials: true });
    });
  });

  it("should handle signup success", async () => {
    axios.post.mockResolvedValueOnce()

    const { getByLabelText, getByText } = render(<Router><SignupPage /></Router>);
    fireEvent.change(getByLabelText("Email Address"), { target: { value: "bruin2025@ucla.edu" } });
    fireEvent.change(getByLabelText("Username"), { target: { value: "bruin2025" } });
    fireEvent.change(getByLabelText("Password"), { target: { value: "bruin2025" } });

    fireEvent.click(getByText("Sign Up"));

    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/volunteerSignup", {
            email: "bruin2025@ucla.edu",
            username: "bruin2025",
            password: "bruin2025"
        }, { withCredentials: true });
    });
  });
});
