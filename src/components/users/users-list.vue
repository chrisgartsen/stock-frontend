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
        <tr v-for="user in users" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.active}}</td>
          <td>{{user.admin}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import loader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'users-list',
  components: {
    loader
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

