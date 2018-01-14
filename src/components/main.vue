<template>
  <div>
    Testing
    <br/>
    <button v-on:click="fetchAll">Fetch All</button>
    <button v-on:click="addOne">AddOne</button>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
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
