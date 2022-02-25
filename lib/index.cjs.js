'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
        [`storybook-button--${props.size || "medium"}`]: true,
      })),
      style: vue.computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    type: "button",
    class: vue.normalizeClass($setup.classes),
    onClick: _cache[0] || (_cache[0] = (...args) => ($setup.onClick && $setup.onClick(...args))),
    style: vue.normalizeStyle($setup.style)
  }, vue.toDisplayString($props.label), 7 /* TEXT, CLASS, STYLE */))
}

script.render = render;
script.__file = "src/packages/Button/Button.vue";

script.install = function (app) {
    app.component(script.name, script);
};

const components = [script];
const install = (app, opts = {}) => {
    components.forEach((component) => {
        app.use(component);
    });
};
const fpc = { install };

exports.Button = script;
exports["default"] = fpc;
