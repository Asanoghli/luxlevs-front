<script>
export  default {
  setup(){
    let route = useRoute();
    let router = useRouter();
    let currentPage = parseInt(route.query.page);
    console.log(currentPage)
    return {currentPage,router,route}
  },
  props : {
    pageCount : {
      type : Number,
      required : true
    },
    goToPath : {
      type : String,
      required : true
    }
  },
  methods : {
    async GoToPage(e,newPage){
      if(newPage ===1){
        await this.router.push({
          path : this.goToPath
        })
      }
      else{
        await this.router.push({
          query : {page: newPage},
          path : this.goToPath
        })
      }
    }
  },
  computed :{
    getCurrentPage(){
      let currentPageInt =  this.route.query.page === undefined ? 1 :parseInt(this.route.query.page);

      return currentPageInt
    },
    getIsMoreThanEight(){
      return this.pageCount > 10;
    },
    getFirstThreePage(){

    }
  }
}
</script>
<template>
  <UPagination  :active-button="{class:'pagination-active-btn'}" :inactive-button="{class:'pagination-inactive-btn'}" :ui="{wrapper:'pagination-wrapper'}"  :model-value="1" :total="100" show-last show-first />
</template>
<style>
.pagination-wrapper > .pagination-active-btn{
  border-radius: 50%;
}
.pagination-wrapper > .pagination-inactive-btn{
  border-radius: 50% !important;
}
</style>