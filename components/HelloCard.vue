<template>
	<div class="container">
		<div class="card" >
			<img 
				class="emoji"
				src="~/static/img/memoji_celebrate.png" 
			/>
			<!-- <video class="memoji" width="400" autoplay :src="require('~/assets/video/memoji.mov')" loop /> -->
			<h1>Hi, I'm Riza Fauzi</h1>
			<h2>Software Engineer • UI Designer • Fulltime Learner</h2>
			<div class="socal-media">
				
			</div>
		</div>
	</div>
</template>

<script>
// @mouseover="mouseOver" 
// 			@mouseleave="mouseLeave" 
// 			v-bind:style="{ transform: `scale(${scale}) rotateX(${yAxis}deg) rotateY(${xAxis}deg)` }"
export default {
	// data() {
	// 	return {
	// 		tracked: false,
	// 		xAxis: 0,
	// 		yAxis: 0,
	// 		scale: 1
	// 	}
	// },
	// methods: {
	// 	mouseOver() {
	// 		this.tracked = true
	// 		if(process.browser && this.tracked) {
	// 			this.scale = 1.2
	// 			window.addEventListener('mousemove', e => {
	// 				this.xAxis = -(window.innerWidth / 2 - e.pageX) / 15
	// 				this.yAxis = (window.innerHeight / 2 - e.pageY) / 15
	// 			})
	// 		}
	// 	},
	// 	mouseLeave() {
	// 		this.tracked = false
	// 		this.xAxis = 0
	// 		this.yAxis = 0
	// 		this.scale = 1
	// 	}
	// }
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
	.card {
		top: 10vh;
		width: 70%;
		height: 50vh;
		padding: 20px;
		display: flex;
		position: absolute;
		align-items: center;
		border-radius: 30px;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(40px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
		.emoji {
			width: 300px;
			height: 300px;
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

.card:hover {
	transform: scale(1.08);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.4);
}

h1 {
	color: #FFFFFF;
	font-size: 48px;
  font-style: normal;
  text-align: center;
  font-family: 'SF Pro Display Bold';
	@media (max-width: 768px) {
		font-size: 28px;
	}
}

h2 {
	color: #FFFFFF;
	font-size: 22px;
  font-style: normal;
  text-align: center;
  font-family: 'SF Pro Display Medium';
	@media (max-width: 768px) {
		font-size: 14px;
	}
}

</style>