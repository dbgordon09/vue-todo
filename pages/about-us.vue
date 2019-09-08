<template lang="pug">
div(class="flex flex-col")
  div(v-for="(person, index) in People" :key="index" class="flex w-full align-items p-8")
    div(class="flex-3")
      img(:src="person.image" class="h-16 w-16 rounded-full")
    div(class="flex-1")
      h1 {{ person.name }}
    div(class="flex-1")
      h1 {{ person.description }}
</template>

<script>
import People from '@/data/about-us'

export default {
  data () {
    return {
      People
    }
  }
}
</script>

<style>

</style>
