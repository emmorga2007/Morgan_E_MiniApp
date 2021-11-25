import { getData } from "./components/theDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import LightboxComponent from "./components/TheLightboxComponent.js";

(() => {


    const myVue = new Vue({
        created: function() {
            // this is retrieving portfolio stuff from the database 
            getData(null, (data) => this.portfolioData = data );
        },

        data: {
            //this is sotring our portfolio data as an array
            portfolioData: [],
            isVisible: false,
            currentPortfolioItem: {}
        },

        methods: {
            popLightBox(item) {
                //debugger;

               this.currentPortfolioItem = item;

                //this will turn the lightbox off an lon in theory, he wants us to figure that part out. 
                //figure out how to toggle between off and on using @click maybe
               this.isVisible = true;
            },
            
        },

        components: {
            thumb: TheThumbnail,
            lightbox: LightboxComponent
        }

    }).$mount("#app");


    


})();