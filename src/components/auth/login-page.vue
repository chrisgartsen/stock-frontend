<template>
  <div>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title is-2">Login</h2>

        <div class="message is-danger" v-if="showLoginError">
          <div class="message-header">
            <p>Login Failed</p>
          </div>
          <div class="message-body">
            <p>{{errorMessage}}</p>
            <p>Please try again.</p>
          </div>
        </div>

        <div class="notification" v-if="blockLogin">
          <p>Login in process. Please wait....</p>
          <p>This could take some time if the backend server is asleep...</p>
          <p>(It's free...so...) </p>
          <loader :loading="true"></loader>
        </div>

        <form v-on:submit.prevent="login" @keyup.enter="login">

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="email" class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control has-icons-left">
                  <input type="text" class="input" v-model="email" id="email">
                  <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="password" class="label">Password</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control has-icons-left">
                  <input type="password" class="input" v-model="password" id="password">
                  <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>                  
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
              <div class="field">
                <button class="button is-primary" :disabled="blockLogin">
                  <span class="icon is-small"><i class="fa fa-sign-in"></i></span>
                  <span>Login</span>
                </button>
                <router-link class="button is-text" to="/recover">Forgot password?</router-link>
              </div>
            </div>
          </div>
        </form>
        <br>
        <p>Not registered yet? Register <router-link to="/register" class="page-link is-important">here</router-link>.</p>
      </div>

    </div>

  </div>  
</template>

<script>
import loader from 'vue-spinner/src/ClipLoader'

export default {
  name: 'login-page',
  components: {
    loader
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
    showLoginError() {
      return this.$store.getters.hasLoginError && !this.$store.getters.isLoggingIn
    },
    errorMessage() {
      return this.$store.getters.loginError
    }
  },
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {email: this.email, password: this.password})
        .then((response) => { 
          this.$router.push('/')
        })
    },
  },
  created() {
    this.$store.dispatch("RESET_LOGIN")
  }
}
</script>
