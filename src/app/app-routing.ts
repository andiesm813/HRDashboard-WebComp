import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './dashboard/dashboard';
import './team/team';
import './events/events';

export const routes: Route[] = [
  { path: '', component: 'app-dashboard', name: 'Dashboard' },
  { path: 'dashboard', component: 'app-dashboard', name: 'Dashboard' },
  { path: 'team', component: 'app-team', name: 'Team' },
  { path: 'events', component: 'app-events', name: 'Events' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
