<template>
	<div class="container-card">
		<div class="background-card" :style="styleObject"/>
		<div class="wrapper-card">
			<div class="univ-logo">
				<img 
					class="logo-univ"
					:src="require(`~/assets/logo/${data.image}.png`)" 
				/>
			</div>
			<div class="univ-desc">
				<h1>{{ data.university }}</h1>
				<div class="spacer"></div>
				<h2>{{ data.faculty }}</h2>
				<h2>{{ data.major }}</h2>
				<a target="_blank" v-if="data.link" class="button" :href="data.link">
					<h3>Go to Website</h3>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		styleObject: function() {
			return {
				'--gradient': `linear-gradient(to bottom, ${this.data.firstColor}, ${this.data.secondColor})`
			}
		}
	},
	props: {
		data: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>

.container-card {
	width: 75%;
	display: flex;
	margin-bottom: 3%;
	position: relative;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	.background-card {
		top: 0%;
		left: 5%;
		width: 90%;
		height: 70%;
		position: absolute;
		border-radius: 20px;
		transform-origin: top left;
		background: var(--gradient);
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
	}
	.wrapper-card {
		width: 100%;
		display: flex;
		padding: 20px;
		flex-direction: row;
		.univ-logo {
			top: 10%;
			left: 0;
			width: 200px;
			height: 200px;
			display: flex;
			margin-right: 10px;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(40px);
			background: rgba(0, 0, 0, 0.2);
			border-radius: 0px 20px 20px 20px;
			border: solid 1px rgba(150, 150, 150, 0.5);
			.logo-univ {
				padding: 15%;
				object-fit: contain;
			}
		}
		.univ-desc {
			top: 10%;
			right: 0;
			width: 78%;
			display: flex;
			padding: 25px;
			border-radius: 20px;
			flex-direction: column;
			backdrop-filter: blur(40px);
			background: rgba(0, 0, 0, 0.2);
			border: solid 1px rgba(150, 150, 150, 0.5);
			.spacer {
				width: 100%;
				height: 1px;
				margin: 2% 0px 2% 0px;
				border-radius: 2px;
				background: #908F9B;
			}
			.button {
				border: none;
				width: 170px;
				display: flex;
				margin-top: 10px;
				border-radius: 10px;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease-in-out;
				background: rgba(255, 255, 255, 0.2);
				border: solid 1px rgba(255, 255, 255, 0.4);
			}
		}
	}
}

.wrapper-card:hover .background-card {
	width: 82%;
	transform: skew(0, 10deg);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}

h1 {
	text-align: left;
	font-weight: 600;
	font-size: 32px;
}

h2 {
	text-align: left;
}

h3 {
	line-height: 0%;
	font-size: 18px;
	color: #DDDDDD;
	text-align: center;
	letter-spacing: 1px;
	background: #845FC0;
	font-family: 'SF Pro Display Regular';
}

.button:hover {
	transform: scale(1.08);
}

.container-card:hover .background-card {
	left: 0%;
	width: 100%;
	height: 100%;
	border-radius: 0px 30px 30px 30px;
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}


</style>