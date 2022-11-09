import { expect } from '@open-wc/testing';
import Events from './events.js';

describe('Events', () => {
  it('<app-events> is an instance of Events', async () => {
    const element = document.createElement('app-events');
    expect(element).to.be.instanceOf(Events);
  });
});
