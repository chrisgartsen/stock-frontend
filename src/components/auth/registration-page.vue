<template>
  <div>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
    
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h2 class="title is-2">Register</h2>

        <construction/>

      </div>
    </div>

  </div>  
</template>

<script>
import construction from '@/components/shared/construction-page'

export default {
  name: 'registration-page',
  components: {
    construction
  }
}
</script>
