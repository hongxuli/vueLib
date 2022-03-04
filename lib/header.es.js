import DxButton from 'devextreme-vue/button';
import { resolveComponent, openBlock, createBlock, createElementBlock, createElementVNode, createVNode, createCommentVNode, createStaticVNode } from 'vue';

var script$1 = {
  name: "component_name",
  components: {
    DxButton,
  },
  data() {
    return {};
  },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DxButton = resolveComponent("DxButton");

  return (openBlock(), createBlock(_component_DxButton, { text: "123" }))
}

script$1.render = render$1;
script$1.__file = "src/packages/Button/Button.vue";

var script = {
  name: "my-header",

  components: { MyButton: script$1, DxButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ["login", "logout", "createAccount"],
};

const _hoisted_1 = { class: "text-sky-500" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = /*#__PURE__*/createStaticVNode("<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z\" fill=\"#FFF\"></path><path d=\"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z\" fill=\"#555AB9\"></path><path d=\"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z\" fill=\"#91BAF8\"></path></g></svg><h1 class=\"bg-red-600\">Acme</h1>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DxButton = resolveComponent("DxButton");
  const _component_my_button = resolveComponent("my-button");

  return (openBlock(), createElementBlock("header", null, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_DxButton, { text: "123" })
      ]),
      createElementVNode("div", null, [
        ($props.user)
          ? (openBlock(), createBlock(_component_my_button, {
              key: 0,
              size: "small",
              onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('logout'))),
              label: "Log out"
            }))
          : createCommentVNode("v-if", true),
        (!$props.user)
          ? (openBlock(), createBlock(_component_my_button, {
              key: 1,
              size: "small",
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.$emit('login'))),
              label: "Log in"
            }))
          : createCommentVNode("v-if", true),
        (!$props.user)
          ? (openBlock(), createBlock(_component_my_button, {
              key: 2,
              primary: "",
              size: "small",
              onClick: _cache[2] || (_cache[2] = $event => (_ctx.$emit('createAccount'))),
              label: "Sign up"
            }))
          : createCommentVNode("v-if", true)
      ])
    ])
  ]))
}

script.render = render;
script.__file = "src/packages/Header/Header.vue";

script.install = function (app) {
    app.component(script.name, script);
};

export { script as Header };
