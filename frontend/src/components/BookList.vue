<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-xl-4">
            <BookItem />
        </div>
    </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue';
export default {
    name: "BookList",
    components: {
        BookItem
    }
}
</script>

<style scoped></style>