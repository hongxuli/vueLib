import { Button } from "./packages/Button";

const components = [Button];

const install = (app: any, opts = {}) => {
  components.forEach((component) => {
    app.use(component);
  });
};
const fpc = { install };

export { Button };

export default fpc;
