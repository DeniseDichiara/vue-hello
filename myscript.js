

const { createApp } = Vue
            createApp ({
                data(){
                    return{
                        message: 'Hello Vue!',
                        classes : 'text-white bg-dark p-5 text-center',
                        info : '',
                        discover : '',
                        buttonstart : 'ms-3',
                        buttonfreccia : 'd-none',
                        vueimg : 'd-flex justify-content-center',
                        vueimgcolor : 'd-none',
                        
                    }
                },

                methods:{
                    funzione(){
                        this.info = 'Discover Vue'
                        this.discover = 'text-white bg-dark p-3 text-center mt-2'
                        this.buttonfreccia = 'd-inline ms-3'
                        
                    },
                    freccia(){
                        this.vueimgcolor = 'd-block mt-3'
                    }
                },


            }).mount ('#app')