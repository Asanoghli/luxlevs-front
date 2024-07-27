<script>

export default {
  setup() {
    definePageMeta({
      layout: false,
      middleware: [
        'auth-middleware'
      ]
    })
    let userModel = reactive({
      username : '',
      password : ''
    });

    let authStore = useAuthStore();
    let router = useRouter();

    return {authStore, router,userModel}
  },
  methods: {
    async SignIn() {
      console.log('Wowwww')
      let isSignedIn = await this.authStore.Authenticate(this.userModel);
      console.log(isSignedIn)
      if (isSignedIn) {
        console.log('WOrld123 123')
        await this.router.push('/admin/main');
      }
    }
  }

}
</script>
<template>
  <div class="bg-gray-700 h-dvh flex justify-center items-center">
    <div class="flex justify-start items-center lg:h-1/3 bg-gray-400 lg:w-1/4 rounded p-4">
      <form action="" class="flex justify-start w-full flex-col gap-4">
        <div class="flex flex-col  w-full gap-2">
          <label>მომხმარებლის სახელი</label>
          <input v-model="userModel.username" class="focus:outline-0 p-3 rounded bg-gray-900 text-gray-300" type="text" placeholder="Username">
        </div>
        <div class="flex flex-col  w-full gap-3">
          <label>პაროლი</label>
          <input v-model="userModel.password" class="focus:outline-0 p-3 rounded bg-gray-900 text-gray-300" type="text" placeholder="Password">
        </div>
        <button @click.prevent="SignIn" class="w-full bg-blue-600 rounded p-3 text-white text-xl flex justify-center">
          LOGIN
        </button>
      </form>
    </div>
  </div>
</template>