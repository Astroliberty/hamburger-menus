<template>
  <div class="toggle">
    <input
      type="checkbox"
      @input="inputToggle()"
      id="toggle"
      :checked="isScss"
    />
    <label for="toggle">
      <span class="toggle-label"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    isScss: { type: Boolean },
  },
  setup(_, context) {
    const inputToggle = () => {
      context.emit("input-toggle");
    };
    return { inputToggle };
  },
};
</script>

<style lang="scss" scoped>
$input-bg-static: $color__main;
$input-bg-pseudo-active: $color__main--light;
$input-bg-pseudo-static: $color__main--light;
$input-width: 10rem;
$input-radius: calc(#{$input-width} / 2);
$input-height: calc(#{$input-width} / 3);

.toggle {
  position: relative;
  text-align: center;
  width: $input-width;
  height: $input-height;
}
.toggle-label {
  &:before,
  &:after {
    cursor: pointer;
    position: absolute;
    z-index: 0;
    top: calc(#{$input-width} - 1.8rem) / 2;
    width: calc(100% - calc(#{$input-width} / 3));
    color: #fff;
    font-size: 1.8rem;
    font-weight: bolder;
    text-align: center;
  }
  &:after {
    content: "CSS";
    right: 2px;
  }
}

input[type="checkbox"] {
  cursor: pointer;
  display: inline-block;
  position: relative;
  appearance: none;
  width: $input-width;
  height: $input-height;
  background-color: $input-bg-static;
  border-radius: $input-radius;
  outline: none;
  transition: background 450ms ease;
  box-shadow: 0 0 0 6px $input-bg-static;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    border-radius: 100%;
    transition: background 450ms ease, transform 450ms ease;
  }

  &:before {
    width: calc(#{$input-width} / 3);
    height: $input-height;
    background-color: $input-bg-pseudo-static;
  }

  // active state
  &:checked {
    & + label .toggle-label {
      &:after {
        content: "SCSS";
        left: 2px;
      }
    }
    &:before {
      background-color: $input-bg-pseudo-active;
      transform: translateX(200%);
    }
  }
}
</style>
