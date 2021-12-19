<script>
import VueApexCharts from 'vue-apexcharts'
import Users from "./users";
import Sources from "./sources";
import Channels from "./channels";
import SocialMedia from "./social-media";
import Overview from "./overview";
import Map from "./map";
/**
 * Analytics component
 */
export default {
    head() {
        return {
            title: `${this.title} Dashboard TMT`,
        };
    },
    components: {
        Users,
        Sources,
        Map,
        Channels,
        SocialMedia,
        Overview,
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {

            title: "Мониторинг Россия регионы",
            items: [
                {
                    text: "Аналитика",
                },
                {
                    text: "Мониторинг",
                    active: true,
                },
            ],
            series_bradycardia: [{
                    name: "МО (Заболевших / день)",
                    data: [10, 5, 4, 7, 9, 11, 12, 6],
                },
                {
                    name: "Спб (Заболевших / день)",
                    data: [7, 1, 0, 4, 4, 15, 16, 8],
                },
            ],
            series_tahicardia: [{
                    name: "МО (Заболевших / день)",
                    data: [4, 3, 1, 1, 8, 12, 3, 17],
                },
                {
                    name: "Спб (Заболевших / день)",
                    data: [1, 0, 2, 4, 6, 16, 13, 8],
                },
            ],
            series_arrhythmia: [{
                    name: "МО (Заболевших / день)",
                    data: [23, 14, 22, 10, 12, 7, 4, 6],
                },
                {
                    name: "Спб (Заболевших / день)",
                    data: [16, 11, 10, 3, 6, 3, 8, 9],
                },
            ],
            dropdown_values: [{
                    text: "Брадикардия срез",
                    value: 'series_bradycardia',
                    is_selected: true,
                },
                {
                    text: "Тахикардия срез",
                    value: 'series_tahicardia',
                    is_selected: false,
                },
                {
                    text: "Аритмия срез",
                    value: 'series_arrhythmia',
                    is_selected: false,
                },
            ],
            illness_dropdown_selected: 'series_bradycardia',
            chartOptions: {
                chart: {
                    height: 350,
                    type: "area",
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ['#1aad9c', '#1abc9c'],
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2021-02-19T00:00:00.000Z",
                        "2021-02-20T00:00:00.000Z",
                        "2021-02-21T00:00:00.000Z",
                        "2021-02-22T00:00:00.000Z",
                        "2021-02-23T00:00:00.000Z",
                        "2021-02-24T00:00:00.000Z",
                        "2021-02-25T00:00:00.000Z",
                    ],
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
            },
        };
    },
    middleware: "router-auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-3 col-lg-4">
            <select class="w-100 mb-2" v-model='illness_dropdown_selected'>
              <option v-for="option in dropdown_values" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <div class="card">
                <div class="card-body">
                    <i class="fa fa-info-circle text-muted float-right" v-b-tooltip.hover title="More Info"></i>
                    <h4 class="m-0 font-16">Больных пациентов в регионе:</h4>
                    <h2 v-if="illness_dropdown_selected === 'series_bradycardia'" class="my-3 text-center" id="active-users-count">99 чел.</h2>
                    <h2 v-if="illness_dropdown_selected === 'series_tahicardia'" class="my-3 text-center" id="active-users-count">75 чел.</h2>
                    <h2 v-if="illness_dropdown_selected === 'series_arrhythmia'" class="my-3 text-center" id="active-users-count">134 чел.</h2>
                    <p class="text-muted m-0">
                        По сравнению с пред. месяцем:
                        <span class="float-right">
                            <i class="mdi mdi-arrow-up-bold mr-1 text-danger"></i>
                            <a v-if="illness_dropdown_selected === 'series_bradycardia'">10%</a>
                            <a v-if="illness_dropdown_selected === 'series_tahicardia'">4%</a>
                            <a v-if="illness_dropdown_selected === 'series_arrhythmia'">8%</a>
                        </span>
                    </p>
                </div>
                <!-- end card-body-->
            </div>
            <!--end card-->

            <div class="card">
                <div class="card-body">
                    <i class="fa fa-info-circle text-muted float-right" v-b-tooltip.hover title="More Info"></i>
                    <h4 class="m-0 font-16">Кол-во пациентов в регионе:</h4>
                    <h2 class="my-3 text-center" id="active-views-count">200</h2>
                    <p class="text-muted m-0">
                        По сравнению с пред. месяцем
                        <span class="float-right">
                            <i class="mdi mdi-arrow-up-bold mr-1 text-success"></i>100%
                        </span>
                    </p>
                </div>
                <!-- end card-body-->
            </div>
            <!--end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-9 col-lg-8">
            <div class="card">
                <div class="card-body">
                    <ul class="nav float-right d-none d-lg-flex">
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">Сегодня</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">7д</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">1м</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">1г</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">5л</a>
                        </li>
                    </ul>
                    <h4 class="header-title mb-3">Мониторинг</h4>

                    <div class="row align-items-center">
                        <div class="col-xl-8">
                            <div v-if="illness_dropdown_selected === 'series_bradycardia'">
                            <apexchart type="area" height="350" :options="chartOptions" :series="series_bradycardia"></apexchart>
                            </div>
                            <div v-else-if="illness_dropdown_selected === 'series_tahicardia'">
                            <apexchart type="area" height="350" :options="chartOptions" :series="series_tahicardia"></apexchart>
                            </div>
                            <div v-else-if="illness_dropdown_selected === 'series_arrhythmia'">
                            <apexchart type="area" height="350" :options="chartOptions" :series="series_arrhythmia"></apexchart>
                            </div>
                            <div v-else>
                            <apexchart type="area" height="350" :options="chartOptions" :series="series_bradycardia"></apexchart>
                            </div>
                        </div>

                        <!-- end col -->
                        <div class="col-xl-4">
                            <h5 class="mb-1 mt-0">
                                99,23%
                                <small class="text-muted ml-2">Москва и область</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">72%</div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                63,3%
                                <small class="text-muted ml-2">Санкт-Петербург</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="font-weight-medium ml-2">65%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
        </div>
        <!-- end col-->
    </div>
    <!-- end row-->
    <div class="row">
        <div class="col-lg-6">
            <Sources />
        </div>
        <div class="col-lg-6">
            <Map />
        </div>
    </div>

</div>
</template>
