import { expect } from '@open-wc/testing';
import Team from './team.js';

describe('Team', () => {
  it('<app-team> is an instance of Team', async () => {
    const element = document.createElement('app-team');
    expect(element).to.be.instanceOf(Team);
  });
});
