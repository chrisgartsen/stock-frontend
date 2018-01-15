<template>
  <div id="app">
    <app-header/>
    <app-content/>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from '@/components/layout/app-header'
import appContent from '@/components/layout/app-content'
import appFooter from '@/components/layout/app-footer'

export default {
  name: 'App',
  components: {
    appHeader,
    appContent,
    appFooter
  }
}
</script>

