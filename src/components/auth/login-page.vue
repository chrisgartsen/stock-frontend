<template>
  <div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Login required</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4 is-offset-4">

        <article class="message is-danger">
          <div class="message-header">
            <p>Restricted area</p>
          </div>
          <div class="message-body">
             You have reached a restricted area of the site. <br>
             Please <a v-on:click.prevent="login" class="has-text-weight-semibold">login</a> 
             to continue or <router-link to="/" class="has-text-weight-semibold">go back</router-link>. 
          </div>
        </article>

      </div>
    </div>

  </div> 
</template>

<script>
import loginForm from './login-form'

export default {
  name: 'login-page',
  components: {
    loginForm
  },
  methods: {
    login() {
      this.$store.dispatch('SHOW_LOGIN_FORM')
    }
  }

}
</script>
