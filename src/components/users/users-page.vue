<template>
  <div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link :to="{name: 'items'}">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Users</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <h2 class="title is-2">Users</h2>
      </div>
    </div>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <users-list :users="users" :isLoading="isLoading"/>
      </div>
    </div>

  </div>
</template>

<script>
import usersList from '@/components/users/users-list'


export default {
  name: 'users-page',
  components: {
    usersList
  },
  computed: {
    users() {
      return this.$store.getters.getUsers
    },
    isLoading() {
      return this.$store.getters.isUsersLoading
    }
  },
  created() {
    this.$store.dispatch("FETCH_USERS")
  }
}
</script>
