import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcCheckboxComponent, IgcDialogComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcRippleComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import DashboardDataService from './service/dashboard-data-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcListHeaderComponent, IgcDialogComponent, IgcCardComponent, IgcCheckboxComponent, IgcSwitchComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 768px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .left-panel {
      background-color: #F8F6F5;
      border-color: #EDE9E5;
      border-width: 0px 2px 0px 0px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      padding: 40px 0 0;
      width: 240px;
      min-width: 240px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .logo-and-nav {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 64px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .logo {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .user {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      bottom: 280px;
      position: absolute;
      margin: 64px 24px 0;
      min-width: 50px;
      min-height: 50px;
    }
    .background {
      background-image: url("/src/assets/background.svg");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      bottom: 0;
      position: absolute;
      width: 240px;
      height: 370px;
      min-width: 50px;
      min-height: 330px;
    }
    .group_2 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 0 12px;
      min-width: 50px;
      min-height: 50px;
    }
    .right-panel {
      background-color: #F8F6F5;
      border-color: #EDE9E5;
      border-width: 0px 0px 0px 2px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      width: 280px;
      min-width: 280px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 40px 24px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 0 16px 16px;
      min-width: 50px;
    }
    .group_5 {
      border-color: hsla(var(--ig-error-500));
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 16px;
      height: 40px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      border-color: hsla(var(--ig-primary-500));
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 16px;
      height: 40px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      border-color: hsla(var(--ig-secondary-500));
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 16px;
      height: 40px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      border-color: hsla(var(--ig-success-500));
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 16px;
      height: 40px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 0 16px;
      height: 40px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 0;
      min-height: 0;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 400px;
      min-height: 50px;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      height: max-content;
      flex-shrink: 0;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      width: 28px;
      height: 28px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      color: hsla(var(--ig-secondary-300));
      margin: 2px 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      color: hsla(var(--ig-secondary-800));
      margin: 2px 0 0 4px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .text_2 {
      color: hsla(var(--ig-secondary-500));
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: hsla(var(--ig-secondary-200));
      height: max-content;
      min-width: min-content;
    }
    .text_4 {
      text-align: center;
      color: hsla(var(--ig-secondary-900));
      height: max-content;
      min-width: min-content;
    }
    .text_5 {
      color: hsla(var(--ig-secondary-300));
      height: max-content;
      min-width: min-content;
    }
    .h6 {
      color: hsla(var(--ig-secondary-600));
      height: max-content;
      min-width: min-content;
    }
    .text_6 {
      color: hsla(var(--ig-secondary-800));
      margin: 0 20px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_7 {
      color: hsla(var(--ig-secondary-800));
      height: max-content;
      min-width: min-content;
    }
    .h6_1 {
      color: hsla(var(--ig-secondary-600));
      margin: 16px 0 16px 16px;
      height: max-content;
      min-width: min-content;
    }
    .text_8 {
      color: hsla(var(--ig-secondary-800));
      margin: 0 6px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .image_1 {
      height: 100%;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: transparent;
    }
    .avatar_2::part(base) {
      color: hsla(var(--ig-secondary-200));
      background-color: transparent;
    }
    .avatar_3::part(base) {
      color: hsla(var(--ig-secondary-200));
      background-color: transparent;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-secondary-400));
    }
    .list-item {
      margin: 16px 0 0;
    }
    .media-content {
      height: 113px;
    }
    .navigation {
      height: max-content;
      min-width: max-content;
    }
    .list-item_1 {
      margin: 0 0 16px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .button_1 {
      margin: 0 8px 8px 0;
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
      color: #E2D4DF;
    }
    .view-container {
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
  `;

  constructor() {
    super();
    const dashboardDataService: DashboardDataService = new DashboardDataService();
      dashboardDataService.getNewTeamMembersList().then(data => {
        this.dashboardDataNewTeamMembersList = data;
        }, err => console.log(err));
  }

  @property()
  private dashboardDataNewTeamMembersList?: any[];

  @query('#settings')
  public settings?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="row-layout group_1">
          <div class="column-layout left-panel">
            <div class="column-layout logo-and-nav">
              <div class="row-layout logo">
                <img src="/src/assets/LogoHR.svg" class="image" />
                <p class="typography__subtitle-2 text">
                  HR
                </p>
                <p class="typography__subtitle-2 text_1">
                  CORP
                </p>
              </div>
              <igc-list class="navigation">
                <igc-list-item @click="${() => Router.go('/dashboard')}" class="list-item_1">
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar avatar_1">
                      <span class="material-icons">dashboard</span>
                    </igc-avatar>
                  </div>
                  <div>
                    <p class="typography__subtitle-2 text_2">
                      DASHBOARD
                    </p>
                  </div>
                </igc-list-item>
                <igc-list-item @click="${() => Router.go('/team')}" class="list-item_1">
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar avatar_2">
                      <span class="material-icons">people</span>
                    </igc-avatar>
                  </div>
                  <div>
                    <p class="typography__subtitle-2 text_3">
                      TEAM
                    </p>
                  </div>
                </igc-list-item>
                <igc-list-item @click="${() => Router.go('/events')}">
                  <div slot="start">
                    <igc-avatar size="small" shape="circle" class="avatar avatar_3">
                      <span class="material-icons">stars</span>
                    </igc-avatar>
                  </div>
                  <div>
                    <p class="typography__subtitle-2 text_3">
                      EVENTS
                    </p>
                  </div>
                </igc-list-item>
              </igc-list>
            </div>
            <div class="column-layout user">
              <igc-avatar src="/src/assets/Avatar13.png" shape="circle" class="avatar"></igc-avatar>
              <p class="typography__subtitle-2 text_4">
                Sandy Anderson
              </p>
              <p class="typography__caption text_5">
                UX DESIGN LEAD
              </p>
            </div>
            <div class="column-layout background">
              <div class="row-layout group_2">
                <igc-button variant="flat" @click=${() => this.settings?.toggle()} class="button">
                  <span class="material-icons">
                    settings
                  </span>
                  <span>Settings</span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
          </div>
        </div>
        <router-outlet class="view-container"></router-outlet>
        <div class="column-layout right-panel">
          <div class="column-layout group_3">
            <div class="row-layout group_4">
              <h6 class="h6">
                Calendar
              </h6>
              <igc-icon-button variant="flat" class="icon-button">
                <span class="material-icons">
                  notifications
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </div>
            <igc-list class="navigation">
              <igc-list-header>July 1st</igc-list-header>
              <igc-list-item>
                <div>
                  <div class="row-layout logo">
                    <p class="typography__subtitle-1 text_6">
                      10 AM
                    </p>
                    <div class="column-layout group_5">
                      <p class="typography__overline text_5">
                        TRAINING
                      </p>
                      <p class="typography__subtitle-2 text_7">
                        Intro to Scrum
                      </p>
                    </div>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout logo">
                    <p class="typography__subtitle-1 text_6">
                      12 PM
                    </p>
                    <div class="column-layout group_6">
                      <p class="typography__overline text_5">
                        OFFICE HOURS
                      </p>
                      <p class="typography__subtitle-2 text_7">
                        Customers Q&amp;A
                      </p>
                    </div>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-header class="list-item">July 5th</igc-list-header>
              <igc-list-item>
                <div>
                  <div class="row-layout logo">
                    <p class="typography__subtitle-1 text_6">
                      10 AM
                    </p>
                    <div class="column-layout group_7">
                      <p class="typography__overline text_5">
                        HR CORP
                      </p>
                      <p class="typography__subtitle-2 text_7">
                        Company Meeting
                      </p>
                    </div>
                  </div>
                </div>
              </igc-list-item>
              <igc-list-item>
                <div>
                  <div class="row-layout logo">
                    <p class="typography__subtitle-1 text_6">
                      12 PM
                    </p>
                    <div class="column-layout group_8">
                      <p class="typography__overline text_5">
                        TRAINING
                      </p>
                      <p class="typography__subtitle-2 text_7">
                        Managing People
                      </p>
                    </div>
                  </div>
                </div>
              </igc-list-item>
            </igc-list>
          </div>
          <div class="column-layout group_9">
            <h6 class="h6_1">
              New Team Members
            </h6>
            <igc-list class="navigation">
              ${this.dashboardDataNewTeamMembersList?.map((item: any) => html`
                <igc-list-item>
                  <div>
                    <div class="row-layout logo">
                      <igc-avatar src="${item.Photo}" size="small" shape="circle" class="avatar"></igc-avatar>
                      <div class="column-layout group_10">
                        <div class="row-layout group_11">
                          <p class="typography__subtitle-2 text_8">
                            ${item.Name}
                          </p>
                        </div>
                        <p class="typography__overline text_5">
                          ${item.Position}
                        </p>
                      </div>
                    </div>
                  </div>
                </igc-list-item>
              `)}
            </igc-list>
          </div>
        </div>
      </div>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="settings">
        <h3 slot="title">
          <h5>
            Settings
          </h5>
        </h3>
        <div class="column-layout group_12">
          <div class="column-layout group_13">
            <p class="typography__subtitle-2 text_2">
              THEME
            </p>
            <div class="row-layout group_13">
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/theme-light.svg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                  </h3>
                  <h5 slot="subtitle">
                    Default
                  </h5>
                </igc-card-header>
              </igc-card>
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/theme-dark.svg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                  </h3>
                  <h5 slot="subtitle">
                    Dark
                  </h5>
                </igc-card-header>
              </igc-card>
            </div>
          </div>
          <div class="column-layout group_13">
            <p class="typography__subtitle-2 text_2">
              APPLICATION
            </p>
            <div class="column-layout group_14">
              <igc-checkbox labelPosition="after" class="user-input">
                Auto-start application
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="user-input">
                Open application in the background
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="user-input">
                On close, keep the application running
              </igc-checkbox>
            </div>
          </div>
          <div class="column-layout group_13">
            <p class="typography__subtitle-2 text_2">
              NOTIFICATIONS
            </p>
            <div class="column-layout group_14">
              <igc-switch ?checked="${true}" class="user-input">
                Enable Notifications
              </igc-switch>
              <igc-switch class="user-input">
                Play sound for notifications
              </igc-switch>
            </div>
          </div>
        </div>
        <div slot="footer">
          <igc-button @click=${() => this.settings?.toggle()} class="button_1">
            Done
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
