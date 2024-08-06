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
    const people = [{
      id: 1,
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      completed: true,
      role: 'Member'
    }, {
      id: 2,
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      completed: false,
      role: 'Admin'
    }, {
      id: 3,
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      completed: true,
      role: 'Member'
    }, {
      id: 4,
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      completed: true,
      role: 'Admin'
    }, {
      id: 5,
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      email: 'leonard.krasner@example.com',
      completed: false,
      role: 'Owner'
    }, {
      id: 6,
      name: 'Floyd Miles',
      title: 'Principal Designer',
      email: 'floyd.miles@example.com',
      completed: false,
      role: 'Member'
    }]
    const selected = ref([people[1]])

    return {people, selected, columns}
  },
  methods: {
    ShowId(e, id) {
      console.log(this.selected)
    },
    OnSortClicked() {
      alert('World');
    }
  }
}
</script>
<template>

  <UTable
      class="w-full"
      v-model="selected"
      :rows="people"
      :columns="columns"
      :sort="OnSortClicked"
      :ui="{
        tr:{selected : 'bg-gray-200',},
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