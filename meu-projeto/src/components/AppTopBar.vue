<template>
    <div class="app-top-bar">
        <v-app-bar app color="red lighten-1" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Eu + Você ❤️</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="red lighten-3">
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Início</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/fotos">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-camera</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Fotos</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/acontecimentos">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-calendar</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Acontecimentos</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/pergunta">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-comment</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Pergunta</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/surpresa">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-eye</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Surpresa</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/api">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-clipboard</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Chamada API</v-list-item-title>
                        </v-list-item>
                    </router-link>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
        drawer: false,
        group: null,
    }),
}
</script>

<style scoped>
.app-top-bar a {
    text-decoration: none;
}
</style>