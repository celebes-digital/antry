<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>

    <Container>
        <RouterView></RouterView>
    </Container>

    <ScrollTop />
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>