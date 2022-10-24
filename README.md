# Vue3 Line-clamp

A simple, fast and lightweight vue 3 directive for truncating multi line texts.

> **Note**  
> This is an adaptation of [vue-line-clamp](https://github.com/Frondor/vue-line-clamp) for Vue.js v3

## Install

```bash
$ npm i --save-dev vue3-line-clamp
#  or
$ yarn add -D vue3-line-clamp
```

## Usage

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import v3lc from "vue3-line-clamp";

const app = createApp(App);

app.use(v3lc, {
  // options
});
app.mount("#app");
```

Add directive to template:

```html
<template>
  <p v-line-clamp="$">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptatum
    quibusdam provident eum ipsa omnis harum repellendus dignissimos dicta ad
    illo, aliquam rerum natus eos laudantium dolorum et itaque saepe?
  </p>
</template>
```

Where `$` is a number indicating the maximum number of lines in the text.

## Options

| Property     | Type    | Default      | Description                                                                                                   |
| ------------ | ------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| useClass     | Boolean | false        | Set to true in order to import styles into `<head>` automatically, element.style is used by default.          |
| textOverflow | String  | ''           | Set the value for [`text-overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) property. |
| wordBreak    | String  | 'break-word' | Set the value for [`word-break`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break) property.       |
| useImportant | Boolean | false        | Set value as important. Allows you to override some values of libraries and ui-frameworks.                    |

View an [example](./src/main.js#L7) of using options.

## License

vue3-line-clamp is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
