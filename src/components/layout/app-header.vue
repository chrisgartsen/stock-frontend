<template>
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="{name: 'items'}" exact>
            <h2 class="title is-2">Stock</h2>
          </router-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item" v-if="!isLoggedIn">
              <a class="button is-primary is-inverted" @click="login">
                <span class="icon">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>Login</span>
              </a>
            </span>
            <span class="navbar-item" v-if="isLoggedIn">
              <a class="button is-primary is-inverted" @click="logout">
                <span class="icon">
                  <i class="fa fa-sign-out"></i>
                </span>
                <span>Logout</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <router-link :to="{name: 'items'}" tag="li" exact><a>Items</a></router-link>
          <router-link :to="{name: 'users'}" tag="li"><a>Users</a></router-link>
        </ul>
      </div>
    </nav>
  </div>

  <login-form :showForm="showForm"/>
</section>
</template>

<script>
import loginForm from '@/components/auth/login-form'
export default {
  name: 'app-header',
  components: {
    loginForm
  },
  computed: {
    showForm() {
      return this.$store.getters.showLoginForm
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    login() {
      this.$store.dispatch('SHOW_LOGIN_FORM')
    },
    logout() {
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>
