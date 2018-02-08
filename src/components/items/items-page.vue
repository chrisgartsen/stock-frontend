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
        <el-button type="primary">Add Item</el-button>

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
      this.$store.dispatch("SHOW_NEW_ITEM_FORM")
    },
    hideForm() {
      this.$store.dispatch("HIDE_ITEM_FORM")
    }
  },
  created(){
    this.$store.dispatch("FETCH_ITEMS")
  }
}
</script>
