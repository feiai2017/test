function isValueNumber (value) {
    alert(value);
    alert((/(^-?[0-9]+\.{1}\d+$)|({^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + ''));
    return(/(^-?[0-9]+\.{1}\d+$)|({^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}
Vue.component('input-number', {
    template: '\
        <div class="input-number">\
            <input \
                type="text"\
                :value="currentValue"\
                @change="handleChange"\
                @keyup.up.prevent="keyup" @keyup.down.prevent="keydown">\
            <button \
                @click="handleDown"\
                :disabled="currentValue <= min">-</button>\
            <button\
                @click="handleUp"\
                :disabled="currentValue >= max">+</button>\
            <input type="text" :value="step" @change="stepChange">\
        </div>',
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: Infinity
        }
    },
    data: function () {
        return {
            currentValue: this.value,
            stepVal: this.step
        }
    },
    watch: {
        currentValue: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function (val) {
            this.updateValue(val);
        },
    },
    methods: {
        handleDown: function () {
            console.log(this.stepVal);
            if (this.currentValue <= this.min) return;
            this.currentValue -= this.stepVal;
        },
        handleUp: function () {
            console.log(this.stepVal);
            if (this.currentValue >= this.max) return;
            this.currentValue += this.stepVal;
        },
        updateValue:function (val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleChange: function (event) {
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;

            if (isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
                if (val > max) {
                    this.currentValue = max;
                } else if (val < min) {
                    this.currentValue = min;
                }
            } else {
                event.target.value = this.currentValue;
            }
        },
        keyup: function() {
            this.handleUp();
        },
        keydown: function() {
            this.handleDown();
        },
        stepChange: function(event) {
            var val = event.target.value.trim();
            this.stepVal = Number(val);
            this.$emit('show-step', Number(val));
        }
    },
    mounted: function () {
            this.updateValue(this.value);
    },


})