<template>
  
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label" :for="fieldName">{{ labelRequired }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input :type="fieldType" 
                 :id="fieldName" 
                 class="input" 
                 :class="{'is-danger': hasError}" 
                 v-model="val" @change="change">
        </div>
        <div class="control" v-if="hasError">
          <span class="help is-danger" v-if="hasErrorFor('required')">{{label}} is required</span>
          <span class="help is-danger" v-if="hasErrorFor('minLength')">{{label}} must at least {{validator.$params.minLength.min }} characters</span>
          <span class="help is-danger" v-if="hasErrorFor('sameAs')">{{label}} must match {{validator.$params.sameAs.eq }}</span>
          <span class="help is-danger" v-if="hasErrorFor('email')">{{label}} must be a valid email</span>
          <span class="help is-danger" v-if="hasErrorFor('unique')">{{label}} is already taken</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import humanize from 'humanize-string'

export default {
  name: 'text-inputfield',
  props: {
    fieldName: {
      type: String,
      required: true
    },
    fieldLabel: {
      type: String,
    },
    fieldType: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    validation: {
      type: Object,
      required: true
    },
  },
  computed: {
    label() {
      return this.fieldLabel || humanize(this.fieldName) 
    },
    labelRequired() {
      return this.required ? this.label + ' *' : this.label
    },
    hasError() {
      return this.validator.$error
    },
  },
  data() {
    return {
      val: this.value,
      validator: this.validation
    }
  },
  methods: {
    change() {
      this.$emit("changeValue", this.fieldName, this.val)
    },
    hasErrorFor(valType) {
      if(this.validator.$params[valType]) {
        return (this.validator.$error && !this.validator[valType])
      } else {   
        return false
      }
    }, 
  },
  watch: {   
    value(newVal) {
      this.val = newVal
    },
    validation(newVal) {
      this.validator = newVal
    }
  }
}
</script>
