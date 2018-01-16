<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Minimum Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" is="items-row" :item="item"></tr> 
    </tbody>
  </table>
</template>

<script>
import itemsRow from './items-row'

export default {
  name: 'items-list',
  components: {
    itemsRow
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>
