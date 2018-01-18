<template>
  <div>
    <loader :loading="isLoading"></loader>
    <table v-if="!isLoading" class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Minimum Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" is="items-row" :item="item"></tr> 
      </tbody>
    </table>
  </div>
</template>

<script>
import itemsRow from './items-row'
import loader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'items-list',
  components: {
    itemsRow,
    loader
  },
  props: {
    items: {
      required: true,
      type: Array
    },
    isLoading: {
      required: true,
      type: Boolean
    }
  }
}
</script>
