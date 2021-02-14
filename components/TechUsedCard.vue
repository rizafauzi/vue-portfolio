<template>
	<div class="wrapper-card" :style="styleObject">
		<div class="background-card" v-bind:class="odd ? 'right' : 'left'" />
		<div class="profile-card">
			<img 
				class="profile-image"
				:src="require(`@/assets/logo/${data.image}`)" 
			/>
			<div class="profile-content">
				<h1 class="spacer">{{data.label}}</h1>
				<div class="button" @click="navigate(data.url)">
					<img 
						class="arrow"
						src="~/static/icon/arrow-line.png" 
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		navigate(url) {
			window.open(url, '_blank')
		}
	},
	computed: {
		styleObject: function() {
			return {
				'--gradient': `linear-gradient(to bottom, ${this.data.firstColor}, ${this.data.secondColor})`
			}
		}
	},
	props: {
		odd: {
			type: Boolean
		},
		data: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper-card {
	height: 45vh;
	width: 250px;
	display: flex;
	margin-right: 20px;
	position: relative;
	.time-wrapper {
		height: auto;
		z-index: 100;
		padding: 5px 25px;
		position: absolute;
		border-radius: 30px;
		backdrop-filter: blur(20px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
	}
	.profile-card {
		top: 0vh;
		left: 0%;
		width: 100%;
		height: 45vh;
		padding: 20px;
		display: flex;
		position: absolute;
		align-items: center;
		border-radius: 30px;
		flex-direction: column;
		backdrop-filter: blur(30px);
		justify-content: space-around;
		background: rgba(50, 50, 50, 0.1);
		border: solid 1px rgba(150, 150, 150, 0.5);
		transition: all 0.4s ease;
		.profile-content {
			padding: 4%;
			display: flex;
			margin-top: 2%;
			align-items: center;
			flex-direction: column;
			justify-content: space-around;
			.button {
				border: none;
				width: 60px;
				height: 60px;
				display: flex;
				margin-top: 3vh;
				border-radius: 40px;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease-in-out;
				background: rgba(0, 0, 0, 0.4);
				.arrow {
					transform: rotate(-45deg);
				}
			}
		}
		.profile-image {
			height: 35%;
			object-fit: contain;
			flex-direction: row;
			justify-content: center;
		}
	}
	.background-card {
		top: 0vh;
		width: 100%;
		height: 45vh;
		position: absolute;
		border-radius: 30px;
		background: var(--gradient);
		transform-origin: top left;
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
	}
}

#start {
	bottom: 0vh;
}

#end {
	top: 0vh;
}

.left {
	left: 0%;
}

.right {
	right: 0%;
}

.spacer {
	margin-top: 5%;
}


.wrapper-card:hover .background-card {
	width: 82%;
	transform: rotate(-10deg) skew(0deg, -5deg);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}

.button:hover {
	transform: scale(1.2);
}

h1 {
	color: white;
	font-size: 28px;
	line-height: 100%;
	text-align: center;
	margin-bottom: -5px;
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

.time-text {
	color: white;
	font-size: 16px;
	margin-top: 10px;
}

</style>