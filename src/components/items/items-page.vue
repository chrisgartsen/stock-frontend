<template>
  <div class="column is-6 is-offset-2">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a>Home</a></li>
        <li class="is-active"><a href="#" aria-current="page">Items</a></li>
      </ul>
    </nav>
    <h2 class="title is-2">Items</h2>
    <items-list :items="items" />
    <button class="button is-primary">
      <span><i class="fa fa-plus"></i></span >
      <span>Add Item</span>
    </button>
  </div>    
</template>

<script>
import itemsList from './items-list'

export default {
  name: 'items-page',
  components: {
    itemsList
  },
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
