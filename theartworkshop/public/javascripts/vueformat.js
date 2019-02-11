var navVm = new Vue({
    el:"#navDiv",
    data:{
        message:'This is new',
        navLink: 'nav-link',
        isGalActive:true,
        isEveActive:false,
        isOurActive:false,
        isFormActive:false
    },
    methods:{
        galClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = true;
            this.isEveActive = false;
            this.isOurActive = false;
            this.isFormActive = false;
            /*to show body or not to show*/
            bodyVm.showGal = true;
            bodyVm.showEve = false;
            bodyVm.showOur = false;
            bodyVm.showForm = false;
        },
        eveClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = false;
            this.isEveActive = true;
            this.isOurActive = false;
            this.isFormActive = false;

            /*to show body or not to show*/
            bodyVm.showGal = false;
            bodyVm.showEve = true;
            bodyVm.showOur = false;
            bodyVm.showForm = false;
        },
        ourClicked: function() {
            /*for navbar class activation and deactivation*/
            this.isGalActive = false;
            this.isEveActive = false;
            this.isOurActive = true;
            this.isFormActive = false;

            /*to show body or not to show*/
            bodyVm.showGal = false;
            bodyVm.showEve = false;
            bodyVm.showOur = true;
            bodyVm.showForm = false;
        },
        formClicked: function() {
            this.isGalActive = false;
            this.isEveActive = false;
            this.isOurActive = false;
            this.isFormActive = true;

            bodyVm.showGal = false;
            bodyVm.showEve = false;
            bodyVm.showOur = false;
            bodyVm.showForm = true;
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