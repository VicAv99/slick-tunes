import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '#80deea',
    },
  },
};

const theme = createTheme(themeOptions);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
