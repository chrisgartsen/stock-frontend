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
                         :required=true
                         :hasError="$v.user.name.$error"
                         :value="user.name"
                         @changeValue="updateField"/>
        <text-inputfield fieldName="password"
                         type="password"
                         :required=true
                         :hasError="$v.user.password.$error"
                         :value="user.password"
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
        name: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    closeForm() {
      this.user.id = 0
      this.user.name = ''
      this.user.password = ''
      this.$v.$reset()
      this.$emit('hideForm')
    },
    updateField(fieldName, newValue) {
      this.user[fieldName] = newValue
    },
    saveUser() {
      console.log("SAVING")
      this.$v.$touch()
      console.log(this.$v)
    }
  }

}
</script>
