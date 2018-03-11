<template>
  <article>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">About</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3 is-offset-3">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Front end</p>
          </header>
          <div class="card-content">
            <ul>
              <li>Vue (v</li>

            </ul>
          </div>
        </div>
      </div>  
      <div class="column is-3">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Back end</p>
          </header>
          <div class="card-content">
            <p>Manage your inventories, create grocery lists and receive warnings when your stock is low.</p>
          </div>
        </div>
      </div>  

    </div>


  </article>
</template>

<script>
export default {
  name: 'about-page'
}
</script>
