import Header from "./Header.vue";

Header.install = function (app: any) {
  app.component(Header.name, Header);
};

export { Header };
