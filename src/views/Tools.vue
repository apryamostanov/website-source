<template>
    <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 bg-gradient-success">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0">
            <div class="row row-grid align-items-center">
                <div class="col-lg-6 order-lg-1">
                    <div class="d-flex px-3">
                        <div>
                            <icon name="ni ni-settings" size="lg" type="info"  shadow rounded></icon>
                        </div>
                        <div class="pl-4">
                            <h4 class="display-3 text-white">Online Tools</h4>
                            <p class="text-white">An exclusive collection of free online services based on <b>Infinite TECH</b> stack.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-file-code-o" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">COBOL to XML</h6>
                                    <p class="description mt-3">Online COBOL data file converter.</p>
                                    <p class="description mt-3">Convert COBOL data file online to XML using
                                        copybook.</p>
                                    <div>
                                        <badge type="primary" rounded>ETL</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-file-text-o" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Re-encode</h6>
                                    <p class="description mt-3">Online encoding converter.</p>
                                    <p class="description mt-3">Convert file from any character encoding to any other
                                        character encoding.</p>
                                    <div>
                                        <badge type="success" rounded>ETL</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-chart-bar-32" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">JSON Analyzer</h6>
                                    <p class="description mt-3">Online JSON Statistics.</p>
                                    <p class="description mt-3">Analyze contents of any JSON data file.</p>
                                    <div>
                                        <badge type="warning" rounded>OLAP</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
                            </div>
                        </div>
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
