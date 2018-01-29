<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>
      <a @click="increment(item.id)"><i class="fa fa-plus"></i></a>
      {{ item.quantity }}
      <a @click="decrement(item.id)"><i class="fa fa-minus"></i></a>
    </td>
    <td>{{ item.minimum_quantity }}</td>
    <td>
      <button class="button is-outlined is-small is-danger" @click="deleteItem(item.id)">Delete</button>
      <button class="button is-outlined is-small is-primary" @click="editItem(item.id)">Edit</button>
    </td>
  </tr> 
</template>

<script>
export default {
  name: 'items-row',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    deleteItem(itemId) {
      this.$store.dispatch("DELETE_ITEM", itemId)
    },
    editItem(itemId) {
      this.$store.dispatch("SHOW_EDIT_ITEM_FORM", itemId)
    },
    increment(itemId) {
      let newQuantity = this.item.quantity + 1
      this.$store.dispatch("UPDATE_ITEM", { id: this.item.id, quantity: newQuantity})      
    },
    decrement(itemId) {
      let newQuantity = this.item.quantity - 1
      if(newQuantity >= 0) {
        this.$store.dispatch("UPDATE_ITEM", { id: this.item.id, quantity: newQuantity})
      }
    }
  }
}
</script>
