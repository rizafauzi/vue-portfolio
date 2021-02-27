<template>
	<div class="footer-wrapper">
		<div v-if="isHome" @click="jumpToStart()" class="to-top">
			<img class="top-img" src="~/static/icon/arrow-line.png" />
		</div>
		<div v-else @click="jumpBack()" class="to-back">
			<h3>Back</h3>
		</div>
		<div class="closing">
			<h3>Designed and Developed by Riza Fauzi</h3>
			<h3>© 2021 All Rights Reserved.</h3>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isHome: {
			type: Boolean,
			default() {
				return false
			}
		}
	},
	methods: {
		jumpBack() {
			if (process.browser) {
				window.history.back();
			}
		},
		jumpToStart() {
			if (process.browser) {
				const element = document.getElementById('header')
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}
			}
		}
	}
}

	
</script>

<style lang="scss" scoped>
.footer-wrapper {
	width: 100%;
	height: 20vh;
	position: relative;
	background: linear-gradient(to top left,#5026B5, #C968E0, #FD7FB9, #FFBBAB);
	.to-top {
		top: -30px;
		width: 60px;
		height: 60px;
		display: flex;
		position: absolute;
		align-items: center;
		border-radius: 100px;
		justify-content: center;
		right: calc(50% - 25px);
		backdrop-filter: blur(20px);
		background: rgba(255, 255, 255, 0.3);
		border: solid 1px rgba(255, 255, 255, 0.8);
		.top-img {
			width: 60%;
			height: 60%;
			object-fit: contain;
			transform: rotate(-90deg);
		}
	}
	.to-back {
		top: -25px;
		display: flex;
		padding: 10px 30px;
		position: absolute;
		align-items: center;
		border-radius: 100px;
		justify-content: center;
		right: calc(50% - 30px);
		backdrop-filter: blur(20px);
		background: rgba(255, 255, 255, 0.3);
		border: solid 1px rgba(255, 255, 255, 0.8);
	}
	.closing {
		width: 100%;
		bottom: 3vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding: 20px;
		position: absolute;
	}
}

h3 {
	@media (max-width: 768px) {
		font-size: 12px;
	}
}

.to-top:hover {
	cursor: pointer;
}

.to-back:hover {
	cursor: pointer;
}

</style>
