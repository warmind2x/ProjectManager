<template>
<div>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <label>Usuario
                    <input type="text" placeholder="Ingrese Usuario" aria-describedby="usuarioHelpText" v-model="register.usuario">
                </label>
                <p class="help-text" id="usuarioHelpText">Ingresa tu nombre de usuario</p>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <label>Email
                    <input type="email" placeholder="Ingrese Correo" aria-describedby="emailHelpText" v-model="register.email">
                </label>
                <p class="help-text" id="emailHelpText">Ingresa tu Email</p>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <label>Password
                    <input type="password" placeholder="Ingrese Password" aria-describedby="passHelpText" v-model="register.password">
                </label>
                <p class="help-text" id="passHelpText">Ingresa tu password (A-Z, a-z, 0-9)</p>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <button class="hollow button" @click="register()">Register</button>
                <NuxtLink to="/auth/login"> Or Login?</NuxtLink>

            </div>
        </div>

    </div>


</div>
</template>

<script>
export default {
    layout: "auth",
    data() {
        return {
            register: {
                usuario:"",
                email:"",
                password:""
            }
        }
    },
    methods: {
        register() {
            // logica axios para registrar en base de datos
            
        }
    },

}
</script>

<style>

</style>