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
          <span class="help is-danger" v-if="hasRequiredError">{{label}} is required</span>
          <span class="help is-danger" v-if="hasMinLengthError">{{label}} should be at least {{validation.$params.minLength.min }} characters</span>
          <span class="help is-danger" v-if="hasConfirmError">{{label}} should be match {{validation.$params.sameAs.eq }}</span>
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
      return this.validation.$error
    },
    hasRequiredError() {
      if(this.validation.$params.required) {
        return (this.validation.$error && !this.validation.required)
      } else {
        return false
      }
    },
    hasMinLengthError() {
      if(this.validation.$params.minLength) {
        return (this.validation.$error && !this.validation.minLength)
      } else {
        return false
      }
    },
    hasConfirmError() {
      if(this.validation.$params.sameAs) {
        return (this.validation.$error && !this.validation.sameAs)
      } else {
        return false
      }
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  methods: {
    change() {
      this.$emit("changeValue", this.fieldName, this.val)
    }
  },
  watch: {
    value(newVal) {
      this.val = newVal
    }
  }
}
</script>
