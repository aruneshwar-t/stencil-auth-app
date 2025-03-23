import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true,
})
export class ProfilePage {
  @State() userName: string = '';

  componentWillLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    this.userName = urlParams.get('name') || 'User Name';
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.userName}!</h1>
        <img src="https://via.placeholder.com/150" alt="User Image" />
      </div>
    );
  }
}
