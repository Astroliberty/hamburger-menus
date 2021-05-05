<template>
  <button
    :class="[isToggleMenuActive ? 'menu-active' : '', , 'menu', className]"
    @click="toggleMenu()"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    isToggleMenuActive: Boolean,
    className: String,
  },
  setup(_, context) {
    const toggleMenu = () => {
      context.emit("toggle-menu");
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  span {
    background: $color__text;

    &:before,
    &:after {
      background: $color__text;
    }
  }
}
</style>
