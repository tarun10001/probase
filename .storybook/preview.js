import ".././src/dist/css/main.css";
// import "../node_modules/fortawesome/fontawesome-free/css/all.css";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}