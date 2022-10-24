<template>
  <div class="list">
    <div v-for="(item, index) in 8" :key="item" v-line-clamp="1 + index">
      A simple, fast and lightweight vue 3 directive for truncating multi line texts.
      Sequi doloribus ab rem nisi, voluptate praesentium dolores mollitia. Fuga
      tenetur molestias aperiam repudiandae deleniti, a obcaecati eaque quasi
      ipsa itaque? Sit. Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Sequi assumenda distinctio error? Tenetur, quam soluta odio quae
      consequatur vitae iure possimus? Delectus a, assumenda tempora facere
      obcaecati aliquam dicta repellendus!
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.list {
  margin: 4rem auto;
  max-width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-gap: 3rem;
}
</style>
