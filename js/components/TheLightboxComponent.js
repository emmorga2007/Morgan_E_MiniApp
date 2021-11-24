import TheAudioComponent from "./TheAudioComponent";
import TheVideoComponent from "./TheVideoComponent";


export default {
    
    name: "TheLightboxComponent" ,
    
    props: ["piece"] ,

    computed: {
        activeComponent: function (){
            return `${this.piece.mediaType + "Component"}`;
        }
    },

    template: 
    `
    <section class="lightboxWrapper">
        <!--<pre>{{piece}}</pre> this shows the .json object of database reutrn-->
       
        <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
        <h1>Type of Media : {{piece.mediaType}}</h1>
        <component v-if="piece.mediaType" :is="activeComponent"></component>

        <div>
            <h1>Name : {{piece.Name}}</h1>
            <p>Role : {{piece.Role}}</p>
            <p>Nickname : {{piece.Nickname}}</p>
            <img :src='"images/" + piece.biopic' :alt="piece.name"></img>
        </div>

    </section>
    `,

    methods: {
        closeMe() {
            //document.querySelector(".lightbox").classList.remove('visible');
            this.$emit("closelb");
        }
    },

    components: {
        AudioComponent: TheAudioComponent,
        VideoComponent: TheVideoComponent
    }


}