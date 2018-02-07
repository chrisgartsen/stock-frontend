<template>
  <div class="modal" :class="{'is-active': showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add User</p>
        <button class="delete" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">
        Body
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="saveUser">Create</button>
        <button class="button" @click="closeForm">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    showForm: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    closeForm() {
      this.$emit('hideForm')
    }
  }

}
</script>
