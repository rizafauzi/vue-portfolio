<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      device: this.$store.getters['app/getDevice']
    }
  },
  // mounted() {
  //   if(window.innerWidth > window.innerHeight || this.device === 'DESKTOP') {
  //     window.scrollTo(0, 1)
  //     document.documentElement.style.setProperty('--htmltransform', `rotate(90deg)`)
  //     document.documentElement.style.setProperty('--htmlleft', `100%`)
  //   } else {
  //     document.documentElement.style.setProperty('--htmltransform', `rotate(0deg)`)
  //     document.documentElement.style.setProperty('--htmlleft', `100%`)
  //   }

  //   let _this = this
  //   window.addEventListener('resize', () => {
  //     if(window.innerWidth > window.innerHeight || _this.device === 'DESKTOP') {
  //       window.scrollTo(0, 1)
  //       document.documentElement.style.setProperty('--htmltransform', `rotate(90deg)`)
  //       document.documentElement.style.setProperty('--htmlleft', `100%`)
  //     } else {
  //       document.documentElement.style.setProperty('--htmltransform', `rotate(0deg)`)
  //       document.documentElement.style.setProperty('--htmlleft', `100%`)
  //     }
  //   })
  // }
}


</script>

<style lang="scss">

html {
	overflow: auto;
}


body {
  min-height:100%;
  height:100%;
  background: #1E1D3C;;
	font-family: 'Roboto', sans-serif;
}

h1 {
	color: #FFFFFF;
	font-size: 64px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 600;
	@media (max-width: 768px) {
		font-size: 32px;
	}
}

h2 {
	color: #FFFFFF;
	font-size: 22px;
  font-style: normal;
  text-align: center;
	font-family: 'Poppins';
	font-weight: 400;
}

h3 {
	color: #FFFFFF;
	font-family: 'Poppins';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.scroll-wrapper {
	width: 100%;
	white-space:nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	.scroll {
		width: 15em;
		height: 30em;
		overflow: hidden;
		margin-right: 2em;
		border-radius: 3px;
		overflow-y: hidden;
		position: relative;
		display:inline-block;
		@media (max-width: 768px) {
			width: 10em;
		}
	}
}

.scroll-wrapper::-webkit-scrollbar {
	display: none;
}
</style>
