/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://boazerieangielskie.pl",
	generateRobotsTxt: true,
	exclude: ["/polityka-prywatnosci"],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: "*", disallow: "/polityka-prywatnosci" },
		],
	},
};
