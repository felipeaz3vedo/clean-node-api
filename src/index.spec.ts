import { User } from '.';

describe('test', () => {
  it('should test greetings', () => {
    const user = new User();

    expect(user.greetings()).toBe('Hello World!');
  });
});
