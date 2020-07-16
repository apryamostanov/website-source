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
                                        <base-button @click="modals.MobileBanking = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            Mobile Banking
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-exchange"></badge>
                                        <base-button @click="modals.FinancialApi = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            Financial API
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-lock"></badge>
                                        <base-button @click="modals.ApiSecurity = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            API Security
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-database"></badge>
                                        <base-button @click="modals.Cobol = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            COBOL Integration
                                        </base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-lg-1">
                            <div class="list-unstyled ">
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-send"></badge>
                                        <base-button @click="modals.ChatBots = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            Chat Bots
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-cc-visa"></badge>
                                        <base-button @click="modals.Processing = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            Processing
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="fa fa-btc"></badge>
                                        <base-button @click="modals.Crypto = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            Crypto
                                        </base-button>
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-money-coins"></badge>
                                        <base-button @click="modals.Swift = true"
                                                     class="btn btn-white text-left  w-100 ">
                                            SWIFT, ACH, RTGS
                                        </base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <modal :show.sync="modals.MobileBanking">
            <h6 slot="header" class="modal-title" id="modal-title-MobileBanking">Mobile Banking</h6>

            <p>Secure mobile banking apps with advanced architecture.</p>
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
        <modal :show.sync="modals.ChatBots">
            <h6 slot="header" class="modal-title" id="modal-title-ChatBots">Chat Bots</h6>

            <p>Financial Chat Bots with full functionality of Mobile Banking.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Telegram, Facebook</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Best in class bot UX</h6>
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
                        <h6 class="mb-0 ">A proven track of success delivery</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.ChatBots = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.FinancialApi">
            <h6 slot="header" class="modal-title" id="modal-title-FinancialApi">Financial API</h6>

            <p>Issuing. Acquiring. PSD2.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Create REST API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Support SOAP API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Internet API Gateways</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">REST-SOAP transformation</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.FinancialApi = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.Processing">
            <h6 slot="header" class="modal-title" id="modal-title-Processing">Processing</h6>

            <p>Consultation, implementation, development.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Authorization</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Clearing</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Settlement</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Billing and Payout</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Certifications</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Single and Dual message</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Issuing and Acquiring</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">TSYS, BPC SmartVista, CompassPlus</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.Processing = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.ApiSecurity">
            <h6 slot="header" class="modal-title" id="modal-title-ApiSecurity">API Security</h6>

            <p>Securely publish API over Internet using Externalized Authorization.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Legacy API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Proprietary API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">SOAP, REST</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">SECaaS</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">OAuth2 and social login</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Sidecar Architecture Pattern</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Leading IAM platforms</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Gluu, Auth0, Keycloack</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.ApiSecurity = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.Crypto">
            <h6 slot="header" class="modal-title" id="modal-title-Crypto">API Security</h6>

            <p>With Blockchain its YOU who sets the rules.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Bitcoin</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Ethereum</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Stellar</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">EOS</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Dash</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Blockchain as a service (BaaS)</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.Crypto = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.Cobol">
            <h6 slot="header" class="modal-title" id="modal-title-Cobol">COBOL Integration</h6>

            <p>Exclusive COBOL ETL tools.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Convert COBOL data files using copybooks</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">ETL API for variety of formats including XML, JSON</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Supports group <code>redefines</code> (explicit)</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Supports record <code>redefines</code> (implicit)</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Supports <code>occurs</code></h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Powered by best available COBOL source code parser</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Innovative COBOL transpiler, runtime and API</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">Talend plugin</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.Cobol = false">Close
                </base-button>
            </template>
        </modal>
        <modal :show.sync="modals.Swift">
            <h6 slot="header" class="modal-title" id="modal-title-Swift">SWIFT, ACH, RTGS</h6>

            <p>Clearing and Settlement integrations.</p>
            <ul class="list-unstyled mt-3">
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">ISO 20022</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">MT103, MT940, MT202</h6>
                    </div>
                </li>
                <li class="py-2">
                    <div class="d-flex align-items-center">
                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                        <h6 class="mb-0 ">ACH, RTGS</h6>
                    </div>
                </li>
            </ul>

            <template slot="footer">
                <router-link to="/Projects" class="btn btn-warning">
                    Start Project
                </router-link>
                <base-button type="link" class="ml-auto" @click="modals.Swift = false">Close
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
                    MobileBanking: false,
                    ChatBots: false,
                    FinancialApi: false,
                    Processing: false,
                    ApiSecurity: false,
                    Crypto: false,
                    Cobol: false,
                    Swift: false
                }
            };
        },
        mounted() {
            // Close modal with 'esc' key
            document.addEventListener("keydown", (e) => {
                if (e.keyCode === 27) {
                    this.modals.MobileBanking = false
                    this.modals.ChatBots = false
                    this.modals.FinancialApi = false
                    this.modals.Processing = false
                    this.modals.ApiSecurity = false
                    this.modals.Crypto = false
                    this.modals.Cobol = false
                    this.modals.Swift = false
                }
            });
        }
    };
</script>
<style>
</style>