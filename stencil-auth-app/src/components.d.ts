/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
export { RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
    }
    interface LoginPage {
        "history": RouterHistory;
    }
    interface ProfilePage {
    }
    interface SignupPage {
        "history": RouterHistory;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {
    }
    var HTMLLoginPageElement: {
        prototype: HTMLLoginPageElement;
        new (): HTMLLoginPageElement;
    };
    interface HTMLProfilePageElement extends Components.ProfilePage, HTMLStencilElement {
    }
    var HTMLProfilePageElement: {
        prototype: HTMLProfilePageElement;
        new (): HTMLProfilePageElement;
    };
    interface HTMLSignupPageElement extends Components.SignupPage, HTMLStencilElement {
    }
    var HTMLSignupPageElement: {
        prototype: HTMLSignupPageElement;
        new (): HTMLSignupPageElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "login-page": HTMLLoginPageElement;
        "profile-page": HTMLProfilePageElement;
        "signup-page": HTMLSignupPageElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface LoginPage {
        "history": RouterHistory;
    }
    interface ProfilePage {
    }
    interface SignupPage {
        "history": RouterHistory;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "login-page": LoginPage;
        "profile-page": ProfilePage;
        "signup-page": SignupPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "login-page": LocalJSX.LoginPage & JSXBase.HTMLAttributes<HTMLLoginPageElement>;
            "profile-page": LocalJSX.ProfilePage & JSXBase.HTMLAttributes<HTMLProfilePageElement>;
            "signup-page": LocalJSX.SignupPage & JSXBase.HTMLAttributes<HTMLSignupPageElement>;
        }
    }
}
