import { Component, h, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'signup-page',
  styleUrl: 'signup-page.css',
  shadow: true,
})
export class SignupPage {
  @State() name: string = '';
  @State() email: string = '';
  @State() password: string = '';

  @Prop() history!: RouterHistory;

  handleSignup = (event: Event) => {
    event.preventDefault();
    console.log('Signup form submitted');
    this.history.push(`/profile?name=${encodeURIComponent(this.name)}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSignup}>
        <label>
          Name:
          <input type="text" value={this.name} onInput={(e: any) => (this.name = e.target.value)} />
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
    );
  }
}
