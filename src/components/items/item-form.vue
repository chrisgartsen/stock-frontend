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
                  <input type="text" id="name" class="input" :class="{'is-danger': $v.name.$error}" v-model="name" @input="$v.name.$touch()">
                </div>
                <div v-if="$v.name.$error" class="help is-danger">
                  <span v-if="!$v.name.required">Name is required</span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="quantity" class="label">Quantity *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input type="text" id="quantity" class="input is-small-width" :class="{'is-danger': $v.quantity.$error}" v-model="quantity" @input="$v.quantity.$touch()">
                </div>
                <ul v-if="$v.quantity.$error" class="help is-danger">
                  <li v-if="!$v.quantity.required">Quantity is required</li>
                  <li v-if="!$v.quantity.numeric">Quantity is must be a number</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="minimum_quantity" class="label">Minimum quantity *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input type="text" id="minimum_quantity" class="input is-small-width" :class="{'is-danger': $v.minimum_quantity.$error}" v-model="minimum_quantity" @input="$v.minimum_quantity.$touch()">
                </div>
                <ul v-if="$v.minimum_quantity.$error" class="help is-danger">
                  <li v-if="!$v.minimum_quantity.required">Minimum quantity is required</li>
                  <li v-if="!$v.minimum_quantity.numeric">Minimum quantity is must be a number</li>
                </ul>
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
import { required, numeric } from 'vuelidate/lib/validators'

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
      name: '',
      quantity: 0,
      minimum_quantity: 0
    }
  },
  validations: {
    name: {
      required
    },
    quantity: {
      required,
      numeric
    },
    minimum_quantity: {
      required,
      numeric
    }
  },
  methods: {
    closeForm() {
      this.name = ''
      this.quantity = 0
      this.minimum_quantity = 0
      this.$v.$reset()
      this.$emit('hideForm')
    },
    saveItem() {
      this.$v.$touch()
      console.log(this.$v)
      if(!this.$v.$error) {
        this.$store.dispatch('CREATE_ITEM', {name: this.name, quantity: this.quantity, minimum_quantity: this.minimum_quantity})
        this.closeForm()
      }
    }
  }
}
</script>


