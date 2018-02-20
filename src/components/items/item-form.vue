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

        <form v-on:submit.prevent="saveItem" @keyup.enter="saveItem">

          <text-inputfield fieldName="name"
                           :required=true
                           :value="item.name"
                           :validation="$v.item.name"
                           @changeValue="updateField"/>

          <quantity-inputfield fieldName="quantity" 
                               :required=true
                               :value="item.quantity"
                               :v="$v.item.quantity"
                               @changeValue="updateField"/>

          <quantity-inputfield fieldName="minimum_quantity" 
                               :required=true
                               :value="item.minimum_quantity"
                               :v="$v.item.minimum_quantity"
                               @changeValue="updateField"/>

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
        this.$store.dispatch("PROCESS_ITEM", this.item)
        this.closeForm()
      }
    },
    updateField(fieldName,newValue) {
      this.item[fieldName] = newValue
    },
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


