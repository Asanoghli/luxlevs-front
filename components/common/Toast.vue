<script>
export default {
  setup() {
    let {toastInfo} = useWebsiteStore();
    return {toastInfo};
  },
}
</script>
<template>
  <transition name="fade">
    <div class="flex flex-col items-center w-96 top-4 left-4 h-fit bg-gray-900 absolute z-20 rounded transition-all"
         v-if="toastInfo.showToast">
      <div class="w-full h-fit flex justify-center py-2 bg-gray-800">
        <h3 class="text-xl" :class="toastInfo.toastType > 0 ? 'text-green-600' : 'text-red-500'">{{ $t('general.notification') }}</h3>
      </div>
      <div class="flex gap-2 items-center h-full w-full px-2 py-3">
        <div class="icon flex justify-start items-center">
          <svg v-if="toastInfo.toastType >0" xmlns="http://www.w3.org/2000/svg" class="size-16" viewBox="0 0 24 24">
            <path fill="green"
                  d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-3.3 7.3l-6.8 6.8c-.4.4-1 .4-1.4 0l-3.2-3.2c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.5 2.5l6.1-6.1c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-16" viewBox="0 0 2048 2048">
            <path fill="red"
                  d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m113 1024l342-342l-113-113l-342 342l-342-342l-113 113l342 342l-342 342l113 113l342-342l342 342l113-113z"/>
          </svg>
        </div>
        <div class="content  flex  items-start  grow w-auto"
             :class="toastInfo.toastType > 0 ? 'text-green-500' : 'text-red-500'">
          <p class="font-mono">
            {{ toastInfo.toastMessage }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.fade-enter-active {
  animation: fade 1s ease-in-out;
}

.fade-leave-active {
  animation: fade 2.9s ease-in-out reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
