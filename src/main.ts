import { Button } from "./packages/Button";
import { Header } from "./packages/Header";

const components = [Button];

const install = (app: any, opts = {}) => {
  components.forEach((component) => {
    app.use(component);
  });
};
const fpc = { install };

export { Button, Header };

export default fpc;
