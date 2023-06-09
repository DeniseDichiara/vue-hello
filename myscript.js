

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
                        vueslides : 'd-none',
                        vueimg : 'd-flex flex-row justify-content-center',
                        vueimgcolor : 'd-none',
                        imgs1 : 'd-flex flex-row justify-content-center',
                        imgs2 : 'd-flex flex-row justify-content-center',
                        img1 : 'd-none',
                        img2 : 'd-none',
                        magic : 'd-none',
                        done : '' ,
                        fin : ''

                    }
                },

                methods:{
                    funzione(){
                        this.info = 'Discover Vue'
                        this.discover = 'text-white bg-dark p-3 text-center mt-2'
                        this.buttonfreccia = 'd-inline ms-3'
                        
                    },
                    freccia(){
                        this.vueslides = 'd-block mt-3 d-flex justify-content-center'
                        this.vueimgcolor = 'd-block mt-3 mb-3'
                    },
                    phone(){
                        this.img1 = 'd-block mt-3 mb-3'
                        this.vueimgcolor = 'd-none'
                        this.magic = 'd-block mt-3 d-flex justify-content-center'
                        this.vueslides = 'd-none'
                    },
                    wandmagic(){
                        this.magic = 'd-none'
                        this.done = 'text-white bg-success p-3 text-center mt-5'
                        this.fin = 'You did it !! You did the magic !!'
                        this.img1 = 'd-none'
                        this.info = ''
                        this.discover = ''
                        this.buttonstart = 'd-none'
                        this.buttonfreccia = 'd-none'
                    }
                },

            }).mount ('#app')