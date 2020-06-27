<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-default ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-0">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">

                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-world-2" type="z" color="primary" rounded class="mb-4 shadow ">
                                </icon>
                            </div>

                            <div class="pl-4">
                                <h4 class="display-3 text-white">Mission</h4>
                            </div>
                        </div>

                        <div class="d-flex px-3">
                            <div class="pl-0">
                                <p class="lead text-white mt-4"><b>Infinite TECH</b> is a software consulting company
                                    established in 2018.</p>
                                <p class="lead text-white mt-4">Our mission is to deliver efficient software products
                                    based on extensive knowledge and technology stack.</p>
                                <a
                                        href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                        class="btn btn-white mt-4">See more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-lg-auto">
                        <div class="rounded shadow-lg overflow-hidden ">
                            <b-carousel id="carousel1"
                                        controls
                                        indicators>
                                <!-- Text slides with image -->
                                <b-carousel-slide img-src="img/theme/Pigeon.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/BlackBox.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Bobbin.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/COBOL.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/David.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Ascend.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Orbit.png"></b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>

                </div>
                <div class="pt-100">
                    <tabs fill class="flex-column flex-md-row">
                        <card shadow>
                            <tab-pane title="FinTech">
                                <p class="description"><b>Infinite TECH</b> owns the leading innovation stack in the
                                    FinTech Industry,
                                    which is being actively used by our partners and has been proven by processing very
                                    high financial volumes:</p>
                                <ul>
                                    <li>Mobile Banking</li>
                                    <li>Financial API</li>
                                    <li>Security</li>
                                    <li>Chat Bots</li>
                                    <li>Visa, MC</li>
                                    <li>Payment Processing</li>
                                    <li>Authorization, Clearing, Settlement</li>
                                    <li>COBOL</li>
                                    <li>Crypto</li>
                                </ul>
                                <p class="description">We can help your organization either by adapting our existing
                                    products - or creating a new customized solution for your business.</p>
                                <badge type="primary">ETL</badge>
                                <badge type="success">OLAP</badge>
                                <badge type="danger">OLTP</badge>
                                <badge type="warning">CRM</badge>
                                <badge type="info">API</badge>
                            </tab-pane>

                            <tab-pane title="Banking">
                                <p class="description">Banking is in our DNA as naturally as the FinTech.</p>
                                <p class="description"><b>Infinite TECH Banking Team</b> includes some of the Banking Industry top professionals - experts who have been trusted by multiple banks around the world - and who can be trusted by you.</p>
                                <ul>
                                    <li>Core Banking</li>
                                    <li>General Ledger, Accounting and Finance</li>
                                    <li>Credit Cards, Revolving Credit, Interests</li>
                                    <li>Internet banking</li>
                                    <li>Clearing, SWIFT, ACH, RTGS</li>
                                </ul>
                                <p class="description">Let us share our knowledge with your bank and help to complete your next milestone.</p>
                                <badge type="primary">CBS</badge>
                                <badge type="success">ESB</badge>
                                <badge type="danger">BI</badge>
                                <badge type="warning">CRM</badge>
                                <badge type="info">DWH</badge>
                            </tab-pane>

                            <tab-pane title="Industrial">
                                <p class="description">Versatility - this is what matters when it comes to sustainable business.</p>
                                <p class="description"><b>Infinite TECH Industrial Team</b> is here to help you complete your next project, prototype - or to expand your software ecosystem.</p>
                                <ul>
                                    <li>Geological Mining - ERP</li>
                                    <li>Construction - Drone RTK surveying</li>
                                    <li>Oil and Gas - Drone pipeline monitoring</li>
                                    <li>Agriculture spraying drones</li>
                                    <li>Logistics and supply chain</li>
                                </ul>
                                <badge type="primary">ERP</badge>
                                <badge type="success">RTK</badge>
                                <badge type="danger">SAP</badge>
                            </tab-pane>
                            <tab-pane title="Government">
                                <p class="description">Quality is the key element making <b>Infinite TECH State Contractual</b> the trusted partner for Government Tenders.</p>
                                <p class="description">Taking the advantage of our innovative technological stack, we can offer a variety of services:</p>
                                <ul>
                                    <li>Document management systems</li>
                                    <li>System Integration</li>
                                    <li>E-Government services and portals</li>
                                    <li>Identity services and Security</li>
                                </ul>
                                <badge type="primary">EDMS</badge><badge type="success">IAM</badge>
                            </tab-pane>
                        </card>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tabs from "@/components/Tabs/Tabs.vue";
    import TabPane from "@/components/Tabs/TabPane.vue";
    import {BCarousel} from "bootstrap-vue/esm/components/carousel/carousel";
    import {BCarouselSlide} from "bootstrap-vue/esm/components/carousel/carousel-slide";

    export default {
        data() {
            return {
                showIconsAnimation: true
            };
        },
        methods: {
            onScroll(evt) {
                console.log(evt);
            },
            skipIcons() {
                return ["Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"].includes(navigator.userAgent) && this.$screen.portrait;
            }
        },
        components: {
            Tabs,
            TabPane,
            BCarousel,
            BCarouselSlide
        }
    };


</script>
<style>
</style>
