<template>
  <div class="app">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/main.scss';

.app {
  padding: 3rem var(--layout-horizontal-padding) 0;
  max-width: 130rem;
  margin: 0 auto;

  @include screen('small') {
    padding-top: 3.2rem;
    padding-bottom: 3.6rem;
  }
}
</style>
