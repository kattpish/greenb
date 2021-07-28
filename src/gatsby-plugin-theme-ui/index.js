const theme = {
  colors: {
    text: '#161A1D',
    background: '#fff',
    primary: '#33cc99',
    secondary: '#B8DA92',
    light: '#b3b3b3',
    paragraph: '#999',
    sectionBg: '#f7f7f7',
  },
  fonts: {
    body: 'Pretendard, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Lexend", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    light: 300,
    body: 400,
    medium: 600,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em', '71em', '100em'], // 640, 832, 1024, 1120, 1600
  radii: ['20px', '30px'],
  text: {
    default: {
      fontFamily: 'body',
    },
    paragraph: {
      color: 'paragraph',
    },
  },
  styles: {
    hr: {
      width: '80%',
      color: '#cbcbcb',
    },
  },
}

export default theme
