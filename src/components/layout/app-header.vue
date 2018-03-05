<template>

<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="{name: 'home'}" exact>
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

            <template v-if="!isLoggedIn"> 
              <span class="navbar-item">
                <router-link :to="{name: 'login'}" class="button is-primary is-inverted">                
                  <span class="icon">
                    <i class="fa fa-sign-in"></i>
                  </span>
                  <span>Login</span>
                </router-link>
              </span>      
              <span class="navbar-item">or</span>
              <span class="navbar-item">
                <router-link :to="{name: 'register'}" class="button is-primary is-inverted">                
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>Register</span>
                </router-link>
              </span>      
            </template>

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
          <router-link v-if="isLoggedIn" :to="{name: 'items'}" tag="li" exact><a>Items</a></router-link>
          <router-link v-if="isLoggedIn" :to="{name: 'users'}" tag="li"><a>Users</a></router-link>
          <router-link v-if="!isLoggedIn" to="/login" tag="li"><a>Login</a></router-link>
        </ul>
      </div>
    </nav>
  </div>
</section>

</template>

<script>
export default {
  name: 'app-header',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
      this.$router.push('/')
    }
  }
}
</script>
