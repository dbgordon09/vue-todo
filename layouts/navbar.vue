<template>
  <header class="navbar">
    <nav class="flex h-full">
      <nuxt-link to="/" class="navbar__home h-full pr-4">
        <img class="navbar__logo h-full float-left" src="../assets/VueJS-small-logo.png" alt="navbar_logo">
        <h4 class="navbar__title h-full float-right hidden sm:block">
          Vue ToDo
        </h4>
      </nuxt-link>
      <div v-for="(link, index) in links" :key="index" class="h-full table">
        <nuxt-link :to="link.url" class="navbar__links h-full table-cell align-middle">
          {{ link.title }}
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links
    }
  }
}

class Link {
  constructor (title, url) {
    this.title = title
    this.url = url
  }
}
const links = [
  new Link('Home', '/'),
  new Link('ToDo', '/todo'),
  new Link('About Us', '/about-us')
]
</script>

<style scoped>
.navbar {
  background-color: #3b8070;
  box-shadow: 0 0 4px 4px #f5f5f5;
  height: 64px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
.navbar__home:hover {
  background-color: rgba(255, 255, 255, 0.075);
  transition: text-shadow 0.15s ease-in;
  transition: transform 0.15s ease-in;
  transform: scale(1.05);
}
.navbar__logo {
  padding: 8px 0 8px 16px;
}
.navbar__title {
  color: #35495e;
  letter-spacing: 4px;
  line-height: 64px;
}
.navbar__links {
  color: white;
  font-size: 1.05rem;
  letter-spacing: 0.25rem;
  padding: 0 8px;
  text-decoration: none;
}
.navbar__links:hover {
  background-color: rgba(255, 255, 255, 0.075);
  text-shadow: 1px 2px 2px #35495e;
  transition: text-shadow 0.15s ease-in;
  transform: scale(1.05);
  transition: transform 0.15s ease-in;
}
</style>
