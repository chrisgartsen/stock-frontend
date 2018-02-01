<template>
  <div>
    {{ users }}
  </div>
</template>

<script>
export default {
  name: 'users-list',
  props: {
    users: {
      required: true,
      type: Array
    },
    isLoading: {
      default: false,
      type: Boolean
    }
  }
}
</script>

