<template>
  <div class="modal" :class="{'is-active': showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
        <button class="delete" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">

        <div class="message is-danger" v-if="hasLoginError">
          <div class="message-header">
            <p>Login Failed</p>
          </div>
          <div class="message-body">{{errorMessage}}</div>
        </div>

        <form v-on:submit.prevent="login" @keyup.enter="login">

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="email" class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <input type="text" class="input" v-model="email" id="email">
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="password" class="label">Password</label>
            </div>
            <div class="field-body">
              <div class="field">
                <input type="password" class="input" v-model="password" id="password">
              </div>
            </div>
          </div>

        </form>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="login" :disabled="blockLogin">Login</button>
        <button class="button" @click="closeForm">Cancel</button>
      </footer>
    </div> 
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'login-form',
  props: {
    showForm: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    blockLogin() {
      return this.$store.getters.isLoggingIn
    },
    hasLoginError() {
      return this.$store.getters.hasLoginError
    },
    errorMessage() {
      return this.$store.getters.loginError
    }
  },
  methods: {
    closeForm() {
      this.email = ''
      this.password = ''
      this.$store.dispatch("HIDE_LOGIN_FORM")
    },
    login() {
      this.$store.dispatch("LOGIN", {email: this.email, password: this.password})
        .then((response) => { 
          this.closeForm()
          this.$router.push('/')
        })
    }
  }
}
</script>
