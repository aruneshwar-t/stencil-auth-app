import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true,
})
export class ProfilePage {
  @State() username: string = '';

  componentWillLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    this.username = urlParams.get('username') || 'User';
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.username}!</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"/>
        <button onClick={() => window.location.href = '/login'}>Exit</button>
      </div>
    );
  }
}