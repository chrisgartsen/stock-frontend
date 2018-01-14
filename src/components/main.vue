<template>
  <div>
    Testing
    <br/>
    <button class="button is-primary" v-on:click="fetchAll">Fetch All</button>
    <br/>
    <br/>
    <button class="button" v-on:click="addOne">AddOne</button>
    <br/>
    <br/>
    {{ name }}
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  computed: {
    name() {
      return this.$store.getters.getName
    }
  },
  methods: {
    fetchAll: function () {
      console.log("Getting all items")
      Axios.get("http://localhost:3000/items")
        .then((response) => {
          console.log(response.data)
        })
    },
    addOne() {
      console.log("Adding item")
      Axios.post("http://localhost:3000/items", {name: 'Oww', quantity: 1, minimum_quantity: 3})
    }
  }
}
</script>
