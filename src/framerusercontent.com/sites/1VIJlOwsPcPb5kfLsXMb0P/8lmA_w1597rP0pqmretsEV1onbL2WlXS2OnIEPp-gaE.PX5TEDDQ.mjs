import { a as ve } from './chunk-QJ2GJJLS.mjs';
import { a as W } from './chunk-UA2Y7E2F.mjs';
import { a as J } from './chunk-NU65Y5GH.mjs';
import { a as F } from './chunk-LZGWEU2R.mjs';
import { a as D } from './chunk-DJB6T62W.mjs';
import {
	a as ge,
	b as xe,
	c as ue,
	d as ye,
	e as be,
	f as we,
} from './chunk-2WIFT7UF.mjs';
import './chunk-42U43NKG.mjs';
import { a as e, b as c } from './chunk-Z3YWSFEC.mjs';
import {
	E as te,
	J as x,
	M as ie,
	P as u,
	Q as ne,
	S as k,
	T as oe,
	U as se,
	V as de,
	W as le,
	Y as n,
	_ as f,
	c as O,
	ca as V,
	da as R,
	ea as me,
	fa as pe,
	g as S,
	ga as fe,
	ia as ce,
	l as X,
	m as re,
	ma as he,
	na as M,
	oa as j,
	pa as P,
	t as i,
	u as _,
} from './chunk-RTHXSB7Z.mjs';
import './chunk-PUHJYBEA.mjs';
import './chunk-ELYU6EKT.mjs';
var Ve = ['Xg_1NXEzH', 'JEyOt8u_X'],
	Re = { JEyOt8u_X: 'framer-v-1lexugn', Xg_1NXEzH: 'framer-v-4ekbs5' };
function je(a, ...t) {
	let o = {};
	return t?.forEach((p) => p && Object.assign(o, a[p])), o;
}
var Ie = { 'Variant 1': 'Xg_1NXEzH', 'Variant 2': 'JEyOt8u_X' },
	Te = {
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
	qe = (a) =>
		typeof a == 'object' && a !== null && typeof a.src == 'string'
			? a
			: typeof a == 'string'
			? { src: a }
			: void 0,
	Be = (a, t = {}) => {
		if (typeof a != 'string') return '';
		let o = new Date(a);
		if (isNaN(o.getTime())) return '';
		let p = 'en-US',
			T = t.locale || p,
			s = t.dateStyle,
			d = 'UTC';
		try {
			return o.toLocaleDateString(T, { dateStyle: s, timeZone: d });
		} catch {
			return o.toLocaleDateString(p, { dateStyle: s, timeZone: d });
		}
	},
	Ae = S(function (
		{
			id: a,
			style: t,
			className: o,
			width: p,
			height: T,
			layoutId: s,
			variant: d = 'Xg_1NXEzH',
			link: Z,
			image: G,
			title: $ = 'Starting and Growing a Career in Web Design',
			date: Q = '2022-04-08T00:00:00.000Z',
			...q
		},
		B
	) {
		let A = Ie[d] || d,
			{
				baseVariant: E,
				classNames: v,
				gestureVariant: ee,
				setGestureState: h,
				setVariant: L,
				transition: l,
				variants: H,
			} = ce({
				cycleOrder: Ve,
				defaultVariant: 'Xg_1NXEzH',
				transitions: Te,
				variant: A,
				variantClassNames: Re,
			}),
			r = H.join('-') + q.layoutDependency,
			{ activeVariantCallback: m, delay: g } = me(E),
			z = m(async (...Ee) => {
				L('JEyOt8u_X');
			}),
			N = m(async (...Ee) => {
				L('Xg_1NXEzH');
			}),
			ae = X();
		return e(_, {
			id: s ?? ae,
			children: e(i.div, {
				initial: A,
				animate: H,
				onHoverStart: () => h({ isHovered: !0 }),
				onHoverEnd: () => h({ isHovered: !1 }),
				onTapStart: () => h({ isPressed: !0 }),
				onTap: () => h({ isPressed: !1 }),
				onTapCancel: () => h({ isPressed: !1 }),
				className: u('framer-hwwAH', we, ue, v),
				style: { display: 'contents' },
				children: e(de, {
					href: Z,
					children: e(i.a, {
						...q,
						className: `${u('framer-4ekbs5', o)} framer-18zcjig`,
						'data-framer-name': 'Variant 1',
						'data-highlight': !0,
						layoutDependency: r,
						layoutId: 'Xg_1NXEzH',
						onMouseEnter: z,
						ref: B,
						style: {
							boxShadow:
								'0px 0.48174984141951427px 1.4452495242585428px -1.25px rgba(0, 0, 0, 0.05759), 0px 1.8308266425947657px 5.492479927784297px -2.5px rgba(0, 0, 0, 0.05085), 0px 8px 24px -3.75px rgba(0, 0, 0, 0.02)',
							...t,
						},
						transition: l,
						...je(
							{
								JEyOt8u_X: {
									'data-framer-name': 'Variant 2',
									onMouseLeave: N,
								},
							},
							E,
							ee
						),
						children: c(i.div, {
							className: 'framer-zqqv0a',
							'data-border': !0,
							layoutDependency: r,
							layoutId: 'ONe2SX58f',
							style: {
								'--border-bottom-width': '1px',
								'--border-color':
									'var(--token-15111fde-133a-4f2a-a639-023410d025db, rgb(224, 224, 224)) /* {"name":"border / 01"} */',
								'--border-left-width': '1px',
								'--border-right-width': '1px',
								'--border-style': 'solid',
								'--border-top-width': '1px',
								backgroundColor:
									'var(--token-00c0c44a-d198-43e1-a777-afd57548256e, rgb(255, 255, 255))',
								borderBottomLeftRadius: 16,
								borderBottomRightRadius: 16,
								borderTopLeftRadius: 16,
								borderTopRightRadius: 16,
							},
							transition: l,
							variants: {
								JEyOt8u_X: {
									backgroundColor:
										'var(--token-0baa9d56-988a-40d5-a415-e498ba517f2d, rgb(232, 232, 232))',
								},
							},
							children: [
								e(he, {
									background: {
										alt: '',
										fit: 'fill',
										...qe(G),
									},
									className: 'framer-ep69bs',
									layoutDependency: r,
									layoutId: 'mCuzJkgQz',
									style: {
										borderBottomLeftRadius: 8,
										borderBottomRightRadius: 8,
										borderTopLeftRadius: 8,
										borderTopRightRadius: 8,
									},
									transition: l,
								}),
								c(i.div, {
									className: 'framer-1bg4fcn',
									'data-framer-name': 'Post',
									layoutDependency: r,
									layoutId: 'ynzVH60oe',
									transition: l,
									children: [
										e(M, {
											__fromCanvasComponent: !0,
											children: e(O, {
												children: e(i.h2, {
													className:
														'framer-styles-preset-1wml6uu',
													'data-styles-preset':
														'fVxnimdqP',
													children: 'Title',
												}),
											}),
											className: 'framer-1b1cwwr',
											'data-framer-name': 'Title',
											layoutDependency: r,
											layoutId: 'HcXboQULi',
											style: {
												'--framer-paragraph-spacing':
													'0px',
											},
											text: $,
											transition: l,
											verticalAlignment: 'top',
											withExternalLayout: !0,
										}),
										e(M, {
											__fromCanvasComponent: !0,
											children: e(O, {
												children: e(i.p, {
													className:
														'framer-styles-preset-avhph7',
													'data-styles-preset':
														'lGIir7aIa',
													style: {
														'--framer-text-color':
															'var(--extracted-r6o4lv)',
													},
													children: 'Apr 8, 2022',
												}),
											}),
											className: 'framer-1vbcnde',
											'data-framer-name': 'Date',
											layoutDependency: r,
											layoutId: 'VWavM1urV',
											style: {
												'--extracted-r6o4lv':
													'var(--token-55eb047e-6490-4b7d-a079-18fd39e39048, rgb(82, 82, 82)) ',
												'--framer-paragraph-spacing':
													'0px',
											},
											text: Be(Q, {
												dateStyle: 'medium',
												locale: 'en',
											}),
											transition: l,
											verticalAlignment: 'top',
											withExternalLayout: !0,
										}),
									],
								}),
							],
						}),
					}),
				}),
			}),
		});
	}),
	Le = [
		'.framer-hwwAH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		'.framer-hwwAH .framer-18zcjig { display: block; }',
		'.framer-hwwAH .framer-4ekbs5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 24px; height: 400px; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 600px; }',
		'.framer-hwwAH .framer-zqqv0a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 24px 24px 24px 24px; position: relative; width: 100%; }',
		'.framer-hwwAH .framer-ep69bs { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }',
		'.framer-hwwAH .framer-1bg4fcn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; min-width: 200px; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
		'.framer-hwwAH .framer-1b1cwwr, .framer-hwwAH .framer-1vbcnde { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
		'@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hwwAH .framer-4ekbs5, .framer-hwwAH .framer-zqqv0a, .framer-hwwAH .framer-1bg4fcn { gap: 0px; } .framer-hwwAH .framer-4ekbs5 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-hwwAH .framer-4ekbs5 > :first-child, .framer-hwwAH .framer-zqqv0a > :first-child, .framer-hwwAH .framer-1bg4fcn > :first-child { margin-top: 0px; } .framer-hwwAH .framer-4ekbs5 > :last-child, .framer-hwwAH .framer-zqqv0a > :last-child, .framer-hwwAH .framer-1bg4fcn > :last-child { margin-bottom: 0px; } .framer-hwwAH .framer-zqqv0a > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hwwAH .framer-1bg4fcn > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
		...be,
		...xe,
	],
	C = V(Ae, Le, 'framer-hwwAH'),
	U = C;
C.displayName = 'Blog Card';
C.defaultProps = { height: 400, width: 600 };
ie(C, {
	variant: {
		options: ['Xg_1NXEzH', 'JEyOt8u_X'],
		optionTitles: ['Variant 1', 'Variant 2'],
		title: 'Variant',
		type: x.Enum,
	},
	yDbHIrbIG: { title: 'Link', type: x.Link },
	EcWRr0qmW: { title: 'Image', type: x.ResponsiveImage },
	vs6qpgyEs: {
		defaultValue: 'Starting and Growing a Career in Web Design',
		title: 'Title',
		type: x.String,
	},
	ZOTL87bSd: {
		defaultValue: '2022-04-08T00:00:00.000Z',
		title: 'Date',
		type: x.Date,
	},
});
j(C, [...ye, ...ge]);
var ze = P(J),
	Oe = P(U),
	Me = P(D),
	Fe = ne(k),
	De = P(F);
var ke = {
		PB81YwOMS: '(min-width: 1200px)',
		R3d32h22E: '(max-width: 809px)',
		sXq12I0BJ: '(min-width: 810px) and (max-width: 1199px)',
	},
	Je = () => typeof document < 'u',
	Pe = {
		PB81YwOMS: 'framer-v-1dnl4bk',
		R3d32h22E: 'framer-v-1hauxl7',
		sXq12I0BJ: 'framer-v-rm7myl',
	};
Je() && fe('PB81YwOMS', ke, Pe);
var We = { Desktop: 'PB81YwOMS', Phone: 'R3d32h22E', Tablet: 'sXq12I0BJ' },
	Ue = { default: { duration: 0 } },
	Ce = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
	_e = { opacity: 0, rotate: 0, scale: 1, transition: Ce, x: 0, y: 40 },
	y = (a, t) => `perspective(1200px) ${t}`,
	b = {
		opacity: 1,
		rotate: 0,
		rotateX: 0,
		rotateY: 0,
		scale: 1,
		transition: Ce,
		x: 0,
		y: 0,
	},
	w = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 40 },
	Ye = (a) =>
		typeof a == 'object' && a !== null && typeof a.src == 'string'
			? a
			: typeof a == 'string'
			? { src: a }
			: void 0,
	Ze = (a, t) => `perspective(1200px) translateX(-50%) ${t}`,
	Y = W(),
	Ge = S(function (
		{
			id: a,
			style: t,
			className: o,
			width: p,
			height: T,
			layoutId: s,
			variant: d = 'PB81YwOMS',
			ZUQB8ePnEfnm1uvEjo: Z,
			hC5L49eHcfnm1uvEjo: G,
			OVhOM0HhEfnm1uvEjo: $,
			rnmy6U_Mefnm1uvEjo: Q,
			idfnm1uvEjo: q,
			...B
		},
		K
	) {
		let E = We[d] || d;
		re(() => {
			let r = W();
			if (((document.title = r.title || ''), r.viewport)) {
				var m;
				(m = document.querySelector('meta[name="viewport"]')) ===
					null ||
					m === void 0 ||
					m.setAttribute('content', r.viewport);
			}
			r.bodyClassName &&
				(Array.from(document.body.classList)
					.filter((g) => g.startsWith('framer-body-'))
					.map((g) => document.body.classList.remove(g)),
				document.body.classList.add(r.bodyClassName));
		}, []);
		let [v, ee] = pe(E, ke, !1),
			h = void 0,
			L = Ue.default,
			l = te(),
			H = X();
		return e(oe.Provider, {
			value: { primaryVariantId: 'PB81YwOMS', variantClassNames: Pe },
			children: e(_, {
				id: s ?? H,
				children: c(i.div, {
					className: u('framer-Peogi'),
					style: { display: 'contents' },
					children: [
						c(i.div, {
							...B,
							className: u('framer-1dnl4bk', o),
							ref: K,
							style: { ...t },
							children: [
								c(i.div, {
									className: 'framer-1krph3r',
									children: [
										e(R, {
											breakpoint: v,
											overrides: {
												R3d32h22E: {
													'data-framer-appear-id':
														'1d0iw64',
													animate: n(
														'animate',
														'1d0iw64',
														b,
														'1hauxl7'
													),
													initial: n(
														'initial',
														'1d0iw64',
														w,
														'1hauxl7'
													),
													transformTemplate: f(
														'1d0iw64',
														y
													),
												},
												sXq12I0BJ: {
													'data-framer-appear-id':
														'1xsu99a',
													animate: n(
														'animate',
														'1xsu99a',
														b,
														'rm7myl'
													),
													initial: n(
														'initial',
														'1xsu99a',
														w,
														'rm7myl'
													),
													transformTemplate: f(
														'1xsu99a',
														y
													),
												},
											},
											children: e(i.div, {
												animate: n(
													'animate',
													'xfjwvi',
													b,
													'1dnl4bk'
												),
												className: 'framer-xfjwvi',
												'data-framer-appear-id':
													'xfjwvi',
												exit: _e,
												initial: n(
													'initial',
													'xfjwvi',
													w,
													'1dnl4bk'
												),
												transformTemplate: f(
													'xfjwvi',
													y
												),
												children: e(k, {
													className:
														'framer-139u2rh-container',
													children: e(J, {
														height: '100%',
														id: 'jFSK9zyB8',
														layoutId: 'jFSK9zyB8',
														title: 'My Blog',
														width: '100%',
													}),
												}),
											}),
										}),
										e(R, {
											breakpoint: v,
											overrides: {
												R3d32h22E: {
													'data-framer-appear-id':
														'w1pnwk',
													animate: n(
														'animate',
														'w1pnwk',
														b,
														'1hauxl7'
													),
													initial: n(
														'initial',
														'w1pnwk',
														w,
														'1hauxl7'
													),
													transformTemplate: f(
														'w1pnwk',
														y
													),
												},
												sXq12I0BJ: {
													'data-framer-appear-id':
														'eya49n',
													animate: n(
														'animate',
														'eya49n',
														b,
														'rm7myl'
													),
													initial: n(
														'initial',
														'eya49n',
														w,
														'rm7myl'
													),
													transformTemplate: f(
														'eya49n',
														y
													),
												},
											},
											children: e(i.div, {
												animate: n(
													'animate',
													'13d3glx',
													b,
													'1dnl4bk'
												),
												className: 'framer-13d3glx',
												'data-framer-appear-id':
													'13d3glx',
												exit: _e,
												initial: n(
													'initial',
													'13d3glx',
													w,
													'1dnl4bk'
												),
												transformTemplate: f(
													'13d3glx',
													y
												),
												children: ve.map(
													(
														{
															ZUQB8ePnE: r,
															hC5L49eHc: m,
															OVhOM0HhE: g,
															rnmy6U_Me: z,
															id: N,
														},
														ae
													) =>
														e(
															_,
															{
																id: `fnm1uvEjo-${N}`,
																children: e(
																	se.Provider,
																	{
																		value: {
																			ZUQB8ePnE:
																				r,
																		},
																		children:
																			e(
																				k,
																				{
																					className:
																						'framer-n1uxyq-container',
																					children:
																						e(
																							R,
																							{
																								breakpoint:
																									v,
																								overrides:
																									{
																										R3d32h22E:
																											{
																												style: {
																													height: '100%',
																													width: '100%',
																												},
																											},
																									},
																								children:
																									e(
																										U,
																										{
																											date: z,
																											height: '100%',
																											id: 'VJHnIq3gh',
																											image: Ye(
																												m
																											),
																											layoutId:
																												'VJHnIq3gh',
																											link: le(
																												{
																													pathVariables:
																														{
																															ZUQB8ePnE:
																																r,
																														},
																													webPageId:
																														'ndIrgWSbb',
																												},
																												l
																											),
																											style: {
																												width: '100%',
																											},
																											title: g,
																											variant:
																												'Xg_1NXEzH',
																											width: '100%',
																										}
																									),
																							}
																						),
																				}
																			),
																	}
																),
															},
															N
														)
												),
											}),
										}),
									],
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
									className: 'framer-qbdp7a-container',
									layoutScroll: !0,
									transformTemplate: Ze,
									children: e(D, {
										height: '100%',
										id: 'XX5ASCMP2',
										layoutId: 'XX5ASCMP2',
										style: { height: '100%' },
										variant: 'lLcePRpSb',
										width: '100%',
									}),
								}),
								e(k, {
									className: 'framer-zigcr7-container',
									children: e(F, {
										copyright: '\xA92023 Copyright',
										height: '100%',
										id: 'ffhhh2Wjw',
										layoutId: 'ffhhh2Wjw',
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
	$e = [
		'.framer-Peogi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
		'@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
		`.${Y.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; }`,
		'.framer-Peogi .framer-1dqdxsc { display: block; }',
		'.framer-Peogi .framer-1dnl4bk { align-content: center; align-items: center; background-color: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, #0a0a0a); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }',
		'.framer-Peogi .framer-1krph3r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 128px 0px 128px 0px; position: relative; width: 100%; }',
		'.framer-Peogi .framer-xfjwvi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }',
		'.framer-Peogi .framer-139u2rh-container { flex: none; height: auto; position: relative; width: auto; }',
		'.framer-Peogi .framer-13d3glx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 600px; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }',
		'.framer-Peogi .framer-n1uxyq-container { flex: none; height: auto; position: relative; width: 100%; }',
		'.framer-Peogi .framer-qbdp7a-container { flex: none; height: 48px; left: 50%; position: fixed; top: 32px; transform: perspective(1200px) translateX(-50%); width: auto; z-index: 10; }',
		'.framer-Peogi .framer-zigcr7-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }',
		'@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Peogi .framer-1dnl4bk, .framer-Peogi .framer-1krph3r, .framer-Peogi .framer-xfjwvi, .framer-Peogi .framer-13d3glx { gap: 0px; } .framer-Peogi .framer-1dnl4bk > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-Peogi .framer-1dnl4bk > :first-child, .framer-Peogi .framer-1krph3r > :first-child, .framer-Peogi .framer-13d3glx > :first-child { margin-top: 0px; } .framer-Peogi .framer-1dnl4bk > :last-child, .framer-Peogi .framer-1krph3r > :last-child, .framer-Peogi .framer-13d3glx > :last-child { margin-bottom: 0px; } .framer-Peogi .framer-1krph3r > *, .framer-Peogi .framer-13d3glx > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Peogi .framer-xfjwvi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Peogi .framer-xfjwvi > :first-child { margin-left: 0px; } .framer-Peogi .framer-xfjwvi > :last-child { margin-right: 0px; } }',
		'@media (min-width: 1200px) { .framer-Peogi .hidden-1dnl4bk { display: none !important; } }',
		`@media (min-width: 810px) and (max-width: 1199px) { .framer-Peogi .hidden-rm7myl { display: none !important; } .${Y.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; } .framer-Peogi .framer-1dnl4bk { width: 810px; }}`,
		`@media (max-width: 809px) { .framer-Peogi .hidden-1hauxl7 { display: none !important; } .${Y.bodyClassName} { background: var(--token-526c112e-eda3-4982-ada6-17ba6139ab7d, rgb(10, 10, 10)) /* {"name":"background"} */; } .framer-Peogi .framer-1dnl4bk { width: 714px; } .framer-Peogi .framer-1krph3r { width: 90%; } .framer-Peogi .framer-n1uxyq-container { height: 320px; }}`,
	],
	I = V(Ge, $e, 'framer-Peogi'),
	ha = I;
I.displayName = 'Blog';
I.defaultProps = { height: 2592, width: 1200 };
j(I, [...ze, ...Oe, ...Me, ...De]);
var ga = {
	exports: {
		Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
		default: {
			type: 'reactComponent',
			name: 'FramerZWW_vu6NM',
			slots: [],
			annotations: {
				framerResponsiveScreen: '',
				framerIntrinsicHeight: '2592',
				framerContractVersion: '1',
				framerCanvasComponentVariantDetails:
					'{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"sXq12I0BJ":{"layout":["fixed","auto"]},"R3d32h22E":{"layout":["fixed","auto"]}}}',
				framerIntrinsicWidth: '1200',
			},
		},
		__FramerMetadata__: { type: 'variable' },
	},
};
export { ga as __FramerMetadata__, ha as default };
//# sourceMappingURL=8lmA_w1597rP0pqmretsEV1onbL2WlXS2OnIEPp-gaE.PX5TEDDQ.mjs.map
