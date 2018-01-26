<template>
  
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label" :for="fieldName">{{ fieldLabel }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input type="text" 
                 :id="fieldName" 
                 class="input" 
                 :class="{'is-danger': v.$error}" 
                 v-model="val" @change="change">
        </div>
        <div class="control" v-if="v.$error">
          <span class="help is-danger" v-if="!v.required">{{ fieldLabel }} is required</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'text-inputfield',
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
      type: String,
      required: true
    },
    v: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  methods: {
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
