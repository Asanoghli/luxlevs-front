<template>
  <div class="bg-gray-700 pt-2 px-3  flex items-center justify-between flex-col w-full gap-1 lg:flex-row lg:flex-nowrap lg:py-2 md:flex-row md:flex-wrap xl:justify-between  xl:px-7">
    <div class="flex  gap-2 justify-center items-center w-full lg:order-2 lg:w-full lg:flex-shrink xl:w-full xl:flex-shrink   ">
      <input class=" focus:outline-0 p-3 sm:full box-content text-white bg-gray-900 w-full lg:w-full  rounded" type="text" placeholder="Search">
      <button class="p-3 px-5 h-full flex flex-row items-center justify-center gap-2 bg-blue-600 rounded hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1a4.5 4.5 0 0 1 4.5 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"/></g></svg>
        <span class="text-white hidden sm:inline-block lg:hidden xl:block">Search</span>
      </button>
    </div>
    <div class="flex justify-end w-full lg:order-3 md:order-2  md:w-1/2 lg:w-20 xl:w-1/2 ">
      <button class="flex text-white p-3 bg-blue-600  items-center  font-thin rounded  hover:bg-blue-700  w-full justify-center gap-3 lg:w-full xl:w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>
        <span class="lg:hidden xl:block  w-full">მომხმარებლის დამატება</span>
      </button>
    </div>
    <div class="w-full lg:order-1 md:order-1  sm:w-full  md:w-1/3 lg:flex-shrink xl:shrink">
      <button  class="p-3 px-7 bg-red-600 text-white  rounded disabled:bg-red-900 disabled:cursor-not-allowed enabled:hover:bg-red-700 w-full xl:1/3">DELETE (5)</button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>