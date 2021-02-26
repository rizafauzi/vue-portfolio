<template>
	<div>
		<div v-if="showModal" @click="toggle()" class="backdrop" />
		<div class="assistive-wrapper">
			<div v-if="showModal" class="assistive-modal" v-bind:id="[showModal ? 'show' : 'hide']">
				<div @click="handleJump(data.goto)" class="list" v-for="(data, index) in state" :key="index" >
					<img :src="require(`~/assets/icon/${data.img}.png`)" />
					<h3>{{ data.label }}</h3>
				</div>
			</div>
			<div @click="toggle()" class="assistive-button">
				<div class="line" />
				<div class="line" />
				<div class="line" />
			</div>
		</div>
	</div>
</template>

<script>
import { hyperlink } from '../CONST'
export default {
	props: {
		jump: {
			type: Function
		}
	},
	methods: {
		toggle() {
			this.showModal = !this.showModal
		},
		handleJump(goto) {
			this.toggle()
			this.jump(goto)
		}
	},
	data() {
		return {
			showModal: false,
			state: hyperlink
		}
	}
}
</script>

<style lang="scss" scoped>
.backdrop {
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 999;
	height: 100vh;
	position: fixed;
	backdrop-filter: blur(10px);
	background: rgba(0, 0, 0, 0.1);
	animation: showModal 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
}

.assistive-wrapper {
	left: 50px;
	bottom: 50px;
	z-index: 1000;
	display: flex;
	position: fixed;
	align-items: flex-start;
	flex-direction: column;
	@media (max-width: 768px) {
		align-items: flex-end;
		right: 20px;
		bottom: 20px;
	}
	.assistive-modal {
		gap: 10px;
		width: 40vh;
		display: grid;
		padding: 10px;
		border-radius: 15px;
		backdrop-filter: blur(20px);
		background: rgba(0, 0, 0, 0.4);
		grid-template-columns: repeat(1, 1fr);
		border: solid 1px rgba(150, 150, 150, 0.4);
		animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
		.list {
			padding: 10px;
			display: flex;
			align-items: center;
			transition: all 0.2 ease;
			h3 {
				font-size: 22px;
				font-weight: 600;
			}
			img {
				width: 35px;
				height: 35px;
				margin-right: 15px;
			}
		}
	}
	.assistive-button {
		width: 80px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 10px;
		border-radius: 100px;
		backdrop-filter: blur(10px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.4);
		@media (max-width: 768px) {
			width: 50px;
			height: 50px;
		}
		.line {
			height: 4px;
			width: 60%;
			background: rgba(255, 255, 255, 0.5);
			margin: 3px 0px;
			border-radius: 2px;
		}
	}
}

@keyframes showModal {
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
}

@keyframes fadeIn {
	from {
    transform: translateY(20%) rotate(5deg) skew(0deg, 20deg);
    opacity: 0;
	}
	to {
    transform: translateY(0%) rotate(0deg) skew(0, 0deg);
    opacity: 1;
	}
}

.list:hover {
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.2);
}

.assistive-modal-enter-active, .assistive-modal-leave-active {
  transition: opacity .5s;
}

.assistive-wrapper:hover {
	cursor: pointer;
}

</style>