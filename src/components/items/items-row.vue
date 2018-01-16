<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.quantity }}</td>
    <td>{{ item.minimum_quantity }}</td>
  </tr> 
</template>

<script>
export default {
  name: 'items-row',
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>
