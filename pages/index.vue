<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Home Page
      </h1>
      <h2 class="subtitle">
        Sample todo application to help decide between using React or Vue.js as the frontend framework for future personal projects
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '../assets/css/dimens.scss';

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - #{$navbar--height} - #{$footer--height});
  padding: 16px 0;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
