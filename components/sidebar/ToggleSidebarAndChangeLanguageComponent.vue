<script>
export  default {
  setup(){
    const sidebarState = useAppSidebar();
    const {locale,setLocale} = useI18n()
    return {sidebarState,locale}
  }
}
</script>
<template>
  <div class="w-full">
      <div class="sidebar-bottom" v-show="sidebarState.isSidebarOpen">
        <div class="flex gap-4 w-full mx-3">
          <img
              @click="ChangeLanguage('ge')"
              class="size-10 cursor-pointer"
              src="/ge.png"
              alt="ქართული"
              :class="locale === 'ge'? 'active-language' : null "
          >
          <img
              @click="ChangeLanguage('en')"
              class="size-10 cursor-pointer"
              src="/uk.png"
              alt="ქართული"
              :class="locale === 'en'? 'active-language' : null "
          >
        </div>
        <span class="mr-3 flex justify-center items-center" @click="sidebarState.ToggleSidebar">
            <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_in_left [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g
    id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview"
                                                                                   transform="translate(-260.000000, -6479.000000)"
                                                                                   fill="#ffffff"> <g id="icons"
                                                                                                      transform="translate(56.000000, 160.000000)"> <path
    d="M212.271,6328.958 L216.942,6333.906 L218.396,6332.544 L215.968,6330 L224,6330 L224,6328 L215.968,6328 L218.396,6325.408 L216.942,6324.06 L212.271,6328.958 Z M214,6339 L204,6339 L204,6319 L214,6319 L214,6323 L212,6323 L212,6321 L206,6321 L206,6337 L212,6337 L212,6335 L214,6335 L214,6339 Z"
    id="arrow_in_left-[#ffffff]"> </path> </g> </g> </g> </g>

</svg>
        </span>
      </div>
      <div class="sidebar-bottom-hide" v-show="!sidebarState.isSidebarOpen">
        <div class="flex flex-col gap-4 w-full mb-4 mx-3 justify-center items-center">
          <img
              @click="ChangeLanguage('ge')"
              class="size-8 cursor-pointer"
              src="/ge.png"
              alt="ქართული"
              :class="locale === 'ge'? 'active-language' : null "

          >
          <img
              @click="ChangeLanguage('en')"
              class="size-8 cursor-pointer"
              src="/uk.png"
              alt="ქართული"
              :class="locale === 'en'? 'active-language' : null "

          >
        </div>
        <span class="self-end mr-3.5" @click="sidebarState.ToggleSidebar">
            <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_in_left [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g
    id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview"
                                                                                   transform="translate(-260.000000, -6479.000000)"
                                                                                   fill="#ffffff"> <g id="icons"
                                                                                                      transform="translate(56.000000, 160.000000)"> <path
    d="M212.271,6328.958 L216.942,6333.906 L218.396,6332.544 L215.968,6330 L224,6330 L224,6328 L215.968,6328 L218.396,6325.408 L216.942,6324.06 L212.271,6328.958 Z M214,6339 L204,6339 L204,6319 L214,6319 L214,6323 L212,6323 L212,6321 L206,6321 L206,6337 L212,6337 L212,6335 L214,6335 L214,6339 Z"
    id="arrow_in_left-[#ffffff]"> </path> </g> </g> </g> </g>

</svg>
        </span>
      </div>
  </div>
</template>
<style scoped>

.sidebar-bottom {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 5rem;
  width: 100%;
  height: max-content;
}
.sidebar-bottom-hide {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  bottom: 5rem;
  width: 100%;
  height: max-content;
}
</style>
<script setup lang="ts">
</script>