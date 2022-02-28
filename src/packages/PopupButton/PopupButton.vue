<template>
  <DxButton text="test" @click="onClick" />

  <div id="app-container">
    <DxPopup id="popup" @Hiding="onHiding" :visible="isPopupShow">
      <div>Test content</div>
    </DxPopup>
  </div>
</template>
<script>
import DxButton from "devextreme-vue/button";
import { DxPopup } from "devextreme-vue/popup";
export default {
  name: "popupButton",
  components: {
    DxButton,
    DxPopup,
  },
  props: {},
  data() {
    return {
      isPopupShow: false,
    };
  },
  methods: {
    onClick(e) {
      this.isPopupShow = true;
    },
    onHiding() {
      this.isPopupShow = false;
    },
  },
};
</script>
