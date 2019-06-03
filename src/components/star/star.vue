<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass"
              class="star-item"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props: {
            size: {
                type: Number
            },
            score: {
                type: Number
            },
        },
        computed: {
            starType() {
                return 'star-' + this.size;
            },
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2;//分数向下取整
                let hasDecimal = score % 1 !== 0;//取余,判断余数是否等于0
                let integer = Math.floor(score);//取整，判断有几个全星
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hasDecimal) {
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
                //console.log(result)
            }
        },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .star {
        font-size: 0
    }

    .star-item {
        display: inline-block
        background-repeat: no-repeat
    }

    .star-48 .star-item {
        width: 0.4rem;
        height: 0.4rem;
        background-size: 0.4rem 0.4rem;
        background-repeat: no-repeat;
        margin-right: 0.44rem;
    }

    .star-48 .star-item:last-child {
        margin-right: 0;
    }

    .star-48 .star-item.on {
       /* bg-image('star48_on')*/
        background-image:url(star48_on@2x.png);
    }

    .star-48 .star-item.half {
        /*bg-image('star48_half')*/
        background-image:url(star48_on@2x.png);
    }

    .star-48 .star-item.off {
        /*bg-image('star48_off')*/
        background-image:url(star48_off@2x.png);

    }

    .star-36 .star-item {
        width: 0.3rem;
        height: 0.3rem;
        background-size: 0.3rem 0.3rem;
        background-repeat: no-repeat;
        margin-right: 0.12rem;
    }

    .star-36 .star-item:last-child {
        margin-right: 0;
    }

    .star-36 .star-item.on {
        bg-image('star36_on')
    }

    .star-36 .star-item.half {
        bg-image('star36_half')
    }

    .star-36 .star-item.off {
        bg-image('star36_off')
    }

    .star-24 .star-item {
        width: 0.2rem;
        height: 0.3rem;
        background: 0.2rem 0.2rem;
        background-repeat: no-repeat;
        margin-right: 0.6rem;
    }

    .star-24 .star-item:last-child {
        margin-right: 0;
    }

    .star-24 .star-item.on {
        bg-image('star24_on')
    }

    .star-24 .star-item.half {
        bg-image('star24_half')
    }

    .star-24 .star-item.off {
        bg-image('star24_off')
    }


</style>
