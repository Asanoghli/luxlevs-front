<script>
export default {
  setup() {
    let currentModel = defineModel();
    return {currentModel}
  },
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    rowsCount: {
      type: Number,
      required: true
    }
  },
}
</script>
<template>
  <UPagination
               :page-count="15"
               :next-button="{class: 'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 '}"
               :prev-button="{class:'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 '}"
               :active-button="{class:'pagination-active-btn', color:'bg-gray-700', size:'md'}"
               :inactive-button="{class:'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300'}"
               :ui="{wrapper:'isolate inline-flex -space-x-px rounded-md shadow-sm'}"
               :model-value="currentModel"
               :total="rowsCount"  />
</template>
<style>
.pagination-wrapper {
  @apply gap-x-1 w-full;
}

.pagination-active-btn {
  @apply relative inline-flex items-center bg-gray-700 px-3 py-2 text-sm font-semibold text-white;

}
.pagination-active-btn:hover{
  @apply hover:bg-gray-700;
}

.pagination-wrapper > .pagination-inactive-btn {
  @apply rounded-md h-8 text-xl text-gray-500;
}
</style>