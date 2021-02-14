const colors = {
  color: [
    'hsl(0, 0%, 100%)',
    'hsl(0, 0%, 90%)',
    'hsl(0, 0%, 80%)',
    'hsl(0, 0%, 70%)',
    'hsl(0, 0%, 60%)',
    'hsl(0, 0%, 50%)',
    'hsl(0, 0%, 40%)',
    'hsl(0, 0%, 30%)',
    'hsl(0, 0%, 20%)',
    'hsl(0, 0%, 10%)',
    'hsl(0, 0%, 0%)'
  ],
  primary: [
    'hsl(165, 72%, 90%)',
    'hsl(165,72%,50%)',
    'hsl(167,87%,37%)',
    'hsl(165, 72%, 30%)'
  ],
  info: [
    'hsl(187,49%,90%)',
    'hsl(188,50%,80%)',
    'hsl(188,50%,70%)',
    'hsl(188,50%,50%)'
  ],
  warning: [
    'hsl(39, 72%, 90%)',
    'hsl(39, 72%, 45%)',
    'hsl(39, 72%, 35%)',
    'hsl(39, 72%, 25%)'
  ],
  danger: [
    'hsl(345, 72%, 90%)',
    'hsl(345, 72%, 60%)',
    'hsl(345, 72%, 50%)',
    'hsl(345, 72%, 40%)'
  ]
};


const theme = {
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512], // applies to margin or padding (e.g. m={2} p={3})
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'system-ui',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
    tag: 2
  },
  borderWidths: [0, 1, 2, 4, 10],
  shadows: [
    `0 0.5rem 1rem ${colors.color[8]}`,
    `0 0.5rem 1.5rem ${colors.color[6]}`,
    `0 0.5rem 2rem ${colors.color[8]}`,
    `0 0.5rem 2.5rem ${colors.color[6]}`
  ],
  radii: [0, 4, 5],
  modes: {
    dark: {
      colors: {
        color: [
          'hsl(0, 0%, 100%)',
          'hsl(0, 0%, 90%)',
          'hsl(0, 0%, 80%)',
          'hsl(0, 0%, 70%)',
          'hsl(0, 0%, 60%)',
          'hsl(0, 0%, 50%)',
          'hsl(0, 0%, 40%)',
          'hsl(0, 0%, 30%)',
          'hsl(0, 0%, 20%)',
          'hsl(0, 0%, 10%)',
          'hsl(0, 0%, 0%)'
        ],
        background: ['hsl(0, 0%, 0%)']
      },
      shadows: [
        '0 0 transparent',
        '0 0 transparent',
        '0 0 transparent',
        '0 0 transparent'
      ]
    }
  }
};

export default theme;
