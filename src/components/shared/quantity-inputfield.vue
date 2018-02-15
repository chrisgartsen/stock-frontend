<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label :for="fieldName" class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field has-addons">
        <div class="control">
          <a class="button is-primary is-outlined" @click="increment"><i class="fa fa-plus"></i></a>
        </div>
        <div class="control"> 
          <input type="text" :id="fieldName" class="input is-small-number" 
                             :class="{'is-danger': v.$error}" 
                             v-model="val" @change="change">
        </div>
        <div class="control">
          <a class="button is-primary is-outlined" @click="decrement"><i class="fa fa-minus"></i></a>
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
import humanize from 'humanize-string'

export default {
  name: 'quantity-inputfield',
  props: {
    fieldName: {
      type: String,
      required: true
    },
    fieldLabel: {
      type: String
    },
    value: {
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    label() {
      let val = this.fieldLabel || humanize(this.fieldName)
      return this.isRequired ? val : val + ' *'
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
      this.$emit("changeValue", this.fieldName, this.val)
    },
    decrement() {
      if(this.val > 0) {
        this.val = this.val - 1
      }
      this.$emit("changeValue", this.fieldName, this.val)
    },
    change() {
      this.v.$touch()
      this.$emit("changeValue", this.fieldName, this.val)
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
