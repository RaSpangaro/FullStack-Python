const estGrabacion = Vue.createApp({
    components: {
        'estudio1': componente1,
        'estudio2': componente2,
        'estudio3': componente3
    }, 
    data() {
        return {
            estudio1_visible: false,
            estudio2_visible: false,
            estudio3_visible: false
        }
    },
    mounted() {
        this.estudio1_visible = true
    },
    methods: {
        show(componente) {
            this.estudio1_visible = false
            this.estudio2_visible = false
            this.estudio3_visible = false
            console.clear()
            console.log(componente)
            if (componente == "estudio1") {
                this.estudio1_visible = true
            } else if (componente == "estudio2") {
                this.estudio2_visible = true
            } else if (componente == "estudio3") {
                this.estudio3_visible = true
            }
        }
    }
}).mount("#app")
