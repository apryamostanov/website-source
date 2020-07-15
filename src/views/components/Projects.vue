<template>
    <section class="section section section-shaped my-0 overflow-hidden  ">
        <div class="shape shape-style-1 peach-gradient">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0">
            <div class="row  ">
                <div class="col-md-7 order-lg-1">
                    <div class="d-flex px-3">
                        <div>
                            <icon name="fa fa-btc" size="lg" type="white" color="warning" shadow
                                  rounded></icon>
                        </div>
                        <div class="pl-4">
                            <h4 class="display-3 text-white">Projects</h4>
                            <p class="lead text-white">Leading innovation stack. What's your case?</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 order-lg-1">
                    <img src="img/theme/blockchain.png" class="img-center img-fluid">
                </div>
            </div>
            <div class="pt-3">
                <card class="bg-lighter">
                    <div class="row   align-items-center">
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-mobile-button"></badge>
                                        <base-button  @click="modals.MobileBanking = true" class="btn btn-white text-left  w-100 ">
                                            Mobile Banking
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-exchange"></badge>
                                        <router-link to="/cases/FinancialAPI" class="btn btn-white  text-left  w-100 ">
                                            Financial API
                                        </router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-lock"></badge>
                                        <router-link to="/cases/Security" class="btn btn-white text-left  w-100 ">API
                                            Security
                                        </router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-database"></badge>
                                        <router-link to="/cases/COBOL" class="btn btn-white text-left  w-100 ">COBOL
                                            Integration
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-send"></badge>
                                        <router-link to="/cases/ChatBots" class="btn btn-white text-left  w-100 ">Chat
                                            Bots
                                        </router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-cc-visa"></badge>
                                        <router-link to="/cases/PaymentSystems" class="btn btn-white text-left  w-100 ">
                                            Payment Systems
                                        </router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-btc"></badge>
                                        <router-link to="/cases/Crypto" class="btn btn-white  text-left w-100 ">Crypto
                                        </router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-money-coins"></badge>
                                        <router-link to="/cases/SWIFT" class="btn btn-white text-left  w-100 ">SWIFT,
                                            ACH, RTGS
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <modal :show.sync="modals.MobileBanking">
            <h6 slot="header" class="modal-title" id="modal-title-default">Mobile Banking</h6>

            <p>We specialize in creating secure mobile banking apps with advanced architecture.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">iOS, Android, Web</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Supports any API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Secure</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Cloud-native</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.MobileBanking = false">Close
                </base-button>
            </template>
        </modal>
    </section>
</template>
<script>

    import Modal from "@/components/Modal.vue";
    export default {
        components: {
            Modal
        },
        data() {
            return {
                modals: {
                    MobileBanking: false
                }
            };
        }
    };
</script>
<style>
</style>