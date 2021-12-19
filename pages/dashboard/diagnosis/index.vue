<script>
import VueApexCharts from 'vue-apexcharts'

import Users from "./users";
import Sources from "./sources";
import Channels from "./channels";
import SocialMedia from "./social-media";
import Overview from "./overview";
import {
    widgetData,
    widgetuser,
    widget,
    revenueAreaChart,
    revenueBarChart,
    revenueLineColumnChart,
    revenueLineChart,
    revenueRealTimeChart,
    revenuePieChart,
    getNewRealTimeSeries,
} from './data'
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
        Channels,
        SocialMedia,
        Overview,
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            title: "Диагностика",
            items: [{
                    text: "Начало",
                },
                {
                    text: "Аналитика",
                },
                {
                    text: "Диагностика",
                    active: true,
                },
            ],
            series_basic: [{
                    name: "Общий показатель состояния",
                    data: [31, 40, 28, 30, 42, 83, 86],
                },
            ],
            series_tmt_monitor: [                {
                    name: "Ср. пульс (% от нормы)",
                    data: [11, 32, 45, 32, 34, 52, 63],
                    color: '#1abc9c',
                },
            ],
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
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-19T01:30:00.000Z",
                        "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z",
                        "2018-09-19T04:30:00.000Z",
                        "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z",
                    ],
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
            },

            ecg_chart: {
                series: [{
                        name: "",
                        data: [10, 40, 20, -10, 0, 10],
                    }],
                options: {
                  chart: {
                      height: 350,
                      type: "area",
                      toolbar: {
                        show: false,
                      },
                  },
                  dataLabels: {
                      enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
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
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="m-2 font-16">Пациент:</h5><span class="badge badge-soft-primary font-14 pill">Иванов И.И.</span>
                    <h5 class="m-2 font-16">Диагноз:</h5><span class="badge badge-soft-warning font-14 pill">Брадикардия</span>
                    <h5 class="m-2 font-16">Дата последнего визита:</h5><h5 class="m-0 text-muted font-16">12/02/2021</h5>
                    <h5 class="m-2 font-16">Дата обновления данных:</h5><h5 class="m-0 text-muted font-16">12/02/2021</h5>
                    <h5 class="m-2 font-16">TMT-монитор:</h5><span class="badge badge-soft-secondary font-14 pill">Offline</span>
                </div>
                <!-- end card-body-->
            </div>
            <!--end card-->
                <div class="card">
                    <div class="card-body text-center">
                        <h4 class="m-1 font-16">Рекомендации пациенту:</h4>
                        <span class="m-1 badge badge-soft-primary font-20 pill">Отсутствуют</span>
                        <hr>
                        <span class="m-2 font-14 text-muted">История рекомендаций пуста</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                        <h4 class="m-1 font-16">История болезни:</h4>
                        <span class="m-1 badge badge-soft-secondary font-12 pill">12\12\2020 Поступление</span>
                        <br>
                        <span class="m-1 badge badge-soft-secondary font-12 pill">12\10\2020 Диагностирование</span>
                        <br>
                        <span class="m-1 badge badge-soft-secondary font-12 pill">12\10\2020 Прописан курс лечения</span>
                        <br>
                        <span class="m-1 badge badge-soft-secondary font-12 pill">...</span>
                        <hr>
                        <button type="button" class="btn btn-info block w-100">Скачать историю</button>
                    </div>
                </div>
            <!--end card-->
        </div>
        <!-- end col -->

        <div class="col-xl-9 col-lg-8">
            <div class="card">
                <div class="card-body">
                    <ul class="nav float-right d-none d-lg-flex">
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">Сутки</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">Неделя</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">15д</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">1м</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-muted" href="#">1г</a>
                        </li>
                    </ul>
                    <h4 class="header-title mb-3">Аналитика показателей пациента</h4>

                    <div class="row align-items-center">
                        <div class="col-xl-8">
                            <apexchart type="area" height="300" :options="chartOptions" :series="series_basic"></apexchart>
                            <apexchart type="area" height="300" :options="chartOptions" :series="series_tmt_monitor"></apexchart>
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4">
                            <h5 class="mb-1 mt-0">
                                86,23%
                                <small class="text-muted ml-2">Общий показатель состояния</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar" role="progressbar" style="width: 86%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                            <h5 class="mb-1 mt-0">
                                100 уд. / мин.
                                <small class="text-muted ml-2">Среднее значение пульса</small>
                            </h5>
                            <div class="row align-items-center no-gutters mb-2 pb-1">
                                <div class="col">
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 80%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
          <div class='row'>
             <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <div class="text-center">
                            <h4>Текущее состояние:</h4><span class="badge badge-soft-success font-20 pill">В норме</span>
                            <br>
                            <a class="font-12 text-muted">Ухудшение показателей маловероятно</a>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-body">
                        <div class="text-center">
                            <h4>Готовность к выписке:</h4><span class="badge badge-soft-success font-20 pill">87%</span>
                            <br>
                            <a class="font-12 text-muted">Предполагаемая дата выписки: <b>01\02\21</b></a>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card">
                      <div class="card-body">
                          <h4 class="header-title">Последняя запись ЭКГ</h4>
                          <div class="widget-chart text-center">
                              <apexchart height="100" type="line" :series="ecg_chart.series" :options="ecg_chart.options"></apexchart>
                              <div class="row mt-3">
                                  <div class="col-12">
                                      <p class="text-muted font-15 mb-1 text-truncate">ЧСС</p>
                                      <h4>100 уд. / мин.</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
              </div>
          </div>

        </div>
         <div class="col-lg-12">
           <Sources />
         </div>
        <!-- end col-->
    </div>
    <!-- end row-->
</div>
</template>
