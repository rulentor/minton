<script>
import CrmWidget from "~/components/widgets/Crm-widget";

/**
 * CRM component
 */
export default {
    head() {
        return {
            title: `${this.title} TMT DASHBOARD`,
        };
    },
    components: {
        CrmWidget
    },
    data() {
        return {
            title: "CRM",
            items: [{
                    text: "TMT",
                },
                {
                    text: "Dashboards",
                },
                {
                    text: "CRM",
                    active: true,
                },
            ],
            widgetData: [{
                    title: "Оплачено дней",
                    icon: "ri-stack-line",
                    value: "865",
                    text: "5.27%",
                },
                {
                    title: "Новые пациенты",
                    icon: "ri-slideshow-2-line",
                    value: "384",
                    text: "3.27%",
                },
                {
                    title: "Выписалось пациентов",
                    icon: "ri-hand-heart-line",
                    value: "786",
                    text: "8.58%",
                },
            ],
        };
    },
    middleware: "router-auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <!-- <CrmWidget :widgetData="widgetData" /> -->
        <div v-for="data in widgetData" :key="data.title" class="col-xl-3 col-md-6">
            <CrmWidget :title="data.title" :icon="data.icon" :value="data.value" :text="data.text" />
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <Campaigns />
        </div>
    </div>

    <div class="row">
        <div class="col-xl-5">
            <TopPerforming />
        </div>

        <div class="col-xl-7">
            <div class="row">
                <div class="col-lg-6">
                    <RecentLeads />
                </div>
                <div class="col-lg-6">
                    <Todo />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
