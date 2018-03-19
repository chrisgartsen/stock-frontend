<template>
  <div>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
    
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title is-2">Register</h2>

        <form v-on:submit.prevent="register" @keyup.enter="register">

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="name" class="label">Name *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input type="text" class="input" :class="{'is-danger': $v.name.$error}" 
                         v-model="name" id="name" @blur="$v.name.$touch()">
                  <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
                </div>
                <div class="control" v-if="$v.name.$error">
                  <span class="help is-danger" v-if="!$v.name.required">Name is required</span>
                  <span class="help is-danger" v-if="!$v.name.minLength">Name should be 8 characters or more</span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field">
                <button class="button is-primary">
                  <span class="icon is-small"><i class="fa fa-user-plus"></i></span>
                  <span>Register</span>
                </button>
              </div>
            </div>
          </div>

          <span class="help">Fields marked with * are required.</span>
        </form>
        <br>
        <p>Already registered? Log in <router-link to="/login" class="page-link is-important">here</router-link>.</p>
      </div>
    </div>

  </div>  
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'registration-page',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    register() {
      this.$v.$touch()
      if(!this.$v.$error) {
        console.log("Registering...")
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(8)
    }
  }

}
</script>

