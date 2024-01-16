<template>
    <div>
        Books Page
    </div>
    <img v-bind:src="imageSrc" alt="" width="600" height="540">
</template>

<script>
    export default {
        name: "books",
        data() {
            return {
                imageSrc: "https://caltech-prod.s3.amazonaws.com/main/images/feynman01-NEWS-WEB.width-600_tSwRQP5.jpg"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>