


export default {
    
    name: "TheLightboxComponent" ,
    
    props: ["piece"] ,

    template: 
    `
    <section class="lightboxWrapper">
        <div>
            <h1>{{piece.FullName}}</h1>

            <div class="car-info">

                <div class="engine">
                    <h4>Engine Architecture</h4>
                    <p>{{piece.Engine}}</p>
                </div>

                <div>
                    <div class="apr-info">
                        <h3>Lease {{piece.Lease}}</h3>
                        <p>APR</p>
                    </div>
                    <div class="apr-info">
                        <h3>Finance {{piece.Finance}}</h3>
                        <p>APR</p>
                    </div>
                </div>
                

            </div>
                

        </div>
        <div>
        <img :src='"images/" + piece.MainPic' :alt="piece.name"></img>
        </div>

    </section>
    `,

    methods: {
        closeMe() {
            //document.querySelector(".lightbox").classList.remove('visible');
            this.$emit("closelb");
        }
    },




}