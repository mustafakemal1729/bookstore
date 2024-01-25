<template>
    <div class="card border-0 shadow position-relative">
        <img src="../../template/images/b1.jpg" class="card-img-top">
        <div class="card-body">
            <div class="auth-box">
                <span style="background-color: #063547;" class="py-1 px-3 text-white rounded-pill">
                    Mustafa Kemal</span>
                <h5 class="card-title mt-3 fw-bold">Song of Impossible</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nisi.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="#" class="card-link">Read More</a>
                    <p style="background-color: #063547;" class="py-1 px-2 text-white badge mb-0">19 Jan 2021</p>
                </div>
            </div>
            <span
                class="top-0 start-100 position-absolute translate-middle bg-info p-2 text-light rounded-circle border border-2 border-light">7.6</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "BookItem"
}
</script>

<style scoped>
.auth-box {
    margin-top: -20px;
}
</style>