import { Component, h } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="signup-page" exact={true} />
            <stencil-route url="/login" component="login-page" />
            <stencil-route url="/profile" component="profile-page" />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}