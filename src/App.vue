<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>

    <div class="bg-[#F8F9FA]">
        <Content>
            <RouterView></RouterView>
        </Content>
    </div>

    <ScrollTop />
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>