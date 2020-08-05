<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 peach-gradient">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100 p-0">
                <b-card class="justify-content-center text-center mb-sm" title="zz">
                    <div class="col-lg-8">
                        <h2 class="display-3 ">Bobbin</h2>
                        <p class="lead  ">SLF4J Logger</p>
                    </div>
                </b-card>
                <card shadow class="shadow-lg--hover mt-5">
                    <md-content/>
                </card>
                <card shadow class="shadow-lg--hover mt-3">
                    <div class='comments'>
                        <Disqus :pageConfig="pageConfig" shortname='i-t'/>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import 'prismjs/themes/prism-twilight.css'
    import MdContent from '../md/products/Bobbin.md'

    export default {
        components: {
            MdContent
        },
        data: () => ({
            pageConfig: {
                url: "https://i-t.io/blog/2019-09-20-Heroku-Java-Client-Certificate-Authentication.html",
                identifier: "/blog/2019-09-20-Heroku-Java-Client-Certificate-Authentication.html"
            }
        })
    };

</script>
<style>
</style>
