<template>
  <button class="base-button" @click="action()">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: { type: String, default: "ボタン名" },
  },
  setup(_, context) {
    const action = () => {
      context.emit("action");
    };
    return { action };
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: block;
  min-width: 8rem;
  height: 4rem;
  padding-inline: 1.6rem;
  font-family: $font__roboto;
  text-align: 4rem;
  text-align: center;
  background: $color__main;
  border-radius: 0.2rem;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: $color__main--dark;
    transition: all 0.5s ease 0s;
  }
}
</style>
