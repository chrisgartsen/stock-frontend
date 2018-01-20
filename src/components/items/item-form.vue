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
              <label class="label" for="name">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input type="text" id="name" class="input">
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
export default {
  name: 'item-form',
  props: {
    showForm: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    closeForm() {
      this.$emit('hideForm')
    },
    saveItem() {
      this.closeForm()
    }
  }
}
</script>


