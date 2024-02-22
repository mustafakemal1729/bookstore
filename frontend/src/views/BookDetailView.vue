<template>
    <section>
        <div class="container">
            <SectionHeader title="Book Detail" message="kitaplar" />
            <button>
                <RouterLink v-bind:to="{name: 'books' }">back</RouterLink>
            </button>
            <div class="row">
                <div class="col-lg-6">
                    <img src="../../templates/images/b_detail.jpg" class="card-img-top">
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.
                    </p>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Page</strong></div>
                        <div class="col-lg-6">2</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Category</strong></div>
                        <div class="col-lg-6">2</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Rating</strong></div>
                        <div class="col-lg-6">2.6</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Upload Date</strong></div>
                        <div class="col-lg-6">21 12 2332</div>
                    </div>

                    <div class="comments-section">
                        <h3 class="display-6 mb-2">Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quas!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quas!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quas!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quas!</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <p>Upvote</p>
                                        <p class="ps-2"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
export default {
    name: "BookDetailView",
    components: {
        SectionHeader,
    }
}
</script>

<style scoped>

.details-wrapper {
    max-height: 740px;
    display: flex;
    flex-direction: column;
}

.comments-section {
    flex-grow: 1;
    overflow-y: auto;
}

</style>