'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f4f6f7',
    },
    chart: {
      blue: "#159ED9",
      orange: "#F26226",
      yellow: "#FBBC05",
      green: "#86BE40",
      gray1: "#9d9d9d",
      gray2: "#575759",
      bgLight: "#F1F1F1",
      bgDark: "#919396"
    }

  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      lineHeight: '64px',
      letterSpacing: '-0.7px',
    },
    header: {
      textTransform: "uppercase",
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 1.5,
      [`@media (min-width: 600px)`]: {
        fontSize: 25,
        fontWeight: 700,
      }
    },
    header1: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
    },
    header2: {
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
      [`@media (min-width: 600px)`]: {
        fontSize: 20,
      }
    },
    title: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.5,
    },
    title2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.5,
      [`@media (min-width: 600px)`]: {
        fontSize: 25,
      }
    },
    body1: {
      fontSize: 13,
      [`@media (min-width: 600px)`]: {
        fontSize: 18,
      },
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 600,
      fontSize: 14,
      [`@media (min-width: 600px)`]: {
        fontSize: 16,
      },
      lineHeight: 1.5,
    },
    body3: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.5,
    },

    caption: {
      fontSize: 10,
      [`@media (min-width: 600px)`]: {
        fontSize: 20,
      },
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption2: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.5,
    },
    caption3: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.5,
    },
    outputBody1: {
      fontSize: 13,
      [`@media (min-width: 600px)`]: {
        fontSize: 16,
      },
      [`@media (min-width: 1200px)`]: {
        fontSize: 20,
      },
      fontWeight: 700,
      lineHeight: 1.5,
    },
    outputBody2: {
      fontSize: 10,
      [`@media (min-width: 600px)`]: {
        fontSize: 13
      },
      [`@media (min-width: 1200px)`]: {
        fontSize: 14,
      },
      [`@media (min-width: 1400px)`]: {
        fontSize: 16,
      },
      fontWeight: 500,
    },
    outputBody3: {
      fontSize: 13,
      [`@media (min-width: 600px)`]: {
        fontSize: 16,
      },
      fontWeight: 700,
      lineHeight: 1.5,
    },
    outputBody4: {
      fontSize: 10,
      [`@media (min-width: 600px)`]: {
        fontSize: 16,
      },
      fontWeight: 500,
    },
    outputBodyBold: {
      fontSize: 10,
      [`@media (min-width: 600px)`]: {
        fontSize: 16,
      },
      fontWeight: 700,
    },
    outputHeader: {
      fontSize: 18,
      [`@media (min-width: 600px)`]: {
        fontSize: 25,
      },
      fontWeight: 700,
    },
    warning: {
      fontSize: 8,
      [`@media (min-width: 600px)`]: {
        fontSize: 12,
      },
      fontWeight: 500,
      color: "red",
    }

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#159ED9',
          '&:hover': {
            backgroundColor: '#159ED9',
          },
        },
      },
      variants: [{
        props: { variant: "customButton" },
        style: {
          color: "#FFFFFF",
          height: '54px',
          width: '160px',
          borderRadius: '10px',
          fontSize: '20px',
          fontWeight: 700,
          textTransform: 'none',
          lineHeight: '28px',
          padding: 0,
        }
      }]
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}