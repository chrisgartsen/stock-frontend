<template>
    <div>
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
