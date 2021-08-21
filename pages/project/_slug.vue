<template>
	<div>
		<section>
			<img 
				class="background"
				:src="require(`~/assets/projects/${state.image}_desktop.jpg`)" 
			/>
			<div class="backdrop" />
			<div class="header">
				<div class="title">
					<h1>{{ state.title }}</h1>
					<h3>{{ state.year }}</h3>
				</div>
				<div class="image-container">
					<div class="image-wrapper" v-gsap.from="{
						x: 150,
						opacity: 0,
						duration: 1.5,
						ease: 'power2.inOut'
					}">
						<img :src="require(`~/assets/projects/${state.image}_desktop.jpg`)" />
					</div>
					<div class="image-wrapper-mobile" v-gsap.from="{
						x: -150,
						opacity: 0,
						delay: 1,
						duration: 1.5,
						ease: 'power2.inOut'
					}">
						<img :src="require(`~/assets/projects/${state.image}_mobile.jpg`)" />
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
				<h2>Role</h2>
				<div class="spacer" />
				<h3>{{ state.role }}</h3>
			</div>
			<div v-if="state.website" class="wrapper">
				<h2>Website</h2>
				<div class="spacer" />
				<div class="button" @click="navigate(state.website)">
					<h3> {{ state.website.replace('https://', '') }} </h3>
					<img 
						class="arrow"
						src="~/static/icon/arrow-line.png" 
					/>
				</div>
			</div>
			<div class="wrapper">
				<h2>Tech Used</h2>
				<div class="spacer" />
				<div class="scroll-wrapper">
					<div 
						:key="index"
						class="scroll" 
						v-for="(state, index) in techUsed" 
					>
						<TechUsedCard :data="state" />
					</div>
				</div>
			</div>
			<!--<div class="wrapper padding">
				<h2>Other Projects</h2>
				<div class="spacer" />
				<div class="tech-used">
					<div v-for="(data, index) in state.techUsed" :key="index">
							<TechUsedCard :data="data" />
					</div>
				</div>
			</div> -->
		</section>
		<Footer />
	</div>
</template>

<script>
import _ from 'lodash'
import { projects, skills } from '../../CONST'
import TechUsedCard from '../../components/TechUsedCard.vue'
import Footer from '../../components/Footer.vue'
import { TweenMax } from 'gsap'
export default {
	transitions: {
		mode: 'out-in',
    css: false,
		beforeEnter (el, done) {
			TweenMax.from('img', 2, {
        opacity: 0
      })
		},
		leave (el, done) {
      TweenMax.to('.image-wrapper', 1, {
        ease: Back.easeInOut, x: "-400%", opacity: 0
      })
      TweenMax.to(el, 1, {
        opacity: 0
      })
    }
	},
	components: {
		Footer,
		TechUsedCard
	},
	methods: {
		navigate(url) {
			window.open(url, '_blank')
		}
	},
	computed: {
		styleObject: function() {
			return {
				'--height': `280px`
			}
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
			},
			techUsed: [],
		}
	},
	created() {
		const params = this.$route.params.slug
		if (params) {
			this.state = projects.find(dt => dt.slug === params)
			const techs = _.flatMapDeep(skills.map(dt => dt.value))
			this.techUsed = techs.filter(dt => this.state.techUsed.includes(dt.slug))
		}
	}
}
</script>

<style lang="scss" scoped>

.background {
	top: 0px;
	right: 0px;
	overflow: hidden;
	object-fit: cover;
	position: absolute;
	width: 100%;
	height: 100vh;
	@media (min-width: 2000px) {
		height: 100vh;
	}
	@media (max-width: 768px) {
		height: 500px;
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
	@media (max-width: 768px) {
		height: 500px;
	}
}

.header {
	top: 0px;
	right: 0px;
	z-index: 2;
	width: 80%;
	height: 100vh;
	display: flex;
	margin-left: 10%;
	margin-bottom: 10vh;
	position: relative;
	align-items: center;
	flex-direction: column;
	@media (max-width: 768px) {
		height: 500px;
	}
	.title {
		width: 100%;
		display: flex;
		padding-top: 30px;
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
			@media (max-width: 768px) {
				width: 100%;
				right: 0%;
				padding: 5px;
				border-radius: 20px;
			}
			img {
				object-fit: cover;
				border-radius: 15px;
			}
		}
		.image-wrapper-mobile {
			width: 25%;
			left: 5%;
			top: 15vh;
			padding: 15px;
			position: absolute;
			border-radius: 30px;
			backdrop-filter: blur(20px);
			background: rgba(0, 0, 0, 0.2);
			border: solid 1px rgba(150, 150, 150, 0.5);
			@media (max-width: 768px) {
				width: 50%;
				top: 20vh;
				left: 10%;
				padding: 5px;
				border-radius: 20px;
			}
			img {
				object-fit: cover;
				border-radius: 15px;
			}
		}
	}
}

.wrapper {
	width: 70%;
	margin-left: 15%;
	display: flex;
	margin-bottom: 75px;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	.spacer {
		height: 1px;
		width: 100%;
		margin: 10px 0px;
		background: rgba(255, 255, 255, 0.4);
	}
	.button {
		padding: 2%;
		border: none;
		display: flex;
		color: white;
		margin-top: 2%;
		border-radius: 10px;
		transition: all 0.4s ease;
		justify-content: flex-start;
		background: rgba(255, 255, 255, 0.2);
		border: solid 1px rgba(255, 255, 255, 0.4);
		.arrow {
			width: 25px;
			margin-left: 20px;
		}
	}
}

.padding {
	padding-bottom: 10vh;
}

h1 {
	@media (max-width: 768px) {
		font-size: 28px;
	}
}

h2 {
	color: #FFFFFF;
  font-style: normal;
  text-align: center;
  font-family: 'Poppins';
	font-weight: 600;
	font-size: 32px;
	@media (max-width: 768px) {
		font-size: 20px;
	}
}

h3 {
	color: #FFFFFF;
  text-align: left;
  font-style: normal;
	font-family: 'Poppins';
	font-weight: 400;
	font-size: 20px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
}

a {
	font-size: 22px;
	color: #FFFFFF;
  text-align: left;
  font-style: normal;
	font-family: 'Poppins';
	font-weight: 400;
}

</style>