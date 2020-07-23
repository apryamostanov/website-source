<template>
    <div class="profile-page">
        <div class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew alpha-4 bg-gradient-teal">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="section pt-0">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img v-lazy="'img/theme/team-Rahul.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button icon="fa fa-linkedin" type="default" size="sm" class="mr-2" tag="a"
                                                 target="_blank"
                                                 href="https://www.linkedin.com/in/rahulkanotra">
                                        Connect
                                    </base-button>
                                    <base-button v-if="!skipFooterIcons()" icon="ni ni-send" type="default"
                                                 size="sm" class="float-right" tag="a" target="_blank"
                                                 href="https://web.telegram.org/#/im?p=@rahul_kanotra">
                                        Message
                                    </base-button>
                                    <base-button v-if="skipFooterIcons()" icon="ni ni-send" type="default" size="sm"
                                                 class="float-right" tag="a" target="_blank"
                                                 href="https://t.me/rahul_kanotra">
                                        Message
                                    </base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center py-4 mt-lg-0">
                                    <base-button icon="ni ni-email-83" type="primary" size="sm" class="mr-2" tag="a"
                                                 target="_blank"
                                                 href="mailto:rahul@i-t.io">
                                        email
                                    </base-button>
                                    <base-button icon="fa fa-phone" type="primary"
                                                 size="sm" class="float-right" tag="a" target="_blank"
                                                 href="tel:+4917659525788">
                                        phone
                                    </base-button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-lg-5 mt-sm-3">
                            <h3>Rahul Kanotra</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Munich, Germany</div>
                            <div class="pt-4">
                                <img v-lazy="'img/brand/blue.png'" alt="Circle image"
                                     class="img-fluid " style="height: 40px;">
                            </div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>
                                <div class="text-uppercase">Chief Product Officer</div>
                            </div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>
                                <badge type="secondary">Co-Founder</badge>
                            </div>
                            <div class="mt-4"><i class="ni education_hat mr-2"></i>
                                <badge type="success" rounded>PRINCE2® FCPM</badge>
                                <badge type="info" rounded>PSM™</badge>
                                <badge type="warning" rounded>PSPO™</badge>
                                <badge type="danger" rounded>Lean Six Sigma</badge>
                                <badge type="primary" rounded>ITIL</badge>
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <div>
                                        <div class="row justify-content-center">
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/theme/TSYS_logo.svg'" alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/theme/IBM.png'"
                                                     alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/theme/wirecard-logo-dark-seo.png'" alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/theme/Capgemini.png'" alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        methods: {
            skipFooterIcons() {
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.$screen.landscape);
            }
        }
    };
</script>
<style>
</style>
