<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            Sobre nós dois
        </h2>
        
        <body>
		<header>
			<div class="caixa">
				<h1><img src="img1.jpg" alt="Logo da Barbearia Alura"></h1>

				<nav>
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">Produtos</a></li>
						<li><a href="">Contato</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<main class=main-contato>
			<form>
				<value for="nomesobrenome">Nome e sobrenome</value>
				<input type="text" id="nomesobrenome" class="input-padrao" required>

				<label for="email">E-mail</label>
				<input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com">

				<label for="felefone">Telefone</label>
				<input type="tel" id="telefone" class="input-padrao" required placeholder="(XX) XXXXX-XXXX">

				<label for="mensagem">Mensagem</label>
				<textarea cols="68" rows="10" id="mensagem" class="input-padrao"></textarea>

				<v-fieldset>
					<legend>Como prefere o nosso contato?</legend>

					<label for="radio-email"><input type="radio" name="contato" value="email" id="radio-email">E-mail</label>
					
					<label for="radio-telefone"><input type="radio" name="contato" value="telefone" id="radio-telefone">Telefone</label>
					
					<label for="radio-whatsapp"><input type="radio" name="contato" value="whatsapp" id="radio-whatsapp" checked>WhatsApp</label>
				</v-fieldset>

				<v-fieldset>
					<legend>Qual horário prefere ser atendido?</legend>
					<select>
						<option>Manhã</option>
						<option>Tarde</option>
						<option>Noite</option>
					</select>
				</v-fieldset>

				<label class="checkbox"><input type="checkbox" checked>Quero receber as novidades por e-mail</label>

				<input type="submit" value="Enviar formulário" class="enviar">
			</form>

			<table>
				<thead>
					<tr>
						<th>Dia</th>
						<th>Horário</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Segunda ~ sexta</td>
						<td>8h ~ 20h</td>
					</tr>
					<tr>
						<td>Sabado</td>
						<td>8h ~ 15h</td>
					</tr>
					<tr>
						<td>Domingo</td>
						<td>Fechada</td>
					</tr>
					<tr>
                        <td class="teste-colspan-keyth" colspan="2">Venha nos conhecer!</td> 
					</tr>
				</tbody>
			</table>

		</main>

    </v-container>
</template>

/*Ver alterações necessárias na página em https://br.vuejs.org/v2/guide/forms.html */

<script>
export default {
    name: 'FormularioAmor'
}
</script>

<style scoped>
    
</style>