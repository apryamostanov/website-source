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
            <div class="d-flex px-3">
                <div>
                    <icon name="fa fa-btc" size="lg" type="white" color="warning" shadow
                          rounded></icon>
                </div>
                <div class="pl-4">
                    <h4 class="display-3 text-white">Fintech</h4>
                    <p class="lead text-white">Leading innovation stack. What's your case?</p>
                </div>
            </div>
            <div class="pt-5">
                <card shadow class="shadow-lg" style="background-color: rgba(255,255,255,0.5)">
                    <div class="row   align-items-center">
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-mobile-button"></badge>
                                        <router-link to="/cases/MobileBanking"  style="background-color: rgba(255,255,255,0.8)" class="btn btn-white text-black-100 text-left  w-100   ">Mobile Banking</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-exchange"></badge>
                                        <router-link to="/cases/FinancialAPI" class="btn btn-white text-black-100 text-left  w-100 shadow">Financial API</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-lock"></badge>
                                        <router-link to="/cases/Security" class="btn btn-white text-black-100 text-left  w-100 shadow">API Security</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-database"></badge>
                                        <router-link to="/cases/COBOL" class="btn btn-white text-black-100 text-left  w-100 shadow">COBOL Integration</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-send"></badge>
                                        <router-link to="/cases/ChatBots" class="btn btn-white text-black-100 text-left  w-100 shadow">Chat Bots</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-cc-visa"></badge>
                                        <router-link to="/cases/PaymentSystems" class="btn btn-white text-black-100 text-left  w-100 shadow">Payment Systems</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-btc"></badge>
                                        <router-link to="/cases/Crypto" class="btn btn-white text-black-100  text-left w-100 shadow">Crypto</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-money-coins"></badge>
                                        <router-link to="/cases/SWIFT" class="btn btn-white text-black-100 text-left  w-100 shadow">SWIFT, ACH, RTGS</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </section>
</template>
<script>

    export default {
        components: {}
    };
</script>
<style>
</style>