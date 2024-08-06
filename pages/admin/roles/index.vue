<script>

export default {
  setup() {
    definePageMeta({
      layout: 'admin-layout',
      middleware: [
        'auth-middleware'
      ]
    })
    const columns = [{
      key: 'id',
      label: 'ID',
      sortable: true,
    },
      {
        key: 'name',
        label: 'Name',
        sortable: true,
      },
      {
        key: 'title',
        label: 'Title',
        sortable: false,
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
      },
      {
        key: 'completed',
        label: 'Is Completed',
        sortable: true,
      },
    ]
    const people = [
        {
      id: 1,
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      completed: true,
      role: 'Member'
    },
      {
      id: 2,
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      completed: false,
      role: 'Admin'
    },
      {
      id: 3,
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      completed: true,
      role: 'Member'
    },
      {
      id: 4,
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      completed: true,
      role: 'Admin'
    },
      {
      id: 5,
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      email: 'leonard.krasner@example.com',
      completed: false,
      role: 'Owner'
    },
      {
      id: 6,
      name: 'Floyd Miles',
      title: 'Principal Designer',
      email: 'floyd.miles@example.com',
      completed: false,
      role: 'Member'
    }]
    const selected = ref([people[1]])
    const sort = ref({
    column : 'name',
      direction: 'asc'
    })

    return {people, selected, columns,sort}
  },
  methods: {
    ShowId(e, id) {
      console.log(this.selected)
    },
    OnSortClicked() {
      alert('World');
    },
    IsRowClicked(row){
      let existedIndexId = this.selected.findIndex(item=>item.id === row.id)
      if(existedIndexId >= 0) this.selected.splice(existedIndexId, 1)
      else this.selected.push(row)
    }
  },
  watch : {
    sort : function (to,from){
      console.log(to)
    }
  }
}
</script>
<template>

  <UTable
      class="w-full"
      v-model="selected"
      :rows="people"
      @select="IsRowClicked"
      sort-mode="manual"
      v-model:sort="sort"
      :columns="columns"
      :ui="{
        tr:{selected : 'bg-green-200 hover:bg-green-200', base:'hover:bg-green-200' ,},
       default : {
        checkbox : {
            ui:{
              base:'size-6 checked:bg-gray-950 text-gray-950',
              color:'gray',
            },
            }
        }
      }"

  >
    <template #cell-checkbox="{row}">
      <input type="checkbox">
    </template>

    <template #completed-data="{row}">
      <UBadge size="md" :label="row.completed ? 'Completed' : 'In Progress'"
              :color="row.completed ? 'emerald' : 'orange'"/>
    </template>
    <template #title-data="{row}">
      <UBadge @click="ShowId($event,row.id)">{{ row.title }}</UBadge>
    </template>

  </UTable>
</template>
<style>

</style>