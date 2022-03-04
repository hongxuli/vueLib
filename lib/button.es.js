import DxButton from 'devextreme-vue/button';
import { resolveComponent, openBlock, createBlock } from 'vue';

var script = {
  name: "component_name",
  components: {
    DxButton,
  },
  data() {
    return {};
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DxButton = resolveComponent("DxButton");

  return (openBlock(), createBlock(_component_DxButton, { text: "123" }))
}

script.render = render;
script.__file = "src/packages/Button/Button.vue";

script.install = function (app) {
    app.component(script.name, script);
};

export { script as Button };
