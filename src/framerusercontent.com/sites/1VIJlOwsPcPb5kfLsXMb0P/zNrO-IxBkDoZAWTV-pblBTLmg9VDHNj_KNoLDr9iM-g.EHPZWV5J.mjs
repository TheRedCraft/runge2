import { a as P } from './chunk-PFZFV4XU.mjs';
import { a as O } from './chunk-CCVNOIBZ.mjs';
import { a as oe, b as se, c as me } from './chunk-YKT23XKM.mjs';
import { a as le, b as de, c as fe } from './chunk-RYN5JI7G.mjs';
import { a as z } from './chunk-NU65Y5GH.mjs';
import { a as D } from './chunk-LZGWEU2R.mjs';
import { a as E } from './chunk-DJB6T62W.mjs';
import './chunk-2WIFT7UF.mjs';
import './chunk-42U43NKG.mjs';
import { a as e, b as o } from './chunk-Z3YWSFEC.mjs';
import {
	J as n,
	M as ee,
	P as c,
	Q as te,
	S as d,
	T as re,
	V as X,
	Y as r,
	_ as k,
	c as S,
	ca as L,
	da as B,
	fa as ae,
	g as v,
	ga as ie,
	ia as ne,
	l as T,
	m as U,
	na as M,
	oa as _,
	pa as f,
	t,
	u as N,
} from './chunk-RTHXSB7Z.mjs';
import './chunk-PUHJYBEA.mjs';
import './chunk-ELYU6EKT.mjs';
var Ne = f(O),
	ke = ['wwmNnGRNl'],
	Le = { wwmNnGRNl: 'framer-v-ight3x' };
var _e = {},
	Oe = {
		default: {
			damping: 60,
			delay: 0,
			duration: 0.3,
			ease: [0.44, 0, 0.56, 1],
			mass: 1,
			stiffness: 500,
			type: 'spring',
		},
	},
	Ce = v(function (
		{
			id: I,
			style: s,
			className: V,
			width: xe,
			height: ue,
			layoutId: m,
			variant: h = 'wwmNnGRNl',
			title: j = 'Title',
			describe: R = 'Describe',
			button: H = 'Button',
			link: F,
			newTab: g = !1,
			button2: Q = 'Button',
			link2: Z,
			newTab2: $ = !1,
			...y
		},
		l
	) {
		let p = _e[h] || h,
			{
				baseVariant: Je,
				classNames: be,
				gestureVariant: qe,
				setGestureState: x,
				setVariant: Ge,
				transition: a,
				variants: K,
			} = ne({
				cycleOrder: ke,
				defaultVariant: 'wwmNnGRNl',
				transitions: Oe,
				variant: p,
				variantClassNames: Le,
			}),
			i = K.join('-') + y.layoutDependency,
			ge = T();
		return e(N, {
			id: m ?? ge,
			children: e(t.div, {
				initial: p,
				animate: K,
				onHoverStart: () => x({ isHovered: !0 }),
				onHoverEnd: () => x({ isHovered: !1 }),
				onTapStart: () => x({ isPressed: !0 }),
				onTap: () => x({ isPressed: !1 }),
				onTapCancel: () => x({ isPressed: !1 }),
				className: c('framer-sLmT9', fe, me, be),
				style: { display: 'contents' },
				children: e(t.div, {
					...y,
					className: c('framer-ight3x', V),
					'data-framer-name': 'Variant 1',
					layoutDependency: i,
					layoutId: 'wwmNnGRNl',
					ref: l,
					style: {
						borderBottomLeftRadius: 16,
						borderBottomRightRadius: 16,
						borderTopLeftRadius: 16,
						borderTopRightRadius: 16,
						...s,
					},
					transition: a,
					children: o(t.div, {
						className: 'framer-1760vvv',
						'data-border': !0,
						'data-framer-name': 'Content',
						layoutDependency: i,
						layoutId: 'OD4pJovNf',
						style: {
							'--border-bottom-width': '1px',
							'--border-color':
								'var(--token-15111fde-133a-4f2a-a639-023410d025db, rgb(46, 46, 46)) /* {"name":"border / 01"} */',
							'--border-left-width': '1px',
							'--border-right-width': '1px',
							'--border-style': 'solid',
							'--border-top-width': '1px',
							backgroundColor:
								'var(--token-00c0c44a-d198-43e1-a777-afd57548256e, rgb(38, 38, 38))',
							borderBottomLeftRadius: 16,
							borderBottomRightRadius: 16,
							borderTopLeftRadius: 16,
							borderTopRightRadius: 16,
							boxShadow:
								'0px 0.48174984141951427px 1.4452495242585428px -1.25px rgba(0, 0, 0, 0.05759), 0px 1.8308266425947657px 5.492479927784297px -2.5px rgba(0, 0, 0, 0.05085), 0px 8px 24px -3.75px rgba(0, 0, 0, 0.02)',
						},
						transition: a,
						children: [
							o(t.div, {
								className: 'framer-prolgq',
								'data-framer-name': 'Text',
								layoutDependency: i,
								layoutId: 'suIgFuNP5',
								transition: a,
								children: [
									e(M, {
										__fromCanvasComponent: !0,
										children: e(S, {
											children: e(t.h3, {
												className:
													'framer-styles-preset-12lj5ox',
												'data-styles-preset':
													'YckFIlg3V',
												children: 'Link Title',
											}),
										}),
										className: 'framer-b3od5k',
										layoutDependency: i,
										layoutId: 'E1ncjOGNE',
										style: {
											'--framer-link-text-color':
												'rgb(0, 153, 255)',
											'--framer-link-text-decoration':
												'underline',
											'--framer-paragraph-spacing': '0px',
										},
										text: j,
										transition: a,
										verticalAlignment: 'top',
										withExternalLayout: !0,
									}),
									e(M, {
										__fromCanvasComponent: !0,
										children: e(S, {
											children: e(t.p, {
												className:
													'framer-styles-preset-5jc6kk',
												'data-styles-preset':
													'uN7ARtA8D',
												children: 'Link Describe',
											}),
										}),
										className: 'framer-xpgjsl',
										layoutDependency: i,
										layoutId: 'o91TniJAJ',
										style: {
											'--framer-link-text-color':
												'rgb(0, 153, 255)',
											'--framer-link-text-decoration':
												'underline',
											'--framer-paragraph-spacing': '0px',
										},
										text: R,
										transition: a,
										verticalAlignment: 'top',
										withExternalLayout: !0,
									}),
								],
							}),
							o(t.div, {
								className: 'framer-a6hicz',
								layoutDependency: i,
								layoutId: 'Ws74bfgAM',
								transition: a,
								children: [
									e(X, {
										href: F,
										openInNewTab: g,
										smoothScroll: !0,
										children: e(t.a, {
											className:
												'framer-73x9dv framer-j438vt',
											layoutDependency: i,
											layoutId: 'MNHz5m7xe',
											transition: a,
											children: e(t.div, {
												className:
													'framer-10z0wme-container',
												layoutDependency: i,
												layoutId: 'yobVpt61p-container',
												transition: a,
												children: e(O, {
													button: H,
													height: '100%',
													id: 'yobVpt61p',
													layoutId: 'yobVpt61p',
													variant: 'ceBXZ2jDN',
													width: '100%',
												}),
											}),
										}),
									}),
									e(X, {
										href: Z,
										openInNewTab: $,
										smoothScroll: !0,
										children: e(t.a, {
											className:
												'framer-1o7dbih framer-j438vt',
											layoutDependency: i,
											layoutId: 'fEVPWU0sw',
											transition: a,
											children: e(t.div, {
												className:
													'framer-6fjiyn-container',
												layoutDependency: i,
												layoutId: 'EzXYOmreF-container',
												transition: a,
												children: e(O, {
													button: Q,
													height: '100%',
													id: 'EzXYOmreF',
													layoutId: 'EzXYOmreF',
													variant: 'ceBXZ2jDN',
													width: '100%',
												}),
											}),
										}),
									}),
								],
							}),
						],
					}),
				}),
			}),
		});
	}),
	Ie = [
		'.framer-sLmT9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		'.framer-sLmT9 .framer-j438vt { display: block; }',
		'.framer-sLmT9 .framer-ight3x { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 400px; }',
		'.framer-sLmT9 .framer-1760vvv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 24px 24px 24px 24px; position: relative; width: 1px; }',
		'.framer-sLmT9 .framer-prolgq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
		'.framer-sLmT9 .framer-b3od5k, .framer-sLmT9 .framer-xpgjsl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
		'.framer-sLmT9 .framer-a6hicz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
		'.framer-sLmT9 .framer-73x9dv, .framer-sLmT9 .framer-1o7dbih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }',
		'.framer-sLmT9 .framer-10z0wme-container, .framer-sLmT9 .framer-6fjiyn-container { flex: none; height: auto; position: relative; width: auto; }',
		'@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sLmT9 .framer-ight3x, .framer-sLmT9 .framer-1760vvv, .framer-sLmT9 .framer-prolgq, .framer-sLmT9 .framer-a6hicz, .framer-sLmT9 .framer-73x9dv, .framer-sLmT9 .framer-1o7dbih { gap: 0px; } .framer-sLmT9 .framer-ight3x > *, .framer-sLmT9 .framer-a6hicz > *, .framer-sLmT9 .framer-73x9dv > *, .framer-sLmT9 .framer-1o7dbih > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-sLmT9 .framer-ight3x > :first-child, .framer-sLmT9 .framer-a6hicz > :first-child, .framer-sLmT9 .framer-73x9dv > :first-child, .framer-sLmT9 .framer-1o7dbih > :first-child { margin-left: 0px; } .framer-sLmT9 .framer-ight3x > :last-child, .framer-sLmT9 .framer-a6hicz > :last-child, .framer-sLmT9 .framer-73x9dv > :last-child, .framer-sLmT9 .framer-1o7dbih > :last-child { margin-right: 0px; } .framer-sLmT9 .framer-1760vvv > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-sLmT9 .framer-1760vvv > :first-child, .framer-sLmT9 .framer-prolgq > :first-child { margin-top: 0px; } .framer-sLmT9 .framer-1760vvv > :last-child, .framer-sLmT9 .framer-prolgq > :last-child { margin-bottom: 0px; } .framer-sLmT9 .framer-prolgq > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
		...de,
		...se,
	],
	u = L(Ce, Ie, 'framer-sLmT9'),
	b = u;
u.displayName = 'Contact Card';
u.defaultProps = { height: 166, width: 400 };
ee(u, {
	zkIA_yx7O: {
		defaultValue: 'Title',
		displayTextArea: !1,
		title: 'Title',
		type: n.String,
	},
	oACX5clb5: {
		defaultValue: 'Describe',
		displayTextArea: !0,
		title: 'Describe',
		type: n.String,
	},
	PJEfQtCWt: {
		defaultValue: 'Button',
		displayTextArea: !1,
		title: 'Button',
		type: n.String,
	},
	ggFubZ4kJ: { title: 'Link', type: n.Link },
	wqwnvRtNw: { defaultValue: !1, title: 'New Tab', type: n.Boolean },
	hFbCWescd: {
		defaultValue: 'Button',
		displayTextArea: !1,
		title: 'Button 2',
		type: n.String,
	},
	onyJJ88mE: { title: 'Link 2', type: n.Link },
	jm9Go9ckm: { defaultValue: !1, title: 'New Tab 2', type: n.Boolean },
});
_(u, [...Ne, ...le, ...oe]);
var Ve = f(z),
	je = f(b),
	Re = f(E),
	Fe = te(d),
	Se = f(D);
var pe = {
		e1B0erwQX: '(min-width: 1200px)',
		sa0IoVYlb: '(min-width: 810px) and (max-width: 1199px)',
		tfyIpgOJM: '(max-width: 809px)',
	},
	Xe = () => typeof document < 'u',
	ce = {
		e1B0erwQX: 'framer-v-1t183bb',
		sa0IoVYlb: 'framer-v-1b8lsa',
		tfyIpgOJM: 'framer-v-18dqnn3',
	};
Xe() && ie('e1B0erwQX', pe, ce);
var Be = { Desktop: 'e1B0erwQX', Phone: 'tfyIpgOJM', Tablet: 'sa0IoVYlb' },
	Me = { default: { duration: 0 } },
	De = { damping: 60, delay: 0.1, mass: 1, stiffness: 500, type: 'spring' },
	A = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: De,
		x: 0,
		y: 0,
	},
	J = {
		opacity: 0.001,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		x: 0,
		y: 40,
	},
	he = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
	Ee = { opacity: 0, rotate: 0, scale: 1, transition: he, x: 0, y: 40 },
	q = (I, s) => `perspective(1200px) ${s}`,
	G = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: he,
		x: 0,
		y: 0,
	},
	Y = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 40 },
	ze = (I, s) => `perspective(1200px) translateX(-50%) ${s}`,
	W = P(),
	Pe = v(function (
		{
			id: I,
			style: s,
			className: V,
			width: xe,
			height: ue,
			layoutId: m,
			variant: h = 'e1B0erwQX',
			...j
		},
		R
	) {
		let F = Be[h] || h;
		U(() => {
			let l = P();
			if (((document.title = l.title || ''), l.viewport)) {
				var w;
				(w = document.querySelector('meta[name="viewport"]')) ===
					null ||
					w === void 0 ||
					w.setAttribute('content', l.viewport);
			}
			l.bodyClassName &&
				(Array.from(document.body.classList)
					.filter((p) => p.startsWith('framer-body-'))
					.map((p) => document.body.classList.remove(p)),
				document.body.classList.add(l.bodyClassName));
		}, []);
		let [g, Q] = ae(F, pe, !1),
			Z = void 0,
			$ = Me.default,
			y = T();
		return e(re.Provider, {
			value: { primaryVariantId: 'e1B0erwQX', variantClassNames: ce },
			children: e(N, {
				id: m ?? y,
				children: o(t.div, {
					className: c('framer-eOni2'),
					style: { display: 'contents' },
					children: [
						o(t.div, {
							...j,
							className: c('framer-1t183bb', V),
							ref: R,
							style: { ...s },
							children: [
								e(t.div, {
									className: 'framer-13hlmmu',
									children: e(B, {
										breakpoint: g,
										overrides: {
											sa0IoVYlb: {
												'data-framer-appear-id':
													'4hemv4',
												animate: r(
													'animate',
													'4hemv4',
													A,
													'1b8lsa'
												),
												initial: r(
													'initial',
													'4hemv4',
													J,
													'1b8lsa'
												),
											},
											tfyIpgOJM: {
												'data-framer-appear-id':
													'ia2164',
												animate: r(
													'animate',
													'ia2164',
													A,
													'18dqnn3'
												),
												initial: r(
													'initial',
													'ia2164',
													J,
													'18dqnn3'
												),
											},
										},
										children: o(t.div, {
											animate: r(
												'animate',
												'lh95g1',
												A,
												'1t183bb'
											),
											className: 'framer-lh95g1',
											'data-framer-appear-id': 'lh95g1',
											initial: r(
												'initial',
												'lh95g1',
												J,
												'1t183bb'
											),
											children: [
												e(B, {
													breakpoint: g,
													overrides: {
														sa0IoVYlb: {
															'data-framer-appear-id':
																'uirhiv',
															animate: r(
																'animate',
																'uirhiv',
																G,
																'1b8lsa'
															),
															initial: r(
																'initial',
																'uirhiv',
																Y,
																'1b8lsa'
															),
															transformTemplate:
																k('uirhiv', q),
														},
														tfyIpgOJM: {
															'data-framer-appear-id':
																'1n4lo7s',
															animate: r(
																'animate',
																'1n4lo7s',
																G,
																'18dqnn3'
															),
															initial: r(
																'initial',
																'1n4lo7s',
																Y,
																'18dqnn3'
															),
															transformTemplate:
																k('1n4lo7s', q),
														},
													},
													children: e(t.div, {
														animate: r(
															'animate',
															'9c222f',
															G,
															'1t183bb'
														),
														className:
															'framer-9c222f',
														'data-framer-appear-id':
															'9c222f',
														exit: Ee,
														initial: r(
															'initial',
															'9c222f',
															Y,
															'1t183bb'
														),
														transformTemplate: k(
															'9c222f',
															q
														),
														children: e(d, {
															className:
																'framer-lmgq71-container',
															children: e(z, {
																height: '100%',
																id: 'eHGK6aqTW',
																layoutId:
																	'eHGK6aqTW',
																title: 'Contact Me',
																width: '100%',
															}),
														}),
													}),
												}),
												e(d, {
													className:
														'Contact-container',
												}),
											],
										}),
									}),
								}),
								e(Fe, {
									__framer__adjustPosition: !1,
									__framer__offset: 0,
									__framer__parallaxTransformEnabled: !0,
									__framer__speed: 150,
									__framer__spring: {
										damping: 60,
										delay: 0,
										duration: 0.3,
										ease: [0.44, 0, 0.56, 1],
										mass: 1,
										stiffness: 500,
										type: 'spring',
									},
									__framer__styleTransformEffectEnabled: !0,
									__framer__transformTargets: [
										{
											target: {
												opacity: 1,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												scale: 1,
												x: 0,
												y: 0,
											},
										},
										{
											target: {
												opacity: 1,
												rotate: 0,
												rotateX: 0,
												rotateY: 0,
												scale: 1,
												x: 0,
												y: -150,
											},
										},
									],
									__framer__transformTrigger: 'onScroll',
									__perspectiveFX: !1,
									__targetOpacity: 1,
									className: 'framer-1ksrm4a-container',
									layoutScroll: !0,
									transformTemplate: ze,
									children: e(E, {
										height: '100%',
										id: 'NbJglPhPN',
										layoutId: 'NbJglPhPN',
										style: { height: '100%' },
										variant: 'EAu8O2CHG',
										width: '100%',
									}),
								}),
								e(d, {
									className: 'framer-1208odj-container',
									children: e(D, {
										copyright: '\xA92023 Copyright',
										height: '100%',
										id: 'xllQKTmLX',
										layoutId: 'xllQKTmLX',
										style: {
											maxWidth: '100%',
											width: '100%',
										},
										width: '100%',
									}),
								}),
							],
						}),
						e('div', { id: 'overlay' }),
					],
				}),
			}),
		});
	}),
	Ae = [
		'.framer-eOni2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		`.${W.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(22, 22, 22)) /* {"name":"background"} */; }`,
		'.framer-eOni2 .framer-rywoxn { display: block; }',
		'.framer-eOni2 .framer-1t183bb { align-content: center; align-items: center; background-color: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, #161616); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }',
		'.framer-eOni2 .framer-13hlmmu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1200px; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 128px 0px 128px 0px; position: relative; width: 600px; }',
		'.framer-eOni2 .framer-lh95g1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
		'.framer-eOni2 .framer-9c222f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }',
		'.framer-eOni2 .framer-lmgq71-container { flex: none; height: auto; position: relative; width: auto; }',
		'.framer-eOni2 .framer-13yvzul-container, .framer-eOni2 .framer-4o0s20-container, .framer-eOni2 .framer-uf6w41-container { flex: none; height: auto; position: relative; width: 100%; }',
		'.framer-eOni2 .framer-1ksrm4a-container { flex: none; height: 48px; left: 50%; position: fixed; top: 32px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 10; }',
		'.framer-eOni2 .framer-1208odj-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }',
		'@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-eOni2 .framer-1t183bb, .framer-eOni2 .framer-13hlmmu, .framer-eOni2 .framer-lh95g1, .framer-eOni2 .framer-9c222f { gap: 0px; } .framer-eOni2 .framer-1t183bb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-eOni2 .framer-1t183bb > :first-child, .framer-eOni2 .framer-13hlmmu > :first-child, .framer-eOni2 .framer-lh95g1 > :first-child { margin-top: 0px; } .framer-eOni2 .framer-1t183bb > :last-child, .framer-eOni2 .framer-13hlmmu > :last-child, .framer-eOni2 .framer-lh95g1 > :last-child { margin-bottom: 0px; } .framer-eOni2 .framer-13hlmmu > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-eOni2 .framer-lh95g1 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-eOni2 .framer-9c222f > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-eOni2 .framer-9c222f > :first-child { margin-left: 0px; } .framer-eOni2 .framer-9c222f > :last-child { margin-right: 0px; } }',
		'@media (min-width: 1200px) { .framer-eOni2 .hidden-1t183bb { display: none !important; } }',
		`@media (min-width: 810px) and (max-width: 1199px) { .framer-eOni2 .hidden-1b8lsa { display: none !important; } .${W.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(22, 22, 22)) /* {"name":"background"} */; } .framer-eOni2 .framer-1t183bb { width: 810px; }}`,
		`@media (max-width: 809px) { .framer-eOni2 .hidden-18dqnn3 { display: none !important; } .${W.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(22, 22, 22)) /* {"name":"background"} */; } .framer-eOni2 .framer-1t183bb { width: 390px; } .framer-eOni2 .framer-13hlmmu, .framer-eOni2 .framer-1208odj-container { width: 90%; }}`,
	],
	C = L(Pe, Ae, 'framer-eOni2'),
	mt = C;
C.displayName = 'Contact';
C.defaultProps = { height: 1328, width: 1200 };
_(C, [...Ve, ...je, ...Re, ...Se]);
var lt = {
	exports: {
		default: {
			type: 'reactComponent',
			name: 'FramerbOEL7efu9',
			slots: [],
			annotations: {
				framerResponsiveScreen: '',
				framerIntrinsicHeight: '1328',
				framerIntrinsicWidth: '1200',
				framerCanvasComponentVariantDetails:
					'{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sa0IoVYlb":{"layout":["fixed","auto"]},"tfyIpgOJM":{"layout":["fixed","auto"]}}}',
				framerContractVersion: '1',
			},
		},
		Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
		__FramerMetadata__: { type: 'variable' },
	},
};
export { lt as __FramerMetadata__, mt as default };
//# sourceMappingURL=zNrO-IxBkDoZAWTV-pblBTLmg9VDHNj_KNoLDr9iM-g.EHPZWV5J.mjs.map
