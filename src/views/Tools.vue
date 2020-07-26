<template>
    <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 aqua-gradient">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0">
            <div class="d-flex px-3 align-items-center">
                <div>
                    <icon name="ni ni-settings" size="lg" type="white" color="primary" shadow
                          rounded></icon>
                </div>
                <div class="pl-4 ">
                    <h4 class="display-3 text-white mb-0">Tools</h4>
                </div>
            </div>
            <p class="lead text-white pl-3">Exclusive. Free. Online.</p>
        </div>
        <div class="container pt-5">
            <div class="row row-grid-1">
                <div class="col-lg-6 order-lg-1">
                    <div class="pb-5">
                        <card class="border-0" shadow body-classes="py-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <icon name="fa fa-file-code-o" type="info" shadow rounded></icon>
                                </div>
                                <div class="pl-2 ">
                                    <h6 class="text-info text-uppercase mb-0">COBOL to XML</h6>
                                </div>
                            </div>
                            <p class="description mt-3">Online COBOL data file converter.</p>
                            <p class="description mt-3">Convert COBOL data file online to XML using
                                copybook.</p>
                            <router-link to="/CobolToXML" class="btn btn-info mt-2">Try it now</router-link>
                        </card>
                    </div>

                    <div class="pb-5">
                        <card class="border-0" shadow body-classes="py-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <icon name="ni ni-chart-bar-32" type="success" shadow rounded></icon>
                                </div>
                                <div class="pl-2 ">
                                    <h6 class="text-success text-uppercase mb-0">JSON Analyzer</h6>
                                </div>
                            </div>
                            <p class="description mt-3">Online JSON Statistics.</p>
                            <p class="description mt-3">Analyze contents of any JSON data file.</p>
                            <router-link to="/AnalyzeJSON" class="btn btn-success mt-2">Try it now</router-link>
                        </card>
                    </div>
                </div>
                <div class="col-lg-6  order-lg-2">
                    <div class="pb-5">
                        <card class="border-0" shadow body-classes="py-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <icon name="fa fa-file-text-o" type="warning" shadow rounded></icon>
                                </div>
                                <div class="pl-2 ">
                                    <h6 class="text-warning text-uppercase mb-0">Re-encode</h6>
                                </div>
                            </div>
                            <p class="description mt-3">Online encoding converter.</p>
                            <p class="description mt-3">Convert file from any character encoding to any other
                                encoding.</p>
                            <router-link to="/Re-encode" class="btn btn-warning mt-2">Try it now</router-link>
                        </card>
                    </div>
                    <div class="pb-5">
                        <card class="border-0" shadow body-classes="py-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <icon name="fa fa-indent" type="danger" shadow rounded></icon>
                                </div>
                                <div class="pl-2 ">
                                    <h6 class="text-danger text-uppercase mb-0">JSON Formatter</h6>
                                </div>
                            </div>
                            <p class="description mt-3">Online JSON Formatter.</p>
                            <p class="description mt-3">Format JSON files of any size.</p>
                            <router-link to="/FormatJSON" class="btn btn-danger mt-2">Try it now</router-link>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home",
        components: {}
    };
</script>
