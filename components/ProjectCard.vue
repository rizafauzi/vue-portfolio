<template>
	<div class="project-card">	
		<img 
			class="project-image"
			:src="require(`@/assets/projects/${data.image}_${isMobile ? 'desktop' : 'mobile'}.jpg`)" 
		/>
		<div class="project-content">
			<div>
				<h1>{{data.title}}</h1>
				<h2 class="spacer">{{data.year}}</h2>
			</div>
			<h2>{{data.summary}}</h2>
			<div class="button" @click="navigate(data.slug)">
				<h3>See Detail</h3>
				<img 
					class="arrow"
					src="~/static/icon/arrow-line.png" 
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		// styleObject: function() {
		// 	return {
		// 	}
		// }
	},
	methods: {
		isMobile() {
      if (process.browser) {
				if (window.innerWidth <= 768) {
					return true
				}
      }
    },
		navigate(url) {
			this.$router.push(`/project/${url}`)
		}
	},
	props: {
    data: {
			type: Object
		},
	},
}
// .project-card {
// 	width: 70%;
// 	height: 270px;
// 	padding: 20px;
// 	display: flex;
// 	margin-bottom: 3vh;
// 	border-radius: 30px;
// 	align-items: flex-start;
// 	background: rgba(61, 61, 61, 0.2);
// 	border: solid 1px rgba(150, 150, 150, 0.5);
// 	.project-image {
// 		width: 25%;
// 		height: 100%;
// 		object-fit: cover;
// 		border-radius: 20px;
// 		flex-direction: row;
// 		justify-content: center;
// 	}
// 	.project-content {
// 		width: 75%;
// 		height: 100%;
// 		display: flex;
// 		padding: 0% 3%;
// 		flex-direction: column;
// 		justify-content: space-between;
// 		.button {
// 			width: 35%;
// 			padding: 4%;
// 			border: none;
// 			display: flex;
// 			margin-top: 2%;
// 			border-radius: 10px;
// 			justify-content: space-between;
// 			background: rgba(255, 255, 255, 0.2);
// 			border: solid 1px rgba(255, 255, 255, 0.4);
// 			.arrow {
// 				width: 25px;
// 				margin-left: 20px;
// 			}
// 		}
// 	}
// }
</script>

<style lang="scss" scoped>
.project-card {
	width: 70%;
	height: 270px;
	padding: 20px;
	display: flex;
	margin-bottom: 3vh;
	border-radius: 30px;
	align-items: flex-start;
	background: rgba(61, 61, 61, 0.2);
	border: solid 1px rgba(150, 150, 150, 0.5);
	@media (max-width: 768px) {
		flex-direction: column;
		border-radius: 15px;
		height: 350px;
		padding: 10px;
	}
	.project-image {
		width: 25%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
		flex-direction: column;
		justify-content: center;
		@media (max-width: 768px) {
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
	.project-content {
		width: 75%;
		height: 100%;
		display: flex;
		padding: 0% 3%;
		flex-direction: column;
		justify-content: space-between;
		@media (max-width: 768px) {
			width: 100%;
			padding: 3% 0% 0% 0%;
		}
		.button {
			width: 40%;
			padding: 4%;
			border: none;
			display: flex;
			margin-top: 2%;
			border-radius: 10px;
			justify-content: space-between;
			background: rgba(255, 255, 255, 0.2);
			border: solid 1px rgba(255, 255, 255, 0.4);
			@media (max-width: 768px) {
				width: 100%;
			}
			.arrow {
				width: 25px;
				margin-left: 20px;
			}
		}
	}
}

.spacer {
	margin-bottom: 2%;
}

.project-card:hover {
	transform: scale(1.05);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.4);
	transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
}

h1 {
	font-size: 28px;
	text-align: left;
	@media (max-width: 768px) {
		font-size: 18px;
	}
}

h2 {
	font-size: 18px;
	text-align: left;
	color: #CDCDCD;
	@media (max-width: 768px) {
		font-size: 10px;
	}
}

h3 {
	color: #FFFFFF;
	font-size: 20px;
  text-align: left;
  font-family: 'SF Pro Display Bold';
	@media (max-width: 768px) {
		font-size: 12px;
	}
}



</style>