import {
	a as ir,
	b as sr,
	c as lr
} from "./chunk-5FAG25PE.mjs";
import {
	a as $t
} from "./chunk-TLKDTP5E.mjs";
import {
	a as wt,
	b as kt,
	c as St
} from "./chunk-YKT23XKM.mjs";
import {
	a as rr,
	b as or,
	c as nr
} from "./chunk-RYN5JI7G.mjs";
import {
	a as et
} from "./chunk-NU65Y5GH.mjs";
import {
	a as Qt
} from "./chunk-LZGWEU2R.mjs";
import {
	a as Yt
} from "./chunk-DJB6T62W.mjs";
import {
	a as cr,
	b as dr,
	c as mr
} from "./chunk-2WIFT7UF.mjs";
import "./chunk-42U43NKG.mjs";
import {
	a,
	b as V
} from "./chunk-Z3YWSFEC.mjs";
import {
	A as Ja,
	G as he,
	H as Jt,
	J as n,
	M as H,
	N as yt,
	O as bt,
	P as G,
	Q as Qa,
	S as Z,
	T as Ya,
	V as $a,
	Y as F,
	_ as vt,
	b as Kt,
	c as Ce,
	ca as se,
	d as Ga,
	da as pe,
	ea as er,
	f as Wa,
	fa as tr,
	g as $,
	ga as ar,
	h as Ha,
	ia as ge,
	j as fe,
	k as z,
	ka as xt,
	l as ne,
	m as $e,
	ma as He,
	n as ie,
	na as Te,
	o as q,
	oa as le,
	p as ee,
	pa as X,
	r as Zt,
	s as Xt,
	t as p,
	u as te,
	v as Ka,
	w as Pe,
	x as Za,
	y as We,
	z as Xa
} from "./chunk-RTHXSB7Z.mjs";
import {
	b as v,
	c as y
} from "./chunk-ELYU6EKT.mjs";
var ur = {
		position: "relative",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	lo = {
		...ur,
		borderRadius: 6,
		background: "rgba(136, 85, 255, 0.3)",
		color: "#85F",
		border: "1px dashed #85F",
		flexDirection: "column"
	},
	ea = {
		onClick: {
			type: n.EventHandler
		},
		onMouseEnter: {
			type: n.EventHandler
		},
		onMouseLeave: {
			type: n.EventHandler
		}
	},
	co = {
		type: n.Number,
		title: "Font Size",
		min: 2,
		max: 200,
		step: 1,
		displayStepper: !0
	},
	mo = {
		font: {
			type: n.Boolean,
			title: "Font",
			defaultValue: !1,
			disabledTitle: "Default",
			enabledTitle: "Custom"
		},
		fontFamily: {
			type: n.String,
			title: "Family",
			placeholder: "Inter",
			hidden: ({
				font: e
			}) => !e
		},
		fontWeight: {
			type: n.Enum,
			title: "Weight",
			options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
			hidden: ({
				font: e
			}) => !e
		}
	};

function ta(e, t) {
	return pr(!0, e, t)
}

function aa(e, t) {
	return pr(!1, e, t)
}

function pr(e, t, r = !0) {
	let o = bt();
	z(() => {
		r && o === e && t()
	}, [o])
}

function Ct(e) {
	let t = q(null);
	return t.current === null && (t.current = e()), t.current
}
var uo = () => {
		if (typeof v < "u") {
			let e = v.userAgent.toLowerCase();
			return (e.indexOf("safari") > -1 || e.indexOf("framermobile") > -1 || e.indexOf("framerx") > -1) && e.indexOf("chrome") < 0
		} else return !1
	},
	ra = () => ie(() => uo(), []);

function oa() {
	return ie(() => he.current() === he.canvas, [])
}

function na(e) {
	let {
		borderRadius: t,
		isMixedBorderRadius: r,
		topLeftRadius: o,
		topRightRadius: i,
		bottomRightRadius: s,
		bottomLeftRadius: c
	} = e;
	return ie(() => r ? `${o}px ${i}px ${s}px ${c}px` : `${t}px`, [t, r, o, i, s, c])
}
var ia = {
	borderRadius: {
		title: "Radius",
		type: n.FusedNumber,
		toggleKey: "isMixedBorderRadius",
		toggleTitles: ["Radius", "Radius per corner"],
		valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
		valueLabels: ["TL", "TR", "BR", "BL"],
		min: 0
	}
};
var fo = {
	padding: {
		type: n.FusedNumber,
		toggleKey: "paddingPerSide",
		toggleTitles: ["Padding", "Padding per side"],
		valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
		valueLabels: ["T", "R", "B", "L"],
		min: 0,
		title: "Padding"
	}
};
var sa = e => e instanceof Zt;

function hr(e, t) {
	let r = q(t),
		o = q(),
		i = q(!1),
		s = he.current() === he.canvas,
		c = t?.onChangeDeps ? t.onChangeDeps : [],
		h = fe(t?.onChange, [...c]),
		u = fe(m => {
			var l;
			return !((l = r.current) === null || l === void 0) && l.transform ? r.current.transform(m) : m
		}, []),
		d = Ct(() => sa(e) ? e : Xt(u(e)));
	return z(() => {
		if (!sa(e) && i.current) {
			var m, l;
			let b = u(e);
			if ((m = o.current) === null || m === void 0 || m.stop(), h && h(b, d), !((l = r.current) === null || l === void 0) && l.animate && !s) {
				var P;
				o.current = Jt(d, b, (P = r.current) === null || P === void 0 ? void 0 : P.transition)
			} else d.set(b)
		}
		i.current = !0
	}, [e, ...c]), d
}
var Me;
(function(e) {
	e.Fill = "fill", e.Contain = "contain", e.Cover = "cover", e.None = "none", e.ScaleDown = "scale-down"
})(Me || (Me = {}));
var xe;
(function(e) {
	e.Video = "Upload", e.Url = "URL"
})(xe || (xe = {}));

function ho(e) {
	let {
		width: t,
		height: r,
		topLeft: o,
		topRight: i,
		bottomRight: s,
		bottomLeft: c,
		id: h,
		children: u,
		...d
	} = e;
	return d
}

function Ve(e) {
	let t = ho(e);
	return a(go, {
		...t
	})
}
var gr = !1,
	go = Ha(function(t) {
		let {
			srcType: r,
			srcFile: o,
			srcUrl: i,
			playing: s,
			canvasPlay: c,
			muted: h,
			playsinline: u,
			controls: d,
			progress: m,
			objectFit: l,
			backgroundColor: P,
			radius: b,
			topLeft: g,
			topRight: j,
			bottomRight: S,
			bottomLeft: T,
			isMixed: x,
			onSeeked: M,
			onPause: w,
			onPlay: I,
			onEnd: A,
			onClick: f,
			onMouseEnter: J,
			onMouseLeave: Q,
			onMouseDown: Y,
			onMouseUp: O,
			poster: E,
			restartOnEnter: ke,
			posterEnabled: L,
			startTime: K,
			volume: Ee,
			loop: Re
		} = t, oe = bt(), R = q(), Be = ra(), Se = q(!1), je = q(null), ce = q(null), be = oa(), W = na(t), de = K === 100 ? 99.9 : K, Ie = !be || c, ae = ie(() => s, []), Et = ie(() => be ? !0 : h, [be, h]), De = fe(N => {
			if (!R.current) return;
			let Je = (N === 1 ? .999 : N) * R.current.duration,
				Bt = Math.abs(R.current.currentTime - Je) < .1;
			R.current.duration > 0 && !Bt && (R.current.currentTime = Je)
		}, []), Ne = fe(() => {
			!(R.current.currentTime > 0 && R.current.onplaying && !R.current.paused && !R.current.ended && R.current.readyState > R.current.HAVE_CURRENT_DATA) && R.current && !Se.current && oe && (Se.current = !0, R.current.play().catch(Je => {}).finally(() => Se.current = !1))
		}, []), ct = fe(() => {
			!R.current || Se.current || R.current.pause()
		}, []);
		z(() => {
			s && Ie ? Ne() : ct()
		}, [s, c]), z(() => {
			gr ? De(de * .01) : gr = !0
		}, [K, o, i]);
		let dt = hr(m, {
			transform: N => N * .01,
			onChange: N => {
				De(N)
			}
		});
		Za(dt, "change", N => {
			be || De(N)
		}), ta(() => {
			je.current !== null && R.current && (!ce && Re || !je.current) && Ne()
		}), aa(() => {
			R.current && (ce.current = R.current.ended, je.current = R.current.paused, ct())
		});
		let mt = ie(() => {
			if (r === xe.Url) return i;
			if (r === xe.Video) return o
		}, [r, o, i]);
		return z(() => {
			Be && R.current && ae && setTimeout(() => Ne(), 50)
		}, []), z(() => {
			R.current && !h && (R.current.volume = Ee / 100)
		}, [Ee]), a("video", {
			onClick: f,
			onMouseEnter: J,
			onMouseLeave: Q,
			onMouseDown: Y,
			onMouseUp: O,
			src: mt,
			loop: Re,
			ref: R,
			onSeeked: N => M?.(N),
			onPause: N => w?.(N),
			onPlay: N => I?.(N),
			onEnded: N => A?.(N),
			autoPlay: ae && Ie,
			poster: L ? E : void 0,
			onLoadedData: () => {
				R.current && R.current.currentTime < .3 && De(de * .01), Ie && R.current && ae && Ne()
			},
			controls: d,
			muted: Et,
			playsInline: u,
			style: {
				width: "100%",
				height: "100%",
				borderRadius: W,
				display: "block",
				objectFit: l,
				backgroundColor: P,
				objectPosition: "50% 50%"
			}
		})
	});
Ve.displayName = "Video";
Ve.defaultProps = {
	srcType: xe.Url,
	srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
	srcFile: "",
	posterEnabled: !1,
	controls: !1,
	autoPlay: !0,
	canvasPlay: !1,
	loop: !0,
	muted: !0,
	playsinline: !0,
	restartOnEnter: !1,
	objectFit: Me.Cover,
	backgroundColor: "rgba(0,0,0,0)",
	radius: 0,
	volume: 25,
	startTime: 0
};
H(Ve, {
	srcType: {
		type: n.Enum,
		displaySegmentedControl: !0,
		title: "Source",
		options: [xe.Url, xe.Video]
	},
	srcUrl: {
		type: n.String,
		title: " ",
		placeholder: "../example.mp4",
		hidden(e) {
			return e.srcType === xe.Video
		},
		description: "Hosted video file URL. For Youtube, use the Youtube component."
	},
	srcFile: {
		type: n.File,
		title: " ",
		allowedFileTypes: ["mp4"],
		hidden(e) {
			return e.srcType === xe.Url
		}
	},
	playing: {
		type: n.Boolean,
		title: "Playing",
		enabledTitle: "Yes",
		disabledTitle: "No"
	},
	posterEnabled: {
		type: n.Boolean,
		title: "Poster",
		enabledTitle: "Yes",
		disabledTitle: "No"
	},
	poster: {
		type: n.Image,
		title: " ",
		hidden: ({
			posterEnabled: e
		}) => !e
	},
	backgroundColor: {
		type: n.Color,
		title: "Background"
	},
	...ia,
	startTime: {
		title: "Start Time",
		type: n.Number,
		min: 0,
		max: 100,
		step: .1,
		unit: "%"
	},
	loop: {
		type: n.Boolean,
		title: "Loop",
		enabledTitle: "Yes",
		disabledTitle: "No"
	},
	objectFit: {
		type: n.Enum,
		title: "Fit",
		options: [Me.Cover, Me.Fill, Me.Contain, Me.ScaleDown, Me.None]
	},
	canvasPlay: {
		type: n.Boolean,
		title: "On Canvas",
		enabledTitle: "Play",
		disabledTitle: "Pause",
		hidden(e) {
			return e.autoPlay === !1
		}
	},
	controls: {
		type: n.Boolean,
		title: "Controls",
		enabledTitle: "Show",
		disabledTitle: "Hide"
	},
	muted: {
		type: n.Boolean,
		title: "Muted",
		enabledTitle: "Yes",
		disabledTitle: "No"
	},
	volume: {
		type: n.Number,
		max: 100,
		min: 0,
		unit: "%",
		hidden: ({
			muted: e
		}) => e
	},
	onEnd: {
		type: n.EventHandler
	},
	onSeeked: {
		type: n.EventHandler
	},
	onPause: {
		type: n.EventHandler
	},
	onPlay: {
		type: n.EventHandler
	},
	...ea
});

function we(e) {
	let t = `https://dev.onlycord.de/unpkg.com/simple-icons@v8/icons/${e.icon}.svg`,
		[r, o] = ee(null),
		i = q(null);
	return z(() => {
		fetch(t).then(s => s.text()).then(s => {
			let h = new DOMParser().parseFromString(s, "image/svg+xml");
			o(h.documentElement), console.log(r)
		})
	}, [t]), z(() => {
		if (r) {
			let s = i.current.querySelector("svg");
			s && i.current.removeChild(s), Object.assign(r.style, {
				fill: e.customColor
			}), i.current.appendChild(r)
		}
	}, [r]), z(() => {
		r && Object.assign(r.style, {
			fill: e.customColor
		})
	}, [e.customColor]), a("div", {
		ref: i
	})
}
we.defaultProps = {
	icon: "framer",
	customColor: "#ffffff"
};
H(we, {
	icon: {
		type: n.Enum,
		defaultValue: we.defaultProps.icon,
		description: "Find every icon name on the [Simple Icons site](https://simpleicons.org/)",
		options: ["dotenv", "dotnet", "e", "1001tracklists", "1password", "3m", "42", "4chan", "4d", "500px", "aframe", "abbrobotstudio", "abbott", "abbvie", "abletonlive", "aboutdotme", "abstract", "academia", "accenture", "acclaim", "accusoft", "acer", "acm", "actigraph", "activision", "adafruit", "adblock", "adblockplus", "addthis", "adguard", "adidas", "adminer", "adobe", "adobeacrobatreader", "adobeaftereffects", "adobeaudition", "adobecreativecloud", "adobedreamweaver", "adobefonts", "adobeillustrator", "adobeindesign", "adobelightroom", "adobelightroomclassic", "adobephotoshop", "adobepremierepro", "adobexd", "adonisjs", "adp", "adyen", "aerlingus", "aeroflot", "aeromexico", "aerospike", "aew", "affinity", "affinitydesigner", "affinityphoto", "affinitypublisher", "agora", "aidungeon", "aib", "aiohttp", "aiqfome", "aircanada", "airchina", "airfrance", "airasia", "airbnb", "airbus", "airbyte", "aircall", "airplayaudio", "airplayvideo", "airtable", "ajv", "akamai", "alacritty", "albertheijn", "alchemy", "aldinord", "aldisud", "alfaromeo", "alfred", "algolia", "algorand", "alibabacloud", "alibabadotcom", "aliexpress", "alipay", "alitalia", "allegro", "alliedmodders", "allocine", "alltrails", "alpinelinux", "alpinedotjs", "altiumdesigner", "alwaysdata", "amazon", "amazonalexa", "amazonapigateway", "amazonaws", "amazoncloudwatch", "amazondynamodb", "amazonec2", "amazonecs", "amazoneks", "amazonfiretv", "amazongames", "amazonlumberyard", "amazonpay", "amazonprime", "amazonrds", "amazons3", "amazonsqs", "amd", "americanairlines", "americanexpress", "amg", "amp", "amul", "ana", "anaconda", "analogue", "anchor", "andela", "android", "androidauto", "androidstudio", "angellist", "angular", "angularuniversal", "angularjs", "anilist", "ansible", "answer", "ansys", "antdesign", "anta", "antena3", "anydesk", "aol", "apache", "apacheairflow", "apacheant", "apachecassandra", "apachecloudstack", "apachecordova", "apachecouchdb", "apachedruid", "apacheecharts", "apacheflink", "apachegroovy", "apachehadoop", "apachehive", "apachejmeter", "apachekafka", "apachekylin", "apachemaven", "apachenetbeanside", "apacheopenoffice", "apachepulsar", "apacherocketmq", "apachesolr", "apachespark", "apachetomcat", "aparat", "apollographql", "apostrophe", "appstore", "appian", "apple", "applearcade", "applemusic", "applenews", "applepay", "applepodcasts", "appletv", "appsignal", "appveyor", "appwrite", "aqua", "aral", "arangodb", "archlinux", "archicad", "archiveofourown", "ardour", "arduino", "argo", "argos", "arkecosystem", "arlo", "arm", "artifacthub", "artixlinux", "artstation", "arxiv", "asana", "asciidoctor", "asciinema", "asda", "aseprite", "askubuntu", "askfm", "assemblyscript", "astonmartin", "astro", "asus", "atandt", "atari", "atlassian", "atom", "auchan", "audacity", "audi", "audible", "audiotechnica", "audioboom", "audiomack", "aurelia", "auth0", "authy", "autodesk", "autohotkey", "automattic", "autoprefixer", "avajs", "avast", "awesomelists", "awesomewm", "awsamplify", "awsfargate", "awslambda", "axios", "azureartifacts", "azuredataexplorer", "azuredevops", "azurefunctions", "azurepipelines", "bandrautomation", "babel", "backblaze", "backbonedotjs", "backendless", "backstage", "badgr", "badoo", "baidu", "bamboo", "bandcamp", "bandlab", "bandsintown", "bankofamerica", "barclays", "baremetrics", "basecamp", "bastyon", "bata", "bathasu", "battledotnet", "bbc", "bbciplayer", "beatport", "beats", "beatsbydre", "behance", "beijingsubway", "bem", "bentley", "betfair", "bigcartel", "bigbasket", "bigbluebutton", "bigcommerce", "bilibili", "billboard", "bim", "binance", "biolink", "bit", "bitbucket", "bitcoin", "bitcoincash", "bitcoinsv", "bitdefender", "bitly", "bitrise", "bitwarden", "bitwig", "blackberry", "blazemeter", "blazor", "blender", "blockchaindotcom", "blogger", "bloglovin", "blueprint", "bluetooth", "bmcsoftware", "bmw", "boardgamegeek", "boehringeringelheim", "boeing", "bookalope", "bookbub", "bookmeter", "bookmyshow", "bookstack", "boost", "boots", "bootstrap", "borgbackup", "bosch", "bose", "boulanger", "bower", "box", "boxysvg", "brandfolder", "brave", "breaker", "britishairways", "broadcom", "bt", "buddy", "budibase", "buefy", "buffer", "bugatti", "bugcrowd", "bugsnag", "buildkite", "bukalapak", "bulma", "bun", "bunq", "burgerking", "burton", "buymeacoffee", "buzzfeed", "bvg", "byjus", "byte", "bytedance", "c", "csharp", "cplusplus", "cachet", "cafepress", "caffeine", "cairographics", "cairometro", "cakephp", "campaignmonitor", "canonical", "canva", "capacitor", "carthrottle", "carrefour", "carto", "cashapp", "castbox", "castorama", "castro", "caterpillar", "cbs", "cdprojekt", "celery", "centos", "ceph", "cesium", "chai", "chainguard", "chainlink", "chakraui", "chartdotjs", "chartmogul", "chase", "chatbot", "checkio", "checkmarx", "chef", "chemex", "chevrolet", "chinaeasternairlines", "chinasouthernairlines", "chocolatey", "chromecast", "chrysler", "chupachups", "cilium", "cinema4d", "circle", "circleci", "cirrusci", "cisco", "citrix", "citroen", "civicrm", "civo", "ckeditor4", "claris", "clickhouse", "clickup", "clion", "cliqz", "clockify", "clojure", "cloud66", "cloudfoundry", "cloudbees", "cloudcannon", "cloudera", "cloudflare", "cloudflarepages", "cloudsmith", "cloudways", "clubhouse", "clyp", "cmake", "cncf", "cnn", "coop", "cockpit", "cockroachlabs", "cocoapods", "cocos", "coda", "codacy", "codeclimate", "codereview", "codeberg", "codecademy", "codeceptjs", "codechef", "codecov", "codefactor", "codeforces", "codeigniter", "codemagic", "codemirror", "codenewbie", "codepen", "codeproject", "codersrank", "coderwall", "codesandbox", "codeship", "codewars", "codingninjas", "codingame", "codio", "coffeescript", "cognizant", "coil", "coinbase", "coinmarketcap", "commerzbank", "commitlint", "commodore", "commonworkflowlanguage", "composer", "comsol", "conan", "concourse", "condaforge", "conekta", "confluence", "construct3", "consul", "contactlesspayment", "containerd", "contentful", "conventionalcommits", "convertio", "cookiecutter", "cora", "coronaengine", "coronarenderer", "corsair", "couchbase", "counterstrike", "countingworkspro", "coursera", "coveralls", "cpanel", "craftcms", "cratedb", "crayon", "createreactapp", "creativecommons", "creativetechnology", "credly", "crehana", "criticalrole", "crowdin", "crowdsource", "crunchbase", "crunchyroll", "cryengine", "crystal", "cssmodules", "csswizardry", "css3", "cts", "cucumber", "cultura", "curl", "curseforge", "cycling74", "cypress", "cytoscapedotjs", "d", "dedge", "dwavesystems", "d3dotjs", "dacia", "daf", "dailymotion", "daimler", "daisyui", "dapr", "darkreader", "dart", "darty", "daserste", "dash", "dashlane", "dask", "dassaultsystemes", "datadotai", "databricks", "datacamp", "datadog", "datagrip", "dataiku", "datastax", "dataverse", "datocms", "datto", "dazn", "dblp", "dbt", "dcentertainment", "delonghi", "debian", "deepin", "deepnote", "deezer", "delicious", "deliveroo", "dell", "delphi", "delta", "deno", "dependabot", "derspiegel", "designernews", "deutschebahn", "deutschebank", "devdotto", "devexpress", "deviantart", "devpost", "devrant", "dgraph", "dhl", "diagramsdotnet", "dialogflow", "diaspora", "digg", "digikeyelectronics", "digitalocean", "dior", "directus", "discogs", "discord", "discourse", "discover", "disqus", "disroot", "django", "dlib", "dlna", "dm", "docker", "docsdotrs", "docusign", "dogecoin", "dolby", "doordash", "douban", "doubanread", "dovecot", "dpd", "dragonframe", "draugiemdotlv", "dribbble", "drone", "drooble", "dropbox", "drupal", "dsautomobiles", "dtube", "ducati", "duckdb", "duckduckgo", "dungeonsanddragons", "dunked", "duolingo", "dvc", "dwm", "dynamics365", "dynatrace", "edotleclerc", "e3", "ea", "eagle", "easyjet", "ebay", "eclipseche", "eclipseide", "eclipsejetty", "eclipsemosquitto", "eclipsevertdotx", "edeka", "editorconfig", "edx", "egghead", "egnyte", "eightsleep", "eljueves", "elastic", "elasticcloud", "elasticstack", "elasticsearch", "electron", "electronfiddle", "electronbuilder", "element", "elementary", "elementor", "eleventy", "elgato", "elixir", "ello", "elm", "elsevier", "embarcadero", "emberdotjs", "emby", "emirates", "emlakjet", "empirekred", "engadget", "enpass", "enterprisedb", "envato", "envoyproxy", "epel", "epicgames", "epson", "equinixmetal", "erlang", "esbuild", "esea", "eslgaming", "eslint", "esphome", "espressif", "etcd", "ethereum", "ethiopianairlines", "etihadairways", "etsy", "eventstore", "eventbrite", "evernote", "exercism", "exordo", "exoscale", "expensify", "expertsexchange", "expo", "express", "expressvpn", "eyeem", "fdroid", "fsecure", "f1", "f5", "facebook", "facebookgaming", "facebooklive", "faceit", "facepunch", "falcon", "fampay", "fandango", "fandom", "fanfou", "fantom", "farfetch", "fastapi", "fastify", "fastlane", "fastly", "fathom", "fauna", "favro", "feathub", "fedex", "fedora", "feedly", "ferrari", "ferrarinv", "ffmpeg", "fiat", "fidoalliance", "fifa", "fig", "figma", "figshare", "fila", "files", "filezilla", "fing", "firebase", "firefox", "firefoxbrowser", "fireship", "firewalla", "first", "fitbit", "fite", "fivem", "fiverr", "flask", "flat", "flathub", "flatpak", "flattr", "flickr", "flipboard", "flipkart", "floatplane", "flood", "fluentbit", "fluentd", "flutter", "fluxus", "flyway", "fmod", "fnac", "folium", "fonoma", "fontawesome", "fontbase", "fontforge", "foodpanda", "ford", "forestry", "formstack", "fortinet", "fortran", "fossa", "fossilscm", "foursquare", "foursquarecityguide", "fox", "foxtel", "fozzy", "framer", "framework7", "franprix", "fraunhofergesellschaft", "freebsd", "freecodecamp", "freedesktopdotorg", "freelancer", "freenas", "frontendmentor", "fugacloud", "fujifilm", "fujitsu", "funimation", "furaffinity", "furrynetwork", "futurelearn", "g2", "g2a", "gameandwatch", "gamedeveloper", "gamejolt", "garmin", "gatling", "gatsby", "geant", "geeksforgeeks", "generalelectric", "generalmotors", "genius", "gentoo", "geocaching", "gerrit", "ghost", "ghostery", "gimp", "giphy", "git", "gitextensions", "gitlfs", "gitbook", "gitea", "gitee", "github", "githubactions", "githubpages", "githubsponsors", "gitignoredotio", "gitkraken", "gitlab", "gitpod", "gitter", "glassdoor", "glitch", "globus", "gmail", "gnome", "gnometerminal", "gnu", "gnubash", "gnuemacs", "gnuicecat", "gnuprivacyguard", "gnusocial", "go", "gocd", "godaddy", "godotengine", "gofundme", "gogdotcom", "goland", "goldenline", "goodreads", "google", "googleadmob", "googleads", "googleadsense", "googleanalytics", "googleassistant", "googlecalendar", "googlecardboard", "googlechat", "googlechrome", "googleclassroom", "googlecloud", "googlecolab", "googledomains", "googledrive", "googleearth", "googlefit", "googlefonts", "googlehangouts", "googlehome", "googlekeep", "googlelens", "googlemaps", "googlemarketingplatform", "googlemeet", "googlemessages", "googlemybusiness", "googlenearby", "googlenews", "googleoptimize", "googlepay", "googlephotos", "googleplay", "googlepodcasts", "googlescholar", "googlesearchconsole", "googlesheets", "googlestreetview", "googletagmanager", "googletranslate", "gotomeeting", "grab", "gradle", "grafana", "grammarly", "grandfrais", "graphql", "grav", "gravatar", "graylog", "greenhouse", "greensock", "griddotai", "gridsome", "groupme", "groupon", "grubhub", "grunt", "gsk", "gtk", "guangzhoumetro", "guilded", "gulp", "gumroad", "gumtree", "gunicorn", "gurobi", "gutenberg", "habr", "hackclub", "hackthebox", "hackaday", "hackernoon", "hackerearth", "hackerone", "hackerrank", "hackster", "handlebarsdotjs", "handshake", "handshake_protocol", "happycow", "harbor", "harmonyos", "hashnode", "haskell", "hasura", "hatenabookmark", "haveibeenpwned", "haxe", "hbo", "hcl", "headlessui", "headspace", "hedera", "hellofresh", "hellyhansen", "helm", "helpscout", "helpdesk", "here", "heroku", "hetzner", "hexo", "hey", "hibob", "hibernate", "hilton", "hitachi", "hive", "hive_blockchain", "homeassistant", "homeassistantcommunitystore", "homeadvisor", "homebrew", "homebridge", "homify", "honda", "honey", "hootsuite", "hoppscotch", "hotelsdotcom", "hotjar", "houdini", "houzz", "hp", "htmlacademy", "html5", "httpie", "huawei", "hubspot", "hugo", "hulu", "humblebundle", "hungryjacks", "hurriyetemlak", "husqvarna", "hyper", "hyperledger", "hypothesis", "hyundai", "i18next", "iata", "ibeacon", "ibm", "ibmcloud", "ibmwatson", "iced", "iceland", "icinga", "icloud", "icomoon", "icon", "iconfinder", "iconify", "iconjar", "icons8", "icq", "ieee", "ifixit", "ifood", "ifttt", "iheartradio", "ikea", "iledefrancemobilites", "imagej", "imdb", "imgur", "immer", "imou", "indeed", "infiniti", "influxdb", "informatica", "infosys", "infracost", "ingress", "inkdrop", "inkscape", "insomnia", "instacart", "instagram", "instapaper", "instatus", "instructables", "instructure", "integromat", "intel", "intellijidea", "interactiondesignfoundation", "interactjs", "intercom", "intermarche", "internetarchive", "internetexplorer", "intigriti", "invision", "invoiceninja", "iobroker", "ionic", "ionos", "ios", "iota", "ipfs", "issuu", "istio", "itchdotio", "iterm2", "itunes", "itvx", "iveco", "jabber", "jaguar", "jamboard", "jameson", "jamstack", "jasmine", "javascript", "jbl", "jcb", "jeep", "jekyll", "jellyfin", "jenkins", "jenkinsx", "jest", "jet", "jetbrains", "jetpackcompose", "jfrog", "jfrogbintray", "jinja", "jira", "jirasoftware", "jitsi", "johndeere", "joomla", "joplin", "jordan", "jpeg", "jquery", "jrgroup", "jsdelivr", "jsfiddle", "json", "jsonwebtokens", "jss", "juke", "julia", "junipernetworks", "junit5", "jupyter", "justeat", "justgiving", "k3s", "k6", "kaggle", "kahoot", "kaios", "kakao", "kakaotalk", "kalilinux", "kaniko", "karlsruherverkehrsverbund", "kasasmart", "kashflow", "kaspersky", "katacoda", "katana", "kaufland", "kde", "kdenlive", "keepachangelog", "keepassxc", "kentico", "keras", "keybase", "keycdn", "keystone", "kfc", "khanacademy", "khronosgroup", "kia", "kibana", "kicad", "kickstarter", "kik", "kingstontechnology", "kinopoisk", "kirby", "kitsu", "klarna", "klm", "klook", "knative", "knowledgebase", "known", "kofi", "koa", "koc", "kodi", "kofax", "komoot", "konami", "kong", "kongregate", "konva", "kotlin", "koyeb", "krita", "ktm", "kuaishou", "kubernetes", "kubuntu", "kuma", "kuula", "kyocera", "labview", "lada", "lamborghini", "landrover", "lapce", "laragon", "laravel", "laravelhorizon", "laravelnova", "lastdotfm", "lastpass", "latex", "launchpad", "lazarus", "lbry", "leaderprice", "leaflet", "leanpub", "leetcode", "legacygames", "lemmy", "lenovo", "lens", "lerna", "leroymerlin", "less", "letsencrypt", "letterboxd", "levelsdotfyi", "lg", "lgtm", "liberapay", "librariesdotio", "librarything", "libreoffice", "libuv", "lichess", "lidl", "lifx", "lighthouse", "line", "lineageos", "linear", "linkedin", "linkerd", "linkfire", "linktree", "linode", "linux", "linuxcontainers", "linuxfoundation", "linuxmint", "lionair", "liquibase", "lit", "litecoin", "litiengine", "livechat", "livejournal", "livewire", "llvm", "lmms", "lodash", "logitech", "logmein", "logstash", "looker", "loom", "loop", "loopback", "lospec", "lotpolishairlines", "lua", "lubuntu", "ludwig", "lufthansa", "lumen", "lunacy", "lydia", "lyft", "maas", "macos", "macpaw", "macys", "magasinsu", "magento", "magisk", "maildotru", "mailchimp", "mailgun", "majorleaguehacking", "makerbot", "mamp", "man", "manageiq", "manjaro", "mapbox", "mariadb", "mariadbfoundation", "markdown", "marketo", "marko", "marriott", "maserati", "mastercard", "mastercomfig", "mastodon", "materialdesign", "materialdesignicons", "matomo", "matrix", "matterdotjs", "mattermost", "matternet", "max", "maxplanckgesellschaft", "maytag", "mazda", "mcafee", "mcdonalds", "mclaren", "mdbook", "mdnwebdocs", "mdx", "mediafire", "mediamarkt", "mediatek", "mediatemple", "medium", "meetup", "mega", "mendeley", "mercadopago", "mercedes", "merck", "mercurial", "messenger", "meta", "metabase", "metafilter", "meteor", "metro", "metrodelaciudaddemexico", "metrodemadrid", "metrodeparis", "mewe", "microbit", "microdotblog", "microgenetics", "micropython", "microsoft", "microsoftacademic", "microsoftaccess", "microsoftazure", "microsoftbing", "microsoftedge", "microsoftexcel", "microsoftexchange", "microsoftoffice", "microsoftonedrive", "microsoftonenote", "microsoftoutlook", "microsoftpowerpoint", "microsoftsharepoint", "microsoftsqlserver", "microsoftteams", "microsofttranslator", "microsoftvisio", "microsoftword", "microstrategy", "midi", "minds", "minecraft", "minetest", "mini", "minutemailer", "miro", "mitsubishi", "mix", "mixcloud", "mlb", "mlflow", "mobx", "mobxstatetree", "mocha", "modin", "modrinth", "modx", "mojangstudios", "moleculer", "momenteo", "monero", "moneygram", "mongodb", "monica", "monkeytie", "monogames", "monoprix", "monster", "monzo", "moo", "moonrepo", "morrisons", "moscowmetro", "motorola", "mozilla", "mqtt", "msi", "msibusiness", "mta", "mtr", "mui", "mulesoft", "muller", "mumble", "musescore", "musicbrainz", "mxlinux", "myanimelist", "myob", "myspace", "mysql", "n26", "namebase", "namecheap", "nano", "nasa", "nationalgrid", "nativescript", "naver", "nba", "nbb", "ndr", "nec", "neo4j", "neovim", "nestjs", "netapp", "netbsd", "netflix", "netlify", "nette", "netto", "neutralinojs", "newbalance", "newjapanprowrestling", "newrelic", "newyorktimes", "nextdotjs", "nextbilliondotai", "nextcloud", "nextdoor", "nfc", "nginx", "ngrok", "niconico", "nike", "nim", "nintendo", "nintendo3ds", "nintendogamecube", "nintendonetwork", "nintendoswitch", "nissan", "nixos", "nodered", "nodedotjs", "nodemon", "nokia", "norco", "nordvpn", "norwegian", "notepadplusplus", "notion", "notist", "nounproject", "novu", "now", "npm", "nrwl", "nubank", "nucleo", "nuget", "nuke", "numba", "numpy", "nunjucks", "nutanix", "nuxtdotjs", "nvidia", "nx", "nzxt", "oreilly", "obsstudio", "observable", "obsidian", "ocaml", "octanerender", "octave", "octoprint", "octopusdeploy", "oculus", "odnoklassniki", "odysee", "ohdear", "okcupid", "okta", "oneplus", "onlyfans", "onlyoffice", "onnx", "onstar", "opel", "openaccess", "openbadges", "openbugbounty", "opencollective", "opencontainersinitiative", "opensourceinitiative", "openai", "openaigym", "openapiinitiative", "openbsd", "opencv", "openfaas", "opengl", "openid", "openjdk", "openlayers", "openmined", "opennebula", "openproject", "opensea", "opensearch", "openssl", "openstack", "openstreetmap", "opensuse", "opentelemetry", "openverse", "openvpn", "openwrt", "openzeppelin", "openzfs", "opera", "opnsense", "opsgenie", "opslevel", "oracle", "orcid", "org", "origin", "osano", "oshkosh", "osmc", "osu", "otto", "overcast", "overleaf", "ovh", "owasp", "oxygen", "oyo", "p5dotjs", "packagist", "packer", "paddypower", "pagekit", "pagerduty", "pagespeedinsights", "pagseguro", "palantir", "paloaltosoftware", "pandas", "pandora", "pantheon", "paperspace", "paritysubstrate", "parsedotly", "passport", "pastebin", "patreon", "payoneer", "paypal", "paytm", "pcgamingwiki", "peakdesign", "peertube", "pegasusairlines", "pelican", "peloton", "penny", "penpot", "pepsi", "percy", "perforce", "perl", "persistent", "personio", "petsathome", "peugeot", "pexels", "pfsense", "phabricator", "philipshue", "phonepe", "photobucket", "photocrowd", "photopea", "php", "phpmyadmin", "phpstorm", "pihole", "picardsurgeles", "picartodottv", "picnic", "picpay", "pimcore", "pinboard", "pingdom", "pinterest", "pioneerdj", "pivotaltracker", "piwigo", "pix", "pixabay", "pixiv", "pkgsrc", "planet", "planetscale", "plangrid", "platformdotsh", "platzi", "plausibleanalytics", "playcanvas", "playerfm", "playerdotme", "playstation", "playstation2", "playstation3", "playstation4", "playstation5", "playstationvita", "playwright", "pleroma", "plesk", "plex", "plotly", "pluralsight", "plurk", "pluscodes", "pm2", "pnpm", "pocket", "pocketcasts", "pocketbase", "podcastaddict", "podman", "poetry", "pointy", "pokemon", "polars", "polkadot", "poly", "polymerproject", "polywork", "popos", "porsche", "portainer", "postcss", "postgresql", "postman", "postmates", "powerapps", "powerautomate", "powerbi", "powerfx", "powerpages", "powervirtualagents", "powers", "powershell", "prdotco", "precommit", "preact", "premierleague", "prestashop", "presto", "prettier", "prevention", "prezi", "prime", "primevideo", "prisma", "prismic", "privateinternetaccess", "protools", "probot", "processingfoundation", "processwire", "producthunt", "progate", "progress", "prometheus", "prosieben", "protodotio", "protocolsdotio", "protondb", "protonmail", "protonvpn", "protractor", "proxmox", "pubg", "publons", "pubmed", "pug", "pulumi", "puma", "puppet", "puppeteer", "purescript", "purgecss", "purism", "pusher", "pwa", "pycharm", "pyg", "pypi", "pypy", "pyscaffold", "pysyft", "pytest", "python", "pytorch", "pytorchlightning", "pyup", "qantas", "qatarairways", "qemu", "qgis", "qi", "qiita", "qiskit", "qiwi", "qmk", "qt", "qualcomm", "qualtrics", "qualys", "quantcast", "quantconnect", "quarkus", "quasar", "qubesos", "quest", "quickbooks", "quicklook", "quicktime", "quip", "quora", "qwiklabs", "qzone", "r", "r3", "rabbitmq", "racket", "radar", "radiopublic", "railway", "rainmeter", "rakuten", "ram", "rancher", "rarible", "rasa", "raspberrypi", "ravelry", "ray", "razer", "razorpay", "react", "reacthookform", "reactquery", "reactrouter", "reacttable", "reactivex", "reactos", "readthedocs", "readme", "realm", "reason", "reasonstudios", "red", "redhat", "redhatopenshift", "redbubble", "reddit", "redis", "redmine", "redox", "redux", "reduxsaga", "redwoodjs", "reebok", "relay", "relianceindustrieslimited", "remix", "renpy", "renault", "render", "renovatebot", "renren", "replit", "republicofgamers", "rescript", "rescuetime", "researchgate", "resharper", "resurrectionremixos", "retroarch", "retropie", "revealdotjs", "reverbnation", "revoltdotchat", "revolut", "revue", "rewe", "rezgo", "rhinoceros", "rider", "rimacautomobili", "ring", "riotgames", "ripple", "riseup", "roamresearch", "roblox", "robotframework", "rocketdotchat", "rocksdb", "rockylinux", "roku", "rollsroyce", "rollupdotjs", "rome", "roots", "rootsbedrock", "rootssage", "ros", "rossmann", "rotaryinternational", "rottentomatoes", "roundcube", "rsocket", "rss", "rstudio", "rte", "rtl", "rtlzwei", "rubocop", "ruby", "rubyonrails", "rubysinatra", "rubygems", "runkeeper", "runkit", "rust", "rxdb", "ryanair", "s7airlines", "sabanci", "safari", "sahibinden", "sailfishos", "salesforce", "saltproject", "samsung", "samsungpay", "sanfranciscomunicipalrailway", "sandisk", "saopaulometro", "sap", "sass", "sat1", "saturn", "saucelabs", "scala", "scaleway", "scania", "schneiderelectric", "scikitlearn", "scipy", "scopus", "scpfoundation", "scratch", "screencastify", "scribd", "scrimba", "scrollreveal", "scrumalliance", "scrutinizerci", "seagate", "seat", "securityscorecard", "sefaria", "sega", "selenium", "sellfy", "semanticscholar", "semanticuireact", "semanticweb", "semanticrelease", "semaphoreci", "semver", "sencha", "sendinblue", "sennheiser", "sensu", "sentry", "sepa", "sequelize", "serverfault", "serverless", "sessionize", "setapp", "sfml", "shadow", "shanghaimetro", "sharp", "shazam", "shell", "shelly", "shenzhenmetro", "shieldsdotio", "shikimori", "shopee", "shopify", "shopware", "shotcut", "showpad", "showtime", "shutterstock", "siemens", "signal", "similarweb", "simkl", "simpleanalytics", "simpleicons", "simplenote", "sinaweibo", "singlestore", "sitepoint", "sketch", "sketchfab", "sketchup", "skillshare", "skoda", "sky", "skynet", "skypack", "skype", "skypeforbusiness", "slack", "slackware", "slashdot", "slickpic", "slides", "slideshare", "smart", "smartthings", "smashdotgg", "smashingmagazine", "smrt", "smugmug", "snapchat", "snapcraft", "sncf", "snowflake", "snowpack", "snyk", "socialblade", "society6", "socketdotio", "sogou", "solid", "solidity", "sololearn", "solus", "sonar", "sonarcloud", "sonarlint", "sonarqube", "sonarsource", "songkick", "songoda", "sonicwall", "sonos", "sony", "soundcharts", "soundcloud", "sourceengine", "sourceforge", "sourcegraph", "sourcetree", "southwestairlines", "spacemacs", "spacex", "spacy", "sparkar", "sparkasse", "sparkfun", "sparkpost", "spdx", "speakerdeck", "spectrum", "speedtest", "spinnaker", "spinrilla", "splunk", "spond", "spotify", "spotlight", "spreadshirt", "spreaker", "spring", "spring_creators", "springboot", "springsecurity", "spyderide", "sqlite", "square", "squareenix", "squarespace", "ssrn", "stackexchange", "stackoverflow", "stackbit", "stackblitz", "stackedit", "stackpath", "stackshare", "stadia", "staffbase", "standardjs", "startrek", "starbucks", "stardock", "starlingbank", "starship", "starz", "statamic", "statuspage", "statuspal", "steam", "steamdeck", "steamdb", "steamworks", "steelseries", "steem", "steemit", "steinberg", "stellar", "stencyl", "stimulus", "stitcher", "stmicroelectronics", "stopstalk", "storyblok", "storybook", "strapi", "strava", "streamlit", "stripe", "strongswan", "stubhub", "styledcomponents", "stylelint", "styleshare", "stylus", "subaru", "sublimetext", "substack", "subversion", "suckless", "sumologic", "supabase", "superuser", "supermicro", "surrealdb", "surveymonkey", "suse", "suzuki", "svelte", "svg", "svgo", "swagger", "swarm", "swc", "swift", "swiggy", "swiper", "symantec", "symfony", "symphony", "sympy", "synology", "system76", "tmobile", "tableau", "tablecheck", "tacobell", "tado", "taichigraphics", "taichilang", "tails", "tailwindcss", "talend", "talenthouse", "tamiya", "tampermonkey", "taobao", "tapas", "target", "task", "tasmota", "tata", "tauri", "taxbuzz", "teamcity", "teamspeak", "teamviewer", "ted", "teespring", "tekton", "tele5", "telegram", "telegraph", "temporal", "tencentqq", "tensorflow", "teradata", "teratail", "terraform", "tesco", "tesla", "testcafe", "testin", "testinglibrary", "tether", "textpattern", "tga", "thealgorithms", "theconversation", "theirishtimes", "themighty", "themodelsresource", "themoviedatabase", "thenorthface", "theregister", "thesoundsresource", "thespritersresource", "thewashingtonpost", "thingiverse", "thinkpad", "threadless", "threedotjs", "threema", "thumbtack", "thunderbird", "thymeleaf", "ticketmaster", "tidal", "tide", "tidyverse", "tietoevry", "tiktok", "tile", "timescale", "tinder", "tinyletter", "tistory", "tmux", "tnt", "todoist", "toggl", "tokyometro", "toml", "tomorrowland", "topcoder", "toptal", "torbrowser", "torproject", "toshiba", "toyota", "tplink", "tqdm", "traefikmesh", "traefikproxy", "trainerroad", "trakt", "transportforireland", "transportforlondon", "travisci", "treehouse", "trello", "trendmicro", "treyarch", "triller", "trino", "tripdotcom", "tripadvisor", "trove", "trpc", "truenas", "trulia", "trustedshops", "trustpilot", "tryitonline", "tryhackme", "tsnode", "tubi", "tui", "tumblr", "tunein", "turborepo", "turbosquid", "turkishairlines", "tutanota", "tvtime", "twilio", "twitch", "twitter", "twoo", "typeform", "typescript", "typo3", "uber", "ubereats", "ubiquiti", "ubisoft", "ublockorigin", "ubuntu", "udacity", "udemy", "ufc", "uikit", "ulule", "umbraco", "unacademy", "underarmour", "underscoredotjs", "undertale", "unicode", "unilever", "unitedairlines", "unity", "unlicense", "unocss", "unraid", "unrealengine", "unsplash", "untangle", "untappd", "upcloud", "uplabs", "uploaded", "ups", "upstash", "uptimekuma", "uptobox", "upwork", "usps", "v", "v2ex", "v8", "vaadin", "vagrant", "vala", "valorant", "valve", "vapor", "vault", "vauxhall", "vbulletin", "vectorlogozone", "vectorworks", "veeam", "veepee", "velog", "venmo", "vercel", "verdaccio", "veritas", "verizon", "vexxhost", "vfairs", "viadeo", "viber", "vim", "vimeo", "vimeolivestream", "virgin", "virginmedia", "virtualbox", "virustotal", "visa", "visualstudio", "visualstudiocode", "vite", "vitess", "vitest", "vivaldi", "vivino", "vk", "vlcmediaplayer", "vmware", "vodafone", "volkswagen", "volvo", "vonage", "vowpalwabbit", "vox", "vsco", "vscodium", "vtex", "vuedotjs", "vuetify", "vulkan", "vultr", "w3c", "wacom", "wagtail", "wails", "wakatime", "walkman", "wallabag", "walmart", "wantedly", "wappalyzer", "warnerbros", "warp", "wasmcloud", "wasmer", "wattpad", "wayland", "waze", "wearos", "weasyl", "web3dotjs", "webassembly", "webauthn", "webcomponentsdotorg", "webdriverio", "webflow", "webgl", "webhint", "weblate", "webmin", "webmoney", "webpack", "webrtc", "webstorm", "webtoon", "wechat", "wegame", "weightsandbiases", "welcometothejungle", "wemo", "westerndigital", "wetransfer", "whatsapp", "wheniwork", "whitesource", "wii", "wiiu", "wikidotjs", "wikidata", "wikimediacommons", "wikipedia", "wikiquote", "wikivoyage", "winamp", "windicss", "windows", "windows11", "windows95", "windowsterminal", "windowsxp", "winmate", "wipro", "wire", "wireguard", "wireshark", "wise", "wish", "wistia", "wix", "wizzair", "wolfram", "wolframlanguage", "wolframmathematica", "woo", "woocommerce", "wordpress", "workplace", "worldhealthorganization", "wpengine", "wprocket", "wpexplorer", "writedotas", "wwe", "wwise", "xdotorg", "xamarin", "xaml", "xampp", "xbox", "xcode", "xdadevelopers", "xero", "xfce", "xiaomi", "xilinx", "xing", "xmpp", "xo", "xrp", "xsplit", "xstate", "ycombinator", "yahoo", "yale", "yamahacorporation", "yamahamotorcorporation", "yammer", "yarn", "yelp", "yoast", "yolo", "yourtraveldottv", "youtube", "youtubegaming", "youtubemusic", "youtubestudio", "youtubetv", "yubico", "zwave", "zabka", "zalando", "zalo", "zapier", "zara", "zazzle", "zcash", "zdf", "zebratechnologies", "zelle", "zend", "zendframework", "zendesk", "zenn", "zenodo", "zerodha", "zeromq", "zerply", "zettlr", "zhihu", "zig", "zigbee", "zillow", "zincsearch", "zingat", "zoho", "zoiper", "zomato", "zoom", "zorin", "zotero", "zulip", "zyte"],
		optionTitles: [".ENV", ".NET", "/e/", "1001Tracklists", "1Password", "3M", "42", "4chan", "4D", "500px", "A-Frame", "ABB RobotStudio", "Abbott", "Abbvie", "Ableton Live", "About.me", "Abstract", "Academia", "Accenture", "Acclaim", "Accusoft", "Acer", "ACM", "ActiGraph", "Activision", "Adafruit", "AdBlock", "Adblock Plus", "AddThis", "AdGuard", "Adidas", "Adminer", "Adobe", "Adobe Acrobat Reader", "Adobe After Effects", "Adobe Audition", "Adobe Creative Cloud", "Adobe Dreamweaver", "Adobe Fonts", "Adobe Illustrator", "Adobe InDesign", "Adobe Lightroom", "Adobe Lightroom Classic", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe XD", "AdonisJS", "ADP", "Adyen", "Aer Lingus", "Aeroflot", "Aerom\xE9xico", "Aerospike", "AEW", "Affinity", "Affinity Designer", "Affinity Photo", "Affinity Publisher", "Agora", "AI Dungeon", "AIB", "AIOHTTP", "Aiqfome", "Air Canada", "Air China", "Air France", "AirAsia", "Airbnb", "Airbus", "Airbyte", "Aircall", "AirPlay Audio", "AirPlay Video", "Airtable", "Ajv", "Akamai", "Alacritty", "Albert Heijn", "Alchemy", "Aldi Nord", "Aldi S\xFCd", "Alfa Romeo", "Alfred", "Algolia", "Algorand", "Alibaba Cloud", "Alibaba.com", "AliExpress", "Alipay", "Alitalia", "Allegro", "AlliedModders", "AlloCin\xE9", "AllTrails", "Alpine Linux", "Alpine.js", "Altium Designer", "Alwaysdata", "Amazon", "Amazon Alexa", "Amazon API Gateway", "Amazon AWS", "Amazon CloudWatch", "Amazon DynamoDB", "Amazon EC2", "Amazon ECS", "Amazon EKS", "Amazon Fire TV", "Amazon Games", "Amazon Lumberyard", "Amazon Pay", "Amazon Prime", "Amazon RDS", "Amazon S3", "Amazon SQS", "AMD", "American Airlines", "American Express", "AMG", "AMP", "Amul", "ANA", "Anaconda", "Analogue", "Anchor", "Andela", "Android", "Android Auto", "Android Studio", "AngelList", "Angular", "Angular Universal", "AngularJS", "AniList", "Ansible", "Answer", "Ansys", "Ant Design", "Anta", "Antena 3", "AnyDesk", "AOL", "Apache", "Apache Airflow", "Apache Ant", "Apache Cassandra", "Apache CloudStack", "Apache Cordova", "Apache CouchDB", "Apache Druid", "Apache ECharts", "Apache Flink", "Apache Groovy", "Apache Hadoop", "Apache Hive", "Apache JMeter", "Apache Kafka", "Apache Kylin", "Apache Maven", "Apache NetBeans IDE", "Apache OpenOffice", "Apache Pulsar", "Apache RocketMQ", "Apache Solr", "Apache Spark", "Apache Tomcat", "Aparat", "Apollo GraphQL", "Apostrophe", "App Store", "Appian", "Apple", "Apple Arcade", "Apple Music", "Apple News", "Apple Pay", "Apple Podcasts", "Apple TV", "AppSignal", "AppVeyor", "Appwrite", "Aqua", "ARAL", "ArangoDB", "Arch Linux", "Archicad", "Archive of Our Own", "Ardour", "Arduino", "Argo", "Argos", "ARK Ecosystem", "Arlo", "Arm", "Artifact Hub", "Artix Linux", "ArtStation", "arXiv", "Asana", "Asciidoctor", "asciinema", "ASDA", "Aseprite", "Ask Ubuntu", "ASKfm", "AssemblyScript", "Aston Martin", "Astro", "ASUS", "AT&T", "Atari", "Atlassian", "Atom", "Auchan", "Audacity", "Audi", "Audible", "Audio-Technica", "Audioboom", "Audiomack", "Aurelia", "Auth0", "Authy", "Autodesk", "AutoHotkey", "Automattic", "Autoprefixer", "avajs", "Avast", "Awesome Lists", "awesomeWM", "AWS Amplify", "AWS Fargate", "AWS Lambda", "Axios", "Azure Artifacts", "Azure Data Explorer", "Azure DevOps", "Azure Functions", "Azure Pipelines", "B&R Automation", "Babel", "Backblaze", "Backbone.js", "Backendless", "Backstage", "Badgr", "Badoo", "Baidu", "Bamboo", "Bandcamp", "BandLab", "Bandsintown", "Bank of America", "Barclays", "Baremetrics", "Basecamp", "Bastyon", "Bata", "Bath ASU", "Battle.net", "BBC", "BBC iPlayer", "Beatport", "Beats", "Beats by Dre", "Behance", "Beijing Subway", "BEM", "Bentley", "Betfair", "Big Cartel", "bigbasket", "BigBlueButton", "BigCommerce", "Bilibili", "Billboard", "BIM", "Binance", "Bio Link", "Bit", "Bitbucket", "Bitcoin", "Bitcoin Cash", "Bitcoin SV", "Bitdefender", "Bitly", "Bitrise", "Bitwarden", "Bitwig", "Blackberry", "Blazemeter", "Blazor", "Blender", "Blockchain.com", "Blogger", "Bloglovin", "Blueprint", "Bluetooth", "BMC Software", "BMW", "BoardGameGeek", "Boehringer Ingelheim", "Boeing", "Bookalope", "BookBub", "Bookmeter", "BookMyShow", "BookStack", "Boost", "Boots", "Bootstrap", "BorgBackup", "Bosch", "Bose", "boulanger", "Bower", "Box", "Boxy SVG", "Brandfolder", "Brave", "Breaker", "British Airways", "Broadcom", "BT", "Buddy", "Budibase", "Buefy", "Buffer", "Bugatti", "Bugcrowd", "Bugsnag", "Buildkite", "Bukalapak", "Bulma", "Bun", "bunq", "Burger King", "Burton", "Buy Me A Coffee", "BuzzFeed", "BVG", "Byju's", "byte", "ByteDance", "C", "C Sharp", "C++", "Cachet", "CafePress", "Caffeine", "Cairo Graphics", "Cairo Metro", "CakePHP", "Campaign Monitor", "Canonical", "Canva", "Capacitor", "Car Throttle", "Carrefour", "Carto", "Cash App", "Castbox", "Castorama", "Castro", "Caterpillar", "CBS", "CD Projekt", "Celery", "CentOS", "Ceph", "Cesium", "Chai", "Chainguard", "Chainlink", "Chakra UI", "Chart.js", "ChartMogul", "Chase", "ChatBot", "CheckiO", "Checkmarx", "Chef", "Chemex", "Chevrolet", "China Eastern Airlines", "China Southern Airlines", "Chocolatey", "Chromecast", "Chrysler", "Chupa Chups", "Cilium", "Cinema 4D", "Circle", "CircleCI", "Cirrus CI", "Cisco", "Citrix", "Citro\xEBn", "CiviCRM", "Civo", "CKEditor 4", "Claris", "ClickHouse", "ClickUp", "CLion", "Cliqz", "Clockify", "Clojure", "Cloud 66", "Cloud Foundry", "CloudBees", "CloudCannon", "Cloudera", "Cloudflare", "Cloudflare Pages", "Cloudsmith", "Cloudways", "Clubhouse", "Clyp", "CMake", "CNCF", "CNN", "Co-op", "Cockpit", "Cockroach Labs", "CocoaPods", "Cocos", "Coda", "Codacy", "Code Climate", "Code Review", "Codeberg", "Codecademy", "CodeceptJS", "CodeChef", "Codecov", "CodeFactor", "Codeforces", "CodeIgniter", "Codemagic", "CodeMirror", "CodeNewbie", "CodePen", "CodeProject", "CodersRank", "Coderwall", "CodeSandbox", "Codeship", "Codewars", "Coding Ninjas", "CodinGame", "Codio", "CoffeeScript", "Cognizant", "Coil", "Coinbase", "CoinMarketCap", "Commerzbank", "commitlint", "Commodore", "Common Workflow Language", "Composer", "Comsol", "Conan", "Concourse", "Conda-Forge", "Conekta", "Confluence", "Construct 3", "Consul", "Contactless Payment", "containerd", "Contentful", "Conventional Commits", "Convertio", "Cookiecutter", "Cora", "Corona Engine", "Corona Renderer", "Corsair", "Couchbase", "Counter-Strike", "CountingWorks PRO", "Coursera", "Coveralls", "cPanel", "Craft CMS", "CrateDB", "Crayon", "Create React App", "Creative Commons", "Creative Technology", "Credly", "Crehana", "Critical Role", "Crowdin", "Crowdsource", "Crunchbase", "Crunchyroll", "CRYENGINE", "Crystal", "CSS Modules", "CSS Wizardry", "CSS3", "CTS", "Cucumber", "Cultura", "curl", "CurseForge", "Cycling '74", "Cypress", "Cytoscape.js", "D", "D-EDGE", "D-Wave Systems", "D3.js", "Dacia", "DAF", "Dailymotion", "Daimler", "DaisyUI", "Dapr", "Dark Reader", "Dart", "Darty", "Das Erste", "Dash", "Dashlane", "Dask", "Dassault Syst\xE8mes", "data.ai", "Databricks", "DataCamp", "Datadog", "DataGrip", "Dataiku", "DataStax", "Dataverse", "DatoCMS", "Datto", "DAZN", "dblp", "dbt", "DC Entertainment", "De'Longhi", "Debian", "deepin", "Deepnote", "Deezer", "del.icio.us", "Deliveroo", "Dell", "Delphi", "Delta", "Deno", "Dependabot", "Der Spiegel", "Designer News", "Deutsche Bahn", "Deutsche Bank", "dev.to", "DevExpress", "DeviantArt", "Devpost", "devRant", "Dgraph", "DHL", "diagrams.net", "Dialogflow", "Diaspora", "Digg", "Digi-Key Electronics", "DigitalOcean", "Dior", "Directus", "Discogs", "Discord", "Discourse", "Discover", "Disqus", "Disroot", "Django", "Dlib", "DLNA", "dm", "Docker", "Docs.rs", "DocuSign", "Dogecoin", "Dolby", "DoorDash", "Douban", "Douban Read", "Dovecot", "DPD", "Dragonframe", "Draugiem.lv", "Dribbble", "Drone", "Drooble", "Dropbox", "Drupal", "DS Automobiles", "DTube", "Ducati", "DuckDB", "DuckDuckGo", "Dungeons & Dragons", "Dunked", "Duolingo", "DVC", "dwm", "Dynamics 365", "Dynatrace", "E.Leclerc", "E3", "EA", "Eagle", "easyJet", "eBay", "Eclipse Che", "Eclipse IDE", "Eclipse Jetty", "Eclipse Mosquitto", "Eclipse Vert.x", "EDEKA", "EditorConfig", "edX", "egghead", "Egnyte", "Eight Sleep", "El Jueves", "Elastic", "Elastic Cloud", "Elastic Stack", "Elasticsearch", "Electron", "Electron Fiddle", "electron-builder", "Element", "elementary", "Elementor", "Eleventy", "Elgato", "Elixir", "Ello", "Elm", "Elsevier", "Embarcadero", "Ember.js", "Emby", "Emirates", "Emlakjet", "Empire Kred", "Engadget", "Enpass", "EnterpriseDB", "Envato", "Envoy Proxy", "EPEL", "Epic Games", "Epson", "Equinix Metal", "Erlang", "esbuild", "ESEA", "ESLGaming", "ESLint", "ESPHome", "Espressif", "etcd", "Ethereum", "Ethiopian Airlines", "Etihad Airways", "Etsy", "Event Store", "Eventbrite", "Evernote", "Exercism", "Exordo", "Exoscale", "Expensify", "Experts Exchange", "Expo", "Express", "ExpressVPN", "EyeEm", "F-Droid", "F-Secure", "F1", "F5", "Facebook", "Facebook Gaming", "Facebook Live", "FACEIT", "Facepunch", "Falcon", "FamPay", "Fandango", "Fandom", "Fanfou", "Fantom", "FARFETCH", "FastAPI", "Fastify", "Fastlane", "Fastly", "Fathom", "Fauna", "Favro", "FeatHub", "FedEx", "Fedora", "Feedly", "Ferrari", "Ferrari N.V.", "FFmpeg", "Fiat", "Fido Alliance", "FIFA", "Fig", "Figma", "figshare", "Fila", "Files", "FileZilla", "Fing", "Firebase", "Firefox", "Firefox Browser", "Fireship", "Firewalla", "FIRST", "Fitbit", "FITE", "FiveM", "Fiverr", "Flask", "Flat", "Flathub", "Flatpak", "Flattr", "Flickr", "Flipboard", "Flipkart", "Floatplane", "Flood", "Fluent Bit", "Fluentd", "Flutter", "Fluxus", "Flyway", "FMOD", "Fnac", "Folium", "Fonoma", "Font Awesome", "FontBase", "FontForge", "foodpanda", "Ford", "Forestry", "Formstack", "Fortinet", "Fortran", "Fossa", "Fossil SCM", "Foursquare", "Foursquare City Guide", "FOX", "Foxtel", "Fozzy", "Framer", "Framework7", "Franprix", "Fraunhofer-Gesellschaft", "FreeBSD", "freeCodeCamp", "freedesktop.org", "Freelancer", "FreeNAS", "Frontend Mentor", "Fuga Cloud", "Fujifilm", "Fujitsu", "Funimation", "Fur Affinity", "Furry Network", "FutureLearn", "G2", "G2A", "Game & Watch", "Game Developer", "Game Jolt", "Garmin", "Gatling", "Gatsby", "G\xE9ant", "GeeksforGeeks", "General Electric", "General Motors", "Genius", "Gentoo", "Geocaching", "Gerrit", "Ghost", "Ghostery", "GIMP", "GIPHY", "Git", "Git Extensions", "Git LFS", "GitBook", "Gitea", "Gitee", "GitHub", "GitHub Actions", "GitHub Pages", "GitHub Sponsors", "gitignore.io", "GitKraken", "GitLab", "Gitpod", "Gitter", "Glassdoor", "Glitch", "Globus", "Gmail", "GNOME", "GNOME Terminal", "GNU", "GNU Bash", "GNU Emacs", "GNU IceCat", "GNU Privacy Guard", "GNU social", "Go", "GoCD", "GoDaddy", "Godot Engine", "GoFundMe", "GOG.com", "GoLand", "GoldenLine", "Goodreads", "Google", "Google AdMob", "Google Ads", "Google AdSense", "Google Analytics", "Google Assistant", "Google Calendar", "Google Cardboard", "Google Chat", "Google Chrome", "Google Classroom", "Google Cloud", "Google Colab", "Google Domains", "Google Drive", "Google Earth", "Google Fit", "Google Fonts", "Google Hangouts", "Google Home", "Google Keep", "Google Lens", "Google Maps", "Google Marketing Platform", "Google Meet", "Google Messages", "Google My Business", "Google Nearby", "Google News", "Google Optimize", "Google Pay", "Google Photos", "Google Play", "Google Podcasts", "Google Scholar", "Google Search Console", "Google Sheets", "Google Street View", "Google Tag Manager", "Google Translate", "GoToMeeting", "Grab", "Gradle", "Grafana", "Grammarly", "Grand Frais", "GraphQL", "Grav", "Gravatar", "Graylog", "Greenhouse", "GreenSock", "Grid.ai", "Gridsome", "GroupMe", "Groupon", "Grubhub", "Grunt", "GSK", "GTK", "Guangzhou Metro", "Guilded", "gulp", "Gumroad", "Gumtree", "Gunicorn", "Gurobi", "Gutenberg", "Habr", "Hack Club", "Hack The Box", "Hackaday", "Hacker Noon", "HackerEarth", "HackerOne", "HackerRank", "Hackster", "Handlebars.js", "Handshake", "Handshake", "HappyCow", "Harbor", "HarmonyOS", "Hashnode", "Haskell", "Hasura", "Hatena Bookmark", "haveibeenpwned", "Haxe", "HBO", "HCL", "Headless UI", "Headspace", "Hedera", "HelloFresh", "Helly Hansen", "Helm", "Help Scout", "HelpDesk", "HERE", "Heroku", "Hetzner", "Hexo", "HEY", "Hi Bob", "Hibernate", "Hilton", "Hitachi", "Hive", "Hive", "Home Assistant", "Home Assistant Community Store", "HomeAdvisor", "Homebrew", "Homebridge", "homify", "Honda", "Honey", "Hootsuite", "Hoppscotch", "Hotels.com", "Hotjar", "Houdini", "Houzz", "HP", "HTML Academy", "HTML5", "HTTPie", "Huawei", "HubSpot", "Hugo", "Hulu", "Humble Bundle", "Hungry Jack's", "Hurriyetemlak", "Husqvarna", "Hyper", "Hyperledger", "Hypothesis", "Hyundai", "i18next", "Iata", "iBeacon", "IBM", "IBM Cloud", "IBM Watson", "Iced", "Iceland", "Icinga", "iCloud", "IcoMoon", "ICON", "Iconfinder", "Iconify", "IconJar", "Icons8", "ICQ", "IEEE", "iFixit", "iFood", "IFTTT", "iHeartRadio", "IKEA", "\xCEle-de-France Mobilit\xE9s", "ImageJ", "IMDb", "Imgur", "Immer", "Imou", "Indeed", "Infiniti", "InfluxDB", "Informatica", "Infosys", "Infracost", "Ingress", "Inkdrop", "Inkscape", "Insomnia", "Instacart", "Instagram", "Instapaper", "Instatus", "Instructables", "Instructure", "Integromat", "Intel", "IntelliJ IDEA", "Interaction Design Foundation", "InteractJS", "Intercom", "Intermarche", "Internet Archive", "Internet Explorer", "Intigriti", "InVision", "Invoice Ninja", "ioBroker", "Ionic", "Ionos", "iOS", "IOTA", "IPFS", "Issuu", "Istio", "Itch.io", "iTerm2", "iTunes", "ITVx", "IVECO", "Jabber", "Jaguar", "Jamboard", "Jameson", "Jamstack", "Jasmine", "JavaScript", "JBL", "JCB", "Jeep", "Jekyll", "Jellyfin", "Jenkins", "Jenkins X", "Jest", "JET", "JetBrains", "Jetpack Compose", "JFrog", "JFrog Bintray", "Jinja", "Jira", "Jira Software", "Jitsi", "John Deere", "Joomla", "Joplin", "Jordan", "JPEG", "jQuery", "JR Group", "jsDelivr", "JSFiddle", "JSON", "JSON Web Tokens", "JSS", "JUKE", "Julia", "Juniper Networks", "JUnit5", "Jupyter", "Just Eat", "JustGiving", "K3s", "k6", "Kaggle", "Kahoot!", "KaiOS", "Kakao", "KakaoTalk", "Kali Linux", "Kaniko", "Karlsruher Verkehrsverbund", "Kasa Smart", "KashFlow", "Kaspersky", "Katacoda", "Katana", "Kaufland", "KDE", "Kdenlive", "Keep a Changelog", "KeePassXC", "Kentico", "Keras", "Keybase", "KeyCDN", "Keystone", "KFC", "Khan Academy", "Khronos Group", "Kia", "Kibana", "KiCad", "Kickstarter", "Kik", "Kingston Technology", "KinoPoisk", "Kirby", "Kitsu", "Klarna", "KLM", "Klook", "Knative", "KnowledgeBase", "Known", "Ko-fi", "Koa", "Koc", "Kodi", "Kofax", "Komoot", "Konami", "Kong", "Kongregate", "Konva", "Kotlin", "Koyeb", "Krita", "KTM", "Kuaishou", "Kubernetes", "Kubuntu", "Kuma", "Kuula", "Kyocera", "LabVIEW", "Lada", "Lamborghini", "Land Rover", "Lapce", "Laragon", "Laravel", "Laravel Horizon", "Laravel Nova", "Last.fm", "LastPass", "LaTeX", "Launchpad", "Lazarus", "LBRY", "Leader Price", "Leaflet", "Leanpub", "LeetCode", "Legacy Games", "Lemmy", "Lenovo", "Lens", "Lerna", "Leroy Merlin", "Less", "Let's Encrypt", "Letterboxd", "levels.fyi", "LG", "LGTM", "Liberapay", "Libraries.io", "LibraryThing", "LibreOffice", "libuv", "Lichess", "Lidl", "LIFX", "Lighthouse", "LINE", "LineageOS", "Linear", "LinkedIn", "Linkerd", "Linkfire", "Linktree", "Linode", "Linux", "Linux Containers", "Linux Foundation", "Linux Mint", "Lion Air", "Liquibase", "Lit", "Litecoin", "LITIENGINE", "LiveChat", "LiveJournal", "Livewire", "LLVM", "LMMS", "Lodash", "Logitech", "LogMeIn", "Logstash", "Looker", "Loom", "Loop", "LoopBack", "Lospec", "LOT Polish Airlines", "Lua", "Lubuntu", "Ludwig", "Lufthansa", "Lumen", "Lunacy", "Lydia", "Lyft", "MAAS", "macOS", "MacPaw", "Macy's", "Magasins U", "Magento", "Magisk", "Mail.Ru", "MailChimp", "Mailgun", "Major League Hacking", "MakerBot", "MAMP", "MAN", "ManageIQ", "Manjaro", "Mapbox", "MariaDB", "MariaDB Foundation", "Markdown", "Marketo", "Marko", "Marriott", "Maserati", "MasterCard", "mastercomfig", "Mastodon", "Material Design", "Material Design Icons", "Matomo", "Matrix", "Matter.js", "Mattermost", "Matternet", "Max", "Max-Planck-Gesellschaft", "Maytag", "Mazda", "McAfee", "McDonald's", "McLaren", "mdBook", "MDN Web Docs", "MDX", "MediaFire", "MediaMarkt", "MediaTek", "MediaTemple", "Medium", "Meetup", "MEGA", "Mendeley", "Mercado Pago", "Mercedes", "Merck", "Mercurial", "Messenger", "Meta", "Metabase", "MetaFilter", "Meteor", "Metro", "Metro de la Ciudad de M\xE9xico", "Metro de Madrid", "M\xE9tro de Paris", "MeWe", "micro:bit", "Micro.blog", "Microgenetics", "MicroPython", "Microsoft", "Microsoft Academic", "Microsoft Access", "Microsoft Azure", "Microsoft Bing", "Microsoft Edge", "Microsoft Excel", "Microsoft Exchange", "Microsoft Office", "Microsoft OneDrive", "Microsoft OneNote", "Microsoft Outlook", "Microsoft PowerPoint", "Microsoft SharePoint", "Microsoft SQL Server", "Microsoft Teams", "Microsoft Translator", "Microsoft Visio", "Microsoft Word", "MicroStrategy", "MIDI", "Minds", "Minecraft", "Minetest", "Mini", "Minutemailer", "Miro", "Mitsubishi", "Mix", "Mixcloud", "MLB", "MLflow", "MobX", "MobX-State-Tree", "Mocha", "Modin", "Modrinth", "MODX", "Mojang Studios", "Moleculer", "Momenteo", "Monero", "MoneyGram", "MongoDB", "Monica", "monkey tie", "MonoGames", "Monoprix", "Monster", "Monzo", "Moo", "Moonrepo", "Morrisons", "Moscow Metro", "Motorola", "Mozilla", "MQTT", "MSI", "MSI Business", "MTA", "MTR", "MUI", "Mulesoft", "M\xFCller", "Mumble", "MuseScore", "MusicBrainz", "MX Linux", "MyAnimeList", "MYOB", "Myspace", "MySQL", "N26", "Namebase", "Namecheap", "Nano", "NASA", "National Grid", "NativeScript", "Naver", "NBA", "NBB", "NDR", "NEC", "Neo4j", "Neovim", "NestJS", "NetApp", "NetBSD", "Netflix", "Netlify", "Nette", "Netto", "Neutralinojs", "New Balance", "New Japan Pro-Wrestling", "New Relic", "New York Times", "Next.js", "NextBillion.ai", "Nextcloud", "Nextdoor", "NFC", "NGINX", "ngrok", "niconico", "Nike", "Nim", "Nintendo", "Nintendo 3DS", "Nintendo GameCube", "Nintendo Network", "Nintendo Switch", "Nissan", "NixOS", "Node-RED", "Node.js", "Nodemon", "Nokia", "Norco", "NordVPN", "Norwegian", "Notepad++", "Notion", "Notist", "Noun Project", "Novu", "NOW", "npm", "Nrwl", "Nubank", "Nucleo", "NuGet", "Nuke", "Numba", "NumPy", "Nunjucks", "Nutanix", "Nuxt.js", "NVIDIA", "Nx", "NZXT", "O'Reilly", "OBS Studio", "Observable", "Obsidian", "OCaml", "Octane Render", "Octave", "OctoPrint", "Octopus Deploy", "Oculus", "Odnoklassniki", "Odysee", "Oh Dear", "okcupid", "Okta", "OnePlus", "OnlyFans", "ONLYOFFICE", "ONNX", "OnStar", "Opel", "Open Access", "Open Badges", "Open Bug Bounty", "Open Collective", "Open Containers Initiative", "Open Source Initiative", "OpenAI", "OpenAI Gym", "OpenAPI Initiative", "OpenBSD", "OpenCV", "OpenFaaS", "OpenGL", "OpenID", "OpenJDK", "Openlayers", "OpenMined", "OpenNebula", "OpenProject", "OpenSea", "OpenSearch", "OpenSSL", "OpenStack", "OpenStreetMap", "openSUSE", "OpenTelemetry", "Openverse", "OpenVPN", "OpenWrt", "OpenZeppelin", "OpenZFS", "Opera", "OPNSense", "Opsgenie", "OpsLevel", "Oracle", "ORCID", "Org", "Origin", "Osano", "Oshkosh", "OSMC", "osu!", "Otto", "Overcast", "Overleaf", "OVH", "OWASP", "Oxygen", "OYO", "p5.js", "Packagist", "Packer", "Paddy Power", "Pagekit", "PagerDuty", "PageSpeed Insights", "PagSeguro", "Palantir", "Palo Alto Software", "pandas", "Pandora", "Pantheon", "Paperspace", "Parity Substrate", "Parse.ly", "Passport", "Pastebin", "Patreon", "Payoneer", "PayPal", "Paytm", "PCGamingWiki", "Peak Design", "PeerTube", "Pegasus Airlines", "Pelican", "Peloton", "Penny", "Penpot", "Pepsi", "Percy", "Perforce", "Perl", "Persistent", "Personio", "Pets at Home", "Peugeot", "Pexels", "pfSense", "Phabricator", "Philips Hue", "PhonePe", "Photobucket", "Photocrowd", "Photopea", "PHP", "phpMyAdmin", "PhpStorm", "Pi-hole", "Picard Surgel\xE9s", "Picarto.TV", "Picnic", "PicPay", "Pimcore", "Pinboard", "Pingdom", "Pinterest", "Pioneer DJ", "Pivotal Tracker", "Piwigo", "Pix", "Pixabay", "pixiv", "pkgsrc", "Planet", "PlanetScale", "PlanGrid", "Platform.sh", "Platzi", "Plausible Analytics", "PlayCanvas", "Player FM", "Player.me", "PlayStation", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5", "PlayStation Vita", "Playwright", "Pleroma", "Plesk", "Plex", "Plotly", "Pluralsight", "Plurk", "Plus Codes", "PM2", "pnpm", "Pocket", "Pocket Casts", "PocketBase", "Podcast Addict", "Podman", "Poetry", "Pointy", "Pok\xE9mon", "Polars", "Polkadot", "Poly", "Polymer Project", "Polywork", "Pop!_OS", "Porsche", "Portainer", "PostCSS", "PostgreSQL", "Postman", "Postmates", "Power Apps", "Power Automate", "Power BI", "Power Fx", "Power Pages", "Power Virtual Agents", "POWERS", "PowerShell", "pr.co", "pre-commit", "Preact", "Premier League", "PrestaShop", "Presto", "Prettier", "Prevention", "Prezi", "Prime", "Prime Video", "Prisma", "Prismic", "Private Internet Access", "Pro Tools", "Probot", "Processing Foundation", "ProcessWire", "Product Hunt", "Progate", "Progress", "Prometheus", "ProSieben", "Proto.io", "protocols.io", "ProtonDB", "ProtonMail", "ProtonVPN", "Protractor", "Proxmox", "PUBG", "Publons", "PubMed", "Pug", "Pulumi", "Puma", "Puppet", "Puppeteer", "PureScript", "PurgeCSS", "Purism", "Pusher", "PWA", "PyCharm", "PyG", "PyPI", "PyPy", "PyScaffold", "PySyft", "Pytest", "Python", "PyTorch", "PyTorch Lightning", "PyUp", "Qantas", "Qatar Airways", "QEMU", "Qgis", "Qi", "Qiita", "Qiskit", "QIWI", "QMK", "Qt", "Qualcomm", "Qualtrics", "Qualys", "Quantcast", "QuantConnect", "Quarkus", "Quasar", "Qubes OS", "Quest", "QuickBooks", "QuickLook", "QuickTime", "Quip", "Quora", "Qwiklabs", "Qzone", "R", "R3", "RabbitMQ", "Racket", "Radar", "RadioPublic", "Railway", "Rainmeter", "Rakuten", "Ram", "Rancher", "Rarible", "Rasa", "Raspberry Pi", "Ravelry", "Ray", "Razer", "Razorpay", "React", "React Hook Form", "React Query", "React Router", "React Table", "ReactiveX", "ReactOS", "Read the Docs", "ReadMe", "Realm", "Reason", "Reason Studios", "Red", "Red Hat", "Red Hat Open Shift", "Redbubble", "Reddit", "Redis", "Redmine", "Redox", "Redux", "Redux-Saga", "RedwoodJS", "Reebok", "Relay", "Reliance Industries Limited", "Remix", "Ren'Py", "Renault", "Render", "RenovateBot", "Renren", "Replit", "Republic of Gamers", "ReScript", "RescueTime", "ResearchGate", "ReSharper", "Resurrection Remix OS", "RetroArch", "RetroPie", "reveal.js", "ReverbNation", "Revolt.chat", "Revolut", "Revue", "REWE", "Rezgo", "Rhinoceros", "Rider", "Rimac Automobili", "Ring", "Riot Games", "Ripple", "Riseup", "Roam Research", "Roblox", "Robot Framework", "Rocket.Chat", "RocksDB", "Rocky Linux", "Roku", "Rolls-Royce", "rollup.js", "Rome", "Roots", "Roots Bedrock", "Roots Sage", "ROS", "Rossmann", "Rotary International", "Rotten Tomatoes", "Roundcube", "RSocket", "RSS", "RStudio", "RT\xC9", "RTL", "RTLZWEI", "RuboCop", "Ruby", "Ruby on Rails", "Ruby Sinatra", "RubyGems", "Runkeeper", "RunKit", "Rust", "RxDB", "Ryanair", "S7 Airlines", "Sabanci", "Safari", "Sahibinden", "Sailfish OS", "Salesforce", "Salt Project", "Samsung", "Samsung Pay", "San Francisco Municipal Railway", "SanDisk", "S\xE3o Paulo Metro", "SAP", "Sass", "Sat.1", "Saturn", "Sauce Labs", "Scala", "Scaleway", "Scania", "Schneider Electric", "scikit-learn", "SciPy", "Scopus", "SCP Foundation", "Scratch", "Screencastify", "Scribd", "Scrimba", "ScrollReveal", "Scrum Alliance", "Scrutinizer CI", "Seagate", "SEAT", "SecurityScorecard", "Sefaria", "Sega", "Selenium", "Sellfy", "Semantic Scholar", "Semantic UI React", "Semantic Web", "semantic-release", "Semaphore CI", "SemVer", "Sencha", "Sendinblue", "Sennheiser", "Sensu", "Sentry", "SEPA", "Sequelize", "Server Fault", "Serverless", "Sessionize", "Setapp", "SFML", "Shadow", "Shanghai Metro", "sharp", "Shazam", "Shell", "Shelly", "Shenzhen Metro", "Shields.io", "Shikimori", "Shopee", "Shopify", "Shopware", "Shotcut", "Showpad", "Showtime", "Shutterstock", "Siemens", "Signal", "Similarweb", "Simkl", "Simple Analytics", "Simple Icons", "Simplenote", "Sina Weibo", "SingleStore", "SitePoint", "Sketch", "Sketchfab", "SketchUp", "Skillshare", "\u0160KODA", "Sky", "Skynet", "Skypack", "Skype", "Skype for Business", "Slack", "Slackware", "Slashdot", "SlickPic", "Slides", "SlideShare", "smart", "SmartThings", "smash.gg", "Smashing Magazine", "SMRT", "SmugMug", "Snapchat", "Snapcraft", "SNCF", "Snowflake", "Snowpack", "Snyk", "Social Blade", "Society6", "Socket.io", "Sogou", "Solid", "Solidity", "Sololearn", "Solus", "Sonar", "SonarCloud", "SonarLint", "SonarQube", "SonarSource", "Songkick", "Songoda", "SonicWall", "Sonos", "Sony", "Soundcharts", "SoundCloud", "Source Engine", "SourceForge", "Sourcegraph", "Sourcetree", "Southwest Airlines", "Spacemacs", "SpaceX", "spaCy", "Spark AR", "Sparkasse", "SparkFun", "SparkPost", "SPDX", "Speaker Deck", "Spectrum", "Speedtest", "Spinnaker", "Spinrilla", "Splunk", "Spond", "Spotify", "Spotlight", "Spreadshirt", "Spreaker", "Spring", "Spring", "Spring Boot", "Spring Security", "Spyder IDE", "SQLite", "Square", "Square Enix", "Squarespace", "SSRN", "Stack Exchange", "Stack Overflow", "Stackbit", "StackBlitz", "StackEdit", "StackPath", "StackShare", "Stadia", "Staffbase", "StandardJS", "Star Trek", "Starbucks", "Stardock", "Starling Bank", "Starship", "STARZ", "Statamic", "Statuspage", "Statuspal", "Steam", "Steam Deck", "SteamDB", "Steamworks", "Steelseries", "Steem", "Steemit", "Steinberg", "Stellar", "Stencyl", "Stimulus", "Stitcher", "STMicroelectronics", "StopStalk", "Storyblok", "Storybook", "Strapi", "Strava", "Streamlit", "Stripe", "strongSwan", "StubHub", "styled-components", "stylelint", "StyleShare", "Stylus", "Subaru", "Sublime Text", "Substack", "Subversion", "suckless", "Sumo Logic", "Supabase", "Super User", "Supermicro", "SurrealDB", "SurveyMonkey", "SUSE", "Suzuki", "Svelte", "SVG", "SVGO", "Swagger", "Swarm", "SWC", "Swift", "Swiggy", "Swiper", "Symantec", "Symfony", "Symphony", "SymPy", "Synology", "System76", "T-Mobile", "Tableau", "TableCheck", "Taco Bell", "tado\xB0", "Taichi Graphics", "Taichi Lang", "Tails", "Tailwind CSS", "Talend", "Talenthouse", "Tamiya", "Tampermonkey", "Taobao", "Tapas", "Target", "Task", "Tasmota", "Tata", "Tauri", "TaxBuzz", "TeamCity", "TeamSpeak", "TeamViewer", "TED", "Teespring", "Tekton", "TELE5", "Telegram", "Telegraph", "Temporal", "Tencent QQ", "TensorFlow", "Teradata", "teratail", "Terraform", "Tesco", "Tesla", "TestCafe", "Testin", "Testing Library", "Tether", "Textpattern", "TGA", "The Algorithms", "The Conversation", "The Irish Times", "The Mighty", "The Models Resource", "The Movie Database", "The North Face", "The Register", "The Sounds Resource", "The Spriters Resource", "The Washington Post", "Thingiverse", "ThinkPad", "Threadless", "Three.js", "Threema", "Thumbtack", "Thunderbird", "Thymeleaf", "Ticketmaster", "Tidal", "Tide", "Tidyverse", "TietoEVRY", "TikTok", "Tile", "Timescale", "Tinder", "TinyLetter", "Tistory", "tmux", "TNT", "Todoist", "Toggl", "Tokyo Metro", "TOML", "Tomorrowland", "Topcoder", "Toptal", "Tor Browser", "Tor Project", "Toshiba", "Toyota", "TP-Link", "tqdm", "Traefik Mesh", "Traefik Proxy", "TrainerRoad", "Trakt", "Transport for Ireland", "Transport for London", "Travis CI", "Treehouse", "Trello", "Trend Micro", "Treyarch", "Triller", "Trino", "Trip.com", "Tripadvisor", "Trove", "tRPC", "TrueNAS", "trulia", "Trusted Shops", "Trustpilot", "Try It Online", "TryHackMe", "ts-node", "Tubi", "TUI", "Tumblr", "TuneIn", "Turborepo", "TurboSquid", "Turkish Airlines", "Tutanota", "TV Time", "Twilio", "Twitch", "Twitter", "Twoo", "Typeform", "TypeScript", "TYPO3", "Uber", "Uber Eats", "Ubiquiti", "Ubisoft", "uBlock Origin", "Ubuntu", "Udacity", "Udemy", "UFC", "UIkit", "Ulule", "Umbraco", "Unacademy", "Under Armour", "Underscore.js", "Undertale", "Unicode", "Unilever", "United Airlines", "Unity", "Unlicense", "UnoCSS", "Unraid", "Unreal Engine", "Unsplash", "Untangle", "Untappd", "UpCloud", "UpLabs", "Uploaded", "UPS", "Upstash", "Uptime Kuma", "Uptobox", "Upwork", "USPS", "V", "V2EX", "V8", "Vaadin", "Vagrant", "Vala", "Valorant", "Valve", "Vapor", "Vault", "Vauxhall", "vBulletin", "Vector Logo Zone", "Vectorworks", "Veeam", "Veepee", "Velog", "Venmo", "Vercel", "Verdaccio", "Veritas", "Verizon", "VEXXHOST", "vFairs", "Viadeo", "Viber", "Vim", "Vimeo", "Vimeo Livestream", "Virgin", "Virgin Media", "VirtualBox", "VirusTotal", "Visa", "Visual Studio", "Visual Studio Code", "Vite", "Vitess", "Vitest", "Vivaldi", "Vivino", "VK", "VLC media player", "VMware", "Vodafone", "Volkswagen", "Volvo", "Vonage", "Vowpal Wabbit", "VOX", "VSCO", "VSCodium", "VTEX", "Vue.js", "Vuetify", "Vulkan", "Vultr", "W3C", "Wacom", "Wagtail", "Wails", "WakaTime", "WALKMAN", "Wallabag", "Walmart", "Wantedly", "Wappalyzer", "Warner Bros.", "Warp", "wasmCloud", "Wasmer", "Wattpad", "Wayland", "Waze", "Wear OS", "Weasyl", "Web3.js", "WebAssembly", "WebAuthn", "webcomponents.org", "WebdriverIO", "Webflow", "WebGL", "webhint", "Weblate", "Webmin", "WebMoney", "Webpack", "WebRTC", "WebStorm", "WEBTOON", "WeChat", "WeGame", "Weights & Biases", "Welcome to the Jungle", "WEMO", "Western Digital", "WeTransfer", "WhatsApp", "When I Work", "WhiteSource", "Wii", "Wii U", "Wiki.js", "Wikidata", "Wikimedia Commons", "Wikipedia", "Wikiquote", "Wikivoyage", "Winamp", "Windi CSS", "Windows", "Windows 11", "Windows 95", "Windows Terminal", "Windows XP", "Winmate", "Wipro", "Wire", "WireGuard", "Wireshark", "Wise", "Wish", "Wistia", "Wix", "Wizz Air", "Wolfram", "Wolfram Language", "Wolfram Mathematica", "Woo", "WooCommerce", "WordPress", "Workplace", "World Health Organization", "WP Engine", "WP Rocket", "WPExplorer", "write.as", "WWE", "Wwise", "X.Org", "Xamarin", "XAML", "XAMPP", "Xbox", "Xcode", "XDA Developers", "Xero", "XFCE", "Xiaomi", "Xilinx", "Xing", "XMPP", "XO", "XRP", "XSplit", "XState", "Y Combinator", "Yahoo!", "Yale", "Yamaha Corporation", "Yamaha Motor Corporation", "Yammer", "Yarn", "Yelp", "Yoast", "YOLO", "YourTravel.TV", "YouTube", "YouTube Gaming", "YouTube Music", "YouTube Studio", "YouTube TV", "Yubico", "Z-Wave", "\u017Babka", "Zalando", "Zalo", "Zapier", "Zara", "Zazzle", "Zcash", "ZDF", "Zebra Technologies", "Zelle", "Zend", "Zend Framework", "Zendesk", "Zenn", "Zenodo", "Zerodha", "ZeroMQ", "Zerply", "Zettlr", "Zhihu", "Zig", "Zigbee", "Zillow", "ZincSearch", "Zingat", "Zoho", "Zoiper", "Zomato", "Zoom", "Zorin", "Zotero", "Zulip", "Zyte"]
	},
	customColor: {
		type: n.Color,
		defaultValue: we.defaultProps.customColor,
		title: "Color"
	}
});
var tt = e => e;
var Pt = {
	ms: e => 1e3 * e,
	s: e => e / 1e3
};

function la(e, t) {
	return t ? e * (1e3 / t) : 0
}
var yr = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
	yo = 1e-7,
	bo = 12;

function vo(e, t, r, o, i) {
	let s, c, h = 0;
	do c = t + (r - t) / 2, s = yr(c, o, i) - e, s > 0 ? r = c : t = c; while (Math.abs(s) > yo && ++h < bo);
	return c
}

function at(e, t, r, o) {
	if (e === t && r === o) return tt;
	let i = s => vo(s, 0, 1, e, r);
	return s => s === 0 || s === 1 ? s : yr(i(s), t, o)
}
var kl = {
	ease: at(.25, .1, .25, 1),
	"ease-in": at(.42, 0, 1, 1),
	"ease-in-out": at(.42, 0, .58, 1),
	"ease-out": at(0, 0, .58, 1)
};

function br(e, t) {
	var r = {};
	for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (r[o[i]] = e[o[i]])
	}
	return r
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
	value: !0
});
Ke.warning = function() {};
Ke.invariant = function() {};
var Ml = Ke.__esModule,
	Al = Ke.warning,
	Co = Ke.invariant;
var Po = 5;

function Tt(e, t, r) {
	let o = Math.max(t - Po, 0);
	return la(r - e(o), t - o)
}
var Ze = {
		stiffness: 100,
		damping: 10,
		mass: 1
	},
	To = (e = Ze.stiffness, t = Ze.damping, r = Ze.mass) => t / (2 * Math.sqrt(e * r));

function Mo(e, t, r) {
	return e < t && r >= t || e > t && r <= t
}
var da = ({
		stiffness: e = Ze.stiffness,
		damping: t = Ze.damping,
		mass: r = Ze.mass,
		from: o = 0,
		to: i = 1,
		velocity: s = 0,
		restSpeed: c = 2,
		restDistance: h = .5
	} = {}) => {
		s = s ? Pt.s(s) : 0;
		let u = {
				done: !1,
				hasReachedTarget: !1,
				current: o,
				target: i
			},
			d = i - o,
			m = Math.sqrt(e / r) / 1e3,
			l = To(e, t, r),
			P;
		if (l < 1) {
			let b = m * Math.sqrt(1 - l * l);
			P = g => i - Math.exp(-l * m * g) * ((l * m * d - s) / b * Math.sin(b * g) + d * Math.cos(b * g))
		} else P = b => i - Math.exp(-m * b) * (d + (m * d - s) * b);
		return b => {
			u.current = P(b);
			let g = b === 0 ? s : Tt(P, b, u.current),
				j = Math.abs(g) <= c,
				S = Math.abs(i - u.current) <= h;
			return u.done = j && S, u.hasReachedTarget = Mo(o, i, u.current), u
		}
	},
	vr = ({
		from: e = 0,
		velocity: t = 0,
		power: r = .8,
		decay: o = .325,
		bounceDamping: i,
		bounceStiffness: s,
		changeTarget: c,
		min: h,
		max: u,
		restDistance: d = .5,
		restSpeed: m
	}) => {
		o = Pt.ms(o);
		let l = {
				hasReachedTarget: !1,
				done: !1,
				current: e,
				target: e
			},
			P = f => h !== void 0 && f < h || u !== void 0 && f > u,
			b = f => h === void 0 ? u : u === void 0 || Math.abs(h - f) < Math.abs(u - f) ? h : u,
			g = r * t,
			j = e + g,
			S = c === void 0 ? j : c(j);
		l.target = S, S !== j && (g = S - e);
		let T = f => -g * Math.exp(-f / o),
			x = f => S + T(f),
			M = f => {
				let J = T(f),
					Q = x(f);
				l.done = Math.abs(J) <= d, l.current = l.done ? S : Q
			},
			w, I, A = f => {
				P(l.current) && (w = f, I = da({
					from: l.current,
					to: b(l.current),
					velocity: Tt(x, f, l.current),
					damping: i,
					stiffness: s,
					restDistance: d,
					restSpeed: m
				}))
			};
		return A(0), f => {
			let J = !1;
			return !I && w === void 0 && (J = !0, M(f), A(f)), w !== void 0 && f > w ? (l.hasReachedTarget = !0, I(f - w)) : (l.hasReachedTarget = !1, !J && M(f), l)
		}
	},
	ca = 10,
	Ao = 1e4;

function xr(e) {
	let t, r = ca,
		o = e(0),
		i = [o.current];
	for (; !o.done && r < Ao;) o = e(r), i.push(o.done ? o.target : o.current), t === void 0 && o.hasReachedTarget && (t = r), r += ca;
	let s = r - ca;
	return i.length === 1 && i.push(o.current), {
		keyframes: i,
		duration: s / 1e3,
		overshootDuration: (t ?? s) / 1e3
	}
}
var Ro = ["", "X", "Y", "Z"],
	jo = ["translate", "scale", "rotate", "skew"];
var wr = {
		syntax: "<angle>",
		initialValue: "0deg",
		toDefaultUnit: e => e + "deg"
	},
	Io = {
		translate: {
			syntax: "<length-percentage>",
			initialValue: "0px",
			toDefaultUnit: e => e + "px"
		},
		rotate: wr,
		scale: {
			syntax: "<number>",
			initialValue: 1,
			toDefaultUnit: tt
		},
		skew: wr
	},
	Lo = new Map,
	zo = e => `--motion-${e}`,
	Tr = ["x", "y", "z"];
jo.forEach(e => {
	Ro.forEach(t => {
		Tr.push(e + t), Lo.set(zo(e + t), Io[e])
	})
});
var ec = new Set(Tr);
var kr = e => document.createElement("div").animate(e, {
		duration: .001
	}),
	Sr = {
		cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
		waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
		partialKeyframes: () => {
			try {
				kr({
					opacity: [1]
				})
			} catch {
				return !1
			}
			return !0
		},
		finished: () => Boolean(kr({
			opacity: [0, 1]
		}).finished)
	},
	ma = {},
	Vo = {};
for (let e in Sr) Vo[e] = () => (ma[e] === void 0 && (ma[e] = Sr[e]()), ma[e]);

function Mr(e, t) {
	var r;
	return typeof e == "string" ? t ? ((r = t[e]) !== null && r !== void 0 || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
}

function Ar(e) {
	let t = new WeakMap;
	return (r = {}) => {
		let o = new Map,
			i = (c = 0, h = 100, u = 0, d = !1) => {
				let m = `${c}-${h}-${u}-${d}`;
				return o.has(m) || o.set(m, e(Object.assign({
					from: c,
					to: h,
					velocity: u,
					restSpeed: d ? .05 : 2,
					restDistance: d ? .01 : .5
				}, r))), o.get(m)
			},
			s = c => (t.has(c) || t.set(c, xr(c)), t.get(c));
		return {
			createAnimation: (c, h, u, d, m) => {
				var l, P;
				let b, g = c.length;
				if (u && g <= 2 && c.every(Eo)) {
					let S = c[g - 1],
						T = g === 1 ? null : c[0],
						x = 0,
						M = 0,
						w = m?.generator;
					if (w) {
						let {
							animation: f,
							generatorStartTime: J
						} = m, Q = f?.startTime || J || 0, Y = f?.currentTime || performance.now() - Q, O = w(Y).current;
						M = (l = T) !== null && l !== void 0 ? l : O, (g === 1 || g === 2 && c[0] === null) && (x = Tt(E => w(E).current, Y, O))
					} else M = (P = T) !== null && P !== void 0 ? P : parseFloat(h());
					let I = i(M, S, x, d?.includes("scale")),
						A = s(I);
					b = Object.assign(Object.assign({}, A), {
						easing: "linear"
					}), m && (m.generator = I, m.generatorStartTime = performance.now())
				} else b = {
					easing: "ease",
					duration: s(i(0, 100)).overshootDuration
				};
				return b
			}
		}
	}
}
var Eo = e => typeof e != "string",
	tc = Ar(da),
	ac = Ar(vr),
	Bo = {
		any: 0,
		all: 1
	};

function Do(e, t, {
	root: r,
	margin: o,
	amount: i = "any"
} = {}) {
	if (typeof IntersectionObserver > "u") return () => {};
	let s = Mr(e),
		c = new WeakMap,
		h = d => {
			d.forEach(m => {
				let l = c.get(m.target);
				if (m.isIntersecting !== Boolean(l))
					if (m.isIntersecting) {
						let P = t(m);
						typeof P == "function" ? c.set(m.target, P) : u.unobserve(m.target)
					} else l && (l(m), c.delete(m.target))
			})
		},
		u = new IntersectionObserver(h, {
			root: r,
			rootMargin: o,
			threshold: typeof i == "number" ? i : Bo[i]
		});
	return s.forEach(d => u.observe(d)), () => u.disconnect()
}
var Mt = new WeakMap,
	Ae;

function No(e, t) {
	if (t) {
		let {
			inlineSize: r,
			blockSize: o
		} = t[0];
		return {
			width: r,
			height: o
		}
	}
	return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
		width: e.offsetWidth,
		height: e.offsetHeight
	}
}

function Fo({
	target: e,
	contentRect: t,
	borderBoxSize: r
}) {
	var o;
	(o = Mt.get(e)) === null || o === void 0 || o.forEach(i => {
		i({
			target: e,
			contentSize: t,
			get size() {
				return No(e, r)
			}
		})
	})
}

function Uo(e) {
	e.forEach(Fo)
}

function Oo() {
	typeof ResizeObserver < "u" && (Ae = new ResizeObserver(Uo))
}

function _o(e, t) {
	Ae || Oo();
	let r = Mr(e);
	return r.forEach(o => {
		let i = Mt.get(o);
		i || (i = new Set, Mt.set(o, i)), i.add(t), Ae?.observe(o)
	}), () => {
		r.forEach(o => {
			let i = Mt.get(o);
			i?.delete(t), i?.size || Ae?.unobserve(o)
		})
	}
}
var At = new Set,
	rt;

function qo() {
	rt = () => {
		let e = {
				width: y.innerWidth,
				height: y.innerHeight
			},
			t = {
				target: y,
				size: e,
				contentSize: e
			};
		At.forEach(r => r(t))
	}, y.addEventListener("resize", rt)
}

function Go(e) {
	return At.add(e), rt || qo(), () => {
		At.delete(e), !At.size && rt && (rt = void 0)
	}
}

function Rr(e, t) {
	return typeof e == "function" ? Go(e) : _o(e, t)
}

function ua(e, t, r) {
	e.dispatchEvent(new CustomEvent(t, {
		detail: {
			originalEvent: r
		}
	}))
}

function Cr(e, t, r) {
	e.dispatchEvent(new CustomEvent(t, {
		detail: {
			originalEntry: r
		}
	}))
}
var Wo = {
		isActive: e => Boolean(e.inView),
		subscribe: (e, {
			enable: t,
			disable: r
		}, {
			inViewOptions: o = {}
		}) => {
			let {
				once: i
			} = o, s = br(o, ["once"]);
			return Do(e, c => {
				if (t(), Cr(e, "viewenter", c), !i) return h => {
					r(), Cr(e, "viewleave", h)
				}
			}, s)
		}
	},
	Pr = (e, t, r) => o => {
		(!o.pointerType || o.pointerType === "mouse") && (r(), ua(e, t, o))
	},
	Ho = {
		isActive: e => Boolean(e.hover),
		subscribe: (e, {
			enable: t,
			disable: r
		}) => {
			let o = Pr(e, "hoverstart", t),
				i = Pr(e, "hoverend", r);
			return e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", i), () => {
				e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", i)
			}
		}
	},
	Ko = {
		isActive: e => Boolean(e.press),
		subscribe: (e, {
			enable: t,
			disable: r
		}) => {
			let o = s => {
					r(), ua(e, "pressend", s), y.removeEventListener("pointerup", o)
				},
				i = s => {
					t(), ua(e, "pressstart", s), y.addEventListener("pointerup", o)
				};
			return e.addEventListener("pointerdown", i), () => {
				e.removeEventListener("pointerdown", i), y.removeEventListener("pointerup", o)
			}
		}
	},
	Zo = {
		inView: Wo,
		hover: Ho,
		press: Ko
	},
	rc = ["initial", "animate", ...Object.keys(Zo), "exit"];
var Rt = () => typeof document == "object";

function Xo() {
	if (Rt()) {
		if (typeof document.hidden < "u") return "visibilitychange";
		if (typeof document.msHidden < "u") return "msvisibilitychange";
		if (typeof document.webkitHidden < "u") return "webkitvisibilitychange"
	}
}

function Jo() {
	if (Rt()) {
		if (typeof document.hidden < "u") return "hidden";
		if (typeof document.msHidden < "u") return "msHidden";
		if (typeof document.webkitHidden < "u") return "webkitHidden"
	}
}

function jr() {
	if (Rt()) return !document[Jo()]
}

function Ir() {
	if (!Rt()) return;
	let [e, t] = ee(jr()), r = () => t(jr());
	return z(() => {
		let o = Xo();
		return document.addEventListener(o, r, !1), () => {
			document.removeEventListener(o, r)
		}
	}), e
}

function U(e) {
	let {
		slots: t,
		startFrom: r,
		direction: o,
		effectsOptions: i,
		autoPlayControl: s,
		dragControl: c,
		alignment: h,
		gap: u,
		padding: d,
		paddingPerSide: m,
		paddingTop: l,
		paddingRight: P,
		paddingBottom: b,
		paddingLeft: g,
		itemAmount: j,
		fadeOptions: S,
		intervalControl: T,
		transitionControl: x,
		arrowOptions: M,
		borderRadius: w,
		progressOptions: I,
		style: A
	} = e, {
		effectsOpacity: f,
		effectsScale: J,
		effectsRotate: Q,
		effectsPerspective: Y,
		effectsHover: O
	} = i, {
		fadeContent: E,
		overflow: ke,
		fadeWidth: L,
		fadeInset: K,
		fadeAlpha: Ee
	} = S, {
		showMouseControls: Re,
		arrowSize: oe,
		arrowRadius: R,
		arrowFill: Be,
		leftArrow: Se,
		rightArrow: je,
		arrowShouldSpace: ce = !0,
		arrowShouldFadeIn: be = !1,
		arrowPosition: W,
		arrowPadding: de,
		arrowGap: Ie,
		arrowPaddingTop: ae,
		arrowPaddingRight: Et,
		arrowPaddingBottom: De,
		arrowPaddingLeft: Ne
	} = M, {
		showProgressDots: ct,
		dotSize: dt,
		dotsInset: mt,
		dotsRadius: Ma,
		dotsPadding: N,
		dotsGap: Je,
		dotsFill: Bt,
		dotsBackground: Br,
		dotsActiveOpacity: Dr,
		dotsOpacity: Nr,
		dotsBlur: Aa
	} = I, Fr = m ? `${l}px ${P}px ${b}px ${g}px` : `${d}px`, Le = he.current() === he.canvas, Fe = Kt.count(t) > 0, B = o === "left" || o === "right", ut = o === "right" || o === "bottom";
	if (!Fe) return V("section", {
		style: Qo,
		children: [a("div", {
			style: Yo,
			children: "\u2B50\uFE0F"
		}), a("p", {
			style: $o,
			children: "Connect to Content"
		}), a("p", {
			style: en,
			children: "Add layers or components to make infinite auto-playing slideshows."
		})]
	});
	let Qe = q(null),
		_ = ie(() => t.map(C => Wa()), [t]),
		Dt = q(void 0),
		[D, Ur] = ee({
			parent: null,
			children: null,
			item: null,
			itemWidth: null,
			itemHeight: null
		}),
		[Or, Ra] = ee(!1),
		[_r, ja] = ee(s),
		[qr, Ia] = ee(!1),
		[Ue, La] = ee(!1),
		Nt = [],
		za = 4;
	Le && (za = 1);
	let Va = fe(() => {
		Ja.read(() => {
			if (Fe && Qe.current) {
				let C = t.length - 1,
					ue = B ? Qe.current.offsetWidth : Qe.current.offsetHeight,
					re = _[0].current ? B ? _[0].current.offsetLeft : _[0].current.offsetTop : 0,
					Ge = (_[C].current ? B ? _[C].current.offsetLeft + _[C].current.offsetWidth : _[C].current.offsetTop + _[C].current.offsetHeight : 0) - re + u,
					ht = _[0].current ? B ? _[0].current.offsetWidth : _[0].current.offsetHeight : 0,
					Wt = _[0].current ? _[0].current.offsetWidth : 0,
					Ht = _[0].current ? _[0].current.offsetHeight : 0;
				Ur({
					parent: ue,
					children: Ge,
					item: ht,
					itemWidth: Wt,
					itemHeight: Ht
				})
			}
		})
	}, [Fe]);
	$e(() => {
		Fe && Va()
	}, [Fe, j]);
	let Ft = q(!0);
	z(() => Rr(Qe.current, ({
		contentSize: C
	}) => {
		!Ft.current && (C.width || C.height) && (Va(), La(!0)), Ft.current = !1
	}), []), z(() => {
		if (Ue) {
			let C = setTimeout(() => La(!1), 500);
			return () => clearTimeout(C)
		}
	}, [Ue]);
	let Oe = t?.length,
		pt = Le ? 0 : D?.children,
		Ut = D?.item + u,
		Gr = r * Ut,
		[me, Ye] = ee(r + Oe),
		[Wr, Ea] = ee(!1),
		Ba = Ir(),
		Da = ut ? 1 : -1,
		_e = Ka(pt),
		Na = B ? -r * (D?.itemWidth + u) : -r * (D?.itemHeight + u),
		Ot = () => Da * me * Ut,
		_t = Le ? 0 : Pe(_e, C => {
			let ue = We(-pt, -pt * 2, C);
			return isNaN(ue) ? 0 : ue
		}),
		Hr = We(0, Oe, me),
		Kr = We(0, -Oe, me);
	$e(() => {
		D?.children !== null && !Ft.current && Ue && _e.set(Ot())
	}, [D, pt, Da, Gr, me, Ut, Ue]);
	let Fa = () => {
			Le || !Fe || !D.parent || Wr || (_e.get() !== Ot() && Xa(_e, Ot(), x), s && _r && (Dt.current = setTimeout(() => {
				Ye(me + 1), Fa()
			}, T * 1e3)))
		},
		qe = C => {
			Ye(ut ? me - C : me + C)
		},
		Zr = C => {
			let ue = We(0, Oe, me),
				re = We(0, -Oe, me),
				ve = C - ue,
				Ge = C - Math.abs(re);
			Ye(ut ? me - Ge : me + ve)
		},
		Xr = () => {
			Ea(!0)
		},
		Jr = (C, {
			offset: ue,
			velocity: re
		}) => {
			Ea(!1);
			let ve = B ? ue.x : ue.y,
				Ge = 200,
				ht = B ? re.x : re.y,
				Wt = ve < -D.item / 2,
				Ht = ve > D.item / 2,
				so = Math.abs(ve),
				gt = Math.round(so / D.item),
				qa = gt === 0 ? 1 : gt;
			ht > Ge ? qe(-qa) : ht < -Ge ? qe(qa) : (Wt && qe(gt), Ht && qe(-gt))
		};
	z(() => {
		if (!(!Ba || Ue)) return Fa(), () => Dt.current && clearTimeout(Dt.current)
	}, [Nt, Ba, Ue]);
	let Qr = 0,
		Ua = `calc(${100/j}% - ${u}px + ${u/j}px)`;
	for (let C = 0; C < za; C++) Nt.push(...Kt.map(t, (ue, re) => {
		let ve;
		return re === 0 && (ve = _[0]), re === t.length - 1 && (ve = _[1]), a(rn, {
			ref: _[re],
			slideKey: C + re + "lg",
			index: C,
			width: B && j > 1 ? Ua : "100%",
			height: B ? "100%" : j > 1 ? Ua : "100%",
			size: D,
			child: ue,
			numChildren: t?.length,
			wrappedValue: _t,
			childCounter: Qr++,
			gap: u,
			isCanvas: Le,
			isHorizontal: B,
			effectsOpacity: f,
			effectsScale: J,
			effectsRotate: Q,
			children: C + re
		}, C + re + "lg")
	}));
	let Yr = B ? "to right" : "to bottom",
		Oa = L / 2,
		$r = 100 - L / 2,
		eo = an(K, 0, Oa),
		to = 100 - K,
		qt = `linear-gradient(${Yr}, rgba(0, 0, 0, ${Ee}) ${eo}%, rgba(0, 0, 0, 1) ${Oa}%, rgba(0, 0, 0, 1) ${$r}%, rgba(0, 0, 0, ${Ee}) ${to}%)`,
		Gt = [],
		ft = {};
	if (ct) {
		for (let C = 0; C < t?.length; C++) Gt.push(a(on, {
			dotStyle: {
				...sn,
				width: dt,
				height: dt,
				backgroundColor: Bt
			},
			buttonStyle: pa,
			selectedOpacity: Dr,
			opacity: Nr,
			onClick: () => Zr(C),
			wrappedIndex: Hr,
			wrappedIndexInverted: Kr,
			total: Oe,
			index: C,
			gap: Je,
			padding: N,
			isHorizontal: B,
			isInverted: ut
		}, C));
		Aa > 0 && (ft.backdropFilter = ft.WebkitBackdropFilter = ft.MozBackdropFilter = `blur(${Aa}px)`)
	}
	let ao = c ? {
			drag: B ? "x" : "y",
			onDragStart: Xr,
			onDragEnd: Jr,
			dragDirectionLock: !0,
			values: {
				x: _e,
				y: _e
			},
			dragMomentum: !1
		} : {},
		ro = W === "top-left" || W === "top-mid" || W === "top-right",
		oo = W === "bottom-left" || W === "bottom-mid" || W === "bottom-right",
		no = W === "top-left" || W === "bottom-left",
		io = W === "top-right" || W === "bottom-right",
		_a = W === "top-mid" || W === "bottom-mid" || W === "auto";
	return V("section", {
		style: {
			...Lr,
			padding: Fr,
			WebkitMaskImage: E ? qt : void 0,
			MozMaskImage: E ? qt : void 0,
			maskImage: E ? qt : void 0,
			opacity: D?.item !== null ? 1 : 0,
			userSelect: "none"
		},
		onMouseEnter: () => {
			Ra(!0), O || ja(!1)
		},
		onMouseLeave: () => {
			Ra(!1), O || ja(!0)
		},
		onMouseDown: C => {
			C.preventDefault(), Ia(!0)
		},
		onMouseUp: () => Ia(!1),
		children: [a("div", {
			style: {
				width: "100%",
				height: "100%",
				margin: 0,
				padding: "inherit",
				position: "absolute",
				inset: 0,
				overflow: ke ? "visible" : "hidden",
				borderRadius: w,
				userSelect: "none",
				perspective: Y
			},
			children: a(p.ul, {
				ref: Qe,
				...ao,
				style: {
					...Lr,
					gap: u,
					placeItems: h,
					x: B ? Le ? Na : _t : 0,
					y: B ? 0 : Le ? Na : _t,
					flexDirection: B ? "row" : "column",
					transformStyle: Q !== 0 ? "preserve-3d" : void 0,
					cursor: c ? qr ? "grabbing" : "grab" : "auto",
					userSelect: "none",
					...A
				},
				children: Nt
			})
		}), V("fieldset", {
			style: {
				...tn
			},
			"aria-label": "Slideshow pagination controls",
			className: "framer--slideshow-controls",
			children: [V(p.div, {
				style: {
					position: "absolute",
					display: "flex",
					flexDirection: B ? "row" : "column",
					justifyContent: ce ? "space-between" : "center",
					gap: ce ? "unset" : Ie,
					opacity: be ? 0 : 1,
					alignItems: "center",
					inset: de,
					top: ce ? de : ro ? ae : "unset",
					left: ce ? de : no ? Ne : _a ? 0 : "unset",
					right: ce ? de : io ? Et : _a ? 0 : "unset",
					bottom: ce ? de : oo ? De : "unset"
				},
				animate: be && {
					opacity: Or ? 1 : 0
				},
				transition: x,
				children: [a(p.button, {
					type: "button",
					style: {
						...pa,
						backgroundColor: Be,
						width: oe,
						height: oe,
						borderRadius: R,
						rotate: B ? 0 : 90,
						display: Re ? "block" : "none",
						pointerEvents: "auto"
					},
					onClick: () => qe(-1),
					"aria-label": "Previous",
					whileTap: {
						scale: .9
					},
					transition: {
						duration: .15
					},
					children: a("img", {
						width: oe,
						height: oe,
						src: Se || "framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
						alt: "Back Arrow"
					})
				}), a(p.button, {
					type: "button",
					style: {
						...pa,
						backgroundColor: Be,
						width: oe,
						height: oe,
						borderRadius: R,
						rotate: B ? 0 : 90,
						display: Re ? "block" : "none",
						pointerEvents: "auto"
					},
					onClick: () => qe(1),
					"aria-label": "Next",
					whileTap: {
						scale: .9
					},
					transition: {
						duration: .15
					},
					children: a("img", {
						width: oe,
						height: oe,
						src: je || "framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
						alt: "Next Arrow"
					})
				})]
			}), Gt.length > 1 ? a("div", {
				style: {
					...nn,
					left: B ? "50%" : mt,
					top: B ? "unset" : "50%",
					transform: B ? "translateX(-50%)" : "translateY(-50%)",
					flexDirection: B ? "row" : "column",
					bottom: B ? mt : "unset",
					borderRadius: Ma,
					backgroundColor: Br,
					userSelect: "none",
					...ft
				},
				children: Gt
			}) : null]
		})]
	})
}
U.defaultProps = {
	direction: "left",
	dragControl: !1,
	startFrom: 0,
	itemAmount: 1,
	infinity: !0,
	gap: 10,
	padding: 10,
	autoPlayControl: !0,
	effectsOptions: {
		effectsOpacity: 1,
		effectsScale: 1,
		effectsRotate: 0,
		effectsPerspective: 1200,
		effectsHover: !0
	},
	transitionControl: {
		type: "spring",
		stiffness: 200,
		damping: 40
	},
	fadeOptions: {
		fadeContent: !1,
		overflow: !1,
		fadeWidth: 25,
		fadeAlpha: 0,
		fadeInset: 0
	},
	arrowOptions: {
		showMouseControls: !0,
		arrowShouldFadeIn: !1,
		arrowShouldSpace: !0,
		arrowFill: "rgba(0,0,0,0.2)",
		arrowSize: 40
	},
	progressOptions: {
		showProgressDots: !0
	}
};
H(U, {
	slots: {
		type: n.Array,
		title: "Content",
		control: {
			type: n.ComponentInstance
		}
	},
	direction: {
		type: n.Enum,
		title: "Direction",
		options: ["left", "right", "top", "bottom"],
		optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
		optionTitles: ["Left", "Right", "Top", "Bottom"],
		displaySegmentedControl: !0,
		defaultValue: U.defaultProps.direction
	},
	autoPlayControl: {
		type: n.Boolean,
		title: "Auto Play",
		defaultValue: !0
	},
	intervalControl: {
		type: n.Number,
		title: "Interval",
		defaultValue: 1.5,
		min: .5,
		max: 10,
		step: .1,
		displayStepper: !0,
		unit: "s",
		hidden: e => !e.autoPlayControl
	},
	dragControl: {
		type: n.Boolean,
		title: "Draggable",
		defaultValue: !1
	},
	startFrom: {
		type: n.Number,
		title: "Current",
		min: 0,
		max: 10,
		displayStepper: !0,
		defaultValue: U.defaultProps.startFrom
	},
	effectsOptions: {
		type: n.Object,
		title: "Effects",
		controls: {
			effectsOpacity: {
				type: n.Number,
				title: "Opacity",
				defaultValue: U.defaultProps.effectsOptions.effectsOpacity,
				min: 0,
				max: 1,
				step: .01,
				displayStepper: !0
			},
			effectsScale: {
				type: n.Number,
				title: "Scale",
				defaultValue: U.defaultProps.effectsOptions.effectsScale,
				min: 0,
				max: 1,
				step: .01,
				displayStepper: !0
			},
			effectsPerspective: {
				type: n.Number,
				title: "Perspective",
				defaultValue: U.defaultProps.effectsOptions.effectsPerspective,
				min: 200,
				max: 2e3,
				step: 1
			},
			effectsRotate: {
				type: n.Number,
				title: "Rotate",
				defaultValue: U.defaultProps.effectsOptions.effectsRotate,
				min: -180,
				max: 180,
				step: 1
			},
			effectsHover: {
				type: n.Boolean,
				title: "On Hover",
				enabledTitle: "Play",
				disabledTitle: "Pause",
				defaultValue: U.defaultProps.effectsOptions.effectsHover
			}
		}
	},
	alignment: {
		type: n.Enum,
		title: "Align",
		options: ["flex-start", "center", "flex-end"],
		optionIcons: {
			direction: {
				right: ["align-top", "align-middle", "align-bottom"],
				left: ["align-top", "align-middle", "align-bottom"],
				top: ["align-left", "align-center", "align-right"],
				bottom: ["align-left", "align-center", "align-right"]
			}
		},
		defaultValue: "center",
		displaySegmentedControl: !0
	},
	itemAmount: {
		type: n.Number,
		title: "Items",
		min: 1,
		max: 10,
		displayStepper: !0,
		defaultValue: U.defaultProps.itemAmount
	},
	gap: {
		type: n.Number,
		title: "Gap",
		min: 0
	},
	padding: {
		title: "Padding",
		type: n.FusedNumber,
		toggleKey: "paddingPerSide",
		toggleTitles: ["Padding", "Padding per side"],
		defaultValue: 0,
		valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
		valueLabels: ["T", "R", "B", "L"],
		min: 0
	},
	borderRadius: {
		type: n.Number,
		title: "Radius",
		min: 0,
		max: 500,
		displayStepper: !0,
		defaultValue: 0
	},
	transitionControl: {
		type: n.Transition,
		defaultValue: U.defaultProps.transitionControl,
		title: "Transition"
	},
	fadeOptions: {
		type: n.Object,
		title: "Clipping",
		controls: {
			fadeContent: {
				type: n.Boolean,
				title: "Fade",
				defaultValue: !1
			},
			overflow: {
				type: n.Boolean,
				title: "Overflow",
				enabledTitle: "Show",
				disabledTitle: "Hide",
				defaultValue: !1,
				hidden(e) {
					return e.fadeContent === !0
				}
			},
			fadeWidth: {
				type: n.Number,
				title: "Width",
				defaultValue: 25,
				min: 0,
				max: 100,
				unit: "%",
				hidden(e) {
					return e.fadeContent === !1
				}
			},
			fadeInset: {
				type: n.Number,
				title: "Inset",
				defaultValue: 0,
				min: 0,
				max: 100,
				unit: "%",
				hidden(e) {
					return e.fadeContent === !1
				}
			},
			fadeAlpha: {
				type: n.Number,
				title: "Opacity",
				defaultValue: 0,
				min: 0,
				max: 1,
				step: .05,
				hidden(e) {
					return e.fadeContent === !1
				}
			}
		}
	},
	arrowOptions: {
		type: n.Object,
		title: "Arrows",
		controls: {
			showMouseControls: {
				type: n.Boolean,
				title: "Show",
				defaultValue: U.defaultProps.arrowOptions.showMouseControls
			},
			arrowFill: {
				type: n.Color,
				title: "Fill",
				hidden: e => !e.showMouseControls,
				defaultValue: U.defaultProps.arrowOptions.arrowFill
			},
			leftArrow: {
				type: n.Image,
				title: "Previous",
				hidden: e => !e.showMouseControls
			},
			rightArrow: {
				type: n.Image,
				title: "Next",
				hidden: e => !e.showMouseControls
			},
			arrowSize: {
				type: n.Number,
				title: "Size",
				min: 0,
				max: 200,
				displayStepper: !0,
				defaultValue: U.defaultProps.arrowOptions.arrowSize,
				hidden: e => !e.showMouseControls
			},
			arrowRadius: {
				type: n.Number,
				title: "Radius",
				min: 0,
				max: 500,
				defaultValue: 40,
				hidden: e => !e.showMouseControls
			},
			arrowShouldFadeIn: {
				type: n.Boolean,
				title: "Fade In",
				defaultValue: !1,
				hidden: e => !e.showMouseControls
			},
			arrowShouldSpace: {
				type: n.Boolean,
				title: "Distance",
				enabledTitle: "Space",
				disabledTitle: "Group",
				defaultValue: U.defaultProps.arrowOptions.arrowShouldSpace,
				hidden: e => !e.showMouseControls
			},
			arrowPosition: {
				type: n.Enum,
				title: "Position",
				options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"],
				optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"],
				hidden: e => !e.showMouseControls || e.arrowShouldSpace
			},
			arrowPadding: {
				type: n.Number,
				title: "Inset",
				min: -100,
				max: 100,
				defaultValue: 20,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || !e.arrowShouldSpace
			},
			arrowPaddingTop: {
				type: n.Number,
				title: "Top",
				min: -500,
				max: 500,
				defaultValue: 0,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "bottom-mid" || e.arrowPosition === "bottom-left" || e.arrowPosition === "bottom-right"
			},
			arrowPaddingBottom: {
				type: n.Number,
				title: "Bottom",
				min: -500,
				max: 500,
				defaultValue: 0,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-mid" || e.arrowPosition === "top-left" || e.arrowPosition === "top-right"
			},
			arrowPaddingRight: {
				type: n.Number,
				title: "Right",
				min: -500,
				max: 500,
				defaultValue: 0,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-left" || e.arrowPosition === "top-mid" || e.arrowPosition === "bottom-left" || e.arrowPosition === "bottom-mid"
			},
			arrowPaddingLeft: {
				type: n.Number,
				title: "Left",
				min: -500,
				max: 500,
				defaultValue: 0,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-right" || e.arrowPosition === "top-mid" || e.arrowPosition === "bottom-right" || e.arrowPosition === "bottom-mid"
			},
			arrowGap: {
				type: n.Number,
				title: "Gap",
				min: 0,
				max: 100,
				defaultValue: 10,
				displayStepper: !0,
				hidden: e => !e.showMouseControls || e.arrowShouldSpace
			}
		}
	},
	progressOptions: {
		type: n.Object,
		title: "Dots",
		controls: {
			showProgressDots: {
				type: n.Boolean,
				title: "Show",
				defaultValue: !1
			},
			dotSize: {
				type: n.Number,
				title: "Size",
				min: 1,
				max: 100,
				defaultValue: 10,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsInset: {
				type: n.Number,
				title: "Inset",
				min: -100,
				max: 100,
				defaultValue: 10,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsGap: {
				type: n.Number,
				title: "Gap",
				min: 0,
				max: 100,
				defaultValue: 10,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsPadding: {
				type: n.Number,
				title: "Padding",
				min: 0,
				max: 100,
				defaultValue: 10,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsFill: {
				type: n.Color,
				title: "Fill",
				defaultValue: "#fff",
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsBackground: {
				type: n.Color,
				title: "Backdrop",
				defaultValue: "rgba(0,0,0,0.2)",
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsRadius: {
				type: n.Number,
				title: "Radius",
				min: 0,
				max: 200,
				defaultValue: 50,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsOpacity: {
				type: n.Number,
				title: "Opacity",
				min: 0,
				max: 1,
				defaultValue: .5,
				step: .1,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsActiveOpacity: {
				type: n.Number,
				title: "Current",
				min: 0,
				max: 1,
				defaultValue: 1,
				step: .1,
				displayStepper: !0,
				hidden: e => !e.showProgressDots || e.showScrollbar
			},
			dotsBlur: {
				type: n.Number,
				title: "Blur",
				min: 0,
				max: 50,
				defaultValue: 0,
				step: 1,
				hidden: e => !e.showProgressDots || e.showScrollbar
			}
		}
	}
});
var Lr = {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		height: "100%",
		maxWidth: "100%",
		maxHeight: "100%",
		placeItems: "center",
		margin: 0,
		padding: 0,
		listStyleType: "none",
		textIndent: "none"
	},
	Qo = {
		display: "flex",
		width: "100%",
		height: "100%",
		placeContent: "center",
		placeItems: "center",
		flexDirection: "column",
		color: "#96F",
		background: "rgba(136, 85, 255, 0.1)",
		fontSize: 11,
		overflow: "hidden",
		padding: "20px 20px 30px 20px"
	},
	Yo = {
		fontSize: 32,
		marginBottom: 10
	},
	$o = {
		margin: 0,
		marginBottom: 10,
		fontWeight: 600,
		textAlign: "center"
	},
	en = {
		margin: 0,
		opacity: .7,
		maxWidth: 180,
		lineHeight: 1.5,
		textAlign: "center"
	},
	pa = {
		border: "none",
		display: "flex",
		placeContent: "center",
		placeItems: "center",
		overflow: "hidden",
		background: "transparent",
		cursor: "pointer",
		margin: 0,
		padding: 0
	},
	tn = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		pointerEvents: "none",
		userSelect: "none",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		border: 0,
		padding: 0,
		margin: 0
	},
	an = (e, t, r) => Math.min(Math.max(e, t), r),
	rn = $(function(t, r) {
		var o, i;
		let {
			slideKey: s,
			width: c,
			height: h,
			child: u,
			size: d,
			gap: m,
			wrappedValue: l,
			numChildren: P,
			childCounter: b,
			isCanvas: g,
			effects: j,
			effectsOpacity: S,
			effectsScale: T,
			effectsRotate: x,
			isHorizontal: M,
			isLast: w,
			index: I
		} = t, A = (d?.item + m) * b, f = [-d?.item, 0, d?.parent - d?.item + m, d?.parent].map(L => L - A), J = !g && Pe(l, f, [-x, 0, 0, x]), Q = !g && Pe(l, f, [x, 0, 0, -x]), Y = !g && Pe(l, f, [S, 1, 1, S]), O = !g && Pe(l, f, [T, 1, 1, T]), E = !g && Pe(l, f, [1, 1, 0, 0]), ke = !g && Pe(l, L => L >= f[1] && L <= f[2]);
		return z(() => {
			if (ke) return ke.onChange(L => {
				r.current.setAttribute("aria-hidden", !L)
			})
		}, []), a(te, {
			inherit: "id",
			children: a("li", {
				style: {
					display: "contents"
				},
				"aria-hidden": I !== 0,
				children: Ga(u, {
					ref: r,
					key: s + "child",
					style: {
						...(o = u.props) === null || o === void 0 ? void 0 : o.style,
						flexShrink: 0,
						userSelect: "none",
						width: c,
						height: h,
						opacity: Y,
						scale: O,
						originX: M ? E : .5,
						originY: M ? .5 : E,
						rotateY: M ? J : 0,
						rotateX: M ? 0 : Q
					}
				}, (i = u.props) === null || i === void 0 ? void 0 : i.children)
			})
		})
	});

function on({
	selectedOpacity: e,
	opacity: t,
	total: r,
	index: o,
	wrappedIndex: i,
	wrappedIndexInverted: s,
	dotStyle: c,
	buttonStyle: h,
	gap: u,
	padding: d,
	isHorizontal: m,
	isInverted: l,
	...P
}) {
	let b = i === o;
	l && (b = Math.abs(s) === o);
	let g = u / 2,
		j = !m && o > 0 ? g : d,
		S = !m && o !== r - 1 ? g : d,
		T = m && o !== r - 1 ? g : d,
		x = m && o > 0 ? g : d;
	return a("button", {
		"aria-label": `Scroll to page ${o+1}`,
		type: "button",
		...P,
		style: {
			...h,
			padding: `${j}px ${T}px ${S}px ${x}px`
		},
		children: a(p.div, {
			style: {
				...c
			},
			initial: !1,
			animate: {
				opacity: b ? e : t
			},
			transition: {
				duration: .3
			}
		})
	})
}
var nn = {
		display: "flex",
		placeContent: "center",
		placeItems: "center",
		overflow: "hidden",
		position: "absolute",
		pointerEvents: "auto"
	},
	sn = {
		borderRadius: "50%",
		background: "white",
		cursor: "pointer",
		border: "none",
		placeContent: "center",
		placeItems: "center",
		padding: 0
	};
var ln = X(U),
	cn = ["xZFJah2Qi"],
	dn = {
		xZFJah2Qi: "framer-v-zajwik"
	};
var mn = {},
	un = {
		default: {
			damping: 60,
			delay: 0,
			duration: .3,
			ease: [.44, 0, .56, 1],
			mass: 1,
			stiffness: 500,
			type: "spring"
		}
	},
	fa = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
		src: e
	} : void 0,
	pn = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "xZFJah2Qi",
		image: h = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/QJs8MLe1NOLVGwUri2yskhdgg4.jpg?scale-down-to=1024").href
		},
		image2: u = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/F5LjULjJY8YNmJuobNMa3AEvXw.jpg?scale-down-to=1024").href
		},
		image3: d = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/eFZke36rTBLLEd0N5PNlHnDvc.jpg?scale-down-to=1024").href
		},
		...m
	}, l) {
		let b = mn[c] || c,
			{
				baseVariant: g,
				classNames: j,
				gestureVariant: S,
				setGestureState: T,
				setVariant: x,
				transition: M,
				variants: w
			} = ge({
				cycleOrder: cn,
				defaultVariant: "xZFJah2Qi",
				transitions: un,
				variant: b,
				variantClassNames: dn
			}),
			I = w.join("-") + m.layoutDependency,
			A = ne();
		return a(te, {
			id: s ?? A,
			children: a(p.div, {
				initial: b,
				animate: w,
				onHoverStart: () => T({
					isHovered: !0
				}),
				onHoverEnd: () => T({
					isHovered: !1
				}),
				onTapStart: () => T({
					isPressed: !0
				}),
				onTap: () => T({
					isPressed: !1
				}),
				onTapCancel: () => T({
					isPressed: !1
				}),
				className: G("framer-6Uovg", j),
				style: {
					display: "contents"
				},
				children: a(p.div, {
					...m,
					className: G("framer-zajwik", r),
					"data-framer-name": "Variant 1",
					layoutDependency: I,
					layoutId: "xZFJah2Qi",
					ref: l,
					style: {
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						...t
					},
					transition: M,
					children: a(p.div, {
						className: "framer-7up25v-container",
						layoutDependency: I,
						layoutId: "ix1yRwOC2-container",
						transition: M,
						children: a(U, {
							alignment: "center",
							arrowOptions: {
								arrowFill: "rgba(0, 0, 0, 0.2)",
								arrowGap: 10,
								arrowPadding: 8,
								arrowPaddingBottom: 0,
								arrowPaddingLeft: 0,
								arrowPaddingRight: 0,
								arrowPaddingTop: 0,
								arrowPosition: "auto",
								arrowRadius: 40,
								arrowShouldFadeIn: !1,
								arrowShouldSpace: !0,
								arrowSize: 32,
								showMouseControls: !1
							},
							autoPlayControl: !0,
							borderRadius: 0,
							direction: "left",
							dragControl: !0,
							effectsOptions: {
								effectsHover: !1,
								effectsOpacity: 1,
								effectsPerspective: 1200,
								effectsRotate: 0,
								effectsScale: 1
							},
							fadeOptions: {
								fadeAlpha: 0,
								fadeContent: !1,
								fadeInset: 0,
								fadeWidth: 25,
								overflow: !0
							},
							gap: 32,
							height: "100%",
							id: "ix1yRwOC2",
							intervalControl: 3,
							itemAmount: 1,
							layoutId: "ix1yRwOC2",
							padding: 0,
							paddingBottom: 0,
							paddingLeft: 0,
							paddingPerSide: !1,
							paddingRight: 0,
							paddingTop: 0,
							progressOptions: {
								dotsActiveOpacity: 1,
								dotsBackground: "rgba(0, 0, 0, 0.5)",
								dotsBlur: 0,
								dotsFill: "rgb(255, 255, 255)",
								dotsGap: 8,
								dotsInset: 8,
								dotSize: 8,
								dotsOpacity: .5,
								dotsPadding: 8,
								dotsRadius: 50,
								showProgressDots: !0
							},
							slots: [a(He, {
								background: {
									alt: "",
									fit: "fill",
									intrinsicHeight: 3840,
									intrinsicWidth: 5760,
									pixelHeight: 3840,
									pixelWidth: 5760,
									...fa(h)
								},
								className: "framer-wltmer",
								"data-border": !0,
								"data-framer-name": "Image 1",
								layoutDependency: I,
								layoutId: "Cccv9jdkb",
								style: {
									"--border-bottom-width": "1px",
									"--border-color": 'var(--token-9019dfdc-98b7-491e-9aaa-4a7da9d5570e, rgb(224, 224, 224)) /* {"name":"border / 02"} */',
									"--border-left-width": "1px",
									"--border-right-width": "1px",
									"--border-style": "solid",
									"--border-top-width": "1px",
									borderBottomLeftRadius: 8,
									borderBottomRightRadius: 8,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8
								},
								transition: M
							}), a(He, {
								background: {
									alt: "",
									fit: "fill",
									intrinsicHeight: 5061,
									intrinsicWidth: 3374,
									pixelHeight: 5061,
									pixelWidth: 3374,
									...fa(u)
								},
								className: "framer-2gqst",
								"data-framer-name": "Image 2",
								layoutDependency: I,
								layoutId: "jaTgGq0Xa",
								style: {
									borderBottomLeftRadius: 8,
									borderBottomRightRadius: 8,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8
								},
								transition: M
							}), a(He, {
								background: {
									alt: "",
									fit: "fill",
									intrinsicHeight: 2823,
									intrinsicWidth: 5018,
									pixelHeight: 2823,
									pixelWidth: 5018,
									...fa(d)
								},
								className: "framer-1hbjz9d",
								"data-framer-name": "Image 3",
								layoutDependency: I,
								layoutId: "AFY6GV1VB",
								style: {
									borderBottomLeftRadius: 8,
									borderBottomRightRadius: 8,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8
								},
								transition: M
							})],
							startFrom: 0,
							style: {
								height: "100%",
								width: "100%"
							},
							transitionControl: {
								damping: 60,
								delay: 0,
								duration: .3,
								ease: [.44, 0, .56, 1],
								mass: 1,
								stiffness: 320,
								type: "spring"
							},
							width: "100%"
						})
					})
				})
			})
		})
	}),
	fn = ['.framer-6Uovg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6Uovg .framer-1ir1qxf { display: block; }", ".framer-6Uovg .framer-zajwik { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 240px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 360px; }", ".framer-6Uovg .framer-7up25v-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }", ".framer-6Uovg .framer-wltmer, .framer-6Uovg .framer-2gqst, .framer-6Uovg .framer-1hbjz9d { height: 240px; overflow: hidden; position: relative; width: 360px; will-change: transform; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6Uovg .framer-zajwik { gap: 0px; } .framer-6Uovg .framer-zajwik > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-6Uovg .framer-zajwik > :first-child { margin-left: 0px; } .framer-6Uovg .framer-zajwik > :last-child { margin-right: 0px; } }"],
	ot = se(pn, fn, "framer-6Uovg"),
	ha = ot;
ot.displayName = "Slideshow";
ot.defaultProps = {
	height: 240,
	width: 360
};
H(ot, {
	ta5UTfC_k: {
		__defaultAssetReference: "data:framer/asset-reference,QJs8MLe1NOLVGwUri2yskhdgg4.jpg?originalFilename=white+and+black+digital+wallpaper.jpg&preferredSize=medium",
		title: "Image",
		type: n.ResponsiveImage
	},
	KAvVHiChT: {
		__defaultAssetReference: "data:framer/asset-reference,F5LjULjJY8YNmJuobNMa3AEvXw.jpg?originalFilename=unknown.jpg&preferredSize=medium",
		title: "Image 2",
		type: n.ResponsiveImage
	},
	S0mUT_z7k: {
		__defaultAssetReference: "data:framer/asset-reference,eFZke36rTBLLEd0N5PNlHnDvc.jpg?originalFilename=a+view+of+a+large+body+of+water+from+above.jpg&preferredSize=medium",
		title: "Image 3",
		type: n.ResponsiveImage
	}
});
le(ot, [...ln]);
var hn = ["n9NhxBcSe", "GXRT5DrcL", "Mh_BLbrqu"],
	gn = {
		GXRT5DrcL: "framer-v-2cplbo",
		Mh_BLbrqu: "framer-v-1irrtfs",
		n9NhxBcSe: "framer-v-5ioots"
	};

function ga(e, ...t) {
	let r = {};
	return t?.forEach(o => o && Object.assign(r, e[o])), r
}
var yn = {
		"LmSqueezy ": "Mh_BLbrqu",
		framer: "n9NhxBcSe",
		Readcv: "GXRT5DrcL"
	},
	bn = {
		default: {
			damping: 60,
			delay: 0,
			duration: .3,
			ease: [.44, 0, .56, 1],
			mass: 1,
			stiffness: 500,
			type: "spring"
		}
	},
	vn = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "n9NhxBcSe",
		...h
	}, u) {
		let m = yn[c] || c,
			{
				baseVariant: l,
				classNames: P,
				gestureVariant: b,
				setGestureState: g,
				setVariant: j,
				transition: S,
				variants: T
			} = ge({
				cycleOrder: hn,
				defaultVariant: "n9NhxBcSe",
				transitions: bn,
				variant: m,
				variantClassNames: gn
			}),
			x = T.join("-") + h.layoutDependency,
			M = () => l === "Mh_BLbrqu",
			w = () => l === "GXRT5DrcL",
			I = () => !["GXRT5DrcL", "Mh_BLbrqu"].includes(l),
			A = ne();
		return a(te, {
			id: s ?? A,
			children: a(p.div, {
				initial: m,
				animate: T,
				onHoverStart: () => g({
					isHovered: !0
				}),
				onHoverEnd: () => g({
					isHovered: !1
				}),
				onTapStart: () => g({
					isPressed: !0
				}),
				onTap: () => g({
					isPressed: !1
				}),
				onTapCancel: () => g({
					isPressed: !1
				}),
				className: G("framer-YwhXK", P),
				style: {
					display: "contents"
				},
				children: V(p.div, {
					...h,
					className: G("framer-5ioots", r),
					"data-framer-name": "framer",
					layoutDependency: x,
					layoutId: "n9NhxBcSe",
					ref: u,
					style: {
						...t
					},
					transition: S,
					...ga({
						GXRT5DrcL: {
							"data-framer-name": "Readcv"
						},
						Mh_BLbrqu: {
							"data-framer-name": "LmSqueezy "
						}
					}, l, b),
					children: [M() && a(xt, {
						className: "framer-1nl6az9",
						"data-framer-name": "LmSqueezy ",
						layout: "position",
						layoutDependency: x,
						layoutId: "RCvNHSCBD",
						opacity: 1,
						svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 12.952 18.73 L 19.405 21.707 C 20.153 22.046 20.748 22.651 21.073 23.406 C 21.845 25.206 20.791 27.046 19.136 27.708 C 17.482 28.369 15.718 27.943 14.917 26.072 L 12.109 19.502 C 11.891 18.993 12.437 18.493 12.952 18.731 Z M 13.339 16.804 L 19.999 14.292 C 22.213 13.456 24.632 15.037 24.6 17.332 L 24.597 17.422 C 24.55 19.657 22.199 21.159 20.034 20.369 L 13.345 17.926 C 13.106 17.845 12.944 17.62 12.942 17.367 C 12.941 17.113 13.1 16.887 13.339 16.803 Z M 12.967 15.933 L 19.516 13.158 C 21.691 12.235 22.243 9.466 20.539 7.866 C 20.517 7.845 20.494 7.824 20.472 7.803 C 18.801 6.256 16.039 6.8 15.088 8.839 L 12.15 15.135 C 11.916 15.637 12.445 16.155 12.967 15.933 Z M 11.281 14.836 L 13.662 8.323 C 13.943 7.564 13.92 6.725 13.597 5.982 C 12.824 4.183 10.732 3.602 9.078 4.266 C 7.423 4.928 6.489 6.434 7.292 8.305 L 10.119 14.868 C 10.339 15.376 11.091 15.356 11.281 14.836 Z" fill="var(--token-2fe5b45d-4371-43e7-8095-5b41ee4a37ab, rgb(22, 22, 22)) /* {&quot;name&quot;:&quot;icon / 01&quot;} */"></path></svg>',
						svgContentId: 1907117651,
						transition: S,
						withExternalLayout: !0,
						...ga({
							Mh_BLbrqu: {
								svgContentId: 2581624211
							}
						}, l, b)
					}), w() && a(xt, {
						className: "framer-82rvqo",
						"data-framer-name": "Readcv",
						layout: "position",
						layoutDependency: x,
						layoutId: "GEXZJLteT",
						opacity: 1,
						svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 12.7 6.079 C 12.317 5.977 11.909 6.031 11.565 6.227 C 11.222 6.424 10.971 6.748 10.869 7.128 L 6.998 21.447 C 6.785 22.238 7.258 23.05 8.056 23.262 L 19.609 26.333 C 20.407 26.544 21.226 26.074 21.439 25.284 L 25.309 10.964 C 25.522 10.174 25.049 9.362 24.252 9.15 L 12.698 6.079 Z M 9.136 6.668 C 9.361 5.832 9.912 5.119 10.668 4.687 C 11.423 4.254 12.321 4.137 13.164 4.361 L 24.717 7.43 C 25.56 7.654 26.278 8.201 26.714 8.951 C 27.149 9.7 27.267 10.59 27.041 11.426 L 23.171 25.745 C 22.945 26.581 22.394 27.293 21.638 27.726 C 20.883 28.158 19.985 28.276 19.143 28.052 L 7.591 24.981 C 5.837 24.515 4.796 22.727 5.266 20.987 Z M 12.352 9.67 C 12.413 9.442 12.564 9.248 12.77 9.13 C 12.976 9.012 13.221 8.981 13.451 9.042 L 22.111 11.343 C 22.59 11.47 22.874 11.957 22.746 12.432 C 22.617 12.906 22.126 13.188 21.647 13.061 L 12.985 10.76 C 12.756 10.699 12.56 10.55 12.441 10.346 C 12.322 10.141 12.29 9.898 12.352 9.67 Z M 11.346 13.394 C 11.474 12.92 11.965 12.638 12.444 12.765 L 21.105 15.065 C 21.584 15.192 21.868 15.68 21.74 16.155 C 21.612 16.63 21.12 16.912 20.641 16.785 L 11.98 14.483 C 11.75 14.422 11.554 14.273 11.435 14.068 C 11.316 13.864 11.284 13.621 11.346 13.393 Z M 10.34 17.117 C 10.468 16.643 10.96 16.362 11.438 16.488 L 17.215 18.022 C 17.693 18.149 17.978 18.637 17.85 19.112 C 17.722 19.587 17.229 19.869 16.751 19.742 L 10.974 18.206 C 10.496 18.078 10.212 17.591 10.34 17.117 Z" fill="var(--token-2fe5b45d-4371-43e7-8095-5b41ee4a37ab, rgb(22, 22, 22)) /* {&quot;name&quot;:&quot;icon / 01&quot;} */"></path></svg>',
						svgContentId: 4190225704,
						transition: S,
						withExternalLayout: !0,
						...ga({
							GXRT5DrcL: {
								svgContentId: 575488171
							}
						}, l, b)
					}), I() && a(xt, {
						className: "framer-14haj0f",
						"data-framer-name": "framer",
						layout: "position",
						layoutDependency: x,
						layoutId: "QJZYwOb4y",
						opacity: 1,
						svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 7.333 3.333 L 24.666 3.333 L 24.666 11.778 L 15.999 11.778 Z M 7.333 11.778 L 16 11.778 L 24.667 20.223 L 7.334 20.223 Z M 7.333 20.222 L 16 20.222 L 16 28.667 Z" fill="var(--token-2fe5b45d-4371-43e7-8095-5b41ee4a37ab, rgb(22, 22, 22)) /* {&quot;name&quot;:&quot;icon / 01&quot;} */"></path></svg>',
						svgContentId: 2789063135,
						transition: S,
						withExternalLayout: !0
					})]
				})
			})
		})
	}),
	xn = ['.framer-YwhXK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-YwhXK .framer-dbvdfr { display: block; }", ".framer-YwhXK .framer-5ioots { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: 32px; }", ".framer-YwhXK .framer-1nl6az9, .framer-YwhXK .framer-82rvqo, .framer-YwhXK .framer-14haj0f { flex: none; height: 32px; position: relative; width: 32px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-YwhXK .framer-5ioots { gap: 0px; } .framer-YwhXK .framer-5ioots > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-YwhXK .framer-5ioots > :first-child { margin-left: 0px; } .framer-YwhXK .framer-5ioots > :last-child { margin-right: 0px; } }", ".framer-YwhXK.framer-v-2cplbo .framer-82rvqo { order: 2; }"],
	nt = se(vn, xn, "framer-YwhXK"),
	jt = nt;
nt.displayName = "Extra Icons";
nt.defaultProps = {
	height: 32,
	width: 32
};
H(nt, {
	variant: {
		options: ["n9NhxBcSe", "GXRT5DrcL", "Mh_BLbrqu"],
		optionTitles: ["framer", "Readcv", "LmSqueezy "],
		title: "Variant",
		type: n.Enum
	}
});
le(nt, []);
var kn = X(we),
	Sn = X(jt),
	Cn = X(ha),
	Pn = X(Ve),
	It = yt(we),
	Lt = yt(jt),
	zt = yt(Ve),
	Tn = ["RNoU2KoJC", "rvx2p_BQb", "unqR7kr6v", "KUC93UHcV", "xEnhSNlec", "lKoFao_53", "cNL5BhWrG", "IrgA3XiRd"],
	Mn = {
		cNL5BhWrG: "framer-v-1hd245v",
		IrgA3XiRd: "framer-v-qaqu2m",
		KUC93UHcV: "framer-v-7i2uh3",
		lKoFao_53: "framer-v-1lo0e7s",
		RNoU2KoJC: "framer-v-1xwy8eu",
		rvx2p_BQb: "framer-v-4w7c67",
		unqR7kr6v: "framer-v-1c22yja",
		xEnhSNlec: "framer-v-xb4mu0"
	};

function ya(e, ...t) {
	let r = {};
	return t?.forEach(o => o && Object.assign(r, e[o])), r
}
var An = {
		"Default Hover": "rvx2p_BQb",
		"Vertical ": "cNL5BhWrG",
		"Vertical Hover": "IrgA3XiRd",
		"With Image Hover": "KUC93UHcV",
		"With Image": "unqR7kr6v",
		"With Video Hover": "lKoFao_53",
		"With Video": "xEnhSNlec",
		Deafult: "RNoU2KoJC"
	},
	Rn = {
		default: {
			damping: 60,
			delay: 0,
			duration: .3,
			ease: [.44, 0, .56, 1],
			mass: 1,
			stiffness: 500,
			type: "spring"
		}
	},
	ba = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
		src: e
	} : void 0,
	jn = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "RNoU2KoJC",
		showSimpleIcons: h = !0,
		showExtraIcons: u = !1,
		simpleIcons: d = "framer",
		extraIcons: m = "n9NhxBcSe",
		title: l = "Link Title",
		describe: P = "Link Describe",
		link: b,
		image: g = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/QJs8MLe1NOLVGwUri2yskhdgg4.jpg?scale-down-to=1024").href
		},
		image2: j = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/F5LjULjJY8YNmJuobNMa3AEvXw.jpg?scale-down-to=1024").href
		},
		image3: S = {
			src: new URL("https://dev.onlycord.de/framerusercontent.com/images/eFZke36rTBLLEd0N5PNlHnDvc.jpg?scale-down-to=1024").href
		},
		source: T = "URL",
		video: x = "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
		...M
	}, w) {
		let A = An[c] || c,
			{
				baseVariant: f,
				classNames: J,
				gestureVariant: Q,
				setGestureState: Y,
				setVariant: O,
				transition: E,
				variants: ke
			} = ge({
				cycleOrder: Tn,
				defaultVariant: "RNoU2KoJC",
				transitions: Rn,
				variant: A,
				variantClassNames: Mn
			}),
			L = ke.join("-") + M.layoutDependency,
			{
				activeVariantCallback: K,
				delay: Ee
			} = er(f),
			Re = K(async (...ae) => {
				O("rvx2p_BQb")
			}),
			oe = K(async (...ae) => {
				O("RNoU2KoJC")
			}),
			R = K(async (...ae) => {
				O("KUC93UHcV")
			}),
			Be = K(async (...ae) => {
				O("unqR7kr6v")
			}),
			Se = K(async (...ae) => {
				O("lKoFao_53")
			}),
			je = K(async (...ae) => {
				O("xEnhSNlec")
			}),
			ce = K(async (...ae) => {
				O("IrgA3XiRd")
			}),
			be = K(async (...ae) => {
				O("cNL5BhWrG")
			}),
			W = () => !!["unqR7kr6v", "KUC93UHcV"].includes(f),
			de = () => !!["xEnhSNlec", "lKoFao_53"].includes(f),
			Ie = ne();
		return a(te, {
			id: s ?? Ie,
			children: a(p.div, {
				initial: A,
				animate: ke,
				onHoverStart: () => Y({
					isHovered: !0
				}),
				onHoverEnd: () => Y({
					isHovered: !1
				}),
				onTapStart: () => Y({
					isPressed: !0
				}),
				onTap: () => Y({
					isPressed: !1
				}),
				onTapCancel: () => Y({
					isPressed: !1
				}),
				className: G("framer-40Umk", nr, St, J),
				style: {
					display: "contents"
				},
				children: a($a, {
					href: b,
					openInNewTab: !0,
					children: a(p.a, {
						...M,
						className: `${G("framer-1xwy8eu",r)} framer-mav2vh`,
						"data-framer-name": "Deafult",
						"data-highlight": !0,
						layoutDependency: L,
						layoutId: "RNoU2KoJC",
						onMouseEnter: Re,
						ref: w,
						style: {
							...t
						},
						transition: E,
						...ya({
							cNL5BhWrG: {
								"data-framer-name": "Vertical ",
								onMouseEnter: ce
							},
							IrgA3XiRd: {
								"data-framer-name": "Vertical Hover",
								onMouseEnter: void 0,
								onMouseLeave: be
							},
							KUC93UHcV: {
								"data-framer-name": "With Image Hover",
								onMouseEnter: void 0,
								onMouseLeave: Be
							},
							lKoFao_53: {
								"data-framer-name": "With Video Hover",
								onMouseEnter: void 0,
								onMouseLeave: je
							},
							rvx2p_BQb: {
								"data-framer-name": "Default Hover",
								onMouseLeave: oe
							},
							unqR7kr6v: {
								"data-framer-name": "With Image",
								onMouseEnter: R
							},
							xEnhSNlec: {
								"data-framer-name": "With Video",
								onMouseEnter: Se
							}
						}, f, Q),
						children: V(p.div, {
							className: "framer-1ar6aql",
							"data-border": !0,
							"data-framer-name": "Frame",
							layoutDependency: L,
							layoutId: "Yl0DvMd5N",
							style: {
								"--border-bottom-width": "1px",
								"--border-color": 'var(--token-15111fde-133a-4f2a-a639-023410d025db, rgb(46, 46, 46)) /* {"name":"border / 01"} */',
								"--border-left-width": "1px",
								"--border-right-width": "1px",
								"--border-style": "solid",
								"--border-top-width": "1px",
								backgroundColor: "var(--token-00c0c44a-d198-43e1-a777-afd57548256e, rgb(38, 38, 38))",
								borderBottomLeftRadius: 16,
								borderBottomRightRadius: 16,
								borderTopLeftRadius: 16,
								borderTopRightRadius: 16,
								boxShadow: "0px 0.48174984141951427px 1.4452495242585428px -1.25px rgba(0, 0, 0, 0.05759), 0px 1.8308266425947657px 5.492479927784297px -2.5px rgba(0, 0, 0, 0.05085), 0px 8px 24px -3.75px rgba(0, 0, 0, 0.02)"
							},
							transition: E,
							variants: {
								KUC93UHcV: {
									backgroundColor: "var(--token-0baa9d56-988a-40d5-a415-e498ba517f2d, rgb(51, 51, 51))"
								},
								lKoFao_53: {
									backgroundColor: "var(--token-0baa9d56-988a-40d5-a415-e498ba517f2d, rgb(232, 232, 232))"
								},
								rvx2p_BQb: {
									backgroundColor: "var(--token-0baa9d56-988a-40d5-a415-e498ba517f2d, rgb(51, 51, 51))"
								}
							},
							children: [V(p.div, {
								className: "framer-5h84r3",
								"data-framer-name": "Content",
								layoutDependency: L,
								layoutId: "Yl0DvMd5NdRH3Y75On",
								transition: E,
								children: [a(p.div, {
									className: "framer-t1h2bk",
									"data-border": !0,
									"data-framer-name": "Icon",
									layoutDependency: L,
									layoutId: "ZIu256tw6",
									style: {
										"--border-bottom-width": "1px",
										"--border-color": 'var(--token-9019dfdc-98b7-491e-9aaa-4a7da9d5570e, rgb(224, 224, 224)) /* {"name":"border / 02"} */',
										"--border-left-width": "1px",
										"--border-right-width": "1px",
										"--border-style": "solid",
										"--border-top-width": "1px",
										backgroundColor: "var(--token-418fbc10-1baf-4324-b6ea-72d7fea0565f, rgb(57, 57, 57))",
										borderBottomLeftRadius: 8,
										borderBottomRightRadius: 8,
										borderTopLeftRadius: 8,
										borderTopRightRadius: 8
									},
									transition: E,
									children: V(p.div, {
										className: "framer-1dg59br",
										"data-framer-name": "Icon",
										layoutDependency: L,
										layoutId: "wtEddhmTW",
										transition: E,
										children: [h && a(p.div, {
											className: "framer-dazb8h-container",
											layoutDependency: L,
											layoutId: "J0hIywC25-container",
											transition: E,
											children: a(we, {
												customColor: 'var(--token-2fe5b45d-4371-43e7-8095-5b41ee4a37ab, rgb(22, 22, 22)) /* {"name":"icon / 01"} */',
												height: "100%",
												icon: d,
												id: "J0hIywC25",
												layoutId: "J0hIywC25",
												style: {
													height: "100%",
													width: "100%"
												},
												width: "100%"
											})
										}), u && a(p.div, {
											className: "framer-asf5xj-container",
											layoutDependency: L,
											layoutId: "TR4GTh9HI-container",
											transition: E,
											children: a(jt, {
												height: "100%",
												id: "TR4GTh9HI",
												layoutId: "TR4GTh9HI",
												style: {
													height: "100%",
													width: "100%"
												},
												variant: m,
												width: "100%"
											})
										})]
									})
								}), V(p.div, {
									className: "framer-q16cw5",
									"data-framer-name": "Text",
									layoutDependency: L,
									layoutId: "OwC13uhmQ",
									transition: E,
									children: [a(Te, {
										__fromCanvasComponent: !0,
										children: a(Ce, {
											children: a(p.h3, {
												className: "framer-styles-preset-12lj5ox",
												"data-styles-preset": "YckFIlg3V",
												children: "Link Title"
											})
										}),
										className: "framer-1rki992",
										layoutDependency: L,
										layoutId: "xxOgMV7e4",
										style: {
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px"
										},
										text: l,
										transition: E,
										verticalAlignment: "top",
										withExternalLayout: !0
									}), a(Te, {
										__fromCanvasComponent: !0,
										children: a(Ce, {
											children: a(p.p, {
												className: "framer-styles-preset-5jc6kk",
												"data-styles-preset": "uN7ARtA8D",
												children: "Link Describe"
											})
										}),
										className: "framer-859e67",
										layoutDependency: L,
										layoutId: "Z6Tdblm3y",
										style: {
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px"
										},
										text: P,
										transition: E,
										verticalAlignment: "top",
										withExternalLayout: !0
									})]
								})]
							}), W() && a(p.div, {
								className: "framer-1ut57jz-container",
								layoutDependency: L,
								layoutId: "hbQAmDy36-container",
								transition: E,
								children: a(ha, {
									height: "100%",
									id: "hbQAmDy36",
									layoutId: "hbQAmDy36",
									style: {
										height: "100%",
										width: "100%"
									},
									width: "100%",
									...ya({
										unqR7kr6v: {
											image: ba(g),
											image2: ba(j),
											image3: ba(S)
										}
									}, f, Q)
								})
							}), de() && a(p.div, {
								className: "framer-1u8jtnk",
								"data-border": !0,
								"data-framer-name": "Video",
								layoutDependency: L,
								layoutId: "D8D9SFkQ5",
								style: {
									"--border-bottom-width": "1px",
									"--border-color": 'var(--token-9019dfdc-98b7-491e-9aaa-4a7da9d5570e, rgb(224, 224, 224)) /* {"name":"border / 02"} */',
									"--border-left-width": "1px",
									"--border-right-width": "1px",
									"--border-style": "solid",
									"--border-top-width": "1px",
									borderBottomLeftRadius: 8,
									borderBottomRightRadius: 8,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8
								},
								transition: E,
								children: de() && a(p.div, {
									className: "framer-9449br-container",
									layoutDependency: L,
									layoutId: "FF4gDjtaU-container",
									transition: E,
									children: a(Ve, {
										backgroundColor: "rgba(0, 0, 0, 0)",
										borderRadius: 0,
										bottomLeftRadius: 0,
										bottomRightRadius: 0,
										canvasPlay: !1,
										controls: !1,
										height: "100%",
										id: "FF4gDjtaU",
										isMixedBorderRadius: !1,
										layoutId: "FF4gDjtaU",
										loop: !0,
										muted: !0,
										objectFit: "cover",
										playing: !0,
										posterEnabled: !1,
										srcType: "URL",
										srcUrl: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
										startTime: 0,
										style: {
											height: "100%",
											width: "100%"
										},
										topLeftRadius: 0,
										topRightRadius: 0,
										volume: 25,
										width: "100%",
										...ya({
											xEnhSNlec: {
												objectFit: "fill",
												playing: !1,
												srcType: T,
												srcUrl: x
											}
										}, f, Q)
									})
								})
							})]
						})
					})
				})
			})
		})
	}),
	In = ['.framer-40Umk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-40Umk .framer-mav2vh { display: block; }", ".framer-40Umk .framer-1xwy8eu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 600px; }", ".framer-40Umk .framer-1ar6aql { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 24px 24px 24px 24px; position: relative; user-select: none; width: 100%; z-index: 1; }", ".framer-40Umk .framer-5h84r3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 552px; }", ".framer-40Umk .framer-t1h2bk { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: var(--framer-aspect-ratio-supported, 48px); }", ".framer-40Umk .framer-1dg59br { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-40Umk .framer-dazb8h-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-40Umk .framer-asf5xj-container { flex: none; height: 32px; position: relative; width: 32px; }", ".framer-40Umk .framer-q16cw5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-40Umk .framer-1rki992, .framer-40Umk .framer-859e67 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-40Umk .framer-1ut57jz-container { flex: none; height: 200px; position: relative; width: 200px; }", ".framer-40Umk .framer-1u8jtnk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 200px; will-change: transform; }", ".framer-40Umk .framer-9449br-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk .framer-1xwy8eu, .framer-40Umk .framer-1ar6aql, .framer-40Umk .framer-5h84r3, .framer-40Umk .framer-t1h2bk, .framer-40Umk .framer-1dg59br, .framer-40Umk .framer-q16cw5, .framer-40Umk .framer-1u8jtnk { gap: 0px; } .framer-40Umk .framer-1xwy8eu > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-40Umk .framer-1xwy8eu > :first-child, .framer-40Umk .framer-q16cw5 > :first-child { margin-top: 0px; } .framer-40Umk .framer-1xwy8eu > :last-child, .framer-40Umk .framer-q16cw5 > :last-child { margin-bottom: 0px; } .framer-40Umk .framer-1ar6aql > *, .framer-40Umk .framer-t1h2bk > *, .framer-40Umk .framer-1dg59br > *, .framer-40Umk .framer-1u8jtnk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-40Umk .framer-1ar6aql > :first-child, .framer-40Umk .framer-5h84r3 > :first-child, .framer-40Umk .framer-t1h2bk > :first-child, .framer-40Umk .framer-1dg59br > :first-child, .framer-40Umk .framer-1u8jtnk > :first-child { margin-left: 0px; } .framer-40Umk .framer-1ar6aql > :last-child, .framer-40Umk .framer-5h84r3 > :last-child, .framer-40Umk .framer-t1h2bk > :last-child, .framer-40Umk .framer-1dg59br > :last-child, .framer-40Umk .framer-1u8jtnk > :last-child { margin-right: 0px; } .framer-40Umk .framer-5h84r3 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-40Umk .framer-q16cw5 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }", ".framer-40Umk.framer-v-1c22yja .framer-1ar6aql, .framer-40Umk.framer-v-7i2uh3 .framer-1ar6aql { flex-direction: column; gap: 16px; }", ".framer-40Umk.framer-v-1c22yja .framer-5h84r3, .framer-40Umk.framer-v-7i2uh3 .framer-5h84r3, .framer-40Umk.framer-v-xb4mu0 .framer-5h84r3, .framer-40Umk.framer-v-1lo0e7s .framer-5h84r3 { order: 0; }", ".framer-40Umk.framer-v-1c22yja .framer-1ut57jz-container, .framer-40Umk.framer-v-7i2uh3 .framer-1ut57jz-container { aspect-ratio: 1.5 / 1; height: var(--framer-aspect-ratio-supported, 368px); order: 1; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-1c22yja .framer-1ar6aql { gap: 0px; } .framer-40Umk.framer-v-1c22yja .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-40Umk.framer-v-1c22yja .framer-1ar6aql > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-1c22yja .framer-1ar6aql > :last-child { margin-bottom: 0px; } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-7i2uh3 .framer-1ar6aql { gap: 0px; } .framer-40Umk.framer-v-7i2uh3 .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-40Umk.framer-v-7i2uh3 .framer-1ar6aql > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-7i2uh3 .framer-1ar6aql > :last-child { margin-bottom: 0px; } }", ".framer-40Umk.framer-v-xb4mu0 .framer-1xwy8eu { height: 480px; }", ".framer-40Umk.framer-v-xb4mu0 .framer-1ar6aql { flex: 1 0 0px; flex-direction: column; gap: 16px; height: 1px; }", ".framer-40Umk.framer-v-xb4mu0 .framer-1u8jtnk { aspect-ratio: 1.5 / 1; height: var(--framer-aspect-ratio-supported, 368px); order: 2; width: 100%; }", ".framer-40Umk.framer-v-xb4mu0 .framer-9449br-container { aspect-ratio: 1.5 / 1; height: var(--framer-aspect-ratio-supported, 368px); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-xb4mu0 .framer-1ar6aql { gap: 0px; } .framer-40Umk.framer-v-xb4mu0 .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-40Umk.framer-v-xb4mu0 .framer-1ar6aql > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-xb4mu0 .framer-1ar6aql > :last-child { margin-bottom: 0px; } }", ".framer-40Umk.framer-v-1lo0e7s .framer-1ar6aql { flex-direction: column; gap: 16px; height: 480px; }", ".framer-40Umk.framer-v-1lo0e7s .framer-1u8jtnk { height: 380px; order: 2; width: 552px; }", ".framer-40Umk.framer-v-1lo0e7s .framer-9449br-container { aspect-ratio: 1.4526315789473685 / 1; height: var(--framer-aspect-ratio-supported, 380px); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-1lo0e7s .framer-1ar6aql { gap: 0px; } .framer-40Umk.framer-v-1lo0e7s .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-40Umk.framer-v-1lo0e7s .framer-1ar6aql > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-1lo0e7s .framer-1ar6aql > :last-child { margin-bottom: 0px; } }", ".framer-40Umk.framer-v-1hd245v .framer-1xwy8eu, .framer-40Umk.framer-v-qaqu2m .framer-1xwy8eu { height: 152px; width: 132px; }", ".framer-40Umk.framer-v-1hd245v .framer-1ar6aql, .framer-40Umk.framer-v-qaqu2m .framer-1ar6aql { flex: 1 0 0px; flex-direction: column; height: 1px; justify-content: center; }", ".framer-40Umk.framer-v-1hd245v .framer-5h84r3, .framer-40Umk.framer-v-qaqu2m .framer-5h84r3 { flex-direction: column; justify-content: center; width: min-content; }", ".framer-40Umk.framer-v-1hd245v .framer-q16cw5, .framer-40Umk.framer-v-qaqu2m .framer-q16cw5 { flex: none; width: min-content; }", ".framer-40Umk.framer-v-1hd245v .framer-1rki992, .framer-40Umk.framer-v-1hd245v .framer-859e67, .framer-40Umk.framer-v-qaqu2m .framer-1rki992, .framer-40Umk.framer-v-qaqu2m .framer-859e67 { white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-1hd245v .framer-1ar6aql, .framer-40Umk.framer-v-1hd245v .framer-5h84r3 { gap: 0px; } .framer-40Umk.framer-v-1hd245v .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-40Umk.framer-v-1hd245v .framer-1ar6aql > :first-child, .framer-40Umk.framer-v-1hd245v .framer-5h84r3 > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-1hd245v .framer-1ar6aql > :last-child, .framer-40Umk.framer-v-1hd245v .framer-5h84r3 > :last-child { margin-bottom: 0px; } .framer-40Umk.framer-v-1hd245v .framer-5h84r3 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-40Umk.framer-v-qaqu2m .framer-1ar6aql, .framer-40Umk.framer-v-qaqu2m .framer-5h84r3 { gap: 0px; } .framer-40Umk.framer-v-qaqu2m .framer-1ar6aql > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-40Umk.framer-v-qaqu2m .framer-1ar6aql > :first-child, .framer-40Umk.framer-v-qaqu2m .framer-5h84r3 > :first-child { margin-top: 0px; } .framer-40Umk.framer-v-qaqu2m .framer-1ar6aql > :last-child, .framer-40Umk.framer-v-qaqu2m .framer-5h84r3 > :last-child { margin-bottom: 0px; } .framer-40Umk.framer-v-qaqu2m .framer-5h84r3 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }", ...or, ...kt],
	it = se(jn, In, "framer-40Umk"),
	ye = it;
it.displayName = "Link Card";
it.defaultProps = {
	height: 96,
	width: 600
};
H(it, {
	variant: {
		options: ["RNoU2KoJC", "rvx2p_BQb", "unqR7kr6v", "KUC93UHcV", "xEnhSNlec", "lKoFao_53", "cNL5BhWrG", "IrgA3XiRd"],
		optionTitles: ["Deafult", "Default Hover", "With Image", "With Image Hover", "With Video", "With Video Hover", "Vertical ", "Vertical Hover"],
		title: "Variant",
		type: n.Enum
	},
	pTD26_AhV: {
		defaultValue: !0,
		title: "Show Simple Icons",
		type: n.Boolean
	},
	dn2NiYLKi: {
		defaultValue: !1,
		title: "Show Extra Icons",
		type: n.Boolean
	},
	Ik27WqiRI: It?.icon && {
		...It.icon,
		defaultValue: "framer",
		hidden: void 0,
		title: "Simple Icons"
	},
	s9Fn7_4OE: Lt?.variant && {
		...Lt.variant,
		defaultValue: "n9NhxBcSe",
		hidden: void 0,
		title: "Extra Icons"
	},
	TvpZR5XF0: {
		defaultValue: "Link Title",
		displayTextArea: !1,
		title: "Title",
		type: n.String
	},
	pDewyBAJX: {
		defaultValue: "Link Describe",
		displayTextArea: !0,
		title: "Describe",
		type: n.String
	},
	Iotv39SLf: {
		title: "Link",
		type: n.Link
	},
	rfKHme5RX: {
		__defaultAssetReference: "data:framer/asset-reference,QJs8MLe1NOLVGwUri2yskhdgg4.jpg?originalFilename=white+and+black+digital+wallpaper.jpg&preferredSize=medium",
		title: "Image",
		type: n.ResponsiveImage
	},
	jDBPpItLZ: {
		__defaultAssetReference: "data:framer/asset-reference,F5LjULjJY8YNmJuobNMa3AEvXw.jpg?originalFilename=unknown.jpg&preferredSize=medium",
		title: "Image 2",
		type: n.ResponsiveImage
	},
	an5S2fma7: {
		__defaultAssetReference: "data:framer/asset-reference,eFZke36rTBLLEd0N5PNlHnDvc.jpg?originalFilename=a+view+of+a+large+body+of+water+from+above.jpg&preferredSize=medium",
		title: "Image 3",
		type: n.ResponsiveImage
	},
	nfVXUNTEj: zt?.srcType && {
		...zt.srcType,
		defaultValue: "URL",
		hidden: void 0,
		title: "Source"
	},
	D0B6pwR01: {
		defaultValue: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
		placeholder: "../example.mp4",
		title: "Video",
		type: n.String
	}
});
le(it, [...kn, ...Sn, ...Cn, ...Pn, ...rr, ...wt]);
var Ln = ["T6dEKQlxb", "iBdhKI2Qa"],
	zn = {
		iBdhKI2Qa: "framer-v-1ouogyw",
		T6dEKQlxb: "framer-v-7lr8jb"
	};

function Vn(e, ...t) {
	let r = {};
	return t?.forEach(o => o && Object.assign(r, e[o])), r
}
var En = {
		"Variant 1": "T6dEKQlxb",
		"Variant 2": "iBdhKI2Qa"
	},
	Bn = {
		default: {
			damping: 60,
			delay: 0,
			duration: .3,
			ease: [.44, 0, .56, 1],
			mass: 1,
			stiffness: 500,
			type: "spring"
		}
	},
	Dn = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "T6dEKQlxb",
		title: h = "Designer",
		...u
	}, d) {
		let l = En[c] || c,
			{
				baseVariant: P,
				classNames: b,
				gestureVariant: g,
				setGestureState: j,
				setVariant: S,
				transition: T,
				variants: x
			} = ge({
				cycleOrder: Ln,
				defaultVariant: "T6dEKQlxb",
				transitions: Bn,
				variant: l,
				variantClassNames: zn
			}),
			M = x.join("-") + u.layoutDependency,
			w = ne();
		return a(te, {
			id: s ?? w,
			children: a(p.div, {
				initial: l,
				animate: x,
				onHoverStart: () => j({
					isHovered: !0
				}),
				onHoverEnd: () => j({
					isHovered: !1
				}),
				onTapStart: () => j({
					isPressed: !0
				}),
				onTap: () => j({
					isPressed: !1
				}),
				onTapCancel: () => j({
					isPressed: !1
				}),
				className: G("framer-QCxqK", mr, b),
				style: {
					display: "contents"
				},
				children: a(p.div, {
					...u,
					className: G("framer-7lr8jb", r),
					"data-border": !0,
					"data-framer-name": "Variant 1",
					layoutDependency: M,
					layoutId: "T6dEKQlxb",
					ref: d,
					style: {
						"--border-bottom-width": "1px",
						"--border-color": 'var(--token-9019dfdc-98b7-491e-9aaa-4a7da9d5570e, rgb(82, 82, 82)) /* {"name":"border / 02"} */',
						"--border-left-width": "1px",
						"--border-right-width": "1px",
						"--border-style": "solid",
						"--border-top-width": "1px",
						backgroundColor: "var(--token-00c0c44a-d198-43e1-a777-afd57548256e, rgb(244, 244, 244))",
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						...t
					},
					transition: T,
					...Vn({
						iBdhKI2Qa: {
							"data-framer-name": "Variant 2"
						}
					}, P, g),
					children: a(Te, {
						__fromCanvasComponent: !0,
						children: a(Ce, {
							children: a(p.p, {
								className: "framer-styles-preset-avhph7",
								"data-styles-preset": "lGIir7aIa",
								style: {
									"--framer-text-color": "var(--extracted-r6o4lv)"
								},
								children: "Designer"
							})
						}),
						className: "framer-1mxzhl7",
						"data-framer-name": "Title",
						layoutDependency: M,
						layoutId: "p5CRKe9Gc",
						style: {
							"--extracted-r6o4lv": "var(--token-55eb047e-6490-4b7d-a079-18fd39e39048, rgb(82, 82, 82)) ",
							"--framer-link-text-color": "rgb(0, 153, 255)",
							"--framer-link-text-decoration": "underline",
							"--framer-paragraph-spacing": "0px"
						},
						text: h,
						transition: T,
						verticalAlignment: "top",
						withExternalLayout: !0
					})
				})
			})
		})
	}),
	Nn = ['.framer-QCxqK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QCxqK .framer-5qe07r { display: block; }", ".framer-QCxqK .framer-7lr8jb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }", ".framer-QCxqK .framer-1mxzhl7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QCxqK .framer-7lr8jb { gap: 0px; } .framer-QCxqK .framer-7lr8jb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-QCxqK .framer-7lr8jb > :first-child { margin-left: 0px; } .framer-QCxqK .framer-7lr8jb > :last-child { margin-right: 0px; } }", ...dr],
	st = se(Dn, Nn, "framer-QCxqK"),
	va = st;
st.displayName = "Badge";
st.defaultProps = {
	height: 26,
	width: 73
};
H(st, {
	variant: {
		options: ["T6dEKQlxb", "iBdhKI2Qa"],
		optionTitles: ["Variant 1", "Variant 2"],
		title: "Variant",
		type: n.Enum
	},
	wObFBFOwC: {
		defaultValue: "Designer",
		displayTextArea: !1,
		title: "Title",
		type: n.String
	}
});
le(st, [...cr]);
var Fn = X(va),
	Un = ["TIN4qs4cU"],
	On = {
		TIN4qs4cU: "framer-v-1e5xonn"
	};
var _n = {},
	qn = {
		default: {
			damping: 60,
			delay: 0,
			duration: .3,
			ease: [.44, 0, .56, 1],
			mass: 1,
			stiffness: 500,
			type: "spring"
		}
	},
	Gn = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
		src: e
	} : void 0,
	Wn = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "TIN4qs4cU",
		image: h,
		name: u = "Name",
		bio: d = "Bio",
		badge: m = "Badge",
		...l
	}, P) {
		let g = _n[c] || c,
			{
				baseVariant: j,
				classNames: S,
				gestureVariant: T,
				setGestureState: x,
				setVariant: M,
				transition: w,
				variants: I
			} = ge({
				cycleOrder: Un,
				defaultVariant: "TIN4qs4cU",
				transitions: qn,
				variant: g,
				variantClassNames: On
			}),
			A = I.join("-") + l.layoutDependency,
			f = ne();
		return a(te, {
			id: s ?? f,
			children: a(p.div, {
				initial: g,
				animate: I,
				onHoverStart: () => x({
					isHovered: !0
				}),
				onHoverEnd: () => x({
					isHovered: !1
				}),
				onTapStart: () => x({
					isPressed: !0
				}),
				onTap: () => x({
					isPressed: !1
				}),
				onTapCancel: () => x({
					isPressed: !1
				}),
				className: G("framer-szrMj", lr, St, S),
				style: {
					display: "contents"
				},
				children: a(p.div, {
					...l,
					className: G("framer-1e5xonn", r),
					"data-framer-name": "Variant 1",
					layoutDependency: A,
					layoutId: "TIN4qs4cU",
					ref: P,
					style: {
						...t
					},
					transition: w,
					children: a(p.div, {
						className: "framer-2qussj",
						"data-framer-name": "Frame",
						layoutDependency: A,
						layoutId: "dRH3Y75On",
						style: {
							borderBottomLeftRadius: 16,
							borderBottomRightRadius: 16,
							borderTopLeftRadius: 16,
							borderTopRightRadius: 16
						},
						transition: w,
						children: V(p.div, {
							className: "framer-3jn2oo",
							layoutDependency: A,
							layoutId: "kqMRN1o6_",
							transition: w,
							children: [a(He, {
								background: {
									alt: "",
									fit: "fill",
									intrinsicHeight: 1024,
									intrinsicWidth: 1024,
									pixelHeight: 1024,
									pixelWidth: 1024,
									sizes: "80px",
									...Gn(h)
								},
								className: "framer-yweoc",
								"data-border": !0,
								"data-framer-name": "Profile Image",
								layoutDependency: A,
								layoutId: "tbOHYsX_y",
								style: {
									"--border-bottom-width": "1px",
									"--border-color": 'var(--token-9019dfdc-98b7-491e-9aaa-4a7da9d5570e, rgb(82, 82, 82)) /* {"name":"border / 02"} */',
									"--border-left-width": "1px",
									"--border-right-width": "1px",
									"--border-style": "solid",
									"--border-top-width": "1px",
									borderBottomLeftRadius: 40,
									borderBottomRightRadius: 40,
									borderTopLeftRadius: 40,
									borderTopRightRadius: 40
								},
								transition: w
							}), V(p.div, {
								className: "framer-1gsjhh6",
								"data-framer-name": "Content",
								layoutDependency: A,
								layoutId: "d5bIHy4eM",
								transition: w,
								children: [V(p.div, {
									className: "framer-bii1cp",
									layoutDependency: A,
									layoutId: "Jqpec_qNb",
									transition: w,
									children: [a(p.div, {
										className: "framer-1jh4t5h",
										"data-framer-name": "Name",
										layoutDependency: A,
										layoutId: "hnNw4kb0t",
										transition: w,
										children: a(Te, {
											__fromCanvasComponent: !0,
											children: a(Ce, {
												children: a(p.h1, {
													className: "framer-styles-preset-1gzdh0t",
													"data-styles-preset": "RldXFyg8A",
													children: "Joshua Guo"
												})
											}),
											className: "framer-179v8oe",
											"data-framer-name": "Name",
											layoutDependency: A,
											layoutId: "yz9tTalsY",
											style: {
												"--framer-link-text-color": "rgb(0, 153, 255)",
												"--framer-link-text-decoration": "underline",
												"--framer-paragraph-spacing": "0px"
											},
											text: u,
											transition: w,
											verticalAlignment: "top",
											withExternalLayout: !0
										})
									}), a(p.div, {
										className: "framer-y3m7d1",
										"data-framer-name": "Tag Group",
										layoutDependency: A,
										layoutId: "TrBjq0PwX",
										transition: w,
										children: a(p.div, {
											className: "framer-xtddjx-container",
											"data-framer-name": "Title",
											layoutDependency: A,
											layoutId: "CV27lz83m-container",
											name: "Title",
											transition: w,
											children: a(va, {
												height: "100%",
												id: "CV27lz83m",
												layoutId: "CV27lz83m",
												name: "Title",
												title: m,
												variant: "T6dEKQlxb",
												width: "100%"
											})
										})
									})]
								}), a(Te, {
									__fromCanvasComponent: !0,
									children: a(Ce, {
										children: a(p.p, {
											className: "framer-styles-preset-5jc6kk",
											"data-styles-preset": "uN7ARtA8D",
											children: "Bio"
										})
									}),
									className: "framer-3eyvtt",
									"data-framer-name": "Bio",
									layoutDependency: A,
									layoutId: "hIhkzlh4A",
									style: {
										"--framer-link-text-color": "rgb(0, 153, 255)",
										"--framer-link-text-decoration": "underline",
										"--framer-paragraph-spacing": "0px"
									},
									text: d,
									transition: w,
									verticalAlignment: "top",
									withExternalLayout: !0
								})]
							})]
						})
					})
				})
			})
		})
	}),
	Hn = ['.framer-szrMj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-szrMj .framer-wen9l9 { display: block; }", ".framer-szrMj .framer-1e5xonn { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 500px; }", ".framer-szrMj .framer-2qussj { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 24px 0px 24px; position: relative; user-select: none; width: 100%; z-index: 1; }", ".framer-szrMj .framer-3jn2oo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-szrMj .framer-yweoc { flex: none; height: 80px; overflow: visible; position: relative; width: 80px; }", ".framer-szrMj .framer-1gsjhh6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-szrMj .framer-bii1cp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-szrMj .framer-1jh4t5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-szrMj .framer-179v8oe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-szrMj .framer-y3m7d1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-szrMj .framer-xtddjx-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-szrMj .framer-3eyvtt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-szrMj .framer-1e5xonn, .framer-szrMj .framer-3jn2oo, .framer-szrMj .framer-1gsjhh6, .framer-szrMj .framer-bii1cp, .framer-szrMj .framer-1jh4t5h, .framer-szrMj .framer-y3m7d1 { gap: 0px; } .framer-szrMj .framer-1e5xonn > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-szrMj .framer-1e5xonn > :first-child, .framer-szrMj .framer-3jn2oo > :first-child, .framer-szrMj .framer-1gsjhh6 > :first-child { margin-top: 0px; } .framer-szrMj .framer-1e5xonn > :last-child, .framer-szrMj .framer-3jn2oo > :last-child, .framer-szrMj .framer-1gsjhh6 > :last-child { margin-bottom: 0px; } .framer-szrMj .framer-3jn2oo > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-szrMj .framer-1gsjhh6 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-szrMj .framer-bii1cp > *, .framer-szrMj .framer-y3m7d1 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-szrMj .framer-bii1cp > :first-child, .framer-szrMj .framer-1jh4t5h > :first-child, .framer-szrMj .framer-y3m7d1 > :first-child { margin-left: 0px; } .framer-szrMj .framer-bii1cp > :last-child, .framer-szrMj .framer-1jh4t5h > :last-child, .framer-szrMj .framer-y3m7d1 > :last-child { margin-right: 0px; } .framer-szrMj .framer-1jh4t5h > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ...sr, ...kt],
	lt = se(Wn, Hn, "framer-szrMj"),
	xa = lt;
lt.displayName = "Profile";
lt.defaultProps = {
	height: 160,
	width: 500
};
H(lt, {
	z0J5Xwg7X: {
		title: "Image",
		type: n.ResponsiveImage
	},
	Gpf90J8qa: {
		defaultValue: "Name",
		displayTextArea: !1,
		title: "Name",
		type: n.String
	},
	kX_mkIjGb: {
		defaultValue: "Bio",
		displayTextArea: !0,
		title: "Bio",
		type: n.String
	},
	t0Lrk3KXI: {
		defaultValue: "Badge",
		displayTextArea: !1,
		title: "Badge",
		type: n.String
	}
});
le(lt, [...Fn, ...ir, ...wt]);
var Kn = X(Yt),
	Zn = Qa(Z),
	Xn = X(xa),
	Jn = X(et),
	Qn = X(ye),
	Yn = X(Qt);
var zr = {
		D5WTUPav_: "(max-width: 809px)",
		WQLkyLRf1: "(min-width: 1200px)",
		y45AqPowJ: "(min-width: 810px) and (max-width: 1199px)"
	},
	$n = () => typeof document < "u",
	Vr = {
		D5WTUPav_: "framer-v-ofrhyf",
		WQLkyLRf1: "framer-v-72rtr7",
		y45AqPowJ: "framer-v-lnjp37"
	};
$n() && ar("WQLkyLRf1", zr, Vr);
var ei = {
		Desktop: "WQLkyLRf1",
		Phone: "D5WTUPav_",
		Tablet: "y45AqPowJ"
	},
	ti = {
		default: {
			duration: 0
		}
	},
	Er = {
		damping: 60,
		delay: .3,
		mass: 1,
		stiffness: 500,
		type: "spring"
	},
	ai = {
		opacity: 0,
		rotate: 0,
		scale: 1,
		transition: Er,
		x: 0,
		y: -150
	},
	wa = (e, t) => `perspective(1200px) translateX(-50%) ${t}`,
	ka = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: Er,
		x: 0,
		y: 0
	},
	Sa = {
		opacity: .001,
		rotate: 0,
		scale: 1,
		x: 0,
		y: -150
	},
	ri = {
		damping: 60,
		delay: 0,
		mass: 1,
		stiffness: 500,
		type: "spring"
	},
	Ca = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: ri,
		x: 0,
		y: 0
	},
	Xe = {
		opacity: .001,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		x: 0,
		y: 40
	},
	oi = {
		damping: 60,
		delay: .1,
		mass: 1,
		stiffness: 500,
		type: "spring"
	},
	Pa = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: oi,
		x: 0,
		y: 0
	},
	Ta = $t(),
	ni = $(function({
		id: e,
		style: t,
		className: r,
		width: o,
		height: i,
		layoutId: s,
		variant: c = "WQLkyLRf1",
		...h
	}, u) {
		let m = ei[c] || c;
		$e(() => {
			let S = $t();
			if (document.title = S.title || "", S.viewport) {
				var T;
				(T = document.querySelector('meta[name="viewport"]')) === null || T === void 0 || T.setAttribute("content", S.viewport)
			}
			S.bodyClassName && (Array.from(document.body.classList).filter(x => x.startsWith("framer-body-")).map(x => document.body.classList.remove(x)), document.body.classList.add(S.bodyClassName))
		}, []);
		let [l, P] = tr(m, zr, !1), b = void 0, g = ti.default, j = ne();
		return a(Ya.Provider, {
			value: {
				primaryVariantId: "WQLkyLRf1",
				variantClassNames: Vr
			},
			children: a(te, {
				id: s ?? j,
				children: V(p.div, {
					className: G("framer-CkUzZ"),
					style: {
						display: "contents"
					},
					children: [V(p.div, {
						...h,
						className: G("framer-72rtr7", r),
						ref: u,
						style: {
							...t
						},
						children: [a(pe, {
							breakpoint: l,
							overrides: {
								D5WTUPav_: {
									"data-framer-appear-id": "12krb08",
									animate: F("animate", "12krb08", ka, "ofrhyf"),
									initial: F("initial", "12krb08", Sa, "ofrhyf"),
									transformTemplate: vt("12krb08", wa)
								},
								y45AqPowJ: {
									"data-framer-appear-id": "1pmeios",
									animate: F("animate", "1pmeios", ka, "lnjp37"),
									initial: F("initial", "1pmeios", Sa, "lnjp37"),
									transformTemplate: vt("1pmeios", wa)
								}
							},
							children: a(Zn, {
								__framer__adjustPosition: !1,
								__framer__offset: 0,
								__framer__parallaxTransformEnabled: !0,
								__framer__speed: 150,
								__framer__spring: {
									damping: 60,
									delay: 0,
									duration: .3,
									ease: [.44, 0, .56, 1],
									mass: 1,
									stiffness: 500,
									type: "spring"
								},
								__framer__styleTransformEffectEnabled: !0,
								__framer__transformTargets: [{
									target: {
										opacity: 1,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										scale: 1,
										x: 0,
										y: 0
									}
								}, {
									target: {
										opacity: 1,
										rotate: 0,
										rotateX: 0,
										rotateY: 0,
										scale: 1,
										x: 0,
										y: -150
									}
								}],
								__framer__transformTrigger: "onScroll",
								__perspectiveFX: !1,
								__targetOpacity: 1,
								animate: F("animate", "16qrluj", ka, "72rtr7"),
								className: "framer-16qrluj-container",
								"data-framer-appear-id": "16qrluj",
								exit: ai,
								initial: F("initial", "16qrluj", Sa, "72rtr7"),
								layoutScroll: !0,
								transformTemplate: vt("16qrluj", wa),
								children: a(Yt, {
									height: "100%",
									id: "Ktmi9106U",
									layoutId: "Ktmi9106U",
									style: {
										height: "100%"
									},
									variant: "WGEEzppaH",
									width: "100%"
								})
							})
						}), V(p.div, {
							className: "framer-rjyxtn",
							children: [a(pe, {
								breakpoint: l,
								overrides: {
									D5WTUPav_: {
										"data-framer-appear-id": "bfqbom",
										animate: F("animate", "bfqbom", Ca, "ofrhyf"),
										initial: F("initial", "bfqbom", Xe, "ofrhyf")
									},
									y45AqPowJ: {
										"data-framer-appear-id": "ybxz03",
										animate: F("animate", "ybxz03", Ca, "lnjp37"),
										initial: F("initial", "ybxz03", Xe, "lnjp37")
									}
								},
								children: a(Z, {
									animate: F("animate", "3wlist", Ca, "72rtr7"),
									className: "framer-3wlist-container",
									"data-framer-appear-id": "3wlist",
									initial: F("initial", "3wlist", Xe, "72rtr7"),
									children: a(xa, {
										badge: "UX Designer",
										bio: "A UX designer who creates intuitive and engaging user experiences for digital products and services.",
										height: "100%",
										id: "YrONCfBiW",
										image: {
											alt: "",
											src: new URL("https://dev.onlycord.de/framerusercontent.com/images/X5oyfRMVzwNiomiXvLCWdcWyh0.jpg").href,
											srcSet: `${new URL("https://dev.onlycord.de/framerusercontent.com/images/X5oyfRMVzwNiomiXvLCWdcWyh0.jpg?scale-down-to=512").href} 512w, ${new URL("https://dev.onlycord.de/framerusercontent.com/images/X5oyfRMVzwNiomiXvLCWdcWyh0.jpg?scale-down-to=1024").href} 1024w, ${new URL("https://dev.onlycord.de/framerusercontent.com/images/X5oyfRMVzwNiomiXvLCWdcWyh0.jpg?scale-down-to=2048").href} 2048w, ${new URL("https://dev.onlycord.de/framerusercontent.com/images/X5oyfRMVzwNiomiXvLCWdcWyh0.jpg").href} 2400w`
										},
										layoutId: "YrONCfBiW",
										name: "Nana Ayanami",
										style: {
											width: "100%"
										},
										width: "100%"
									})
								})
							}), a(pe, {
								breakpoint: l,
								overrides: {
									D5WTUPav_: {
										"data-framer-appear-id": "snaika",
										animate: F("animate", "snaika", Pa, "ofrhyf"),
										initial: F("initial", "snaika", Xe, "ofrhyf")
									},
									y45AqPowJ: {
										"data-framer-appear-id": "s6jbd8",
										animate: F("animate", "s6jbd8", Pa, "lnjp37"),
										initial: F("initial", "s6jbd8", Xe, "lnjp37")
									}
								},
								children: V(p.div, {
									animate: F("animate", "17y9syq", Pa, "72rtr7"),
									className: "framer-17y9syq",
									"data-framer-appear-id": "17y9syq",
									initial: F("initial", "17y9syq", Xe, "72rtr7"),
									children: [V(p.div, {
										className: "framer-1gfq8b9",
										children: [a(p.div, {
											className: "framer-1eqs183",
											"data-framer-name": "Sections",
											name: "Sections",
											children: a(Z, {
												className: "framer-ee7eu6-container",
												children: a(et, {
													height: "100%",
													id: "ujaz5mQmF",
													layoutId: "ujaz5mQmF",
													title: "Projects",
													width: "100%"
												})
											})
										}), a(Z, {
											className: "framer-4m8tup-container",
											children: a(pe, {
												breakpoint: l,
												overrides: {
													y45AqPowJ: {
														describe: "Explore your new world"
													}
												},
												children: a(ye, {
													describe: `Discover your new world
`,
													extraIcons: "n9NhxBcSe",
													height: "100%",
													id: "JW9r_KKiH",
													layoutId: "JW9r_KKiH",
													link: "https://www.framer.com/",
													showExtraIcons: !1,
													showSimpleIcons: !0,
													simpleIcons: "framer",
													source: "URL",
													style: {
														width: "100%"
													},
													title: "Travel Planner Site",
													variant: "unqR7kr6v",
													video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
													width: "100%"
												})
											})
										}), a(Z, {
											className: "framer-1qkiefw-container",
											children: a(pe, {
												breakpoint: l,
												overrides: {
													y45AqPowJ: {
														describe: "Excellent reading experience"
													}
												},
												children: a(ye, {
													describe: `Excellent reading experience
`,
													extraIcons: "n9NhxBcSe",
													height: "100%",
													id: "OrHD3s4eK",
													layoutId: "OrHD3s4eK",
													link: "https://www.framer.com/",
													showExtraIcons: !1,
													showSimpleIcons: !0,
													simpleIcons: "framer",
													source: "URL",
													style: {
														width: "100%"
													},
													title: "Manga Site",
													variant: "RNoU2KoJC",
													video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
													width: "100%"
												})
											})
										}), a(Z, {
											className: "framer-uvrsim-container",
											children: a(pe, {
												breakpoint: l,
												overrides: {
													y45AqPowJ: {
														describe: "Start your online business"
													}
												},
												children: a(ye, {
													describe: `Start your online business
`,
													extraIcons: "n9NhxBcSe",
													height: "100%",
													id: "XJqvRLt1P",
													layoutId: "XJqvRLt1P",
													link: "https://www.framer.com/",
													showExtraIcons: !1,
													showSimpleIcons: !0,
													simpleIcons: "framer",
													source: "URL",
													style: {
														width: "100%"
													},
													title: "Online Shop Site",
													variant: "RNoU2KoJC",
													video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
													width: "100%"
												})
											})
										})]
									}), V(p.div, {
										className: "framer-7nlwpy",
										children: [a(p.div, {
											className: "framer-5pzeu",
											"data-framer-name": "Sections",
											name: "Sections",
											children: a(Z, {
												className: "framer-fsbsw0-container",
												children: a(et, {
													height: "100%",
													id: "FveqtnB4U",
													layoutId: "FveqtnB4U",
													title: "Social Media",
													width: "100%"
												})
											})
										}), V(p.div, {
											className: "framer-xj2k2l",
											children: [a(Z, {
												className: "framer-krg9wz-container",
												children: a(pe, {
													breakpoint: l,
													overrides: {
														D5WTUPav_: {
															variant: "cNL5BhWrG"
														}
													},
													children: a(ye, {
														describe: "@ayanami",
														extraIcons: "n9NhxBcSe",
														height: "100%",
														id: "Wjtac1Pmc",
														layoutId: "Wjtac1Pmc",
														link: "https://twitter.com/",
														showExtraIcons: !1,
														showSimpleIcons: !0,
														simpleIcons: "twitter",
														source: "URL",
														style: {
															width: "100%"
														},
														title: "Twitter",
														variant: "RNoU2KoJC",
														video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
														width: "100%"
													})
												})
											}), a(Z, {
												className: "framer-178rnth-container",
												children: a(pe, {
													breakpoint: l,
													overrides: {
														D5WTUPav_: {
															variant: "cNL5BhWrG"
														}
													},
													children: a(ye, {
														describe: "@ayanami",
														extraIcons: "n9NhxBcSe",
														height: "100%",
														id: "aNiLUOz1g",
														layoutId: "aNiLUOz1g",
														link: "https://www.instagram.com/",
														showExtraIcons: !1,
														showSimpleIcons: !0,
														simpleIcons: "instagram",
														source: "URL",
														style: {
															width: "100%"
														},
														title: "Instagram",
														variant: "RNoU2KoJC",
														video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
														width: "100%"
													})
												})
											}), a(Z, {
												className: "framer-ug9vus-container",
												children: a(pe, {
													breakpoint: l,
													overrides: {
														D5WTUPav_: {
															variant: "cNL5BhWrG"
														}
													},
													children: a(ye, {
														describe: "@ayanami",
														extraIcons: "n9NhxBcSe",
														height: "100%",
														id: "PVerK7Z56",
														layoutId: "PVerK7Z56",
														link: "https://www.instagram.com/",
														showExtraIcons: !1,
														showSimpleIcons: !0,
														simpleIcons: "facebook",
														source: "URL",
														style: {
															width: "100%"
														},
														title: "Facebook",
														variant: "RNoU2KoJC",
														video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
														width: "100%"
													})
												})
											}), a(Z, {
												className: "framer-1qc5vnp-container",
												children: a(pe, {
													breakpoint: l,
													overrides: {
														D5WTUPav_: {
															variant: "cNL5BhWrG"
														}
													},
													children: a(ye, {
														describe: "@ayanami",
														extraIcons: "n9NhxBcSe",
														height: "100%",
														id: "arH3RudDD",
														layoutId: "arH3RudDD",
														link: "https://www.linkedin.com/",
														showExtraIcons: !1,
														showSimpleIcons: !0,
														simpleIcons: "linkedin",
														source: "URL",
														style: {
															width: "100%"
														},
														title: "LinkedIn",
														variant: "RNoU2KoJC",
														video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
														width: "100%"
													})
												})
											})]
										})]
									}), V(p.div, {
										className: "framer-sjqhjv",
										children: [a(p.div, {
											className: "framer-1m4p9lw",
											"data-framer-name": "Sections",
											name: "Sections",
											children: a(Z, {
												className: "framer-fffzl1-container",
												children: a(et, {
													height: "100%",
													id: "frMGIU78g",
													layoutId: "frMGIU78g",
													title: "Design Resource",
													width: "100%"
												})
											})
										}), a(Z, {
											className: "framer-q5eh39-container",
											children: a(ye, {
												describe: `Resource Store
`,
												extraIcons: "Mh_BLbrqu",
												height: "100%",
												id: "EBx1tjzBZ",
												layoutId: "EBx1tjzBZ",
												link: "https://www.lemonsqueezy.com/",
												showExtraIcons: !0,
												showSimpleIcons: !1,
												simpleIcons: "gumroad",
												source: "URL",
												style: {
													width: "100%"
												},
												title: "Lemon Squeezy ",
												variant: "RNoU2KoJC",
												video: "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
												width: "100%"
											})
										})]
									})]
								})
							})]
						}), a(Z, {
							className: "framer-1mj76j1-container",
							children: a(Qt, {
								copyright: "\xA92023 Copyright",
								height: "100%",
								id: "KerFtAVRK",
								layoutId: "KerFtAVRK",
								style: {
									maxWidth: "100%",
									width: "100%"
								},
								width: "100%"
							})
						})]
					}), a("div", {
						id: "overlay"
					})]
				})
			})
		})
	}),
	ii = ['.framer-CkUzZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Ta.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; }`, ".framer-CkUzZ .framer-lux5qc { display: block; }", ".framer-CkUzZ .framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, #0a0a0a); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }", ".framer-CkUzZ .framer-16qrluj-container { flex: none; height: 48px; left: 50%; position: fixed; top: 32px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 10; }", ".framer-CkUzZ .framer-rjyxtn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 128px 0px 128px 0px; position: relative; width: 100%; }", ".framer-CkUzZ .framer-3wlist-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }", ".framer-CkUzZ .framer-17y9syq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-CkUzZ .framer-1gfq8b9, .framer-CkUzZ .framer-7nlwpy, .framer-CkUzZ .framer-sjqhjv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-CkUzZ .framer-1eqs183, .framer-CkUzZ .framer-5pzeu, .framer-CkUzZ .framer-1m4p9lw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-CkUzZ .framer-ee7eu6-container, .framer-CkUzZ .framer-fsbsw0-container, .framer-CkUzZ .framer-fffzl1-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-CkUzZ .framer-4m8tup-container, .framer-CkUzZ .framer-1qkiefw-container, .framer-CkUzZ .framer-uvrsim-container, .framer-CkUzZ .framer-q5eh39-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-CkUzZ .framer-xj2k2l { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 600px; }", ".framer-CkUzZ .framer-krg9wz-container, .framer-CkUzZ .framer-178rnth-container, .framer-CkUzZ .framer-ug9vus-container, .framer-CkUzZ .framer-1qc5vnp-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }", ".framer-CkUzZ .framer-1mj76j1-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-CkUzZ .framer-72rtr7, .framer-CkUzZ .framer-rjyxtn, .framer-CkUzZ .framer-17y9syq, .framer-CkUzZ .framer-1gfq8b9, .framer-CkUzZ .framer-1eqs183, .framer-CkUzZ .framer-7nlwpy, .framer-CkUzZ .framer-5pzeu, .framer-CkUzZ .framer-sjqhjv, .framer-CkUzZ .framer-1m4p9lw { gap: 0px; } .framer-CkUzZ .framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-CkUzZ .framer-72rtr7 > :first-child, .framer-CkUzZ .framer-rjyxtn > :first-child, .framer-CkUzZ .framer-17y9syq > :first-child, .framer-CkUzZ .framer-1gfq8b9 > :first-child, .framer-CkUzZ .framer-7nlwpy > :first-child, .framer-CkUzZ .framer-sjqhjv > :first-child { margin-top: 0px; } .framer-CkUzZ .framer-72rtr7 > :last-child, .framer-CkUzZ .framer-rjyxtn > :last-child, .framer-CkUzZ .framer-17y9syq > :last-child, .framer-CkUzZ .framer-1gfq8b9 > :last-child, .framer-CkUzZ .framer-7nlwpy > :last-child, .framer-CkUzZ .framer-sjqhjv > :last-child { margin-bottom: 0px; } .framer-CkUzZ .framer-rjyxtn > *, .framer-CkUzZ .framer-17y9syq > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-CkUzZ .framer-1gfq8b9 > *, .framer-CkUzZ .framer-7nlwpy > *, .framer-CkUzZ .framer-sjqhjv > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-CkUzZ .framer-1eqs183 > *, .framer-CkUzZ .framer-5pzeu > *, .framer-CkUzZ .framer-1m4p9lw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-CkUzZ .framer-1eqs183 > :first-child, .framer-CkUzZ .framer-5pzeu > :first-child, .framer-CkUzZ .framer-1m4p9lw > :first-child { margin-left: 0px; } .framer-CkUzZ .framer-1eqs183 > :last-child, .framer-CkUzZ .framer-5pzeu > :last-child, .framer-CkUzZ .framer-1m4p9lw > :last-child { margin-right: 0px; } }", "@media (min-width: 1200px) { .framer-CkUzZ .hidden-72rtr7 { display: none !important; } }", `@media (max-width: 809px) { .framer-CkUzZ .hidden-ofrhyf { display: none !important; } .${Ta.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; } .framer-CkUzZ .framer-72rtr7 { width: 390px; } .framer-CkUzZ .framer-16qrluj-container { order: 0; } .framer-CkUzZ .framer-rjyxtn { order: 1; width: 90%; } .framer-CkUzZ .framer-1eqs183, .framer-CkUzZ .framer-5pzeu, .framer-CkUzZ .framer-1m4p9lw { width: min-content; } .framer-CkUzZ .framer-xj2k2l { grid-template-columns: repeat(2, minmax(64px, 1fr)); width: 100%; } .framer-CkUzZ .framer-1mj76j1-container { order: 2; }}`, `@media (min-width: 810px) and (max-width: 1199px) { .framer-CkUzZ .hidden-lnjp37 { display: none !important; } .${Ta.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; } .framer-CkUzZ .framer-72rtr7 { width: 810px; }}`],
	Vt = se(ni, ii, "framer-CkUzZ"),
	id = Vt;
Vt.displayName = "Home";
Vt.defaultProps = {
	height: 1800,
	width: 1200
};
le(Vt, [...Kn, ...Xn, ...Jn, ...Qn, ...Yn]);
var sd = {
	exports: {
		default: {
			type: "reactComponent",
			name: "FrameraugiA20Il",
			slots: [],
			annotations: {
				framerIntrinsicWidth: "1200",
				framerIntrinsicHeight: "1800",
				framerResponsiveScreen: "",
				framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"D5WTUPav_":{"layout":["fixed","auto"]},"y45AqPowJ":{"layout":["fixed","auto"]}}}',
				framerContractVersion: "1"
			}
		},
		Props: {
			type: "tsType",
			annotations: {
				framerContractVersion: "1"
			}
		},
		__FramerMetadata__: {
			type: "variable"
		}
	}
};
export {
	sd as __FramerMetadata__, id as
	default
};
//# sourceMappingURL=QNbzYrB6AbUXFXct49-wtS3LzMKLl_LNJgulzdpsz_U.2DW74HLR.mjs.map