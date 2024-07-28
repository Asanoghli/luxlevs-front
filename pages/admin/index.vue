<script>

import {required, helpers} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {SidebarConstants} from "~/constants/SessionConstants.js";

export default {
  setup() {
    definePageMeta({
      layout: false,
      middleware: [
        'auth-middleware'
      ]
    })
    let userModel = reactive({
      username: '',
      password: ''
    });
    let rules = {
      username: {required},
      password: {required}
    }
    let v = useVuelidate(rules, userModel);
    let authStore = useAuthStore();
    let router = useRouter();
    let isPasswordInvalid = ref(false);
    let {locale,setLocale}  = useI18n();

    return {authStore, router, userModel, v,isPasswordInvalid,setLocale}
  },
  methods: {
    async SignIn() {
      if(this.v.$invalid){
      this.v.$validate();
      return;
      }

      let isSignedIn = await this.authStore.Authenticate(this.userModel);
      console.log(isSignedIn)
      if (isSignedIn) {
        this.isPasswordInvalid = false;
        await this.router.push('/admin/main');
      } else {
        this.isPasswordInvalid = true;
      }
    },
    ChangeLanguage(lang){
      this.setLocale(lang);
      useCreatePersistenceCookie(SidebarConstants.GET_UI_LANGUAGE,lang);
    }
  },
  computed : {
    GetInvalidClassesIfDirtyAndInvalidUsername(){
      return !this.v.username.$error && this.v.username.$dirty ? 'border-green-500 border' : null;
    },
    GetValidClassesIfDirtyAndValidUsername(){
    return this.v.username.$error && this.v.username.$dirty ? 'border-red-500 border' : null;
    },
    GetInvalidClassesIfDirtyAndInvalidPassword(){
      return !this.v.password.$error && this.v.password.$dirty ? 'border-green-500 border' : null;
    },
    GetValidClassesIfDirtyAndValidPassword(){
      return this.v.password.$error && this.v.password.$dirty ? 'border-red-500 border' : null;
    }
  }

}
</script>
<template>
  <div class="modal-container">
    <div  class="modal-wrapper">
      <div class="logo-and-header-container">
        <img src="/logo.png" alt="Luxlevs" class="size-24">
        <div class="header-and-slogan-container">
          <span class="header-text">LUXLEVS.COM</span>
          <span class="header-slogan-text">{{ $t('admin.login.header-slogan') }}</span>
        </div>
      </div>
      <hr class="border-spacing-1 border-gray-700 w-full">
      <form action="" class="flex justify-start w-full flex-col gap-4">
        <div class="flex flex-col  w-full gap-2 ">
          <input v-model.lazy="v.username.$model" class="focus:outline-0 p-3 rounded bg-gray-900 text-gray-300"
                 :class="[GetInvalidClassesIfDirtyAndInvalidUsername, GetValidClassesIfDirtyAndValidUsername]"
                 type="text" :placeholder="$t('admin.login.input-username-placeholder')">
          <span v-show="v.username.$error" class="text-red-500">{{ $t('admin.login.username-is-required') }}</span>
        </div>
        <div class="flex flex-col  w-full gap-3">
          <input v-model.lazy="v.password.$model"
                 class="focus:outline-0 p-3 rounded bg-gray-900 text-gray-300" type="text"
                 :class="[GetInvalidClassesIfDirtyAndInvalidPassword, GetValidClassesIfDirtyAndValidPassword]"
                 :placeholder="$t('admin.login.input-password-placeholder')">
          <span v-show="v.password.$error" class="text-red-500">{{$t('admin.login.password-is-required')}}</span>
          <span v-show="isPasswordInvalid" class="text-red-500">{{ $t('admin.login.incorrect-username-or-password') }}</span>
        </div>
        <button  @click.prevent="SignIn" class="btn-login ">
          <span class="btn-login-text">{{ $t('admin.login.btn-login') }}</span>
        </button>
      </form>
      <div class="text-gray-300 flex justify-start gap-4 w-full">
        <button @click="ChangeLanguage('ge')">
          <img src="/ge.png" class="size-10" alt="">
        </button>
        <button>
          <img @click="ChangeLanguage('en')" src="/uk.png" class="size-10" alt="">
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-container{
@apply h-dvh bg-gradient-to-br from-gray-600 to-gray-950 flex justify-center items-center flex-col;
}
.modal-wrapper{
  @apply flex gap-5 justify-center drop-shadow-lg items-center flex-col lg:h-fit bg-gray-950 lg:w-1/4 rounded-md p-4 py-7;
}

.logo-and-header-container{
  @apply bg-gradient-to-br from-blue-500 to-blue-950 w-full flex  items-center justify-evenly rounded;
}

.header-and-slogan-container{
  @apply flex items-end justify-center flex-col gap-1;
}
.header-text{
  @apply text-white text-4xl font-bold -tracking-tighter;
}
.header-slogan-text{
  @apply text-white -tracking-tighter;
  font-size: 0.85rem;
}

.btn-login{
  @apply w-full bg-blue-600 rounded p-3 hover:bg-blue-500  flex justify-center items-center gap-3 mt-4;
}
.btn-login-text{
  @apply text-white text-xl;
  letter-spacing: 0.3rem;

}
</style>