import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'signup-page',
  styleUrl: 'signup-page.css',
  shadow: true,
})
export class SignupPage {
  @State() username: string = '';
  @State() email: string = '';
  @State() password: string = '';
  @State() errorMessage: string = '';

  validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleSignup = (event: Event) => {
    event.preventDefault();

    // Check if the email is already in use
    const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (existingUser.email === this.email) {
      this.errorMessage = 'Email is already in use.';
      return;
    }

    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }
    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Invalid email.';
      return;
    }
    const user = { username: this.username, email: this.email, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = `/profile?username=${encodeURIComponent(this.username)}`;
  };

  handleClearLocalStorage = () => {
    localStorage.clear();
    this.errorMessage = 'Local storage cleared.';
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        {this.errorMessage && <p style={{ color: 'red' }}>{this.errorMessage}</p>}
        <form onSubmit={this.handleSignup}>
          <label>
            Username:
            <input type="text" value={this.username} onInput={(e: any) => (this.username = e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={this.email} onInput={(e: any) => (this.email = e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={this.password} onInput={(e: any) => (this.password = e.target.value)} />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={() => window.location.href = '/login'}>Go to Login</button>
        <button onClick={this.handleClearLocalStorage}>Clear Local Storage</button>
      </div>
    );
  }
}