<template>
  <div class="modal" :class="{'is-active' : showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p v-if="isEditMode" class="modal-card-title">Edit Item</p>
        <p v-else class="modal-card-title">Add Item</p>
        <button class="delete" aria-label="close" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">

        <form v-on:submit.prevent="saveItem">

          <text-inputfield fieldName="name"
                           fieldLabel = "Name *"
                           :value="item.name"
                           :v="$v.item.name"
                           @changeValue="updateName"/>

          <quantity-inputfield fieldName="quantity" 
                               fieldLabel="Quantity *" 
                               :value="item.quantity"
                               :v="$v.item.quantity"
                               @changeValue="updateQuantity"/>

          <quantity-inputfield fieldName="minimumQuantity" 
                               fieldLabel="Minimum Quantity *" 
                               :value="item.minimum_quantity"
                               :v="$v.item.minimum_quantity"
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

import quantityInputfield from '@/components/shared/quantity-inputfield'
import textInputfield from '@/components/shared/text-inputfield'

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
  computed: {
    isEditMode() {
      return this.$store.getters.isEditItemMode
    }
  },
  data() {
    return {
      item: {
        id: 0,
        name: '',
        quantity: 0,
        minimum_quantity: 0
      },
    }
  },
  validations: {
    item: {
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
    }
  },
  methods: {
    closeForm() {
      this.item.id = 0
      this.item.name = ''
      this.item.quantity = 0
      this.item.minimum_quantity = 0
      this.$v.$reset()
      this.$emit('hideForm')
    },
    saveItem() {
      this.$v.$touch()
      if(!this.$v.$error) {
        if(this.$store.getters.isEditMode) {
          this.$store.dispatch('UPDATE_ITEM', {
            id: this.item.id,
            name: this.item.name, 
            quantity: this.item.quantity, 
            minimum_quantity: this.item.minimum_quantity
          })
        } else {
          this.$store.dispatch('CREATE_ITEM', {
            name: this.item.name, 
            quantity: this.item.quantity, 
            minimum_quantity: this.item.minimum_quantity
          })
        }  
        this.closeForm()
      }
    },
    updateQuantity(newValue) {
      this.item.quantity = newValue
    },
    updateMinimumQuantity(newValue) {
      this.item.minimum_quantity = newValue
    },
    updateName(newValue) {
      this.item.name = newValue
    }
  },
  watch: {
    isEditMode() {
      if(this.$store.getters.isEditItemMode) {
        this.item = this.$store.getters.getItem
      }
    }
  }
}
</script>


