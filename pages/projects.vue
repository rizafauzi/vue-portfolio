<template>
	<div>
		<section>
			<img 
				class="background"
				src="~/assets/projects/virtual_playfest_desktop.jpg" 
			/>
			<div class="backdrop" />
			<div class="header">
				<div class="title">
					<h1>{{ state.title }}</h1>
					<h3>{{ state.year }}</h3>
				</div>
				<div class="image-container">
					<div class="image-wrapper">
						<img src="~/assets/projects/virtual_playfest_desktop.jpg" />
					</div>
					<div class="image-wrapper-mobile">
						<img src="~/assets/projects/virtual_playfest_mobile.jpg" />
					</div>
				</div>
			</div>
		</section>
		<section class="container">
			<div class="wrapper">
				<h2>Description</h2>
				<div class="spacer" />
				<h3>{{ state.description }}</h3>
			</div>
			<div class="wrapper">
				<h2>Tech Used</h2>
				<div class="spacer" />
				<div class="tech-used">
					<div v-for="(data, index) in state.techUsed" :key="index">
							<TechUsedCard :data="data" />
					</div>
				</div>
			</div>
			<div class="wrapper">
				<h2>Role</h2>
				<div class="spacer" />
				<h3>{{ state.role }}</h3>
			</div>
			<div class="wrapper">
				<h2>Website</h2>
				<div class="spacer" />
				<h3 @click="navigate(state.website)">{{ state.website }}</h3>
			</div>
			<div class="wrapper padding">
				<h2>Other Projects</h2>
				<div class="spacer" />
				<div class="tech-used">
					<div v-for="(data, index) in state.techUsed" :key="index">
							<TechUsedCard :data="data" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import TechUsedCard from '../components/TechUsedCard.vue'
import { projects } from '../CONST'
export default {
	components: {
		TechUsedCard
	},
	methods: {
		navigate(url) {
			window.open(url, '_blank')
		}
	},
	data() {
		return {
			state: {
				slug: '-',
				title: '-',
				year: '-',
				description: '-',
				navigation: '#',
				website: '-',
				role: '',
				images: {
					desktop: null,
					tablet: null,
					mobile: null,
				},
				techUsed: []
			}
		}
	},
	created() {
		const params = this.$route.query.p

		console.log('params: ', projects.filter(dt => dt.slug === params)) 
		if (params) {
			this.state = projects.find(dt => dt.slug === params)
		}
	}
}
</script>

<style lang="scss" scoped>

.background {
	top: 0px;
	right: 0px;
	object-fit: cover;
	position: absolute;
	width: 100%;
	@media (min-width: 2000px) {
		height: 100vh;
	}
}

.backdrop {
	top: 0px;
	right: 0px;
	z-index: 1;
	width: 100%;
	height: 100vh;
	position: absolute;
	backdrop-filter: blur(25px);
	background: linear-gradient(to bottom, rgba(30, 29, 60, 0.5), #1E1D3C);
}

.header {
	top: 0px;
	right: 0px;
	z-index: 2;
	width: 80%;
	height: 100vh;
	display: flex;
	margin-left: 10%;
	position: relative;
	align-items: center;
	flex-direction: column;
	.title {
		width: 100%;
		display: flex;
		padding: 50px 0px;
		flex-direction: column;
		align-items: flex-start;
	}
	.image-container {
		display: flex;
		position: relative;
		flex-direction: row;
		width: 100%;
		.image-wrapper {
			width: 70%;
			height: auto;
			top: 0;
			right: 10%;
			padding: 15px;
			position: absolute;
			border-radius: 30px;
			backdrop-filter: blur(20px);
			background: rgba(0, 0, 0, 0.2);
			border: solid 1px rgba(150, 150, 150, 0.5);
			img {
				object-fit: cover;
				border-radius: 15px;
			}
		}
		.image-wrapper-mobile {
			width: 25%;
			left: 10%;
			top: 15vh;
			padding: 15px;
			position: absolute;
			border-radius: 30px;
			backdrop-filter: blur(20px);
			background: rgba(0, 0, 0, 0.2);
			border: solid 1px rgba(150, 150, 150, 0.5);
			img {
				object-fit: cover;
				border-radius: 15px;
			}
		}
	}
}

.wrapper {
	display: flex;
	margin-top: 50px;
	flex-direction: column;
	align-items: flex-start;
	.spacer {
		height: 1px;
		width: 100%;
		margin: 10px 0px;
		background: rgba(255, 255, 255, 0.4);
	}
	.tech-used {
		display: flex;
		flex-direction: row;
	}
}

.padding {
	padding-bottom: 10vh;
}

h2 {
	color: #FFFFFF;
	font-size: 36px;
  font-style: normal;
  text-align: center;
  font-family: 'SF Pro Display Bold';
}

h3 {
	font-size: 22px;
	color: #FFFFFF;
  text-align: left;
  font-style: normal;
  font-family: 'SF Pro Display Regular';
}

a {
	font-size: 22px;
	color: #FFFFFF;
  text-align: left;
  font-style: normal;
  font-family: 'SF Pro Display Regular';
}

</style>