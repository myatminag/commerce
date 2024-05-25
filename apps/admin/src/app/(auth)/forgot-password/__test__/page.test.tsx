import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../page';
import ForgotPasswordForm from '../components/forgot-password-form';

jest.mock('../user-forgot-password', () => ({
  useForgotPassword: jest.fn(() => ({
    errors: {},
    isPending: false,
    register: jest.fn(),
    handleSubmit: jest.fn(),
    handleForgotPassword: jest.fn(),
  })),
}));

describe('Forgot Passsword', () => {
  it('renders sign in with correct href attributes', () => {
    render(<Page />);

    const signInLink = screen.getByText('Sign in').closest('a');

    expect(signInLink).toHaveAttribute('href', '/sign-in');
  });

  it('renders the form with email input and submit button', () => {
    render(<ForgotPasswordForm />);

    const email = screen.getByLabelText(/email/i);
    const button = screen.getByRole('button', { name: /Recover Password/i });

    expect(email).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
