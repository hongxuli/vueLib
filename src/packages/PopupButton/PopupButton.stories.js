import PopupButton from "./PopupButton.vue";
import DxButton from "devextreme-vue/button";
import { DxPopup } from "devextreme-vue/popup";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "FPC/PopupButton",
  component: PopupButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   onClick: {},
  //   size: {
  //     control: { type: "select" },
  //     options: ["small", "medium", "large"],
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const sample = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PopupButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  template: `<PopupButton/>`,
});

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DxButton, DxPopup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  data() {
    return {
      isPopupShow: false,
    };
  },
  methods: {
    onClick() {
      this.isPopupShow = true;
    },
    onHiding() {
      this.isPopupShow = false;
    },
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: ` <div>
    <DxButton text="test" @click="onClick" />

    <div id="app-container">
      <DxPopup id="popup" @Hiding="onHiding" :visible="isPopupShow">
        <div>Test content</div>
      </DxPopup>
    </div>
  </div>`,
});