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
  methods: {
    async GoToPage(e, newPage) {
      if (newPage === 1) {
        await this.router.push({
          path: this.goToPath
        })
      } else {
        await this.router.push({
          query: {page: newPage},
          path: this.goToPath
        })
      }
    }
  },
}
</script>
<template>
  <UPagination page-count="3" :active-button="{class:'pagination-active-btn'}" :inactive-button="{class:'pagination-inactive-btn'}"
               :ui="{wrapper:'pagination-wrapper'}" :model-value="currentModel" :total="rowsCount"  />
</template>
<style>
.pagination-wrapper {
  @apply gap-x-1 w-full;
}

.pagination-wrapper > .pagination-active-btn {
  @apply rounded-md h-8 text-xl text-gray-300 bg-gray-700;
}

.pagination-wrapper > .pagination-inactive-btn {
  @apply rounded-md h-8 text-xl text-gray-500;
}
</style>