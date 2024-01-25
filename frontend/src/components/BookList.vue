<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-xl-3">
            <BookItem />
        </div>
    </div>
</template>

<script>
import BookItem from './BookItem.vue';
export default {
    name: "BookList",
    components: {
        BookItem
    }
}
</script>

<style scoped></style>