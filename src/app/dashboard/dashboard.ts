import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import DashboardDataService from '../service/dashboard-data-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-dashboard')
export default class Dashboard extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      background-color: white;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 32px;
      min-width: 750px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_5 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      height: max-content;
      min-width: 210px;
      flex-grow: 1;
      flex-basis: 0;
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
      align-items: stretch;
      align-content: flex-start;
      padding: 40px 40px 0 0;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 40px 0 0;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
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
      height: 100%;
    }
    .h6 {
      color: hsla(var(--ig-secondary-600));
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .media-content {
      height: 200px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-secondary-300));
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .grid {
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .category-chart {
      --brushes: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --outlines: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --marker-brushes: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --marker-outlines: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    const dashboardDataService: DashboardDataService = new DashboardDataService();
      dashboardDataService.getTeamMembersGrid().then(data => {
        this.dashboardDataTeamMembersGrid = data;
        }, err => console.log(err));
      dashboardDataService.getTeamGrowth().then(data => {
        this.dashboardDataTeamGrowth = data;
        }, err => console.log(err));
  }

  @property()
  private dashboardDataTeamMembersGrid?: any[];

  @property()
  private dashboardDataTeamGrowth?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="column-layout group_2">
            <div class="row-layout group_3">
              <div class="column-layout group_4">
                <h5 class="h5">
                  Good Morning, Sandy!
                </h5>
                <p class="typography__body-1 text">
                  Your Highlights
                </p>
              </div>
            </div>
            <div class="row-layout group_5">
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Illustration1.svg" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Team Stats
                  </h3>
                  <h5 slot="subtitle">
                    2010-2022
                  </h5>
                </igc-card-header>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" class="button">
                    Details
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" class="icon-button">
                    <span class="material-icons">
                      add_alert
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Illustration2.svg" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Ideation Workshop
                  </h3>
                  <h5 slot="subtitle">
                    View Proposals
                  </h5>
                </igc-card-header>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" class="button">
                    Details
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" class="icon-button">
                    <span class="material-icons">
                      add_alert
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
              <igc-card class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Illustration3.svg" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Upcoming Training
                  </h3>
                  <h5 slot="subtitle">
                    July 2022
                  </h5>
                </igc-card-header>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" class="button">
                    Details
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button variant="flat" class="icon-button">
                    <span class="material-icons">
                      add_alert
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            </div>
          </div>
          <div class="row-layout group_6">
            <div class="column-layout group_7">
              <h6 class="h6">
                Current Team Members
              </h6>
              <igc-grid .data="${this.dashboardDataTeamMembersGrid}" primary-key="FirstName" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography grid">
                <igc-column field="FirstName" data-type="string" header="FirstName" sortable="true" selectable="false"></igc-column>
                <igc-column field="LastName" data-type="string" header="LastName" sortable="true" selectable="false"></igc-column>
                <igc-column field="HireDate" data-type="string" header="HireDate" sortable="true" selectable="false"></igc-column>
                <igc-column field="ID" data-type="number" header="ID" sortable="true" selectable="false"></igc-column>
                <igc-column field="Department" data-type="string" header="Department" sortable="true" selectable="false"></igc-column>
                <igc-column field="Position" data-type="string" header="Position" sortable="true" selectable="false"></igc-column>
                <igc-column field="Email" data-type="string" header="Email" sortable="true" selectable="false"></igc-column>
                <igc-column field="Phone" data-type="string" header="Phone" sortable="true" selectable="false"></igc-column>
              </igc-grid>
            </div>
            <div class="column-layout group_8">
              <h6 class="h6">
                Team Growth
              </h6>
              <igc-category-chart .dataSource="${this.dashboardDataTeamGrowth}" chart-type="area" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
