# Theming Guide

## 1️⃣ Using Tailwind CSS Config

To override the UI library’s styles, edit your `tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        background: '#FAFAFA'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    }
  }
}
```
