<template>
    <div class="landscape-canvas">
        <canvas class="landscape-canvas--canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
    import Landscape from "../canvas/Landscape";

    export default {
        data(){
            let landscape = new Landscape();

            return {
                landscape: landscape
            }
        },
        mounted(){
            this.landscape.canvas = this.$refs.canvas;

            Vue.nextTick(() => {
                this.landscape.init();
            })
        }
    }
</script>