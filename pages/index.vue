<template>
	<section>
		<AssistiveTouch :jump="actionJump"  />
		<section id="header" class="wrapper">
			<img 
				class="background"
				src="~/static/img/background_home.jpg" 
			/>
			<Title :color="'#CBFFFF'" :title="title"/>
			<HelloCard />
		</section>
		<section id="about">
			<Title :color="'#EFFF8D'" :title="aboutTitle"/>
			<ProfileCard />
		</section>
		<section id="projects">
			<Title :color="'#FFDDA9'" :title="projectTitle"/>
			<div class="container">
				<div class="project-wrapper">
					<div class="each-project" v-for="(data, index) in projects" :key="index" >
						<ProjectCard :data="data" />
					</div>
				</div>
			</div>
		</section>
		<section>
			<Title :color="'#BEFFBD'" :title="softwareTitle"/>
			<SkillSection :data="educations"/>
		</section>
		<section>
			<Title :color="'#C6BDFF'" :title="experienceTitle"/>
			<ExperienceSection :data="experience"/>
		</section>
		<section>
			<Title :color="'#BEFFBD'" :title="educationTitle"/>
			<EducationSection :data="educations"/>
		</section>
		<section>
			<Footer :isHome="true"/>
		</section>
	</section>
</template>


<script>
import Title from '../components/Title.vue'
import Footer from '../components/Footer.vue'
import HelloCard from '../components/HelloCard.vue'
import ProfileCard from '../components/ProfileCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import AssistiveTouch from '../components/AssistiveTouch.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import EducationSection from '../components/EducationSection.vue'
import SkillSection from '../components/SkillSection.vue'
import { projects, experience, education } from '../CONST.js'
export default {
  components: {
		Title,
		Footer,
		HelloCard,
		ProfileCard,
		ProjectCard,
		SkillSection,
		AssistiveTouch,
		ExperienceCard,
		EducationSection,
		ExperienceSection
  },
  data() {
		return {
			educations: education,
			projects: projects,
			experience: experience,
			title: 'Sampurasun! 안녕하세요! Hello! もしもし! Sampurasun! 안녕하세요! Hello! もしもし! Sampurasun! 안녕하세요! Hello! もしもし!',
			aboutTitle: 'ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT',
			projectTitle: 'PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT',
			experienceTitle: 'EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE ',
			educationTitle: 'EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION EDUCATION ',
			softwareTitle: 'SOFTWARE-SKILLS SOFTWARE-SKILLS SOFTWARE-SKILLS SOFTWARE-SKILLS SOFTWARE-SKILLS SOFTWARE-SKILLS SOFTWARE-SKILLS'
		}
  },
  methods: {
		actionJump(e) {
			if (process.browser) {
				if (e === 'about' || e === 'projects') {
					const element = document.getElementById(e)
					element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				} else {
					window.open(e, '_blank')
				}
			}
		}
  }
}
</script>


<style lang="scss" scoped>
.wrapper {
	overflow: hidden;
	padding-top: 10vh; 
	position: relative;
	background: #1E1D3C;
	.background {
		top: 0px;
		right: 0px;
		object-fit: cover;
		position: absolute;
		width: 100%;
		height: 110vh;
		@media (min-width: 2000px) {
			height: 120vh;
		}
	}
}

.container {
	width: 75%;
	position: relative;
	@media (max-width: 768px) {
		width: 100%;
	}
}

.project-wrapper {
	width: 100%;
	padding: 10vh 0% 15vh 0%;
	.each-project {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
}

#about {
	height: 100vh;
}



h1 {
	color: #FFFFFF;
	font-size: 64px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 600;
}

h2 {
	color: #FFFFFF;
	font-size: 22px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 400;
}

</style>