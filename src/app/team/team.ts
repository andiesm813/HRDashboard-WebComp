import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcCardComponent, IgcIconComponent } from 'igniteui-webcomponents';
import DashboardDataService from '../service/dashboard-data-service';

defineComponents(IgcCardComponent, IgcIconComponent);

@customElement('app-team')
export default class Team extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: white;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 32px;
      height: max-content;
      min-width: 750px;
      min-height: 50px;
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
    }
    .row-layout {
      display: flex;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card {
      height: max-content;
      min-width: 240px;
      max-width: 340px;
      flex-shrink: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 8px;
      min-width: 0;
      min-height: 0;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .h5 {
      color: hsla(var(--ig-secondary-800));
      margin: 0 0 4px;
      height: max-content;
      min-width: min-content;
    }
    .text {
      color: hsla(var(--ig-secondary-300));
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      border-radius: 50%;
      margin: 0 0 16px;
      width: 140px;
      height: 140px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text_1 {
      color: hsla(var(--ig-secondary-800));
      margin: 0 6px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      color: hsla(var(--ig-secondary-800));
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: hsla(var(--ig-secondary-300));
      margin: 0 16px 0 0;
    }
    .hyperlink {
      color: hsla(var(--ig-secondary-300));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_4 {
      height: max-content;
      min-width: min-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
  `;

  constructor() {
    super();
    const dashboardDataService: DashboardDataService = new DashboardDataService();
      dashboardDataService.getAllTeamMembers().then(data => {
        this.dashboardDataAllTeamMembers = data;
        }, err => console.log(err));
  }

  @property()
  private dashboardDataAllTeamMembers?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <h5 class="h5">
            Team Members
          </h5>
          <p class="typography__body-1 text">
            64 People
          </p>
        </div>
        <div class="row-layout group_2">
          ${this.dashboardDataAllTeamMembers?.map((item: any) => html`
            <igc-card ?elevated="${true}" class="card">
              <igc-card-header>
                <h3 slot="title">
                </h3>
                <h5 slot="subtitle">
                </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <div class="column-layout group_3">
                  <div class="column-layout group_4">
                    <img src="${item.Photo}" class="image" />
                    <div class="row-layout group_5">
                      <p class="typography__subtitle-2 text_1">
                        ${item.FirstName}
                      </p>
                      <p class="typography__subtitle-2 text_2">
                        ${item.LastName}
                      </p>
                    </div>
                    <p class="typography__overline text_3">
                      ${item.Position}
                    </p>
                  </div>
                  <div class="row-layout group_6">
                    <div class="column-layout group_7">
                      <p class="typography__overline text_3">
                        Department
                      </p>
                      <p class="typography__subtitle-2 text_3">
                        ${item.Department}
                      </p>
                    </div>
                    <div class="column-layout group_7">
                      <p class="typography__overline text_3">
                        HIRE DATE
                      </p>
                      <p class="typography__subtitle-2 text_3">
                        ${item.HireDate}
                      </p>
                    </div>
                  </div>
                  <div class="column-layout group_8">
                    <div class="row-layout group_9">
                      <span class="material-icons icon">
                        mail
                      </span>
                      <a href class="typography__body-2 hyperlink">
                        ${item.Email}
                      </a>
                    </div>
                    <div class="row-layout group_9">
                      <span class="material-icons icon">
                        phone_android
                      </span>
                      <p class="typography__body-2 text_4">
                        ${item.Phone}
                      </p>
                    </div>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
          `)}
        </div>
      </div>
    `;
  }
}
