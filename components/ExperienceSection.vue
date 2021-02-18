<template>
	<div class="container">
		<div v-if="!isMobile()" class="web-content">
			<div class="content">
				<div class="odd-experience" v-for="(state, index) in oddData" :key="index" >
					<ExperienceCard :odd="true" :data="state" />
				</div>
			</div>
			<div class="spacer" />
			<div class="content" id="even">
				<div class="even-experience" v-for="(state, index) in evenData" :key="index" >
					<ExperienceCard :odd="false" :data="state" />
				</div>
			</div>
		</div>
		<div v-else class="mobile-content">
			<div class="all-experience" v-for="(state, index) in data" :key="index" >
				<MobileExperienceCard :odd="false" :data="state" />
			</div>
		</div>
	</div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue'
import MobileExperienceCard from './MobileExperienceCard.vue'
export default {
	components: {
		ExperienceCard,
		MobileExperienceCard
	},
	data() {
		return {
			oddData: [],
			evenData: []
		}
	},
	methods: {
		isMobile() {
			if (process.browser) {
				if (window.innerWidth <= 768) {
					return true
				}
			}
		}
	},
	props: {
    data: {
			type: Array,
		},
	},
	created() {
		this.oddData = this.data.filter(dt => dt.id % 2 === 1)
		this.evenData = this.data.filter(dt => dt.id % 2 === 0)
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	position: relative;
	padding: 10vh 0vh;
	.web-content {
		width: 100%;
		display: flex;
		flex-direction: row;
		.content {
			width: 50%;
			.odd-experience {
				width: 100%;
				display: flex;
				padding-right: 10%;
				align-items: flex-end;
				flex-direction: column;
				justify-content: center;
			}
			.even-experience {
				width: 100%;
				display: flex;
				padding-left: 10%;
				align-items: flex-start;
				flex-direction: column;
				justify-content: center;
			}
		}
	}
	.mobile-content {
		width: 100%;
		.all-experience {
			width: 100%;
			display: flex;
			padding-left: 5%;
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;
		}
	}
	.spacer {
		width: 1px;
		border-radius: 2px;
		background: #908F9B;
	}
}

#even {
	margin-top: 30vh;
}



</style>