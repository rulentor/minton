<script>
export default {};
</script>

<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" toggle-class="card-drop p-0" variant="black" right>
            <template v-slot:button-content>
                <i class="mdi mdi-dots-vertical"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <b-dropdown-item>Download</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Upload</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>

        <h4 class="header-title mt-0 mb-3">Средние значения показателей</h4>
        <div class="table-responsive browser_users mb-0">
            <table class="table mb-0">
                <thead class="thead-light">
                    <tr>
                        <th class="border-top-0">Показатель</th>
                        <th class="border-top-0">Значение</th>
                        <th class="border-top-0">Предыдущий период</th>
                        <th class="border-top-0">% Изменения</th>
                    </tr>
                    <!--end tr-->
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href class="text-primary">ЧСС</a>
                        </td>
                        <td>
                            74
                            <small class="text-muted">(92%)</small>
                        </td>
                        <td>
                            69
                            <small class="text-muted">(86%)</small>
                        </td>
                        <td>
                            6,86%
                            <i class="fas fa-caret-up text-success font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">PR-период</a>
                        </td>
                        <td>
                            0,16
                            <small class="text-muted">(80%)</small>
                        </td>
                        <td>
                            0,18
                            <small class="text-muted">(90%)</small>
                        </td>
                        <td>
                            -12,2%
                            <i class="fas fa-caret-down text-danger font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">QT-период</a>
                        </td>
                        <td>
                            0.41
                            <small class="text-muted">(93%)</small>
                        </td>
                        <td>
                            0.37
                            <small class="text-muted">(84%)</small>
                        </td>
                        <td>
                            10%
                            <i class="fas fa-caret-up text-success font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                    <tr>
                        <td>
                            <a href class="text-primary">Насыщенность O2</a>
                        </td>
                        <td>
                            95%
                        </td>
                        <td>
                            98%
                        </td>
                        <td>
                            -0,45%
                            <i class="fas fa-caret-down text-danger font-16"></i>
                        </td>
                    </tr>
                    <!--end tr-->
                </tbody>
            </table>
            <!--end table-->
        </div>
        <!--end /div-->
    </div>
    <!--end card-body-->
</div>
<!--end card-->
</template>
