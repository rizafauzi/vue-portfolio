<template>
	<section>
		<img 
			class="background"
			:src="require(`~/assets/projects/virtual_playfest_desktop.jpg`)" 
		/>
		<div class="backdrop" />
		<div class="container">
			<div class="header">
				<div class="title">
					<h1>{{ state.title }}</h1>
					<h3>{{ state.startTime }} - {{ state.endTime }} </h3>
				</div>
			</div>
			<div class="wrapper">
				<div class="timeline">
					<div v-for="(data, index) in project" :key="index" class="each-timeline">
						<div class="routes">
							<div class="circle" />
							<div class="line" />
						</div>
						<div class="content">
							<h2>{{ data.title }}</h2>
							<div class="time-spend">
								<img class="calendar" src="~/static/icon/calendar.png" />
								<h3>{{ data.year }}</h3>
							</div>
							<h3>{{ data.summary }}</h3>
							<h3 class="title">Role</h3>
							<div class="spacer" />
							<h3>{{ data.role }}</h3>
							<h3 class="title">Tech Used</h3>
							<div class="spacer" />
							<h3>{{ state.website }}</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="wrapper">
				<h2>Activities</h2>
				<div class="spacer" />
			</div>
		</div>
	</section>
</template>

<script>
import TechUsedCard from '../../components/TechUsedCard.vue'
import { projects, experience } from '../../CONST'
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
				id: 4,
				slug: '',
				title: '',
				role: '',
				status: '',
				startTime: '',
				endTime: '',
				image: '',
				link: '',
				firstColor: '',
				secondColor: '',
			},
			project: []
		}
	},
	mounted() {
		console.log('ASD: ', this.state)
		console.log('Projects: ', this.project)
	},
	created() {
		const params = this.$route.params.slug

		console.log('params: ', projects.filter(dt => dt.slug === params)) 
		if (params) {
			this.state = experience.find(dt => dt.slug === params)
			this.project = projects.filter(dt => this.state.projects.includes(dt.slug))
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
}

.backdrop {
	top: 0px;
	right: 0px;
	z-index: 1;
	width: 100%;
	height: 100vh;
	position: absolute;
	backdrop-filter: blur(25px);
	background: linear-gradient(to bottom, rgba(30, 29, 60, 0.3), rgba(30, 29, 60, 0.7), #1E1D3C);
}

.header {
	top: 0px;
	right: 0px;
	z-index: 2;
	width: 70%;
	display: flex;
	margin-left: 15%;
	position: relative;
	align-items: center;
	flex-direction: column;
	.title {
		width: 100%;
		display: flex;
		margin-top: 30px;
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

.container {
	z-index: 100;
	.wrapper {
		width: 70%;
		display: flex;
		margin-left: 15%;
		margin-top: 50px;
		flex-direction: column;
		align-items: flex-start;
		@media (max-width: 768px) {
			width: 100%;
			margin-left: 0px;
		}
		.timeline {
			margin-top: 5vh;
			width: 80%;
			margin-left: 10%;
			.each-timeline {
				display: flex;
				.routes {
					width: 24px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.circle {
						width: 20px;
						height: 20px;
						border-radius: 50px;
						border: solid 4px aqua;
						@media (max-width: 768px) {
							width: 15px;
							height: 15px;
							border: solid 2px aqua;
						}
					}
					.line {
						width: 4px;
						height: 100%;
						margin-top: -3px;
						border-radius: 4px;
						background: aqua;
						@media (max-width: 768px) {
							margin-top: -1px;
							width: 2px;
						}
					}
				}
				.content {
					width: 100%;
					margin-left: 5%;
					padding-bottom: 8vh;
					h2 {
						text-align: start;
					}
					.title {
						color: white;
						margin-top: 30px;
						font-weight: 600;
					}
					.time-spend {
						display: flex;
						align-items: center;
						margin: -30px 0px -10px 0px;
						@media (max-width: 768px) {
								margin: -20px 0px -10px 0px;
						}
						h3 {
							color: white;
						}
						.calendar {
							margin-top: 10px;
							width: 30px;
							height: 30px;
							margin-right: 5px;
							@media (max-width: 768px) {
								width: 20px;
								height: 20px;
								margin-top: 5px;
							}
						}
					}
				}
			}
		}
		.tech-used {
			display: flex;
			flex-direction: row;
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
}


.spacer {
	height: 1px;
	width: 100%;
	margin: -20px 0px -20px 0px;
	background: rgba(255, 255, 255, 0.4);
	@media (max-width: 768px) {
		margin: -20px 0px -10px 0px;
	}
}

.button:hover {
	transform: scale(1.1);
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
	font-size: 28px;
  font-style: normal;
  text-align: center;
  font-family: 'Poppins';
	font-weight: 600;
	@media (max-width: 768px) {
		font-size: 20px;
	}
}

h3 {
	font-size: 20px;
	color: #CDCDCD;
  text-align: left;
  font-style: normal;
	font-family: 'Poppins';
	font-weight: 400;
	line-height: 130%;
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