<template>
  <button class="button is-primary" @click="buttonClick">
    <span><i class="fa fa-plus"></i></span >
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'icon-button',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick")
    }
  }
}
</script>
