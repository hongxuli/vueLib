import '../src/theme/index.scss'
// import "devextreme/dist/css/dx.common.css";
// import "devextreme/dist/css/dx.light.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}