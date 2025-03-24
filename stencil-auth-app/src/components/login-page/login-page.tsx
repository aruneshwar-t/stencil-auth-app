import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.css',
  shadow: true,
})
export class LoginPage {
  @State() email: string = '';
  @State() password: string = '';
  @State() errorMessage: string = '';

  handleLogin = (event: Event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === this.email && user.password === this.password) {
      window.location.href = `/profile?username=${encodeURIComponent(user.username)}`;
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.errorMessage && <p style={{ color: 'red' }}>{this.errorMessage}</p>}
        <form onSubmit={this.handleLogin}>
          <label>
            Email:
            <input type="email" value={this.email} onInput={(e: any) => (this.email = e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={this.password} onInput={(e: any) => (this.password = e.target.value)} />
          </label>
          <button type="submit">Log In</button>
        </form>
        <button onClick={() => window.location.href = '/'}>Go to Sign Up</button>
      </div>
    );
  }
}