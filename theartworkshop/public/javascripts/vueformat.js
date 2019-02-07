var navVm = new Vue({
    el:"#navDiv",
    data:{
        message:'This is new',
        navLink: 'nav-link',
        isGalActive:true,
        isEveActive:false,
        isOurActive:false
    },
    methods:{
        galClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = true;
            this.isEveActive = false;
            this.isOurActive = false;
            /*to show body or not to show*/
            bodyVm.showGal = true;
            bodyVm.showEve = false;
            bodyVm.showOur = false;
        },
        eveClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = false;
            this.isEveActive = true;
            this.isOurActive = false;
            /*to show body or not to show*/
            bodyVm.showGal = false;
            bodyVm.showEve = true;
            bodyVm.showOur = false;
        },
        ourClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = false;
            this.isEveActive = false;
            this.isOurActive = true;
            /*to show body or not to show*/
            bodyVm.showGal = false;
            bodyVm.showEve = false;
            bodyVm.showOur = true;
        }

    }
})

var bodyVm = new Vue({
    el:"#bodyDiv",
    data:{
        showGal:true,
        showEve:false,
        showOur:false
    },
    methods:{


    }
})