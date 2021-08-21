<template>
	<div class="container">
		<div class="cards">
			<img 
				class="emoji"
				src="~/static/img/memoji_celebrate.png" 
			/>
			<h1>Hi, I'm Riza Fauzi</h1>
			<h2>Software Engineer • UI Designer • Fulltime Learner</h2>
			<div class="spacer"></div>
			<div class="social-media">
				<div class="icon-media" @click="handleJump(state.goto)" v-for="(state, index) in socialMedia" :key="index">
					<img class="img-wrapper" :src="require(`~/assets/icon/${state.img}.png`)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			socialMedia: [
				{
					img: 'linkedin',
					label: 'Linkedin',
					goto: 'https://www.linkedin.com/in/rizafra'
				},
				{
					img: 'github',
					label: 'Github',
					goto: 'https://github.com/rizafauzi'
				},
				{
					img: 'dribbble',
					label: 'Dribbble',
					goto: 'https://dribbble.com/rizafra'
				},
			]
		}
	},
	methods: {
		handleJump(e) {
			window.open(e, '_blank')
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 110vh;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	.cards {
		top: 10vh;
		width: 70%;
		padding: 20px;
		display: flex;
		min-height: 55vh;
		position: absolute;
		align-items: center;
		border-radius: 30px;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(40px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
		.spacer {
			width: 80%;
			height: 1px;
			margin: 20px 0px;
			border-radius: 2px;
			background: #908F9B;
		}
		.social-media {
			height: 40px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			@media (max-width: 768px) {
				height: 30px;
			}
			.icon-media {
				padding: 10px;
				margin: 0px 10px;
				border-radius: 10px;
				transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
				@media (max-width: 768px) {
					padding: 5px;
					margin: 0px 5px;
				}
				.img-wrapper {
					height: 40px;
					object-fit: contain;
					@media (max-width: 768px) {
						height: 30px;
					}
				}
			}
		}
		.emoji {
			width: 250px;
			height: 250px;
			margin-bottom: -3%;
			object-fit: contain;
		}
		.memoji {
			width: 400px;
			height: 400px;
			z-index: 1000;
		}
	}
}

.icon-media:hover {
	cursor: pointer;
	transform: scale(1.1);
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
}

.cards:hover {
	transform: scale(1.08);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.4);
}

h1 {
	color: #FFFFFF;
	font-size: 48px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 600;
	@media (max-width: 768px) {
		font-size: 22px;
	}
}

h2 {
	color: #FFFFFF;
	font-size: 22px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 400;
	@media (max-width: 768px) {
		font-size: 12px;
	}
}

</style>