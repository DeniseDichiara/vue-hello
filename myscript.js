

const { createApp } = Vue
            createApp ({
                data(){
                    return{
                        message: 'Hello Vue!',
                        classes : 'text-white bg-dark p-5 text-center',
                        buttonstart : 'ms-3',
                        vueimg : 'd-flex justify-content-center',
                        vueimgcolor : 'mt-5',
                        
                    }
                },

                methods:{
                    funzione(){
                        this.message = 'Discover Vue'
                    }
                },

            }).mount ('#app')