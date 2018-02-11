<template>
  <div>

    <el-row>
      <el-col :span="22" :offset="2">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ name: 'home' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Items</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <br/>
    <br/>
    <el-row>
      <el-col :span="22" :offset="2">
        <el-table :data="items">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="quantity" label="Quantity"></el-table-column>
          <el-table-column prop="minimum_quantity" label="Minimum Quantity"></el-table-column>
          <el-table-column label="" fixed="right">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" plain>Edit</el-button>
              <el-button type="danger" size="mini" plain>Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br/>
        <el-button type="primary" @click="addItem">Add Item</el-button>
       
        <el-dialog title="Add Item" :visible.sync="formVisible" width="30%">
          <el-form ref="form" :model="item" label-width="120px">
            <el-form-item label="Name">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="hideForm">Cancel</el-button>
            <el-button type="primary" @click="hideForm">Confirm</el-button>
          </span>
        </el-dialog>

      </el-col>
    </el-row>

  </div>
</template>

<script>
import itemsList from './items-list'
import itemForm from './item-form'
import iconButton from '@/components/shared/icon-button'
import groceryList from './grocery-list'

export default {
  name: 'items-page',
  components: {
    itemsList,
    itemForm,
    iconButton,
    groceryList
  },
  data() {
    return {
      formVisible: false,
      item: {
        name: ''
      }
    }
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    isLoading() {
      return this.$store.getters.isLoadingItems
    },
    showForm() {
      return this.$store.getters.showItemForm
    }
  },
  methods: {
    addItem() {
      this.formVisible = true
      //this.$store.dispatch("SHOW_NEW_ITEM_FORM")
    },
    hideForm() {
      this.formVisible = false
      //this.$store.dispatch("HIDE_ITEM_FORM")
    }
  },
  created(){
    this.$store.dispatch("FETCH_ITEMS")
  }
}
</script>
