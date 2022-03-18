<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            OPS, pegadinha do malandro!! 
        </h2>
        <center>
            <v-img class="surpresa-imagem"
                src="../assets/imgsurpresa.jpg" align="middle">
            </v-img>
        </center>
        <p class="p-surpresa">
            Ou não...
        </p>
    </v-container>
</template>

<script>
export default {
    name: 'MinhaSurpresa'
}
</script>

<style scoped>
    .surpresa-imagem {
        width: 50%;
        margin: 20px;
    }
    .p-surpresa {
        text-align: center;
    }
</style>
