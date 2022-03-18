<template>
    <v-container>
        <h1 class="titulo-pergunta">QUER CASAR COMIGO?</h1>

		<div>
			<v-fieldset>
				<legend >Quer casar comigo?</legend>
				<select>
					<option>Sim</option>
					<option>Não</option>
				</select>
			</v-fieldset>
		</div>

		<div>
			<router-link to="/surpresa">Clique aqui</router-link>
		</div>
	</v-container>   
</template>

<script>
export default {
    name: 'MinhaPergunta',
    data() {
        return {
            pergunta: []
        }
    },
}
</script>

<style scoped>
	.titulo-pergunta {
		text-align: center;
	}
</style>