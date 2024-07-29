<script>
import useVuelidate from "@vuelidate/core";
import {required, minLength, maxLength, createI18nMessage, email,requiredIf} from '@vuelidate/validators'
import {ValidationConstants} from "~/constants/ValidationConstants.js";
import {
  PasswordMustContainOneCharacter,
  PasswordMustContainsOneLowerCase, PasswordMustContainsOneNumeric,
  PasswordMustContainsOneUpperCase
} from "~/validators/customvalidations.js";
export default {
  setup() {
    let {$i18n} = useNuxtApp();

    const withI18nMessage = createI18nMessage({t:$i18n.t});

    let usersStore = useUsersStore();
    let userModel = reactive({
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      password: ''
    });
    let rules = {
      firstName : {
          required : withI18nMessage(required,{messagePath:_=>'admin.users.create.firstname-required',withArguments:true}),
          minLength : withI18nMessage(minLength(ValidationConstants.ADMIN.FIRSTNAME_MIN_LENGTH),{messagePath:_=>'admin.users.create.firstname-minlength'}),
          maxLength : withI18nMessage(minLength(ValidationConstants.ADMIN.FIRSTNAME_MAX_LENGTH),{messagePath:_=>'admin.users.create.firstname-maxlength'}),
      },
      lastName : {
        required : withI18nMessage(required,{messagePath:_=>'admin.users.create.lastname-required',withArguments:true}),
        minLength : withI18nMessage(minLength(ValidationConstants.ADMIN.LASTNAME_MIN_LENGTH),{messagePath:_=>'admin.users.create.lastname-minlength'}),
        maxLength : withI18nMessage(minLength(ValidationConstants.ADMIN.LASTNAME_MAX_LENGTH),{messagePath:_=>'admin.users.create.lastname-maxlength'}),
      },
      email : {
        required : withI18nMessage(required,{messagePath:_=>'admin.users.create.email-required'}),
        invalidEmail: withI18nMessage(email,{messagePath:_=>'admin.users.create.email-invalid'}),
        minLength : withI18nMessage(minLength(ValidationConstants.ADMIN.EMAIL_MIN_LENGTH),{messagePath:_=>'admin.users.create.email-minlength'}),
        maxLength : withI18nMessage(maxLength(ValidationConstants.ADMIN.EMAIL_MAX_LENGTH),{messagePath:_=>'admin.users.create.email-maxlength'})
      },
      password : {
        required : withI18nMessage(required,{messagePath:_=>'admin.users.create.password-required'}),
        minLength : withI18nMessage(minLength(ValidationConstants.ADMIN.PASSWORD_MIN_LENGTH),{messagePath:_=>'admin.users.create.password-minlength'}),
        maxLength : withI18nMessage(maxLength(ValidationConstants.ADMIN.PASSWORD_MAX_LENGTH),{messagePath:_=>'admin.users.create.password-maxlength'}),
        mustContainsOneCharacter : withI18nMessage(PasswordMustContainOneCharacter,{messagePath:_=>'admin.users.create.password-not-contains-character'}),
        mustContainsOneNumeric : withI18nMessage(PasswordMustContainsOneNumeric,{messagePath:_=>'admin.users.create.password-not-contains-numeric'}),
        mustContainsOneLowerCase : withI18nMessage(PasswordMustContainsOneLowerCase,{messagePath:_=>'admin.users.create.password-not-contains-lowercase'}),
        mustContainsOneUpperCase : withI18nMessage(PasswordMustContainsOneUpperCase,{messagePath:_=>'admin.users.create.password-not-contains-uppercase'}),
      }

    }
    let v = useVuelidate(rules,userModel);

    return {usersStore,v};
  },
  methods: {
    async CreateNewUser() {
      let res = await $fetch('http://localhost:5144/admin/users/create', {
        method: 'POST',
        body: {
          firstName: 'Levan',
          lastName: 'Asanoghli',
          email: 'Asanoghli123@gmail.com',
          username: 'asanoghliLevani',
          password: 'Drakula9X!.',
        },
        server: false
      })
      console.log(res);
    }
  }
}
</script>
<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-full" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10  overflow-y-auto w-full">
      <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 w-full">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-3/4  xl:w-1/3 2xl:w-1/3 3xl:w-1/3 4xl:w-1/4  md:w-2/3 lg:w-1/2">
          <div class="px-6 bg-gray-800 w-full py-6 flex justify-between items-center">
            <h3 class="text-xl text-gray-400">მომხმარებლის დამატება</h3>
            <button @click="usersStore.ToggleCreateUserModal">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 48 48">
                <g fill="none" stroke="#9CA3AF" stroke-linejoin="round" stroke-width="4">
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
                  <path stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"/>
                </g>
              </svg>
            </button>
          </div>
          <div class="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
            <div class="flex items-start flex-col gap-3">
              <div class="flex items-center w-full">
                <label class="w-1/3 text-gray-400" for="">სახელი</label>
                <input v-model="v.firstName.$model" class="p-2 bg-gray-600 text-gray-300 rounded w-auto grow  focus:outline-0" type="text">
              </div>
              <div class="flex items-center justify-start w-full">
                <label class="w-1/3 text-gray-400" for="">გვარი</label>
                <input class="p-2 bg-gray-600 text-gray-300   rounded w-auto grow  focus:outline-0" type="text">
              </div>
              <div class="flex items-center justify-start w-full">
                <label class="w-1/3 text-gray-400" for="">ელ.ფოსტა</label>
                <input class="p-2 bg-gray-600 text-gray-300   rounded w-auto grow  focus:outline-0" type="text">
              </div>
              <div class="flex items-center justify-start w-full">
                <label class="w-1/3 text-gray-400" for="">მომხ. სახელი</label>
                <input class="p-2 bg-gray-600 text-gray-300   rounded w-auto grow  focus:outline-0" type="text">
              </div>
              <div class="flex items-center justify-start w-full">
                <label class="w-1/3 text-gray-400" for="">პაროლი</label>
                <input class="p-2 bg-gray-600 text-gray-300   rounded w-auto grow  focus:outline-0" type="text">
              </div>
            </div>
            <p class="text-white">{{JSON.stringify(v.firstName)}}</p>

          </div>
          <div class="bg-gray-800 px-4 py-3 flex flex-row gap-3">
            <button @click="usersStore.ToggleCreateUserModal" type="button"
                    class="w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 ">
              დახურვა
            </button>
            <button @click="CreateNewUser" type="button"
                    class="w-full justify-center rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 ">
              დამატება
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>