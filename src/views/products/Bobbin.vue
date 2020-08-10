<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 bg-gradient-warning">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100 p-0">
                <card  class="shadow-lg--hover mt-5 bg-orange">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-4 order-md-1 ml-lg-auto">
                            <img src="img/theme/Bobbin.png" class="rounded img-center img-fluid">
                        </div>
                        <div class="col-md-8 order-md-2">
                            <h3>Bobbin™</h3>
                            <badge type="default">Java</badge>
                            <badge type="default">Groovy</badge>
                            <badge type="default">SLF4J</badge>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">High Performance</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Simple</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Scripting</h6>
                                    </div>
                                </li>
                            </ul>
                            <router-link to="/Rahul" class="btn btn-warning mt-4">Documentation</router-link>
                            <router-link to="/Rahul" class="btn btn-warning mt-4">Support</router-link>
                            <router-link to="/Rahul" class="btn btn-warning mt-4">Download</router-link>
                        </div>
                    </div>
                </card>
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
