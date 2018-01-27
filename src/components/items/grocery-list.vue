<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Grocery List</p>
    </header>
    <div class="card-content">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
  </div>
  <footer class="card-footer">
    <div class="buttons has-addons is-right card-footer-item">
      <span class="button is-small is-danger" :class="{'is-outlined': !this.showMissing}" @click="toggleMissing">Missing</span>
      <span class="button is-small is-warning" :class="{'is-outlined': !this.showLow}" @click="toggleLow">Low</span>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'grocery-list',
  computed: {
    items() {
      if(this.showMissing && this.showLow) {
        return this.$store.getters.getItemsMissingAndLow
      }
      if(this.showMissing) {
        return this.$store.getters.getItemsMissing
      }
      if(this.showLow) {
        return this.$store.getters.getItemsLow
      }
      return [{name: 'No Items selected'}]
    }
  },
  data() {
    return {
      showMissing: true,
      showLow: true
    }
  },
  methods: {
    toggleMissing() {
      this.showMissing = !this.showMissing
    },
    toggleLow() {
      this.showLow = !this.showLow
    }
  }
}
</script>
