<template>
    <section>
        <div class="container">
            <SectionHeader title="kitaplara bakiyouz" message="selam" />
            <RouterLink :to="'/books/'"><button>back</button></RouterLink>
            <div class="row">
                <div class="col-lg-6">
                    <img class="card-img-top" src="../../templates/images/about-img.png" />
                </div>
                <div class="col-lg-6">
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur rem est
                        dolores dolor nulla quidem magni ducimus hic voluptatibus.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import SectionHeader from '@/components/SectionHeader.vue';
export default {
    name: "book-detail",
    components: {
        SectionHeader
    }
}
</script>

<style lang="scss" scoped></style>