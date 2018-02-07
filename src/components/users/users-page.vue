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
        <div class="modal" :class="{'is-active': showForm}">
          <div class="modal-background" @click="closeForm"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add User</p>
              <button class="delete" @click="closeForm"></button>
            </header>
            <section class="modal-card-body">
              Body
            </section>
            <footer class="modal-card-foot">
              <button class="button is-primary" @click="saveUser">Create</button>
              <button class="button" @click="closeForm">Cancel</button>
            </footer>
          </div>
        </div>
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
    closeForm() {
      this.$store.dispatch("HIDE_USER_FORM")
    },
    saveUser() {
      console.log("SAVING")
    }
  },
  created() {
    this.$store.dispatch("FETCH_USERS")
  }
}
</script>
