<template>
    <div class="row justify-content-center">
        <div class="col">
            <!-- Tabs with icons -->
            <!--<div class="mb-3">
                <small class="text-uppercase font-weight-bold">Tools</small>
            </div>-->
            <tabs fill class="flex-column flex-md-row">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="fa fa-file-code-o mr-2"></i>COBOL to XML
                        </template>

                        <p class="description">Online COBOL data file converter.</p>
                        <p class="description">Convert COBOL data file online to XML using copybook.</p>

                        <base-button class="btn-1" outline type="info">Try it now</base-button>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="fa fa-file-text-o mr-2"></i>Re-encode
                        </template>

                        <p class="description">Online encoding converter.</p>
                        <p class="description">Convert file from any character encoding to any other character encoding.</p>
                        <base-button class="btn-1" outline type="info">Try it now</base-button>
                    </tab-pane>

                    <tab-pane key="tab3">
                        <template slot="title">
                            <i class="ni ni-chart-bar-32 mr-2"></i>JSON analyzer
                        </template>

                        <p class="description">Online JSON Statistics.</p>

                        <p class="description">Analyze contents of any JSON data file.</p>

                        <base-button class="btn-1" outline type="info">Try it now</base-button>
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>
</style>
