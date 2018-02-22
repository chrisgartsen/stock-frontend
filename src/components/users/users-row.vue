<template>
  <tr>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.active}}</td>
    <td>{{user.admin}}</td>
    <td>{{user.created_at | dateFormat}}</td>
    <td>{{user.updated_at | dateFormat}}</td>
    <td>
      <button class="button is-outlined is-small is-danger" @click="deleteUser(user.id)">Delete</button>   
    </td>
  </tr>
</template>

<script>
export default {
  name: 'users-row',
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("DELETE_USER", id)
    }
  }
}
</script>
