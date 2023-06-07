export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 5500,
    delayEnabled: process.env.DELAY_ENABLED === 'true',
  },
});
