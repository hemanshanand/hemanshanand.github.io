module.exports = {
  siteTitle: 'Hemansh Anand | Data Scientist',
  siteDescription:
    'Hemansh Anand Data Science Portfolio',
  siteKeywords:
    'Hemansh Anand, hemanshanand, anandhemansh, datascientist, face mask, face mask detection, web developer, javascript, girlscript, jamshedpur, amdocs, bit, mesra, deoghar',
  siteUrl: 'https://hemanshanand.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Hemansh Anand',
  location: 'London, United Kingdom',
  email: 'anandhemansh@gmail.com',
  github: 'https://github.com/hemanshanand',
  twitterHandle: '@hemanshanand',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hemanshanand',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hemanshanand',
    }
  ],

  navLinks: [
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact Me',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
