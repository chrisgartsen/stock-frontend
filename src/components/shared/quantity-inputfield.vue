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
          <input type="text" :id="fieldName" class="input is-small-number" 
                             :class="{'is-danger': v.$error}" 
                             v-model="val" @change="change">
        </div>
        <div class="control">
          <a class="button is-primary" @click="decrement"><i class="fa fa-minus"></i></a>
        </div>
      </div>
    </div>
      <div class="control" v-if="v.$error">
        <span v-if="!v.required" class="help is-danger">{{ fieldLabel }} is required</span>
        <span v-if="!v.numeric" class="help is-danger">{{ fieldLabel }} must be numeric</span>
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
    v: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val : this.value
    }
  },
  methods: {
    increment() {
      this.val = this.val + 1
      this.$emit("changeValue", this.val)
    },
    decrement() {
      if(this.val > 0) {
        this.val = this.val - 1
      }
      this.$emit("changeValue", this.val)
    },
    change() {
      this.v.$touch()
      this.$emit("changeValue", this.val)
    }
  },
  watch: {
    value(newVal) {
      this.v.$touch()
      this.val = newVal
    }
  }
}
</script>
