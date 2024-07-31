<script>
export  default {
  setup(){
    let {toastInfo} = useWebsiteStore();
    return {toastInfo};
  },
}
</script>
<template>
  <transition name="fade">
  <div class="flex flex-col items-center w-80 top-4 left-4 h-fit bg-gray-900 absolute z-20 rounded transition-all" v-if="toastInfo.showToast">
    <div class="w-full h-fit flex justify-center py-2 bg-gray-800">
      <h3 class="text-xl" :class="toastInfo.toastType > 0 ? 'text-green-600' : 'text-red-600'">შეტყობინება</h3>
    </div>
    <div class="flex gap-2 items-center h-full w-full px-2">
      <div class="icon flex justify-start items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-16" viewBox="0 0 24 24">
          <path fill="green"
                d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-3.3 7.3l-6.8 6.8c-.4.4-1 .4-1.4 0l-3.2-3.2c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.5 2.5l6.1-6.1c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4"/>
        </svg>
      </div>
      <div class="content  flex  items-start  grow w-auto" :class="toastInfo.toastType > 0 ? 'text-green-500' : 'text-red-500'">
        <p class="font-mono">
          {{toastInfo.toastMessage}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sunt totam unde?
        </p>
      </div>
    </div>
  </div>
  </transition>
</template>
<style scoped>
.fade-enter-active{
 animation: fade 0.8s ease-in-out;
}
.fade-leave-active{
  animation:  fade 0.8s ease-in-out reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
