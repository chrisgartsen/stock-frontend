<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.quantity }}</td>
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
    }
  }
}
</script>
