


export default {
    
    name: "TheLightboxComponent" ,
    
    props: ["piece"] ,

    template: 
    `
    <section class="lightboxWrapper">
        <div>
            <h1>{{piece.FullName}}</h1>

            <div class="car-info">

                    <div class="price-con">
                        <p>All-Inclusive Price: {{piece.Price}}</p>
                    </div>
                    
                    <div class="apr-container">
                        <div class="LVF">
                            <h3>Lease</h3>

                            <div class="apr-info">
                                <h4>{{piece.Lease}}</h4>
                                <p>APR</p>
                            </div>

                        </div>
                        <div class="LVF">
                            <h3>Finance</h3>

                            <div class="apr-info">
                                <h4>{{piece.Finance}}</h4>
                                <p>APR</p>
                            </div>

                        </div>
                    </div>


            </div>
        </div>
        <div>
            <img :src='"images/" + piece.MainPic' :alt="piece.name"></img>
            <div>
            <button>BOOK A TEST DRIVE</button>
            <button>VIEW INVENTORY</button>
            </div>
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