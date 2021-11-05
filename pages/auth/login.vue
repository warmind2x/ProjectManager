<template>
<div>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <label>Usuario
                    <input type="text" placeholder="Ingrese Usuario" aria-describedby="usuarioHelpText">
                </label>
                <p class="help-text" id="usuarioHelpText">Ingresa tu nombre de usuario</p>
            </div>
        </div>


        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <label>Password
                    <input type="password" placeholder="Ingrese Password" aria-describedby="passHelpText">
                </label>
                <p class="help-text" id="passHelpText">Ingresa tu password (A-Z, a-z, 0-9)</p>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="cell small-4">
                <button class="hollow button">Login</button>
                <NuxtLink to="/auth/register"> Or Register?</NuxtLink>

            </div>
        </div>

    </div>


</div>
</template>

<script>
export default {
    layout:"auth",

}
</script>

<style>

</style>