<template>
  <div class="field is-horizontal">
    <div class="field-label">
    </div>
    <div class="field-body">
        <div class="field">
          <div class="pretty p-default p-curve p-smooth">
            <input type="checkbox" v-model='val' @change="change"/>
            <div class="state p-primary-o">
              <label>{{ label }}</label>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import humanize from 'humanize-string'

export default {
  name: 'checkbox-field',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    },
    fieldLabel: {
      type: String,
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  computed: {
    label() {
      return this.fieldLabel || humanize(this.fieldName) 
    }
  },
  methods: {
    change() {
      this.$emit("changeValue", this.fieldName, this.val)
    },
  },
  watch: {
    value(newVal) {
      this.val = newVal
    }
  }
}
</script>
