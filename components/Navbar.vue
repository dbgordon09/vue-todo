<template>
  <header class="navbar">
    <nav class="navbar__nav">
      <img class="navbar__logo" src="../assets/VueJS-small-logo.png" alt="navbar_logo">
      <h4 style="letter-spacing: 0">
        Vue ToDo
      </h4>
      <a v-for="(link, index) in links" :key="index" :href="link.url">{{ link.title }}</a>
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
    position: fixed;
    top: 0;
    left: 0;
    height: 64px;
    padding: 8px;
    width: 100%;
    background-color: #3B8070;
    box-shadow: 0 0 4px 4px #F5F5F5;
  }
  .navbar__nav{
    display: flex;
    height: 100%;
    align-items: center;
  }
  .navbar__logo{
    height: 100%;
    width: auto;
    padding-left: 16px;
  }
  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    padding: 0 8px;
  }
  .navbar a:hover {
    transform: translateY(-1px);
    text-shadow: 1px 2px gray;
  }
</style>
