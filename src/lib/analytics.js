import GoogleAnalytics from 'react-ga';
import toio from 'toio-visual-programming';

GoogleAnalytics.initialize(process.env.GA_ID || window.GA_ID, {
    debug: (process.env.NODE_ENV !== 'production'),
    titleCase: true,
    sampleRate: (process.env.NODE_ENV === 'production') ? 100 : 0,
    forceSSL: true,
    ...toio.gui.ANALYTICS
});

export default GoogleAnalytics;
