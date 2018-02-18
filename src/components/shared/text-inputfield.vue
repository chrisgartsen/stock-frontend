<template>
  
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label" :for="fieldName">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input type="text" 
                 :id="fieldName" 
                 class="input" 
                 :class="{'is-danger': hasError}" 
                 v-model="val" @change="change">
        </div>
        <div class="control" v-if="hasError">
          <span class="help is-danger">An error occured</span>
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
    value: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    label() {
      let val = this.fieldLabel || humanize(this.fieldName) 
      return this.required ? val + ' *' : val
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
