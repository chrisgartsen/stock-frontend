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
        <icon-button label="Add User" @buttonClick="addUser"/>
        <user-form :showForm="showForm"></user-form>
      </div>
    </div>

  </div>
</template>

<script>
import usersList from '@/components/users/users-list'
import userForm from '@/components/users/user-form'
import iconButton from '@/components/shared/icon-button'

export default {
  name: 'users-page',
  components: {
    usersList,
    userForm,
    iconButton
  },
  computed: {
    users() {
      return this.$store.getters.getUsers
    },
    isLoading() {
      return this.$store.getters.isUsersLoading
    },
    showForm() {
      return this.$store.getters.showUserForm
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch("SHOW_NEW_USER_FORM")
    },
  },
  created() {
    this.$store.dispatch("FETCH_USERS")
  }
}
</script>
