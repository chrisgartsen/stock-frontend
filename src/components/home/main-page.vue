<template>
    <div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li class="is-active"><a href="#" aria-current="page">Home</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <dashboard v-if="isLoggedIn"/>
    <landing-page v-if="!isLoggedIn"/>

  </div>
</template>

<script>
import landingPage from '@/components/home/landing-page'
import dashboard from '@/components/home/dashboard-page'

export default {
  name: 'welcome-page',
  components: {
    landingPage,
    dashboard
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
}
</script>
