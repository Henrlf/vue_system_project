<script setup>
import inputComponent from '@/components/containers/input.vue';
import buttonComponent from '@/components/containers/button.vue';
</script>

<template>
    <div class="login-page-container">
        <div class="svg-bg"/>
        <div class="pulse-wave"/>
        <div class="svg"/>

        <div class="div-login">
            <div class="login-header ">
                <img alt="Vue logo" class="logo" src="./../assets/logo.svg"/>
            </div>

            <div class="login-body">
                <h1>Login</h1>

                <div class="row">
                    <inputComponent :id="'idTeste'" :type="'email'" :label="'E-mail'" class="column-10"/>
                </div>

                <div class="row">
                    <inputComponent :id="'password'" :type="'password'" :label="'Password'" class="column-10"/>
                </div>

                <div class="row">
                    <buttonComponent :label="'Login'" class="column-10" customClass="primary"/>
                </div>
            </div>

            <div class="login-footer"></div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: var(--text-color);
    text-align: center;
}

.logo {
    width: 115px;
    height: 115px;
    margin: 15px auto;
}

.login-page-container {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.svg-bg {
    position: absolute;
    background-color: #363636;
    width: 1150px;
    height: 920px;
    z-index: 0;
}

.svg {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: url("@/assets/loginbg.svg") no-repeat center;
    z-index: 1;
}

.div-login {
    position: absolute;
    min-width: 410px;
    height: 580px;
    margin-bottom: 20px;
    background-color: #262626;
    border-radius: 10px;
    border: 1px solid #4c4c4c;
    box-shadow: 1px 1px 8px 1px var(--primary-color);
    z-index: 2;
}

.login-header {
    width: 100%;
    height: 25%;
    text-align: center;
}

.login-body {
    flex: 1;
    width: 100%;
    padding: 0 25px;
}

.login-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.pulse-wave {
    position: absolute;
    background-color: var(--primary-color);
    box-shadow: 1px 1px 8px 8px var(--primary-color);
    border-radius: 50%;
    animation-delay: 5s;
    animation: pulse-wave 7s infinite;
}

@keyframes pulse-wave {
    from {
        height: 100px;
        width: 100px;
        opacity: 2.5;
    }

    to {
        height: 1050px;
        width: 1150px;
        opacity: 0;
    }
}

</style>