<template>
  <div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Items</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <h2 class="title is-2">Items</h2>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6 is-offset-2">
        <items-list :items="items" :isLoading="isLoading" />
        <item-form :showForm="showForm" v-on:hideForm="hideForm"></item-form>
        <icon-button label="Add Item" @buttonClick="addItem"/>
      </div>
      <div class="column is-2 is-offset-1">
        <grocery-list/>
      </div>
    </div>
  </div>
</template>

<script>
import itemsList from './items-list'
import itemForm from './item-form'
import iconButton from '@/components/shared/icon-button'
import groceryList from './grocery-list'

export default {
  name: 'items-page',
  components: {
    itemsList,
    itemForm,
    iconButton,
    groceryList
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    isLoading() {
      return this.$store.getters.isLoadingItems
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
