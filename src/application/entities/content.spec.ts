import { Content } from './content';

describe('Notification content', () => {
  it('show be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('show NOT be able to create a notification content with LESS than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('show NOT be able to create a notification content with MORE than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
