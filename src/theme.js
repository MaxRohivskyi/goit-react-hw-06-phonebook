export const theme = {
  colors: {
    text: '#2a2a2a',
    background: '#F5F5F5',
    primary: '#000',
    secondary: '#fff',
    accent: '#ff4500',
    muted: 'rgba(0, 0, 0, 0.8)',
    random: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '2px solid',
    bold: '3px solid',
  },
  radii: {
    none: '0',
    normal: '5px',
    large: '10px',
    round: '50%',
  },
};
