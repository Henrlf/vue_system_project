<script setup>

function isLoggedIn() {
    //TODO: FINALIZAR FUNCAO!!!
    return true;
}

</script>

<template>
    <div class="nav">
        <div class="logo-div" title="Dashboard">
            <a href="/" class="logo-link">
                <img alt="" src="../../assets/logo.svg"/>
            </a>
        </div>

        <div class="nav-bar">
            <div v-if="isLoggedIn()">

            </div>
            <div v-else>

            </div>
        </div>

        <div class="nav-item">

        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    width: var(--nav-width);
    height: var(--nav-height);
    background-color: var(--primary-color);
    box-shadow: 0 0 5px 1px var(--primary-color);
    opacity: 0.8;
}

.logo-div {
    width: 65px;
    height: 60px;
}

.logo-link {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent;
}
</style>