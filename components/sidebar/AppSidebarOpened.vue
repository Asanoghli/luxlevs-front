<script>
import ChangeLanguageSidebar from "~/components/sidebar/changeLanguageSidebar.vue";

export default {
  components: {ChangeLanguageSidebar},
  setup() {
    let sidebarState = useAppSidebar();
    return {sidebarState}
  }
}
</script>
<template>

<div
    class="flex flex-col items-center w-80 h-full overflow-hidden text-gray-400 bg-gray-900 relative rounded-r ">
<a class="flex items-center w-full px-3 mt-3" href="#">
  <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
        d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
  </svg>
  <span class="ml-2 text-sm font-bold">LUXLEVS.COM</span>
</a>
<div class="w-full px-2 relative">
  <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
    <nuxt-link active-class="active" class="sidebar-item"
               to="/admin/">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.main") }}</span>
    </nuxt-link>
    <nuxt-link active-class="active" class="sidebar-item"
               to="/admin/users">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M15 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 5h2a2 2 0 0 1 2 2v1M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h2"/>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.users") }}</span>
    </nuxt-link>
    <nuxt-link active-class="active" class="sidebar-item"
               to="/admin/roles">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
        <g fill="none">
          <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
          <path fill="currentColor"
                d="m12.702 2.195l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82l7-2.625a2 2 0 0 1 1.404 0M12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693zM12 8a2 2 0 0 1 1.134 3.648l-.134.085V15a1 1 0 0 1-1.993.117L11 15v-3.267A2 2 0 0 1 12 8"/>
        </g>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.roles") }}</span>
    </nuxt-link>
    <nuxt-link active-class="active" class="sidebar-item"
               to="/admin/settings">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.settings") }}</span>
    </nuxt-link>
    <nuxt-link active-class="active" class="sidebar-item"
               to="/admin/contact">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <circle cx="12" cy="10" r="3"/>
          <path
              d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"/>
        </g>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.contact") }}</span>
    </nuxt-link>
  </div>
  <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.pages") }}</span>
    </a>
    <a class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
       href="#">
      <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
      </svg>
      <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.messages") }}</span>
      <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
    </a>
  </div>

</div>
<a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
   href="#">
  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <span class="ml-2 text-sm font-medium">{{ $t("admin.sidebar.account") }}</span>
</a>
<div class="sidebar-bottom">
  <change-language-sidebar/>
  <span class="mr-3" @click="sidebarState.ToggleSidebar">
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
.active {
  @apply text-gray-200 bg-gray-700 rounded;
}

.sidebar-item {
  @apply flex items-center w-full h-12 px-3 mt-2 rounded;
}

.sidebar-item:hover:not(.active) {
  @apply bg-gray-700 text-gray-300
}

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


</style>