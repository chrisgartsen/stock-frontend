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
            <div class="field-label">
              <label for="email" class="label">Email *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input type="text" class="input" :class="{'is-danger': $v.email.$error}" 
                         v-model.lazy="email" id="email" @blur="$v.email.$touch()">
                  <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                </div>
                <div class="control" v-if="$v.email.$error">
                  <span class="help is-danger" v-if="!$v.email.required">Email is required</span>
                  <span class="help is-danger" v-if="!$v.email.email">Email must be a valid email format</span>
                  <span class="help is-danger" v-if="!$v.email.unique">Email is already taken</span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="password" class="label">Password *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input type="password" class="input" :class="{'is-danger': $v.password.$error}" 
                         v-model="password" id="password" @blur="$v.password.$touch()">
                  <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>
                </div>
                <div class="control" v-if="$v.password.$error">
                  <span class="help is-danger" v-if="!$v.password.required">Password is required</span>
                  <span class="help is-danger" v-if="!$v.password.minLength">Password should be 6 characters or more</span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label for="password_confirmation" class="label">Confirm password *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input type="password" class="input" :class="{'is-danger': $v.password_confirmation.$error}" 
                         v-model="password_confirmation" id="password_confirmation" @blur="$v.password_confirmation.$touch()">
                  <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>
                </div>
                <div class="control" v-if="$v.password_confirmation.$error">
                  <span class="help is-danger" v-if="!$v.password_confirmation.required">Confirmation is required</span>
                  <span class="help is-danger" v-if="!$v.password_confirmation.sameAs">Confirmation must match password</span>
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
import Axios from 'axios'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import uniqueEmail from '@/validators/unique-email'

export default {
  name: 'registration-page',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
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
    },
    email: {
      required,
      email,
      unique: uniqueEmail
    },
    password: {
      required,
      minLength: minLength(6)
    },
    password_confirmation: {
      required,
      sameAs: sameAs('password')
    }
  }

}
</script>

