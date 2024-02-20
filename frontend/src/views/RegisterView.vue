<template>
    <section>
        <div class="container">
            <form class="mt-5" @submit="submitForm">
                <div class="row justify-content-center">
                    <!-- Username Field (Medium and Larger Screens) -->
                    <div class="col-md-6 col-8 mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name="username" v-model="formData.username"
                            required>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <!-- Email Field (Medium and Larger Screens) -->
                    <div class="col-md-6 col-8 mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="formData.email" required>
                    </div>
                </div>

                <!-- Password Field -->
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password"
                            v-model="formData.password" required>
                    </div>
                </div>

                <!-- Gender Field -->
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <h5>Gender</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" value='male' id="male"
                            v-model="formData.gender">
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" value='female' id="female"
                            v-model="formData.gender">
                            <label class="form-check-label" for="female">
                                Female
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Age Field -->
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <label for="age" class="form-label">Age:</label>
                        <input class="form-control" id="age" v-model.number="formData.age" required>
                    </div>
                </div>

                <!-- Programming Field -->
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <h5>Which Programming Language(s) you know?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="java" v-model="formData.languages" id="java">
                            <label class="form-check-label" for="java">
                                Java
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="c++" v-model="formData.languages" id="c++">
                            <label class="form-check-label" for="c++">
                                C++
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="python" v-model="formData.languages" id="python">
                            <label class="form-check-label" for="python">
                                Python
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="rust" v-model="formData.languages" id="rust">
                            <label class="form-check-label" for="rust">
                                Rust
                            </label>
                        </div>
                    </div>
                </div>


                <!-- Submit Button -->
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <button type="submit" class="btn btn-primary w-100">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: '',
                gender: '',
                age: null,
                languages: [],
            }
        }
    },

    methods: {
        submitForm(event){
            event.preventDefault();
            console.log("formData:", this.formData)
        }
    }
}
</script>

<style scoped></style>