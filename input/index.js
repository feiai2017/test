var app = new Vue({
    el: '#app',
    data: {
        value: 5,
        stepdata: 3
    },
    methods: {
        changeStep : function(data) {
            console.log(data);
            this.stepdata = Number(data);
        }
    }


});