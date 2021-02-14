<template>
	<div class="container">
		<div class="each-project" v-for="(state, index) in data" :key="index" >
			<EducationCard :data="state" />
		</div>
	</div>
</template>

<script>
import EducationCard from './EducationCard.vue'
export default {
	components: {
		EducationCard
	},
	props: {
    data: {
			type: Array,
		},
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 10vh 0vh;
	.each-project {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
}

#even {
	margin-top: 30vh;
}



</style>