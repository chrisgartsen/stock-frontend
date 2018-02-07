<template>
  <div class="modal" :class="{'is-active': showForm}">
    <div class="modal-background" @click="closeForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add User</p>
        <button class="delete" @click="closeForm"></button>
      </header>
      <section class="modal-card-body">
        <text-inputfield fieldName="name"
                         fieldLabel = "Name *"
                         :value="user.name"
                         :v="$v.user.name"
                         @changeValue="updateField"/>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="saveUser">Create</button>
        <button class="button" @click="closeForm">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import textInputfield from '@/components/shared/text-inputfield'

export default {
  name: 'user-form',
  props: {
    showForm: {
      default: false,
      type: Boolean
    }
  },
  components: {
    textInputfield
  },
  data() {
    return {
      user: {
        id: 0,
        name: ''
      }
    }
  },
  validations: {
    user: {
      name: {
        required
      }
    }
  },
  methods: {
    closeForm() {
      this.$emit('hideForm')
    },
    updateField(fieldName, newValue) {
      this.user[fieldName] = newValue
    },
    saveUser() {
      console.log("SAVING")
    }
  }

}
</script>
