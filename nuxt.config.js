const pkg = require('./package')
const path = require('path')

module.exports = {
	mode: 'spa',
	ssr: false,
	target: 'static',
	head: {
		title: 'Riza Fauzi',
		meta: [
			{ charset: 'utf-8' },
			{ name: "apple-mobile-web-app-capable", content: "yes" },
			{ hid: 'description', name: 'description', content: `Hi, I'm Riza Fauzi` },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, viewport-fit=cover' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// loading: { color: '#fff' },
	css: [
		'~/assets/font.css', 
		'~/assets/main.css', 
		'~/assets/scss/tailwind.scss',
		// 'swiper/css/swiper.css'
	],
  purgeCSS: { mode: 'postcss' },
	plugins: [
		// { src: '~/plugins/cometchat', ssr: false },
		// { src: '~/plugins/vue-carousel', ssr: false },
		// { src: '~/plugins/vue-plyr', mode: 'client' },
		// { src: '@/plugins/nuxt-swiper-plugin.js', mode: 'client' },
	],

	// pageTransition: {
  //   name: 'my-page',
  //   mode: 'out-in',
  // },

	loaders: {
		vue: {
			transformAssetUrls: {
				audio: 'src'
			}
		}
	},
	
	modules: [
		'@nuxtjs/auth',
		'nuxt-purgecss',
		// '@nuxtjs/axios',
		'@nuxtjs/bulma',
		'@ax2/lozad-module',
		'@nuxtjs/tailwindcss',
		'cookie-universal-nuxt',
		'@nuxtjs/markdownit'
	],
	markdownit: { injected: true },
	
	build: {
		extractCSS: {
      ignoreOrder: true
    },

		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

		extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
			});
			config.module.rules.push({
        test: /\.(htm|html)$/i,
        loader: 'html-loader'
      })
		},

		extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g|mov)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },

		extend(config, ctx) {
      config.module.rules.push({
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 1000, // 1kB
					name: 'fonts/[name].[hash:7].[ext]'
				}
			})
    },
		
		extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
	}
}
