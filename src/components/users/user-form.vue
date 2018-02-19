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
                         :validation="$v.user.name"
                         :value="user.name"
                         @changeValue="updateField"/>
        <text-inputfield fieldName="email"
                         :required=true
                         :validation="$v.user.email"
                         :value="user.email"
                         @changeValue="updateField"/>
        <text-inputfield fieldName="password"
                         fieldType="password"
                         :required=true
                         :validation="$v.user.password"
                         :value="user.password"
                         @changeValue="updateField"/>
        <text-inputfield fieldName="password_confirmation"
                         fieldLabel = "Confirm password"
                         fieldType="password"
                         :required=true
                         :validation="$v.user.password_confirmation"
                         :value="user.password_confirmation"
                         @changeValue="updateField"/>
        <checkbox-field fieldName="admin"
                        :value="user.admin"
                        @changeValue="updateField"/>
        <checkbox-field fieldName="active"
                        :value="user.active"
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
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import textInputfield from '@/components/shared/text-inputfield'
import checkboxField from '@/components/shared/checkbox-field'

export default {
  name: 'user-form',
  props: {
    showForm: {
      default: false,
      type: Boolean
    }
  },
  components: {
    textInputfield,
    checkboxField
  },
  data() {
    return {
      user: {
        id: 0,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        admin: false,
        active: false
      }
    }
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(8)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      password_confirmation: {
        sameAs: sameAs('password')
      }
    }
  },
  methods: {
    closeForm() {
      this.user.id = 0
      this.user.name = ''
      this.user.email = ''
      this.user.password = ''
      this.user.password_confirmation = ''
      this.user.active = false
      this.user.admin = false
      this.$v.$reset()
      this.$emit('hideForm')
    },
    updateField(fieldName, newValue) {
      this.user[fieldName] = newValue
    },
    validateInput() {
      this.$v.$touch()
    },
    saveUser() {
      this.validateInput()
      if(!this.$v.$error) {
        console.log("SAVING")
        console.log(this.user)
      }
    }
  }

}
</script>
