<template>
    <div class="landscape-canvas">
        <canvas class="landscape-canvas--canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
    import Landscape from "../canvas/Landscape";

    export default {
        data(){
            return {
                landscape: new Landscape()
            }
        },
        mounted(){
            this.landscape.canvas = this.$refs.canvas;
            this.landscape.init();
        }
    }
</script>