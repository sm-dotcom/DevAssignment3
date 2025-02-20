describe('Example Test', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should have welcome text visible', async () => {
      await expect(element(by.text('Welcome to MyApp'))).toBeVisible();
    });
  
    it('should tap a button', async () => {
      await element(by.id('login-button')).tap();
      await expect(element(by.text('Logged In'))).toBeVisible();
    });
  });
  