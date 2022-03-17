<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            Nossos Acontecimentos
        </h2>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th colspan="2" class="text-left">
                            Acontecimento
                        </th>
                        <th class="text-right">
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
						<td colspan="2" class="text-left">Primeiro encontro</td>
						<td class="text-right">15/08/2020</td>
					</tr>
					<tr>
						<td colspan="2" class="text-left">Pedido de namoro</td>
						<td class="text-right">22/11/2020</td>
					</tr>
                    <tr>
						<td colspan="2" class="text-left">1º "Eu te amo" do Re</td>
						<td class="text-right">07/06/2021</td>
					</tr>
                    <tr>
						<td colspan="2" class="text-left">Contrato aluguel e União Estável</td>
						<td class="text-right">11/08/2021</td>
					</tr>
                    <tr>
						<td colspan="2" class="text-left">1º dia morando juntos</td>
						<td class="text-right">15/08/2021</td>
					</tr>
                    <tr>
						<td colspan="2" class="text-left">Pedido de Casamento</td>
						<td class="text-right"></td>
					</tr>
                    <tr>
						<td colspan="2" class="text-left">Casamento</td>
						<td class="text-right"></td>
					</tr>
                </tbody>
            </template>
        </v-simple-table>
        
    </v-container>
</template>

<script>
export default {
    name: 'NossosAcontecimentos',
    data() {
        return {
            acontecimentos: []
        }
    },
    
}
</script>

<style scoped>
</style>