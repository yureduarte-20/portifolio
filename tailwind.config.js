import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './src/**/*.js'
  ],
  theme:{
    extend:{
      colors:{
        primary: ''
      }
    }
  }
};
