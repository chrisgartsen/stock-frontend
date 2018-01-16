<template>
  <div class="column is-6 is-offset-2">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a>Home</a></li>
        <li class="is-active"><a href="#" aria-current="page">Items</a></li>
      </ul>
    </nav>
    <h2 class="title is-2">Items</h2>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Minimum Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.minimum_quantity }}</td>
        </tr> 
      </tbody>
    </table>

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
