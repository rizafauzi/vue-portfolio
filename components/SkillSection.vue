<template>
	<div class="container">
		<div class="wrapper">
			<div class="category" v-for="(data, index) in state" :key="index">
				<h2> {{ data.title }} </h2>
				<div class="spacer" />
				<div class="software-wrapper">
					<div class="each-software" v-for="(item, index) in data.value" :key="`${item.label}_${index}`">
						<div class="software-image">
							<img
								:src="require(`~/assets/logo/${item.img}.png`)"
							/>
						</div>
						<h3> {{ item.label }} </h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { skills } from '../CONST'
export default {
	data() {
		return {
			state: skills
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	.wrapper {
		width: 70%;
		display: flex;
		margin-left: 15%;
		margin-bottom: 15vh;
		flex-direction: column;
		@media (max-width: 768px) {
			width: 90%;
			margin-left: 5%;
		}
		.category {
			display: flex;
			margin-top: 50px;
			flex-direction: column;
			align-items: flex-start;
			h2 {
				font-weight: 600;
				font-size: 28px;
			}
			.spacer {
				height: 1px;
				width: 100%;
				margin: 10px 0px;
				border-radius: 2px;
				background: #908F9B;
			}
			.software-wrapper {
				display: grid;
				width: 100%;
				grid-template-columns: repeat(6, 1fr);
				@media (max-width: 768px) {
					grid-template-columns: repeat(4, 1fr);
				}
				grid-auto-rows: minmax(100px, auto);
				flex-direction: row;
				.each-software {
					display: flex;
					margin: 10px 0px;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					transition: all 0.3s ease-in-out;
					h3 {
						@media (max-width: 768px) {
							font-size: 10px;
						}
					}
					.software-image{ 
						width: 100px;
						display: flex;
						height: 100px;
						margin-bottom: 5px;
						align-items: center;
						border-radius: 10px;
						justify-content: center;
						border: solid 1px #999;
						box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
						@media (max-width: 768px) {
							width: 65px;
							height: 65px;
						}
						img {
							width: 80%;
							object-fit: 'contain';
						}
					}
				}
			}
		}
	}
}

.each-software:hover {
	cursor: pointer;
	transform: scale(1.15);
}
</style>