<template>
  <div class="base-item">
    <h3 class="hamburger-name">{{ className }}</h3>
    <base-hamburger
      :is-toggle-menu-active="isToggleMenuActive"
      :class-name="className"
      @toggle-menu="toggleMenu()"
      class="hamburger-demo"
    />
    <div class="base-btn-wrap">
      <base-button :button-name="'HTML'" @action="copyHtml()" class="btn" />
      <base-button :button-name="buttonName" @action="copyStyle()" />
    </div>
  </div>
</template>

<script>
import BaseHamburger from "./BaseHamburger.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseHamburger,
    BaseButton,
  },
  props: {
    buttonName: String,
    isToggleMenuActive: Boolean,
    className: String,
  },
  setup(_, context) {
    const copyHtml = () => {
      context.emit("copy-html");
    };
    const copyStyle = () => {
      context.emit("copy-style");
    };

    const toggleMenu = () => {
      context.emit("toggle-menu");
    };
    return {
      copyHtml,
      copyStyle,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.hamburger {
  &-name {
    color: $color__main--dark;
  }
  &-demo {
    margin: 40px 0 50px;
  }
}

.base-btn-wrap {
  display: flex;

  .btn {
    margin-inline-end: 8px;
  }
}
</style>
