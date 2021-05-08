<template>
  <header>
    <h1>{{ text.title }}</h1>
    <div class="link__group">
      <a
        v-for="item in snsIcons"
        :key="item.name"
        class="link__sns"
        :href="item.url"
        target="_blank"
      >
        <span v-html="item.path" />
      </a>
    </div>
  </header>
  <main>
    <section id="select-area">
      <h2 class="description">{{ text.description }}</h2>
      <div class="select-type">
        <the-toggle-button
          :is-scss="state.isScss"
          @input-toggle="selectCopyType()"
          class="select-type__toggle"
        />
      </div>
    </section>
    <section id="item-area">
      <base-item
        v-for="(item, index) in effects"
        :key="`item + ${index}`"
        :class-name="item.className"
        :buttonName="text.buttonName"
        :is-toggle-menu-active="item.isToggleMenuActive"
        @toggle-menu="toggleMenu(item)"
        @copy-html="copyHtml(item, item.className)"
        @copy-style="copyStyle(item, item.className)"
        class="item"
      />
    </section>
  </main>
  <footer>
    <small v-html="text.copyright" class="copyright" />
  </footer>
</template>

<script>
import { inject, reactive, watch } from "vue";
import { useIcons } from "./icon";
import { useData } from "./data";
import { useFunctions } from "./function";
import TheToggleButton from "./components/TheToggleButton.vue";
import BaseItem from "./components/BaseItem.vue";

export default {
  name: "App",
  components: {
    TheToggleButton,
    BaseItem,
  },

  setup() {
    const text = reactive({
      title: "HamburgerMenus",
      description:
        "Click on the hamburger menu to show demo and click on the buttons to copy code.",
      copyright: "&copy; 2021 Astroliberty.",
      buttonName: "SCSS",
    });

    const state = reactive({
      isScss: true,
    });

    const { snsIcons } = useIcons();
    const { emojis, effects } = useData();
    const { copy, setEmoji } = useFunctions();
    const toast = inject("toast");
    const showToast = (name) => {
      const emoji = setEmoji(emojis);
      toast.show(`Copied <strong>${name}</strong> to clipboard ${emoji}`);
    };
    const copyHtml = (item, name) => {
      copy(item.html);
      showToast(name);
    };
    const copyStyle = (item, name) => {
      state.isScss ? copy(item.scss) : copy(item.css);
      showToast(name);
    };

    const selectCopyType = () => {
      state.isScss ? (state.isScss = false) : (state.isScss = true);
    };
    const toggleMenu = (item) => {
      !item.isToggleMenuActive
        ? (item.isToggleMenuActive = true)
        : (item.isToggleMenuActive = false);
    };

    watch(
      () => state.isScss,
      () => {
        state.isScss ? (text.buttonName = "SCSS") : (text.buttonName = "CSS");
      },
      { deep: true }
    );

    return {
      text,
      state,
      snsIcons,
      effects,
      emojis,
      setEmoji,
      toast,
      showToast,
      copy,
      toggleMenu,
      copyHtml,
      copyStyle,
      selectCopyType,
    };
  },
};
</script>

<style lang="scss" scoped>
header,
main,
footer {
  width: 100vw;
  padding-inline: 10%;
  margin-inline: auto;
  font-family: $font__roboto;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;

  > * {
    display: inline-block;
  }

  h1 {
    font-size: 2.4rem;
  }
  .link {
    &__group {
      display: flex;
      justify-content: space-between;
      width: 9.6rem;
      height: 4rem;
    }
    &__sns {
      display: block;
      width: 4rem;
      fill: $color__text;
    }
  }
}
main {
  width: min(10, 120rem);

  #select-area {
    padding-block-start: 8rem;
    .description {
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }
    .select-type {
      width: 50%;
      margin-inline: auto;

      &__toggle {
        margin: 4rem auto 0;
      }
    }
  }
}
#item-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: min(100%, 120rem);
  margin-inline: auto;
  padding: 3.2rem 0 16rem;

  .item {
    width: 100%;
    margin-block-start: 6.4rem;

    @media screen and (min-width: 768px) {
      width: calc(50% - 1.6rem);
    }
    @media screen and (min-width: 1024px) {
      width: calc(25% - 1.6rem);
    }
  }
}
footer {
  position: fixed;
  bottom: 0;
  height: 4vh;
  background: $color__white;

  .copyright {
    display: block;
    text-align: center;
    line-height: 4vh;
    font-size: 1.2rem;
  }
}
</style>
