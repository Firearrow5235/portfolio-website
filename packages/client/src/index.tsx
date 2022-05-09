import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { ThemeProvider, createTheme } from '@material-ui/core';
import reportWebVitals from './reportWebVitals';
import './index.css';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FF8F1F',
    },
    secondary: {
      main: '#185CA1',
    },
    success: {
      main: '#3F7806',
    },
    error: {
      main: '#B31B1B',
    },
    info: {
      main: '#38A1A1',
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
// reportWebVitals(console.log);
