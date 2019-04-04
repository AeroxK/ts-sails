import 'jest';

import app from './app';

test('My fancy Test', () => {
    expect(app()).toBeTruthy();
});