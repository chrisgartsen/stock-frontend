<template>
  <div>
    <loader :loading="isLoading"></loader>
    <table v-if="!isLoading" class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Admin</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th></th>
        </tr>    
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" is="users-row" :user="user"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import loader from 'vue-spinner/src/ClipLoader'
import usersRow from './users-row'

export default {
  name: 'users-list',
  components: {
    loader,
    usersRow
  },
  props: {
    users: {
      required: true,
      type: Array
    },
    isLoading: {
      default: false,
      type: Boolean
    }
  },
}
</script>

