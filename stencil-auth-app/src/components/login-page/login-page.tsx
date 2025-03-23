import { Component, h, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.css',
  shadow: true,
})
export class LoginPage {
  @State() email: string = '';
  @State() password: string = '';

  @Prop() history!: RouterHistory;

  handleLogin = (event: Event) => {
    event.preventDefault();
    console.log('Login form submitted');
    // Simulate fetching user's name after login
    const userName = 'John Doe'; // Replace with actual user data
    this.history.push(`/profile?name=${encodeURIComponent(userName)}`);
  };

  render() {
    return (
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
    );
  }
}
