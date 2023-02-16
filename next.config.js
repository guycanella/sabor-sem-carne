/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'uploads-ssl.webflow.com',
				port: ''
			}
		]
	}
}

module.exports = nextConfig
