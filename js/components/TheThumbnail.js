export default {
    name: "TheThumbnailComponent",

    props: ["piece"],
    
    template: 
    `
    <div @click="showmydata" class="bio-panel">  
        <div class="p_avatar">
            <img :src='"images/" + piece.Biopic' :alt="piece.Name">
        </div> 

        <h2 class="p_name">{{ piece.Name }}</h2> 
        <h3 cass="p-role">{{ piece.Role }}</h3>
    </div>
    `,

    methods: {
        showmydata() {
           // debugger;
            this.$emit("showdata", this.piece);
        }
    }
}