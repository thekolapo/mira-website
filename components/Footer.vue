<template>
  <footer class="footer"></footer>
</template>

<style lang="scss" scoped>
.footer {
  &__header {
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    background-color: $color-purple;
    border-radius: 8rem;
    margin-bottom: 10.2rem;
    padding: 6rem var(--layout-horizontal-padding) 22.4rem;

    &-container {
      max-width: 192rem;
      margin: 0 auto;
    }

    @include screen('small') {
      padding-top: 4rem;
      padding-bottom: 8rem;
      border-radius: 4rem;
      margin-bottom: 4rem;
    }

    h1 {
      color: white;
      margin-bottom: 8rem;

      @include screen('small') {
        margin-bottom: 4.4rem;
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;

    @include screen('med-small') {
      flex-wrap: wrap;
    }

    @include screen('small') {
      font-size: 1.7rem;
    }
  }

  &__links {
    display: flex;
    flex: 1;
    align-content: center;
    text-transform: uppercase;

    @include screen('med') {
      width: 100%;
    }

    @include screen('med-small') {
      margin-bottom: 2.6rem;
    }

    a:not(:last-child) {
      margin-right: 2.4rem;
    }
  }

  &__copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include screen('med-small') {
      width: 100%;

      svg {
        transform: scale(0.7);
      }
    }

    span {
      font-weight: 500;
      color: #828282;
      margin-right: 5.2rem;

      @include screen('med') {
        margin-right: 3rem;
      }
    }
  }
}
</style>
