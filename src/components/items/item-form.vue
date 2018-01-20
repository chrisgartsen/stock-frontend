<template>
  <div class="modal" :class="{'is-active' : showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Item</p>
        <button class="delete" aria-label="close" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">

        <form v-on:submit.prevent="saveItem">

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label" for="name">Name *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input type="text" id="name" class="input" :class="{'is-danger' : $v.name.$error} " v-model="name" @input="$v.name.$touch()">
                </div>
                <div v-if="$v.name.$error" class="help is-danger">
                  <span v-if="!$v.name.required">Name is required</span>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="saveItem">Save changes</button>
        <button class="button" @click="closeForm">Cancel</button>
      </footer>
    </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'item-form',
  props: {
    showForm: {
      required: true,
      type: Boolean
    }
  },
  computed: {


  },
  data() {
    return {
      name: ''
    }
  },
  validations: {
    name: {
      required
    }
  },
  methods: {
    closeForm() {
      this.$v.$reset()
      this.$emit('hideForm')
    },
    saveItem() {
      this.$v.$touch()
      console.log(this.$v)
      if(!this.$v.$error) {
        this.closeForm()
      }
    }
  }
}
</script>


