# Hamburger Menus

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## License

[The MIT License](https://opensource.org/licenses/MIT).

## Style Guide

<a href="https://jp.vuejs.org/v2/style-guide/index.html">_Vue.js スタイルガイド_</a><br>
<a href="https://pablohpsilva.github.io/vuejs-component-style-guide/#/japanese">_Vue.js コンポーネントガイド_</a>

## CSS(SCSS)

### クラス / ID 命名規則　 BEM を採用　[ Block__Element--Modifier ]

- atoms としての mixin 名は、kebab-case で指定する（末尾：不定形の動詞 or 名詞にする）
- 単語は省略しない "見て理解できる"（× "見て考えたら理解できる" ）を優先させたいため

|          |                        正しい例                        | 補足                                                                                      |
| :------: | :----------------------------------------------------: | :---------------------------------------------------------------------------------------- |
|  Block   |                `menu`<br>`search-form`                 | UI コンポーネントであること・何であるかを示す<br>名詞を使用<br>ケバブケースで単語をつなぐ |
| Element  |          `menu__link`<br>`search-form__input`          | コンポーネントにおいてどのような役割かを示す<br>名詞を使用<br>Block 名\_\_[役割]          |
| Modifier | `menu__link--active`<br>`search-form__input--disabled` | 状態の変化を加えることを示す<br>形容詞を使用<br>Block 名\_\_Element 名--[状態名]          |
