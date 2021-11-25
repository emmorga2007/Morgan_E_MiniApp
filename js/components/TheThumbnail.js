export default {
    name: "TheThumbnailComponent",

    props: ["piece"],
    
    template: 
    `
    <div @click="showmydata" class="bio-panel">  
        <div class="p_avatar">
            <img :src='"images/" + piece.MainPic' :alt="piece.Name">
        </div> 
        <div class="bio-text">
            <h2 class="p_name">{{ piece.Name }}</h2> 
            <h3 cass="p-role">View Details</h3>
            <img src="images/arrow.png" alt="arrow">
        </div>
    </div>
    `,

    methods: {
        showmydata() {
           // debugger;
            this.$emit("showdata", this.piece);
        }
    }
}