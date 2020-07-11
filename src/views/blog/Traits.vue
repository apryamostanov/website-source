<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100">
                <div class="row justify-content-center text-center mb-sm">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Groovy Traits</h2>
                        <p class="lead text-white">Static and instance init blocks</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <p class="text-center"><strong>17th November, 2018</strong></p>
                    <md-content/>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import Prism from 'markdown-it-prism'
    import 'prismjs/themes/prism-twilight.css'
    import 'prismjs/components/prism-groovy.js';
    import MdContent from '../md/Traits.md'
    export default {
        components: {
            MdContent
        },
        mounted() {
            this.$nextTick(() => {
                Prism.highlightAll()
            });
        }
    };

</script>
<style>
</style>
