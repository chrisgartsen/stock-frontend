<template>
  <div class="column is-6 is-offset-2">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a>Home</a></li>
        <li class="is-active"><a href="#" aria-current="page">Items</a></li>
      </ul>
    </nav>
    <h2 class="title is-2">Items</h2>
    <items-list :items="items" :isLoading="isLoading" />
    <button class="button is-primary" @click="addItem">
      <span><i class="fa fa-plus"></i></span >
      <span>Add Item</span>
    </button>
    <item-form :showForm="showForm" v-on:hideForm="hideForm"></item-form>
  </div>    
</template>

<script>
import itemsList from './items-list'
import itemForm from './item-form'

export default {
  name: 'items-page',
  components: {
    itemsList,
    itemForm
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    isLoading() {
      return this.$store.getters.isLoading
    },
    showForm() {
      return this.$store.getters.showItemForm
    }
  },
  methods: {
    addItem() {
      this.$store.dispatch("SHOW_NEW_ITEM_FORM")
    },
    hideForm() {
      this.$store.dispatch("HIDE_ITEM_FORM")
    }
  },
  created(){
    this.$store.dispatch("FETCH_ITEMS")
  }
}
</script>
