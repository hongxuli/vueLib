'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DxButton = require('devextreme-vue/button');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DxButton__default = /*#__PURE__*/_interopDefaultLegacy(DxButton);

var script$1 = {
  name: "component_name",
  components: {
    DxButton: DxButton__default["default"],
  },
  data() {
    return {};
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DxButton = vue.resolveComponent("DxButton");

  return (vue.openBlock(), vue.createBlock(_component_DxButton, { text: "123" }))
}

script$1.render = render$1;
script$1.__file = "src/packages/Button/Button.vue";

script$1.install = function (app) {
    app.component(script$1.name, script$1);
};

var script = {
  name: "my-header",

  components: { MyButton: script$1, DxButton: DxButton__default["default"] },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ["login", "logout", "createAccount"],
};

const _hoisted_1 = { class: "text-sky-500" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z\" fill=\"#FFF\"></path><path d=\"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z\" fill=\"#555AB9\"></path><path d=\"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z\" fill=\"#91BAF8\"></path></g></svg><h1 class=\"bg-red-600\">Acme</h1>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DxButton = vue.resolveComponent("DxButton");
  const _component_my_button = vue.resolveComponent("my-button");

  return (vue.openBlock(), vue.createElementBlock("header", null, [
    vue.createElementVNode("div", _hoisted_1, [
      vue.createElementVNode("div", _hoisted_2, [
        _hoisted_3,
        vue.createVNode(_component_DxButton, { text: "123" })
      ]),
      vue.createElementVNode("div", null, [
        ($props.user)
          ? (vue.openBlock(), vue.createBlock(_component_my_button, {
              key: 0,
              size: "small",
              onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('logout'))),
              label: "Log out"
            }))
          : vue.createCommentVNode("v-if", true),
        (!$props.user)
          ? (vue.openBlock(), vue.createBlock(_component_my_button, {
              key: 1,
              size: "small",
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.$emit('login'))),
              label: "Log in"
            }))
          : vue.createCommentVNode("v-if", true),
        (!$props.user)
          ? (vue.openBlock(), vue.createBlock(_component_my_button, {
              key: 2,
              primary: "",
              size: "small",
              onClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('createAccount'))),
              label: "Sign up"
            }))
          : vue.createCommentVNode("v-if", true)
      ])
    ])
  ]))
}

script.render = render;
script.__file = "src/packages/Header/Header.vue";

script.install = function (app) {
    app.component(script.name, script);
};

const components = [script$1];
const install = (app, opts = {}) => {
    components.forEach((component) => {
        app.use(component);
    });
};
const fpc = { install };

exports.Button = script$1;
exports.Header = script;
exports["default"] = fpc;
