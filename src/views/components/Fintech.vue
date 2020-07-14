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
                    <h4 class="display-3 text-white">Fintech Projects</h4>
                    <p class="lead text-white">Leading innovation stack. What's your case?</p>
                </div>
            </div>
            <div class="pt-5">
                <card shadow class="shadow-lg" style="background-color: rgba(255,255,255,0.6)">
                    <div class="row   align-items-center">
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-mobile-button"></badge>
                                        <router-link to="/cases/MobileBanking" class="btn text-black-100 text-left  w-100">Mobile Banking</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-exchange"></badge>
                                        <router-link to="/cases/FinancialAPI" class="btn text-black-100 text-left  w-100">Financial API</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-lock"></badge>
                                        <router-link to="/cases/Security" class="btn text-black-100 text-left  w-100">API Security</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-send"></badge>
                                        <router-link to="/cases/ChatBots" class="btn text-black-100 text-left  w-100">Chat Bots</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-cc-visa"></badge>
                                        <router-link to="/cases/PaymentSystems" class="btn text-black-100 text-left  w-100">Payment Systems</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-btc"></badge>
                                        <router-link to="/cases/Crypto" class="btn text-black-100  text-left w-100">Crypto</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
            <div class="pt-4">
                <card shadow class="shadow-lg" style="background-color: rgba(255,255,255,0.6)">
                    <div class="row   align-items-center">
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-bank"></badge>
                                        <router-link to="/cases/CoreBanking" class="btn text-black-100 text-left  w-100">Core Banking</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-book-bookmark"></badge>
                                        <router-link to="/cases/GeneralLedger" class="btn text-black-100 text-left w-100">General Ledger</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-lock"></badge>
                                        <router-link to="/cases/CreditCards" class="btn text-black-100 text-left  w-100">Credit Cards</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-tv-2"></badge>
                                        <router-link to="/cases/InternetBanking" class="btn text-black-100 text-left  w-100">Internet Banking</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-database"></badge>
                                        <router-link to="/cases/COBOL" class="btn text-black-100 text-left  w-100">COBOL Integration</router-link>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-money-coins"></badge>
                                        <router-link to="/cases/SWIFT" class="btn text-black-100 text-left  w-100">SWIFT, ACH, RTGS</router-link>
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