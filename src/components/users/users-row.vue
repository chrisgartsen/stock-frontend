<template>
  <tr>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.active}}</td>
    <td>{{user.admin}}</td>
    <td>{{user.created_at | dateFormat}}</td>
    <td>{{user.updated_at | dateFormat}}</td>
    <td></td>
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
  }
}
</script>
