<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label :for="fieldName" class="label">{{ fieldLabel }}</label>
    </div>
    <div class="field-body">
      <div class="field has-addons">
        <div class="control">
          <a class="button is-primary" @click="increment"><i class="fa fa-plus"></i></a>
        </div>
        <div class="control">
          <input type="text" :id="fieldName" class="input is-small-number" v-model="val" @change="change">
        </div>
        <div class="control">
          <a class="button is-primary" @click="decrement"><i class="fa fa-minus"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quantity-inputfield',
  props: {
    fieldName: {
      type: String,
      required: true
    },
    fieldLabel: {
      type: String,
      default: this.fieldName
    },
    value: {
      required: true
    },
  },
  validate: {

  },
  
  data() {
    return {
      val : this.value
    }
  },
  methods: {
    increment() {
      this.$emit("changeValue", this.val+1)
    },
    decrement() {
      this.$emit("changeValue", this.val-1)
    },
    change() {
      this.$emit("changeValue", this.val)
    }
  },
  watch: {
    value(newVal) {
      this.val = newVal
    }
  }
}
</script>
