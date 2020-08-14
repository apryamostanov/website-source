<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 bg-gradient-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container  p-0">
                <card class="mt-5 border-0 bg-transparent" body-classes="p-1">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-4 order-md-1 ml-lg-auto">
                            <img src="img/theme/Bobbin.png" class="rounded img-center img-fluid">
                        </div>
                        <div class="col-md-8 order-md-2">
                            <card class="border-0">
                                <h3 class=" ">Bobbin</h3>
                                <badge type="dark">Java</badge>
                                <badge type="dark">Groovy</badge>
                                <badge type="dark">SLF4J</badge>
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
                                    <li class="pt-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                            <h6 class="mb-0 ">Scripting</h6>
                                        </div>
                                    </li>
                                </ul>
                            </card>
                            <div class="pt-3 container">
                                <div class="row row-grid-1">
                                    <div class="col-md-4 px-0">
                                        <base-button tag="a"
                                                     href="https://github.com/INFINITE-TECHNOLOGY/BOBBIN/wiki"
                                                     class="mb-2 mb-sm-2"
                                                     style="width: 100%"
                                                     type="success"
                                                     icon="fa fa-book">
                                            Documentation
                                        </base-button>
                                    </div>
                                    <div class="col-md-4 px-0 px-md-1">
                                        <base-button tag="a"
                                                     href="https://github.com/INFINITE-TECHNOLOGY/BOBBIN/issues"
                                                     class="mb-2 mb-sm-2"
                                                     style="width: 100%"
                                                     type="info"
                                                     icon="fa fa-warning">
                                            Support
                                        </base-button>
                                    </div>
                                    <div class="col-md-4 px-0">
                                        <base-button tag="a"
                                                     href="https://bintray.com/infinite-technology/io.i-t/bobbin/_latestVersion"
                                                     class="mb-2 mb-sm-2"
                                                     style="width: 100%"
                                                     icon="ni ni-cloud-download-95"
                                                     type="z">Download
                                        </base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
                <card shadow class="shadow-lg--hover mt-2">
                    <md-content/>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import 'prismjs/themes/prism.css'
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
