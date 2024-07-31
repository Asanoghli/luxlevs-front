import {defineStore} from "pinia";

export  const useWebsiteStore =  defineStore('websiteStore',{
    state(){
        return {
            toastInfo : reactive({
                showToast : false,
                toastMessage : '',
                toastType : 1
            })
        }
    },
    actions : {
         ShowToast(type,message){
             if(this.toastInfo.showToast) return;

             this.toastInfo.showToast = true
             this.toastInfo.toastType = type;
             this.toastInfo.toastMessage = message;
             setTimeout( ()=>{
                this.toastInfo.showToast =false;
                this.toastInfo.toastMessage ='';
                this.toastInfo.toastType =1;
            },4000);
        }
    }
})