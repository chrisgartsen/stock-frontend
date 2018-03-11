<template>
 
<article class="landingpage">
  <div class="columns">
    <div class="column is-8 is-offset-2">
        <h2 class="title is-2">Welcome to Stock!</h2>
    </div>
  </div>
  
  <div class="columns">
    <div class="column is-6 is-offset-3">
        <p>Stock is a showcase website built with <a href="http://vuejs.org">Vue.js</a>.</p>
        <p>It contains functionality you would normally see on a website, in an attempt to translate the examples from your tutorial or blog to real life (working) code.</p>  
        <p>Have a look on the <router-link to="/about">about page</router-link> to see what techniques are used.</p>
        <br>
        <p>--this is a landing page--</p>
        <p>(every website needs a landing page nowadays to lure unexpected customers)</p>
    </div>
  </div>

  <div class="columns">
    <div class="column is-2 is-offset-3">
      <div class="card">
        <div class="card-content">
          <p class="title">Manage items</p>
          <p><i class="fa fa-list fa-5x"></i></p>
          <p>Manage your inventories, create grocery lists and receive warnings when your stock is low.</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span><a href="#">Learn more...</a></span>
          </p>
        </footer>
      </div>
    </div>

    <div class="column is-2">
      <div class="card">
        <div class="card-content">
          <p class="title">Export your lists</p>
          <p> <i class="fa fa-cloud-upload fa-5x"></i></p>
          <p>Export your inventory to the cloud. Whatever that may mean.</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span><a href="#">Learn more...</a></span>
          </p>
        </footer>
      </div>
    </div>

    <div class="column is-2">
      <div class="card">
        <div class="card-content">
          <p class="title">Mobile device</p>
          <p><i class="fa fa-mobile fa-5x"></i></p>
          <p>Works on your mobile too. It's supposed to be response.</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span><a href="#">Learn more...</a></span>
          </p>
        </footer>
      </div>
    </div>

  </div>

</article>
</template>

<script>
export default {
  name: 'landing-page'
}
</script>
