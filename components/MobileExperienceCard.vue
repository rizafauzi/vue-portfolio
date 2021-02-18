<template>
	<div class="wrapper-card" :style="styleObject">
		<div 
			class="time-wrapper" 
			v-bind:id="'start'" 
			v-bind:class="'left'"
		>
			<h3 class="time-text">{{data.startTime}}</h3>
		</div>
		<div 
			class="time-wrapper" 
			v-bind:id="'end'" 
			v-bind:class="'left'"
		>
			<h3 class="time-text">{{data.endTime}}</h3>
		</div>
		<div class="background-card" v-bind:class="'left'" />
		<div class="profile-card">
			<img 
				class="profile-image"
				:src="require(`~/assets/logo/${data.image}.png`)" 
			/>
			<div class="profile-content">
				<h1 class="spacer">{{data.title}}</h1>
				<h2>{{data.role}}</h2>
				<div class="buttons">
					<h3>See Detail</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		styleObject: function() {
			return {
				'--borderradius': this.odd ? '40px 0px 40px 40px' : '0px 40px 40px 40px',
				'--gradient': `linear-gradient(to bottom, ${this.data.firstColor}, ${this.data.secondColor})`,
				'--origin': this.odd ? 'top right' : 'top left',
				'--transform': this.odd ? 'rotate(10deg) skew(0deg, 5deg)' : 'rotate(-10deg) skew(0deg, -5deg)',
				'--position': this.odd ? 'right' : 'left',
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
	width: 90%;
	height: 250px;
	padding: 20px;
	display: flex;
	position: relative;
	margin-bottom: 5vh;
	.time-wrapper {
		height: auto;
		z-index: 100;
		padding: 5px 25px;
		position: absolute;
		border-radius: 20px;
		backdrop-filter: blur(20px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
	}
	.profile-card {
		top: 35px;
		left: 0%;
		width: 100%;
		height: 180px;
		padding: 20px;
		display: flex;
		position: absolute;
		align-items: center;
		flex-direction: row;
		justify-content: center;
		backdrop-filter: blur(30px);
		border-radius: 0px 20px 20px 20px;
		background: rgba(50, 50, 50, 0.1);
		border: solid 1px rgba(150, 150, 150, 0.5);
		transition: all 0.4s ease;
		.profile-content {
			padding: 4%;
			display: flex;
			margin-top: 2%;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			.buttons {
				border: none;
				width: 150px;
				padding: 10px;
				display: flex;
				margin-top: 10%;
				border-radius: 5px;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease-in-out;
				background: rgba(255, 255, 255, 0.2);
				border: solid 1px rgba(255, 255, 255, 0.4);
			}
		}
		.profile-image {
			width: 40%;
			height: 60%;
			object-fit: contain;
			flex-direction: row;
			justify-content: center;
		}
	}
	.background-card {
		top: 35px;
		width: 100%;
		height: 180px;
		position: absolute;
		background: var(--gradient);
		transform-origin: var(--origin);
		border-radius: 0px 20px 20px 20px;
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
	transform: var(--transform);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}

.button:hover {
	transform: scale(1.07);
}

h1 {
	color: white;
	font-size: 20px;
	line-height: 100%;
	text-align: left;
}

h2 {
	line-height: 100%;
	font-size: 14px;
	margin-top: 5px;
	color: #DDDDDD;
	text-align: center;
	letter-spacing: 1px;
	font-family: 'SF Pro Display Regular';
}

h3 {
	line-height: 100%;
	font-size: 12px;
	color: #DDDDDD;
	text-align: center;
	letter-spacing: 1px;
	font-family: 'SF Pro Display Regular';
}

.time-text {
	color: white;
	font-size: 12px;
}

</style>