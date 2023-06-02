

const { createApp } = Vue
            createApp ({
                data(){
                    return{
                        message: 'Hello Vue!',
                        classes : 'text-white bg-dark p-5 text-center',
                        info : '',
                        discover : '',
                        buttonstart : 'ms-3',
                        vueimg : 'd-flex justify-content-center',
                        vueimgcolor : 'mt-5',
                        
                    }
                },

                methods:{
                    funzione(){
                        this.info = 'Discover Vue'
                        this.discover = 'text-white bg-dark p-3 text-center mt-2'
                    }
                },

            }).mount ('#app')