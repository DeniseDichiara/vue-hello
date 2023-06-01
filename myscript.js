

const { createApp } = Vue
            createApp ({
                data(){
                    return{
                        message: 'Hello Vue!',
                        classes : 'text-white bg-dark p-5 text-center',
                        vueimg : 'd-flex justify-content-center',
                        vueimgcolor : 'mt-5'
                    }
                }
            }).mount ('#app')