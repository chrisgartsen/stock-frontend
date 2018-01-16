<template>
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h2 class="title is-2">Stock</h2>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-user"></i>
                </span>
                <span>Login</span>
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
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
export default {
  name: 'app-header'
}
</script>
