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

          <text-inputfield fieldName="name"
                           fieldLabel = "Name *"
                           :value="name"
                           :v="$v.name"
                           @changeValue="updateName"/>

          <quantity-inputfield fieldName="quantity" 
                               fieldLabel="Quantity *" 
                               :value="quantity"
                               :v="$v.quantity"
                               @changeValue="updateQuantity"/>

          <quantity-inputfield fieldName="minimumQuantity" 
                               fieldLabel="Minimum Quantity *" 
                               :value="minimum_quantity"
                               :v="$v.minimum_quantity"
                               @changeValue="updateMinimumQuantity"/>

          <span class="help">Fields marked with * are required.</span>
        
        </form>

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

import quantityInputfield from './quantity-inputfield'
import textInputfield from './text-inputfield'

export default {
  name: 'item-form',
  props: {
    showForm: {
      required: true,
      type: Boolean
    }
  },
  components: {
    quantityInputfield,
    textInputfield
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
      if(!this.$v.$error) {
        this.$store.dispatch('CREATE_ITEM', {name: this.name, quantity: this.quantity, minimum_quantity: this.minimum_quantity})
        this.closeForm()
      }
    },
    updateQuantity(newValue) {
      this.quantity = newValue
    },
    updateMinimumQuantity(newValue) {
      this.minimum_quantity = newValue
    },
    updateName(newValue) {
      this.name = newValue
    }
  }
}
</script>


