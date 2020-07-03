<template>
    <div class="profile-page">
        <div class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
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
                                    <img v-lazy="'img/theme/team-Anton-Pryamostanov.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button icon="fa fa-linkedin" type="primary" size="sm" class="mr-4" tag="a" target="_blank"
                                                 href="https://www.linkedin.com/in/anton-pryamostanov-99571224/">
                                        Connect
                                    </base-button>
                                    <base-button v-if="!skipFooterIcons()" icon="fa fa-telegram" type="default" size="sm" class="mr-4  " tag="a" target="_blank"
                                                 href="https://web.telegram.org/#/im?p=@anton_pryamostanov">
                                        Message
                                    </base-button>
                                    <base-button v-if="skipFooterIcons()" icon="fa fa-telegram" type="default" size="sm" class="mr-4  " tag="a" target="_blank"
                                                 href="https://t.me/anton_pryamostanov">
                                        Message
                                    </base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">15</span>
                                        <span class="description">years in Banking</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">years in FinTech</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">years in Payments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Anton Pryamostanov
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Dubai, UAE</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Consultant - Team Leader,
                                Wirecard Processing
                            </div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Managing Consultant,
                                Infinite TECH
                            </div>
                            <div class="mt-5"><i class="ni education_hat mr-2"></i>Education: National Research Nuclear
                                University
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
                                                <img v-lazy="'img/theme/Qatar_National_Bank_Logo.svg.png'"
                                                     alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/theme/wirecard-logo-dark-seo.png'" alt="Circle image"
                                                     class="img-fluid " style="height: 40px;">
                                            </div>
                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                <img v-lazy="'img/brand/blue.png'" alt="Circle image"
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
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.$screen.landscape);
            }
        }
    };
</script>
<style>
</style>
