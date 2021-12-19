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
            <b-dropdown-item>Настроить регионы</b-dropdown-item>
            <b-dropdown-item>Экспорт</b-dropdown-item>
        </b-dropdown>

        <h4 class="header-title mt-0 mb-3">Карта заболеваемости по регионам:</h4>
        <div>
						  <img src='~/assets/images/small/HIV_in_Russia_2018.svg' style='height:270px; width:auto' />
			  </div>
    </div>
    <!--end card-body-->
</div>
<!--end card-->
</template>
