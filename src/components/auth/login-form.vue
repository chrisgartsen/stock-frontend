<template>
  <div class="modal" :class="{'is-active': showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
        <button class="delete" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="login">Login</button>
        <button class="button" @click="closeForm">Cancel</button>
      </footer>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    showForm: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    closeForm() {
      this.$store.dispatch("HIDE_LOGIN_FORM")
    },
    login() {
      console.log("Loggin in")
    }
  }
}
</script>
