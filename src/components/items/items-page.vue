<template>
  <div>
    <h2>Items</h2>
    {{ items }}
  </div>    
</template>

<script>
export default {
  name: 'items-page',

  computed: {
    items() {
      return this.$store.getters.getItems
    }
  },

  created(){
    this.$store.dispatch("FETCH_ITEMS")
  }
}
</script>
