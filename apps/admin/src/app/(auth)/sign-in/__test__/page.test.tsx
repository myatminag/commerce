import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../page';
import SignInForm from '../components/sign-in-form';

jest.mock('../use-sign-in', () => ({
  useSignIn: jest.fn(() => ({
    errors: {},
    isPending: false,
    register: jest.fn(),
    handleSubmit: jest.fn(),
    handleSignIn: jest.fn(),
  })),
}));

describe('Sign In', () => {
  it('renders links with correct href attributes', () => {
    render(<Page />);

    const termsLink = screen.getByText(/Terms of Service/i).closest('a');
    const privacyLink = screen.getByText(/Privacy Policy/i).closest('a');

    expect(termsLink).toHaveAttribute('href', '/terms');
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('renders the sign in form', () => {
    render(<SignInForm />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /Sign In/i });
    const forgotPasswordLink = screen
      .getByText(/Forgot Password?/i)
      .closest('a');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password');
  });
});
