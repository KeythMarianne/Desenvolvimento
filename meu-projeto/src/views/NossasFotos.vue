<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            S2
        </h2>
       <main>
			<ul class="produtos">
				<li>
					<h2>Meu bobão</h2>
                    <v-img src="../assets/img1.jpg"></v-img>
					<p class="img-descricao">Sempre com caras e bocas mas eu amo</p>
				</li>
				<li>
					<h2>Um dia qualquer</h2>
					<v-img src="../assets/img2.jpg"></v-img>
					<p class="img-descricao">Qualquer lugar com você é meu lar</p>
				</li>
				<li>
					<h2>Minha foto favorita</h2>
					<v-img src="../assets/img3.jpg"></v-img>
					<p class="img-descricao">A paz que essa foto transmite...</p>
				</li>
			</ul>
		</main>
    </v-container>
</template>

<script>
export default {
    name: 'PaginaInicial'
}
</script>

<style scoped>
    .produtos {
        width:  940px;
        margin:  0 auto;
        padding: 50px 0;
    }

    .produtos li {
        display:  inline-block;
        text-align: center;
        width:  30%;
        vertical-align: top;
        margin: 0 1.5%;
        padding:  30px 20px;
        box-sizing:  border-box;
        border:  2px solid #000000;
        border-radius: 15px;
    }

    .produtos li:hover {
        border-color: #C78C19;
    }

    .produtos li:active {
        border-color: #088C19;
    }

    .produtos li:hover h2 {
        font-size:  35px;
    }

    .produtos h2 {
        font-size: 20px;
        font-weight:  bold;
    }
    .img-descricao {
	font-size: 18px;
}
</style>
