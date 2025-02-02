! function(t, e, i) {
	"use strict";

	function n(t) {
		var e = Object.create(null);
		return t && Object.keys(t).forEach((function(i) {
			if ("default" !== i) {
				var n = Object.getOwnPropertyDescriptor(t, i);
				Object.defineProperty(e, i, n.get ? n : {
					enumerable: !0,
					get: function() {
						return t[i]
					}
				})
			}
		})), e.default = t, Object.freeze(e)
	}
	var r, a = n(t),
		s = n(e),
		o = n(i);
	! function(t) {
		t[t.NORMAL = 0] = "NORMAL", t[t.BOSS = 1] = "BOSS", t[t.BONUS = 2] = "BONUS"
	}(r || (r = {}));
	var h = function() {};
	h.play = function(t, e, i, n) {
		void 0 === i && (i = 1), void 0 === n && (n = 1), t.vars.additional.sound && (t.resources.sounds[e].volume(i), t.resources.sounds[e].rate(n), t.resources.sounds[e].play())
	}, h.stop = function(t, e) {
		t.resources.sounds[e].stop()
	}, h.playBGM = function(t, e, i) {
		void 0 === i && (i = 1), h.stop(t, e), t.vars.additional.sound && (t.resources.sounds[e].loop(!0), t.resources.sounds[e].volume(i), t.resources.sounds[e].play())
	}, h.muteBGM = function(t, e) {
		t.resources.sounds[e].volume(0)
	}, h.unmuteBGM = function(t, e, i) {
		void 0 === i && (i = 1), t.resources.sounds[e].volume(i)
	};
	var c = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this);
				var a = e.vars.env.languages;
				if (!(a.length < 2)) {
					var o = new u(e, e.resources.spritesheets.langui.button, e.resources.spritesheets.langui.close);
					o.scale.set(.8);
					var h = o.width / 2 + i,
						c = o.height / 2 + n;
					i <= 0 && (h = e.vars.additional.width - o.width / 2 + i), n <= 0 && (c = e.vars.additional.height - o.height / 2 + n), o.position.set(h, c);
					var l = new s.Graphics;
					l.beginFill(0, .75), l.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), l.endFill(), l.interactive = !0;
					for (var d = new s.Sprite(e.resources.spritesheets.langui.pop), p = new s.Sprite(e.resources.spritesheets.langui.title), f = e.vars.api.getLanguage(), g = [], v = function(t) {
							var i = a[t],
								n = f == i,
								o = new u(e, e.resources.spritesheets.langui[n ? "select" : "other"]),
								h = new s.Sprite(e.resources.spritesheets.lang[i]);
							h.anchor.set(.5);
							o.y = 180 * (t - (a.length - 1) / 2), o.on("buttontap", (function() {
								n || r.emit("changeLang", i)
							})), o.sprite.addChild(h), g.push(o)
						}, m = 0; m < a.length; m++) v(m);
					d.anchor.set(.5), p.anchor.set(.5), d.scale.set(.8), d.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2), p.y = -380, l.visible = !1, d.visible = !1, o.on("buttontap", (function() {
						var t = !o.switchToggle();
						l.visible = t, d.visible = t
					})), this.addChild(l), this.addChild(o), d.addChild(p), this.addChild(d);
					for (var C = 0; C < g.length; C++) d.addChild(g[C]);
					return this
				}
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		u = function(t) {
			function e(e, i, n) {
				var r = this;
				void 0 === n && (n = s.Texture.EMPTY), t.call(this), this.onTexture = s.Texture.EMPTY, this.offTexture = s.Texture.EMPTY, this.enable = !0, this._toggle = !1, this.sprite = new s.Sprite(i), this.sprite.anchor.set(.5), this.collider = new s.Graphics, this.collider.beginFill(255, .4), this.collider.drawRect(-this.sprite.width / 2, -this.sprite.height / 2, this.sprite.width, this.sprite.height), this.collider.endFill(), this.collider.alpha = 0, n != s.Texture.EMPTY && (this._toggle = !0, this.onTexture = i, this.offTexture = n);
				var a = !1,
					o = 0;
				this.collider.interactive = !0, this.collider.on("pointertap", (function() {
					r.enable && (r.emit("buttontap"), h.play(e, "button"))
				})), this.collider.on("pointerdown", (function() {
					r.enable && (a = !0)
				})), this.collider.on("pointerup", (function() {
					a = !1
				})), this.collider.on("pointerupoutside", (function() {
					a = !1
				}));
				this.task.on("buttonAnimationTask", (function(t) {
					var e = t.delta,
						i = o / 5;
					r.sprite.scale.set(1 - i * (1 - .85)), o = a ? o < 5 ? o + e : 5 : o > 0 ? o - e : 0
				})), this.addChild(this.sprite), this.addChild(this.collider)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.switchToggle = function() {
				var t = !this._toggle;
				return this._toggle = t, this.sprite.texture = t ? this.onTexture : this.offTexture, t
			}, e
		}(a.Container),
		l = function(t) {
			function e(e, i, n, r, a) {
				void 0 === r && (r = 0), void 0 === a && (a = 30), t.call(this);
				var o = new s.Point(2 * e.width, 2 * e.height),
					h = new s.Text("ver. " + e.vars.env.version, new s.TextStyle({
						fill: r,
						fontSize: a
					}));
				h.position.set(o.x * i, o.y * n), h.pivot.set(h.width * i, h.height * n), this.addChild(h)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		d = function(t) {
			function e(e, i) {
				var n = this;
				t.call(this), this.pressableFilter = function() {
					return !0
				}, this.enable = !0, this.target = i, this.target.pivot.set(this.target.width / 2, this.target.height / 2), this.collider = new s.Graphics, this.collider.beginFill(255, .4), this.collider.drawRect(-this.target.width / 2, -this.target.height / 2, this.target.width, this.target.height), this.collider.endFill(), this.collider.alpha = 0;
				var r = !1,
					a = 0;
				this.collider.interactive = !0, this.collider.on("pointertap", (function() {
					n.enable && n.pressableFilter() && (n.emit("buttontap"), h.play(e, "button"), n.pointerTap())
				})), this.collider.on("pointerdown", (function() {
					n.enable && n.pressableFilter() && (r = !0, n.pointerDown())
				})), this.collider.on("pointerup", (function() {
					r = !1, n.pointerUp()
				})), this.collider.on("pointerupoutside", (function() {
					r = !1, n.pointerUp()
				}));
				this.task.on("buttonAnimationTask", (function(t) {
					var e = t.delta,
						i = a / 5;
					n.target.scale.set(1 - i * (1 - .85)), a = r ? a < 5 ? a + e : 5 : a > 0 ? a - e : 0
				})), this.addChild(this.target), this.addChild(this.collider)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				pressable: {
					configurable: !0
				},
				showCollider: {
					configurable: !0
				}
			};
			return e.prototype.getEnable = function() {
				return this.enable
			}, e.prototype.setEnable = function(t) {
				this.enable = t
			}, i.pressable.set = function(t) {
				this.collider.interactive = t
			}, i.showCollider.set = function(t) {
				this.collider.alpha = t ? 1 : 0
			}, e.prototype.colliderSize = function(t, e) {
				this.collider.clear(), this.collider.beginFill(255, .4), this.collider.drawRect(-t / 2, -e / 2, t, e), this.collider.endFill()
			}, e.prototype.setCollider = function(t) {
				this.collider.clear(), this.collider.beginFill(255, .4), t(this.collider), this.collider.endFill()
			}, e.prototype.pointerTap = function() {}, e.prototype.pointerDown = function() {}, e.prototype.pointerUp = function() {}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		p = function(t) {
			function e(e, i, n) {
				void 0 === n && (n = s.Texture.EMPTY);
				var r = new s.Sprite(i);
				t.call(this, e, r), this.onTexture = s.Texture.EMPTY, this.offTexture = s.Texture.EMPTY, this.isToggleButton = !1, this.toggle = !1, this.sprite = r, n != s.Texture.EMPTY && (this.isToggleButton = !0, this.toggle = !0, this.onTexture = i, this.offTexture = n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getToggle = function() {
				return this.toggle
			}, e.prototype.setToggle = function(t) {
				this.toggle = t, this.sprite.texture = t ? this.onTexture : this.offTexture
			}, e.prototype.switchToggle = function() {
				var t = !this.toggle;
				return this.setToggle(t), t
			}, e.prototype.setEnable = function(t) {
				this.enable = t;
				var i = function(n) {
					n instanceof s.Sprite && (n.tint = t ? e.WHITE : e.GRAY), n.children.forEach((function(t) {
						t instanceof s.Container && i(t)
					}))
				};
				i(this.sprite)
			}, e.prototype.addOnSprite = function(t) {
				var e = this.sprite;
				t.x += e.width / 2, t.y += e.height / 2 - 3, e.addChild(t)
			}, e
		}(d);
	p.WHITE = 16777215, p.GRAY = 7368816;
	var f = function(t) {
			function e(e, i, n, r) {
				void 0 === r && (r = s.Texture.EMPTY), t.call(this, e, i), r != s.Texture.EMPTY && (this.isToggleButton = !0, this.toggle = !0, this.onTexture = n, this.offTexture = r), this.icon = new s.Sprite(n), this.icon.anchor.set(.5), this.icon.position.set(this.sprite.width / 2, this.sprite.height / 2), this.icon.y += -3, this.sprite.addChild(this.icon)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setToggle = function(t) {
				this.toggle = t, this.icon.texture = t ? this.onTexture : this.offTexture
			}, e
		}(p),
		g = function(t) {
			function e() {
				t.call(this)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.nextScene = function() {
				this.emit(e.Event.NEXT)
			}, e.prototype.quitGame = function() {
				this.emit(e.Event.QUIT)
			}, e.prototype.sendScore = function(t) {
				this.emit(e.Event.SEND_SCORE, t)
			}, e.prototype.changeLanguage = function(t) {
				this.emit(e.Event.LANGUAGE, t)
			}, e
		}(a.Container);
	g.Event = {
		NEXT: "next",
		LANGUAGE: "language",
		QUIT: "quit",
		SEND_SCORE: "sendScore"
	};
	var v = function(t) {
			function e(e, i, n, r) {
				var a = this;
				void 0 === r && (r = 0), t.call(this), this.textures = [], this.sprites = [], this._margin = 0, this._number = 0, this.number_bfr = 0, this._padding = 1, this._tint = 16777215, this.splitTexture = s.Texture.EMPTY, this.anchor = new s.ObservablePoint((function() {
					return a.updateNumber()
				}), this);
				for (var o = 0; o <= 9; o++) this.textures.push(e[i + o + n]);
				this.number = r
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				number: {
					configurable: !0
				},
				margin: {
					configurable: !0
				},
				padding: {
					configurable: !0
				},
				split: {
					configurable: !0
				},
				tint: {
					configurable: !0
				}
			};
			return i.number.get = function() {
				return this._number
			}, i.number.set = function(t) {
				this.number_bfr = this._number, this._number = t, this.drawNumber(t)
			}, e.prototype.animateNumber = function(t, e, i) {
				var n = this;
				return void 0 === e && (e = 0), void 0 === i && (i = 1), new Promise((function(r) {
					n.number = t, e <= 0 || i <= 0 ? (n.drawNumber(t), r()) : n.animate(e, i).then(r)
				}))
			}, i.margin.get = function() {
				return this._margin
			}, i.margin.set = function(t) {
				this._margin = t, this.updateNumber()
			}, i.padding.get = function() {
				return this._padding
			}, i.padding.set = function(t) {
				this._padding = t, this.updateNumber()
			}, i.split.set = function(t) {
				this.splitTexture = t, this.updateNumber()
			}, e.prototype.updateNumber = function() {
				this.number = this._number
			}, i.tint.get = function() {
				return this._tint
			}, i.tint.set = function(t) {
				var e = this;
				this._tint = t, this.updateNumber(), this.sprites.forEach((function(t) {
					return t.tint = e._tint
				}))
			}, e.prototype.getTexture = function(t) {
				return this.textures[t]
			}, e.prototype.drawNumber = function(t) {
				var e;
				this._number = t;
				for (var i = this.sprites.length, n = t.toFixed(); n.length < this._padding;) n = "0" + n;
				var r = n;
				if (this.splitTexture !== s.Texture.EMPTY) {
					for (var a = r, o = Math.floor((r.length - 1) / 3), h = 0; h < o; h++) {
						var c = r.length - 3 * (h + 1);
						a = a.substring(0, c) + "," + a.substring(c)
					}
					r = a
				}
				for (var u = 0, l = 0; l < r.length || l < i; l++) {
					var d = "," === r[l] ? this.splitTexture : this.getTexture(Number(r[l]));
					if (l >= i && l < r.length) {
						var p = new s.Sprite(d),
							f = p.height;
						p.pivot.y = f, f > u && (u = f), p.tint = this._tint, this.addChild(p), this.sprites.push(p)
					} else if (l >= r.length && l < i) null === (e = this.sprites.pop()) || void 0 === e || e.destroy();
					else {
						var g = this.sprites[l];
						g.texture = d;
						var v = g.height;
						g.pivot.y = v, v > u && (u = v)
					}
				}
				for (var m = 0, C = 0; C < this.sprites.length; C++) this.sprites[C].x = m, this.sprites[C].y = u, m += this.sprites[C].width + this._margin;
				this.pivot.set(this.width * this.anchor.x / this.scale.x, this.height * this.anchor.y / this.scale.y)
			}, e.prototype.animate = function(t, e) {
				var i = this;
				return new Promise((function(n) {
					i.task.clear();
					var r = 0,
						a = i._number,
						s = i.number_bfr,
						o = Math.round(s);
					i.task.clear("animation"), i.task.on("animation", (function(h) {
						var c = h.delta;
						r > e && (r = e);
						var u = r / e,
							l = function(t, e, i) {
								return (e - t) * i + t
							}(s, a, function(e) {
								switch (t) {
									case 1:
										return e;
									case 2:
										return -e * e + 2 * e;
									case 3:
										return -2 * e * e * e + 3 * e * e
								}
								return 1
							}(u));
						i.drawNumber(l);
						var d = Math.round(l);
						o !== d && i.emit("clocking", d), o = d, u >= 1 ? (i.task.clear(), n()) : r += c / 60
					}))
				}))
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		m = function() {};
	m.getUUID = function() {
		return m.nullUuid >= Number.MAX_SAFE_INTEGER && (m.nullUuid = Number.MIN_SAFE_INTEGER), m.nullUuid++
	}, m.timeout = function(t, e, i) {
		return void 0 === i && (i = null), new Promise((function(n) {
			var r = null === i ? "" + m.getUUID() : i,
				a = 0;
			t.task.clear(r), t.task.on(r, (function(i) {
				if (a >= e) return t.task.clear(r), void n();
				a += i.delta / 60 * m.speed
			}))
		}))
	}, m.tween = function(t, e, i, n, r, a, s, o, h) {
		return void 0 === a && (a = function() {}), void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0), new Promise((function(c) {
			var u = null === e ? "" + m.getUUID() : e,
				l = 0,
				d = i,
				p = n;
			t.task.clear(u), a(d), t.task.on(u, (function(e) {
				var i = function(t, e, i) {
					return e < t ? t : e > i ? i : e
				}(0, function(t) {
					return h ? 1 - Math.abs(1 - t / 2 % 1 * 2) : t % 1
				}(l / r), 1);
				if (0 !== o && l >= r * o) return a(o % 2 == 1 ? p : d), t.task.clear(u), void c();
				a(function(t) {
					return t * (p - d) + d
				}(s(i))), l += e.delta / 60 * m.speed
			}))
		}))
	}, m.move = function(t, e, i, n, r, a, s, o, h) {
		void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0);
		var c = n.clone(),
			u = r.clone();
		return m.tween(t, i, 0, 1, a, (function(t) {
			e.x = u.x * t + c.x * (1 - t), e.y = u.y * t + c.y * (1 - t)
		}), s, o, h)
	}, m.vector = function(t, e, i, n, r, a, s, o) {
		void 0 === a && (a = function(t) {
			return t
		}), void 0 === s && (s = 1), void 0 === o && (o = !0);
		var h = e.position.clone(),
			c = e.position.clone();
		return c.x += n.x, c.y += n.y, m.move(t, e, i, h, c, r, a, s, o)
	}, m.moveTo = function(t, e, i, n, r, a, s, o) {
		void 0 === a && (a = function(t) {
			return t
		}), void 0 === s && (s = 1), void 0 === o && (o = !0);
		var h = e.position.clone();
		return m.move(t, e, i, h, n, r, a, s, o)
	}, m.bezier = function(t, e, i, n, r, a, s, o) {
		void 0 === a && (a = function(t) {
			return t
		}), void 0 === s && (s = 1), void 0 === o && (o = !0);
		for (var h = [], c = 0; c < n.length; c++) h.push(n[c].clone());
		var u = function(t, e) {
				for (var i = 1, n = 0; n < e; n++) i *= t;
				return i
			},
			l = h.length - 1,
			d = function(t, e) {
				return function(t, e) {
					for (var i = 1, n = 1, r = 0; r < e; r++) i *= t - r, n *= e - r;
					return i / n
				}(l, t) * u(e, t) * u(1 - e, l - t)
			};
		return m.tween(t, i, 0, 1, r, (function(t) {
			for (var i = new PIXI.Point(0, 0), n = 0; n <= l; n++) {
				var r = d(n, t);
				i.x += r * h[n].x, i.y += r * h[n].y
			}
			e.position = i
		}), a, s, o)
	}, m.scale = function(t, e, i, n, r, a, s, o, h) {
		return void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0), m.tween(t, i, n, r, a, (function(t) {
			return e.scale.set(t)
		}), s, o, h)
	}, m.scaleX = function(t, e, i, n, r, a, s, o, h) {
		return void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0), m.tween(t, i, n, r, a, (function(t) {
			return e.scale.x = t
		}), s, o, h)
	}, m.scaleY = function(t, e, i, n, r, a, s, o, h) {
		return void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0), m.tween(t, i, n, r, a, (function(t) {
			return e.scale.y = t
		}), s, o, h)
	}, m.alpha = function(t, e, i, n, r, a, s, o, h) {
		return void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0), m.tween(t, i, n, r, a, (function(t) {
			return e.alpha = t
		}), s, o, h)
	}, m.rotate = function(t, e, i, n, r, a, s, o, h) {
		void 0 === a && (a = 1), void 0 === s && (s = function(t) {
			return t
		}), void 0 === o && (o = 1), void 0 === h && (h = !0);
		var c = Math.PI / 180;
		return m.tween(t, i, n * c, r * c, a, (function(t) {
			return e.rotation = t
		}), s, o, h)
	}, m.speed = 1, m.nullUuid = Number.MIN_SAFE_INTEGER, m.Ease = {
		linear: function(t) {
			return t
		},
		accel: function(t) {
			return Math.pow(t, 2)
		},
		decel: function(t) {
			return -Math.pow(t, 2) + 2 * t
		},
		cubic: function(t) {
			return -2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)
		},
		stay: function(t) {
			return 4 * Math.pow(t, 3) - 6 * Math.pow(t, 2) + 3 * t
		},
		cosine: function(t) {
			return .5 * (Math.cos(Math.PI * (t - 1)) + 1)
		},
		accel2: function(t) {
			return Math.pow(t, 4)
		},
		decel2: function(t) {
			return -Math.pow(t, 4) + 4 * Math.pow(t, 3) - 6 * Math.pow(t, 2) + 4 * t
		},
		quadratic: function(t) {
			return function(e) {
				return t * e * e + (1 - t) * e
			}
		},
		inflection: function(t, e) {
			var i = 3 * (1 - e) / (3 * t * t - 3 * t + 1),
				n = i / 3,
				r = -i * t,
				a = i * t * t + e;
			return function(t) {
				return n * t * t * t + r * t * t + a * t
			}
		},
		bounce: function(t) {
			return function(e) {
				return Math.abs(1 - Math.abs(1 - t(e)))
			}
		}
	};
	var C = function(t) {
			function e(e, i, n) {
				var r = this;
				void 0 === n && (n = 0), t.call(this), this.graphic = new s.Graphics, this.graphic.beginFill(16777215), this.graphic.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), this.graphic.endFill(), this.graphic.tint = i, this.graphic.alpha = n, this.on("pointertap", (function(t) {
					r.emit("tapPoint", t.data.getLocalPosition(r.graphic))
				})), this.on("pointerdown", (function(t) {
					r.emit("downPoint", t.data.getLocalPosition(r.graphic))
				})), this.addChild(this.graphic)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				blendMode: {
					configurable: !0
				}
			};
			return e.prototype.fadeIn = function(t, e) {
				var i = this;
				return void 0 === e && (e = 1), new Promise((function(n) {
					i.task.clear("fade"), i.task.on("fade", (function(r) {
						var a = r.delta / 60 / t;
						if (i.graphic.alpha + a >= e) return i.task.clear("fade"), i.graphic.alpha = e, void n();
						i.graphic.alpha += a
					}))
				}))
			}, e.prototype.fadeOut = function(t, e) {
				var i = this;
				return void 0 === e && (e = 0), new Promise((function(n) {
					i.task.clear("fade"), i.task.on("fade", (function(r) {
						var a = r.delta / 60 / t;
						if (i.graphic.alpha - a <= e) return i.task.clear("fade"), i.graphic.alpha = e, void n();
						i.graphic.alpha -= a
					}))
				}))
			}, i.blendMode.set = function(t) {
				var e = s.BLEND_MODES.NORMAL;
				switch (t) {
					case "add":
						e = s.BLEND_MODES.ADD;
						break;
					case "multiply":
						e = s.BLEND_MODES.MULTIPLY;
						break;
					case "screen":
						e = s.BLEND_MODES.SCREEN
				}
				this.graphic.blendMode = e
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		b = function(t) {
			function e(e, i) {
				t.call(this), this.$ = e, this.popup = i, this._isShow = !1, this.screen = new C(e, 16777196), this.dontTap = new C(e, 0, 0), this.dontTap.interactive = !1, this.main = new a.Container, this.main.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2), this.main.visible = !1, this.addChild(this.dontTap), this.addChild(this.screen), this.main.addChild(i), this.addChild(this.main)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				allowBackTap: {
					configurable: !0
				},
				isShow: {
					configurable: !0
				}
			};
			return e.prototype.showAnimation = function(t, e, i) {
				return new Promise((function(n) {
					e.visible = !0, m.alpha(t, e, i + "Alpha", 0, 1, .15).then(n)
				}))
			}, e.prototype.show = function(t) {
				var e = this;
				return void 0 === t && (t = !0), new Promise((function(i) {
					e._isShow = !0, e.main.visible = !0, e.main.interactiveChildren = !1, t && e.visibleBack(!0), e.dontTap.interactive = !0, e.showAnimation(e, e.popup, "popup").then((function() {
						e.main.interactiveChildren = !0, i()
					}))
				}))
			}, e.prototype.hideAnimation = function(t, e, i) {
				return new Promise((function(n) {
					m.alpha(t, e, i + "Alpha", 1, 0, .15).then((function() {
						e.visible = !1, n()
					}))
				}))
			}, e.prototype.hide = function(t) {
				var e = this;
				return void 0 === t && (t = !0), new Promise((function(i) {
					e.main.interactiveChildren = !1, t && e.visibleBack(!1), e.hideAnimation(e, e.popup, "popup").then((function() {
						e.dontTap.interactive = !1, e.main.visible = !1, e.main.interactiveChildren = !0, e._isShow = !1, i()
					}))
				}))
			}, e.prototype.visibleBack = function(t) {
				return t ? this.screen.fadeIn(.1, .4) : this.screen.fadeOut(.1, 0)
			}, i.allowBackTap.set = function(t) {
				this.dontTap.interactive = !t
			}, i.isShow.get = function() {
				return this._isShow
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		y = function() {};
	y.index = function(t) {
		return Math.floor(t.length * Math.random())
	};
	var w = function() {};
	w.shuffle = function(t) {
		for (var e, i = [], n = w.natural(t.length), r = 0; r < n.length; r++) {
			var a = y.index(n);
			e = [n[a], n[r]], n[r] = e[0], n[a] = e[1]
		}
		for (var s = 0; s < n.length; s++) i.push(t[n[s]]);
		return i
	}, w.rotate = function(t) {
		for (var e = [], i = 0; i < t[0].length; i++) {
			for (var n = [], r = 0; r < t.length; r++) n.push(t[t.length - 1 - r][i]);
			e.push(n)
		}
		return e
	}, w.mirror = function(t, e, i) {
		var n, r, a = w.clone2D(t);
		if (e)
			for (var s = 0; s < a.length; s++)
				for (var o = 0; o < Math.floor(a[0].length / 2); o++) {
					var h = a[0].length - 1 - o;
					n = [a[s][h], a[s][o]], a[s][o] = n[0], a[s][h] = n[1]
				}
		if (i)
			for (var c = 0; c < a[0].length; c++)
				for (var u = 0; u < Math.floor(a.length / 2); u++) {
					var l = a.length - 1 - u;
					r = [a[l][c], a[u][c]], a[u][c] = r[0], a[l][c] = r[1]
				}
		return a
	}, w.loop = function(t, e, i) {
		return t[e < i ? e : i + (e - i) % (t.length - i)]
	}, w.clone2D = function(t) {
		for (var e = [], i = 0; i < t.length; i++) e.push(t[i].concat());
		return e
	}, w.natural = function(t) {
		for (var e = [], i = 0; i < t; i++) e.push(i);
		return e
	}, w.array = function(t, e) {
		for (var i = [], n = 0; n < t; n++) {
			var r = e;
			i.push(r)
		}
		return i
	}, w.array2D = function(t, e, i) {
		for (var n = [], r = 0; r < e; r++) {
			for (var a = [], s = 0; s < t; s++) {
				var o = i;
				a.push(o)
			}
			n.push(a)
		}
		return n
	};
	var _ = function(t) {
		function e(e, i, n) {
			var r = new s.Sprite(e.resources.images.board_2);
			r.anchor.set(.5), r.y = 150, t.call(this, e, r), this.commonData = i, this.nextButton = n, this.contents = new k(e, i), this.nextButton.y = 355, this.popup.addChild(this.contents), this.popup.addChild(this.nextButton)
		}
		return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.setCharaIds = function(t) {
			for (var i = w.natural(13), n = t.daily.lastDay, r = [], a = 0; a < t.daily.missions.length; a++) {
				var s = (n *= n, n = Math.floor(n / 1e3), (n %= 1e6) % i.length);
				r.push(i[s]), i.splice(s, 1)
			}
			e.charaIds = r
		}, e.prototype.setEnableOk = function(t) {
			this.nextButton.setEnable(t)
		}, e.prototype.earn = function() {
			for (var t = this.commonData.daily.missions, i = function(e) {
					for (var i = 0; i < t.length; i++)
						if (t[i].name === e) return i;
					return -1
				}, n = 0, r = e.queue, a = r.length, s = 0; s < a; s++) {
				var o = r[0],
					h = i(o.name);
				if (h >= 0) {
					var c = this.commonData.daily.missions[h],
						u = o.value;
					c.has + u >= c.need && (u = c.need - c.has, c.has < c.need && (n += c.reward)), c.has += u;
					var l = this.contents.findMission(c.name);
					null !== l && l.earn()
				}
				r.splice(0, 1)
			}
			return n
		}, e.getMissions = function(t) {
			return void 0 === t && (t = 3), [{
				name: e.Kind.STAGE_CLEAR,
				has: 0,
				need: 1,
				reward: 500
			}, {
				name: e.Kind.TOTAL_REWARD,
				has: 0,
				need: 3e3,
				reward: 500
			}, {
				name: e.Kind.COMBO,
				has: 0,
				need: 1,
				reward: 500
			}].slice(0, t)
		}, e.addQueue = function(t, i) {
			var n = e.queue.findIndex((function(e) {
				return e.name === t
			}));
			n >= 0 ? e.queue[n].value += i : e.queue.push({
				name: t,
				value: i
			})
		}, e.resetQueue = function() {
			e.queue.splice(0)
		}, e.getDateNumber = function() {
			var t = new Date;
			return 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate()
		}, e.reload = function(t, i) {
			e.queue.splice(0), i.daily.lastDay = e.getDateNumber(), i.daily.missions = e.getMissions();
			var n, r, a, s, o;
			n = "saveData", r = i, a = o = function() {
				t.vars.api.flushDataAsync().then().catch(o)
			}, void 0 === s && (s = function() {}), t.vars.api.setDataAsync(n, r, "always").then((function() {
				return a(s)
			})).catch((function() {
				return a(s)
			}))
		}, e.getRemainMinute = function() {
			var t = new Date;
			return 1440 - (60 * t.getHours() + t.getMinutes())
		}, e
	}(b);
	_.queue = [], _.Kind = {
		STAGE_CLEAR: "stageClear",
		TOTAL_REWARD: "totalScore",
		COMBO: "combo"
	};
	var x = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this, e, i, n), this.screen.visible = !1;
				var a = new s.Container,
					o = new s.Sprite(e.resources.spritesheets.ui["pic_reword.png"]),
					h = new s.Sprite(e.resources.spritesheets.character["rhino03.png"]),
					c = new s.Sprite(e.resources.spritesheets.ui["heading_2.png"]),
					u = new s.Sprite(e.resources.spritesheets.text["text_achievement.png"]),
					l = new P(e);
				o.anchor.set(.5), h.anchor.set(.5), c.anchor.set(.5), u.anchor.set(.5), l.scale.set(.8), a.y = -250, u.y = -5, l.position.set(0, 42.5), h.position.set(150, -120), o.position.set(-100, -150), this.nextButton.on("buttontap", (function() {
					r.emit("ok")
				})), a.addChild(o), a.addChild(h), c.addChild(u), c.addChild(l), a.addChild(c), this.main.addChild(a), this.main.visible = !0, this.setEnableOk(!1)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(_),
		S = function(t) {
			function e(e, i) {
				var n = this,
					r = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.ui["btn_ok.png"]);
				t.call(this, e, i, r), this.headerContainer = new s.Container, this.fukidashi = new s.Sprite(e.resources.spritesheets.ui["pic_reword.png"]), this.character = new s.Sprite(e.resources.spritesheets.character["mouth02.png"]), this.header = new s.Sprite(e.resources.spritesheets.ui["heading_2.png"]);
				var a = new s.Sprite(e.resources.spritesheets.text["text_rewards.png"]);
				this.timer = new P(e), this.fukidashi.anchor.set(.5), this.character.anchor.set(.5, 1), this.header.anchor.set(.5), a.anchor.set(.5), this.timer.scale.set(.8), this.headerContainer.y = -250, a.y = -10, this.timer.position.set(0, 42.5), this.character.position.set(100, -35), this.fukidashi.position.set(-100, -150);
				this.nextButton.on("buttontap", (function() {
					n.hide()
				})), this.task.on("timerTask", (function() {
					var r, a;
					n.timer.updateTime(), t.getDateNumber() !== i.daily.lastDay && (r = .15, a = n.contents, m.alpha(a, a, "alpha", 1, 0, r), m.vector(a, a, "move", new s.Point(0, 20), r).then((function() {
						a.task.clear(), a.destroy(), n.popup.removeChild(a), setTimeout((function() {
							n.contents = new k(e, i), m.alpha(n.contents, n.contents, "alpha", 0, 1, r), n.popup.addChild(n.contents)
						}), 100)
					})), t.reload(e, i))
				})), this.headerContainer.addChild(this.fukidashi), this.headerContainer.addChild(this.character), this.header.addChild(a), this.header.addChild(this.timer), this.headerContainer.addChild(this.header), this.main.addChild(this.headerContainer)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.show = function() {
				var t = this;
				return new Promise((function(e) {
					t._isShow = !0, t.main.visible = !0, t.main.interactiveChildren = !1, t.dontTap.interactive = !0, t.task.clear("fukidashiAlpha"), t.task.clear("fukidashiMove"), t.task.clear("fukidashiWait"), t.headerContainer.alpha = 1, t.headerContainer.visible = !0, t.header.alpha = 0, t.character.alpha = 0, t.fukidashi.alpha = 0, t.popup.alpha = 0;
					t.visibleBack(!0), t.showAnimation(t, t.popup, "popup").then((function() {
						t.main.interactiveChildren = !0, e()
					})), t.header.y = -25, t.showAnimation(t, t.header, "header"), m.moveTo(t, t.header, "headerMove", new s.Point(0, 0), .15, m.Ease.decel).then((function() {
						return t.character.y = -15, t.showAnimation(t, t.character, "character"), m.vector(t, t.character, "characterMove", new s.Point(0, -20), .15)
					})).then((function() {
						return t.startFukidashiAnimation(), m.timeout(t, .15)
					}))
				}))
			}, e.prototype.hide = function() {
				var t = this;
				return new Promise((function(e) {
					t.main.interactiveChildren = !1, t.visibleBack(!1), t.hideAnimation(t, t.headerContainer, "headerContainer"), t.hideAnimation(t, t.popup, "popup").then((function() {
						t.dontTap.interactive = !1, t.main.visible = !1, t.main.interactiveChildren = !0, t._isShow = !1, e()
					}))
				}))
			}, e.prototype.startFukidashiAnimation = function() {
				var t = this,
					e = function() {
						var r = .15;
						t.fukidashi.x = -85, m.alpha(t, t.fukidashi, "fukidashiAlpha", 0, 1, r), m.vector(t, t.fukidashi, "fukidashiMove", new s.Point(-25, 0), r, m.Ease.decel), m.timeout(t, .85, "fukidashiWait").then((function() {
							return m.alpha(t, t.fukidashi, "fukidashiAlpha", 1, 0, r)
						})).then((function() {
							i = !i, t.fukidashi.texture = n(), e()
						}))
					},
					i = !0,
					n = function() {
						return i ? t.$.resources.spritesheets.ui["pic_reword.png"] : t.$.resources.spritesheets.ui["pic_reword2.png"]
					};
				e()
			}, e
		}(_),
		k = function(t) {
			function e(e, i) {
				t.call(this), this.contents = [];
				for (var n = new s.Container, r = i.daily.missions, a = 0; a < r.length; a++) {
					var o = new I(e, r[a], _.charaIds[a]);
					o.y = 160 * (a - 1), n.addChild(o), this.contents.push(o)
				}
				this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.findMission = function(t) {
				var e = this.contents.findIndex((function(e) {
					return e.mission.name === t
				}));
				return e < 0 ? null : this.contents[e]
			}, e
		}(a.Container),
		I = function(t) {
			function e(e, i, n) {
				void 0 === n && (n = 0), t.call(this), this.$ = e, this.mission = i, this.cleared = !1;
				var r = "";
				switch (i.name) {
					case _.Kind.STAGE_CLEAR:
						r = "text_chara01.png";
						break;
					case _.Kind.TOTAL_REWARD:
						r = "text_chara03.png";
						break;
					case _.Kind.COMBO:
						r = "text_chara02.png"
				}
				var a = 10649444,
					o = new s.Sprite(e.resources.spritesheets.ui["icon_" + n + ".png"]);
				this.base = new s.Sprite(e.resources.spritesheets.ui["frame_reword_1.png"]), this.progressContainer = new s.Container;
				var h = new s.Sprite(e.resources.spritesheets.text[r]),
					c = new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					u = new v(e.resources.spritesheets.number, "num_", ".png", i.reward);
				this.clear = new s.Sprite(e.resources.spritesheets.ui["pic_clear.png"]), u.tint = a, u.margin = -2, h.anchor.set(0, .5), this.clear.anchor.set(.5), u.anchor.set(1, .5), c.anchor.set(1, .5), u.scale.set(1.1), c.scale.set(.8), this.progressContainer.scale.set(1.1), this.clear.visible = !1, i.has >= i.need && (this.clear.visible = !0, this.cleared = !0);
				var l = new v(e.resources.spritesheets.number, "num_", ".png", i.need),
					d = new s.Sprite(e.resources.spritesheets.number["num_slash.png"]);
				this.has = new v(e.resources.spritesheets.number, "num_", ".png", i.has), l.tint = a, d.tint = a, this.has.tint = a, l.margin = -2, this.has.margin = -2, l.anchor.set(0, .5), d.anchor.set(.5), this.has.anchor.set(1, .5), l.x = d.width / 2, this.has.x = -l.x, this.progressContainer.addChild(d), this.progressContainer.addChild(l), this.progressContainer.addChild(this.has), this.progressContainer.pivot.x = this.has.x - this.has.width, this.base.position.set(o.width + 15, 0), h.position.set(55, 40), this.progressContainer.position.set(h.x, 90), u.position.set(this.base.width - 15, this.progressContainer.y), c.position.set(u.x - u.width - 5, u.y), this.clear.position.set(this.base.width - 20, 20), this.addChild(o), this.base.addChild(h), this.base.addChild(this.progressContainer), this.base.addChild(c), this.base.addChild(u), this.addChild(this.base), this.pivot.set(this.width / 2, this.height / 2), this.base.addChild(this.clear)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.earn = function() {
				var t = this;
				if (!this.cleared) {
					var e = Math.min(this.mission.has, this.mission.need);
					this.has.padding = Math.floor(Math.log10(e)) + 1, this.progressContainer.pivot.x = this.has.x - this.has.width, this.has.padding = 0, m.timeout(this, 1).then((function() {
						return t.has.animateNumber(e, 1, 1)
					})).then((function() {
						if (t.has.number >= t.mission.need) return t.clear.visible = !0, m.scale(t, t.clear, "clearScale", 1.25, .9, .15, m.Ease.accel).then((function() {
							m.scale(t, t.clear, "clearScale", .9, 1, .1, m.Ease.decel)
						}))
					}))
				}
			}, e
		}(a.Container),
		P = function(t) {
			function e(e) {
				t.call(this);
				var i = 6240282;
				this.timerContainer = new s.Container;
				var n = new s.Sprite(e.resources.spritesheets.text["text_Update after.png"]);
				this.hour = new v(e.resources.spritesheets.number, "num_", ".png", 0), this.colon = new s.Sprite(e.resources.spritesheets.number["num_colon.png"]), this.minute = new v(e.resources.spritesheets.number, "num_", ".png", 0), this.hour.tint = i, this.colon.tint = i, this.minute.tint = i, this.hour.margin = 2, this.minute.margin = 2, this.hour.padding = 2, this.minute.padding = 2, n.anchor.set(0, .5), this.hour.anchor.set(1, .5), this.colon.anchor.set(.5), this.minute.anchor.set(0, .5), n.scale.set(1.25), this.minute.x = 12.5, this.hour.x = -this.minute.x, this.timerContainer.addChild(this.colon), this.timerContainer.addChild(this.hour), this.timerContainer.addChild(this.minute), n.position.set(0, 1.5), this.timerContainer.x = n.width + 20 + this.timerContainer.width / 2, this.addChild(n), this.addChild(this.timerContainer), this.updateTime(), this.pivot.x = (this.timerContainer.x + this.timerContainer.width / 2) / 2
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.updateTime = function() {
				var t = _.getRemainMinute(),
					e = t % 60,
					i = Math.floor(t / 60);
				this.hour.number = i, this.minute.number = e
			}, e
		}(a.Container),
		M = function(t) {
			function e(e, i) {
				void 0 === i && (i = .5), t.call(this), this.contents = e, this.anchor = i, this.main = new s.Container;
				for (var n = 0, r = 0; r < e.length; r++) {
					var a = e[r];
					a.scale || (a.scale = 1), a.margin || (a.margin = 0), a.offsetY || (a.offsetY = 0);
					var o = a.body;
					o.anchor.set(0, .5), o.scale.set(a.scale), o.x = n, o.y = a.offsetY, n += o.width + a.margin, this.main.addChild(o)
				}
				this.main.pivot.x = this.main.width * this.anchor, this.addChild(this.main)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function() {
				for (var t = 0, e = 0; e < this.contents.length; e++) {
					var i = this.contents[e];
					i.margin || (i.margin = 0);
					var n = i.body;
					n.x = t, t += n.width + i.margin
				}
				this.main.pivot.x = this.main.width * this.anchor
			}, e
		}(a.Container),
		A = function(t) {
			function e(e) {
				var i, n = this;
				t.call(this);
				var r = e.resources.images.ef_lightup2,
					a = new PIXI.Sprite(r),
					s = new PIXI.Sprite(r),
					o = new PIXI.Sprite(r),
					h = [a, s, o];
				h.forEach((function(t) {
					t.anchor.set(.5)
				})), a.rotation = Math.PI / 4, s.rotation = Math.PI;
				var c = 1 / 30,
					u = function() {
						m.alpha(n, a, "goko1", .36, .4, .3, m.Ease.quadratic(-.7)).then((function() {
							return m.alpha(n, a, "goko1", .4, .2, 28 * c, m.Ease.quadratic(-.8))
						})).then((function() {
							return m.alpha(n, a, "goko1", .2, .36, 11 * c, m.Ease.quadratic(-.3))
						})), m.alpha(n, s, "goko2", .24, .2, 11 * c, m.Ease.quadratic(-.7)).then((function() {
							return m.alpha(n, s, "goko2", .2, .4, 20 * c, m.Ease.quadratic(-.8))
						})).then((function() {
							return m.alpha(n, s, "goko2", .4, .24, .3, m.Ease.quadratic(-.3))
						})), m.alpha(n, o, "goko3", .2, .4, 20 * c, m.Ease.quadratic(-.8)).then((function() {
							return m.alpha(n, o, "goko3", .4, .2, 20 * c, m.Ease.quadratic(-.8))
						})).then(u)
					};
				u(), (i = this).addChild.apply(i, h)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		E = function() {};
	E.int = function(t, e) {
		return void 0 === e ? Math.floor((t + 1) * Math.random()) : Math.floor((e - t + 1) * Math.random() + t)
	}, E.float = function(t, e) {
		return void 0 === t && (t = 1), void 0 === e ? t * Math.random() : (e - t) * Math.random() + t
	}, E.array = function(t) {
		return t[Math.floor(t.length * Math.random())]
	}, E.sign = function() {
		return 2 * Math.floor(2 * Math.random()) - 1
	}, E.bool = function() {
		return Boolean(Math.floor(2 * Math.random()))
	}, E.weight = function(t) {
		var e = 0;
		t.forEach((function(t) {
			e += t
		}));
		for (var i = E.float(e), n = 0, r = 0; r < t.length && !(i <= (n += t[r])); r++);
		return r
	}, E.plusFloat = function(t) {
		t = Math.floor(Math.max(1, t));
		for (var e = Math.random(), i = 1; i < t; i++) e += Math.random();
		return e / t
	}, E.test = function(t, e, i) {
		void 0 === e && (e = 0), void 0 === i && (i = 1e5);
		for (var n, r = {}, a = 0; a < i; a++) {
			var s = t(),
				o = (n = s, e <= 0 ? (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toFixed(-e) : (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toString());
			o in r ? r[o]++ : r[o] = 1
		}
		var h = {};
		for (var c in r) h[c] = (r[c] / i * 100).toFixed(2) + "%"
	};
	var T = function() {};
	T.inv = function(t) {
		return new PIXI.Point(-t.x, -t.y)
	}, T.mlt = function(t, e) {
		return new PIXI.Point(e * t.x, e * t.y)
	}, T.add = function(t, e) {
		return new PIXI.Point(t.x + e.x, t.y + e.y)
	}, T.dif = function(t, e) {
		return T.add(t, T.inv(e))
	}, T.dot = function(t, e) {
		return t.x * e.x + t.y * e.y
	}, T.lenSqr = function(t) {
		return t.x * t.x + t.y * t.y
	}, T.len = function(t) {
		return Math.sqrt(T.lenSqr(t))
	}, T.norm = function(t) {
		return T.mlt(t.clone(), 1 / T.len(t))
	}, T.rotate = function(t, e) {
		return new PIXI.Point(t.x * Math.cos(e) - t.y * Math.sin(e), t.x * Math.sin(e) + t.y * Math.cos(e))
	};
	var O = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = "b"), t.call(this);
				var r, a = new PIXI.Container;
				Math.random() < .6 ? (r = new PIXI.Sprite(e.resources.spritesheets.ui["kr_" + i + ".png"])).scale.set(E.float(.5, 1.2)) : ((r = new PIXI.Sprite(e.resources.spritesheets.ui["br_" + i + ".png"])).scale.set(E.float(.1, .3)), r.alpha = .6), r.anchor.set(.5), r.blendMode = PIXI.BLEND_MODES.ADD, a.addChild(r), this.addChild(a);
				var s = E.float(.35, .6),
					o = .5 * Math.pow(Math.random(), 2) + .5;
				m.alpha(this, a, "mainAlpha", 0, o, .2 * s), m.scale(this, a, "mainScale", .5, 1, .2 * s).then((function() {
					return m.timeout(n, .4 * s)
				})).then((function() {
					return m.scale(n, a, "mainScale", 1, 0, .4 * s, m.Ease.accel)
				}));
				var h = E.float(2 * Math.PI),
					c = E.float(10, 70),
					u = new PIXI.Point(Math.cos(h) * c, Math.sin(h) * c);
				m.moveTo(this, a, "mainMove", u, s, m.Ease.quadratic(-.5)).then((function() {
					n.task.clear(), n.destroy()
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		B = function(t) {
			function e(i, n, r) {
				var s = this;
				t.call(this), this.$ = i, this.spritesheets = n, this.villageData = r, this.buildings = [], this.buildIndex = -1, this.cameraViewTable = [], this.forestLayer = [], this.forestTables = [], this.center = new PIXI.Point(i.vars.additional.width / 2, i.vars.additional.height / 2), this.buildingContainer = new PIXI.Container, this.buildingContainer.sortableChildren = !0;
				var o = new PIXI.Graphics;
				o.beginFill(255, .5), o.drawRect(0, 0, i.vars.additional.width, i.vars.additional.height), o.endFill(), o.interactive = !0, this.camera = new a.Container, this.camera.position = this.center.clone(), this.camera.pivot = this.center.clone();
				var c = new PIXI.Sprite(i.resources.images.header_04);
				this.cameraViewTable = [{
					x: 0,
					y: 140,
					s: 1.9
				}, {
					x: -50,
					y: 160,
					s: 1.9
				}, {
					x: 0,
					y: 120,
					s: 1.4
				}, {
					x: 0,
					y: 100,
					s: 1.4
				}, {
					x: 20,
					y: 40,
					s: 1.3
				}, {
					x: 40,
					y: 60,
					s: 1.3
				}, {
					x: 40,
					y: 50,
					s: 1.3
				}, {
					x: 40,
					y: 100,
					s: 1.3
				}, {
					x: 0,
					y: 0,
					s: 1.1
				}, {
					x: 0,
					y: 0,
					s: 1.1
				}, {
					x: 0,
					y: 0,
					s: 1
				}];
				var u = function(t, e, i) {
					return {
						t: t,
						x: e,
						y: i
					}
				};
				this.forestTables = [
					[u(5, 228.85, 412.5), u(3, 309.35, 497.6), u(5, 57.9, 610.65), u(5, 18.85, 631.45), u(2, 73.9, 632.55), u(5, 127.5, 489.5), u(4, 7.9, 175.9), u(5, 247.4, 78.25), u(5, 279.4, 87.9), u(5, 124.1, 96.8), u(3, 86.65, 116.75), u(2, 356.05, 153.9), u(5, 225.55, 3.6), u(5, 196.85, 10.6), u(5, 51.85, 1.75), u(5, 34.85, 78.25), u(5, 98.85, 61.65), u(2, -4.7, 89.25), u(2, 59.3, 61.8), u(3, 42.5, 28.4), u(2, -1.65, 54.15), u(3, 10.5, 2.15), u(2, 105.9, 38.75), u(3, 95.9, 5.15), u(3, 151.65, 15.6), u(3, 332.55, 116.75), u(2, 321.8, 77.4), u(3, 378.05, 87.75), u(3, 336.4, 30.4), u(2, 369.75, 54.15), u(3, 281.15, 52.65), u(2, 209.55, 51.15), u(3, 176, 75.9), u(5, 18.85, 153.9), u(5, 16, 201.15), u(4, 185.9, 317.05), u(4, 135.15, 250.05), u(2, 341.85, 241.55), u(2, 35.85, 226.05), u(3, 277.35, 246.4), u(3, 367.7, 321.05), u(5, 164.85, 489.5), u(5, 147.85, 466.2), u(5, 163.85, 453.3), u(2, 350.05, 466.8), u(5, 283.2, 540.4), u(5, 351.2, 520.2), u(5, 121.9, 622.05), u(5, 161.55, 601.05), u(5, 131.85, 592.65), u(3, 83.35, 583.55), u(3, 24.4, 558.7), u(2, 82.85, 546.6), u(2, 140.1, 527.2), u(5, 253.05, 528.65), u(5, 264.65, 500.45), u(5, 302.05, 463), u(5, 257.55, 473.95), u(2, 333.05, 429.2), u(2, 212.85, 503.4), u(2, 152.15, 565.65), u(2, 17.85, 607.7), u(2, 24.9, 518.15), u(3, 79, 457.7), u(2, 76.1, 509.7), u(4, 228.85, 311.05), u(5, 7.9, 363.2), u(2, 10, 470.65), u(2, 12.1, 416.3), u(4, 19.85, 331.05), u(4, 48, 313.6), u(4, 232.15, 243.05), u(3, 327.5, 357.55), u(3, -10.35, 307.05)],
					[u(5, 153.9, 418.7), u(3, 105.4, 424.5)],
					[u(5, 257.55, 350.5), u(3, 299.7, 321.05), u(5, 257.55, 319.05)],
					[u(4, 95.5, 334.7)],
					[u(3, 281.15, 392), u(2, 350.05, 393.5)],
					[u(2, 359.4, 282.05), u(2, 309.85, 282.05), u(3, 245.35, 285.55)],
					[u(1, 155.8, 284.05), u(5, 208.4, 268.55)],
					[u(5, 188.1, 426.8), u(2, 212.85, 459.2), u(3, 269.55, 435.45)],
					[u(5, 27.1, 383), u(4, 46.35, 354.5), u(3, 75.6, 384.95)],
					[u(3, 83.35, 246.4), u(2, 88.15, 292.05), u(3, 18.35, 260.65)],
					[u(2, 216.15, 101.65), u(2, 268.05, 126.25)],
					[u(1, 289.15, 167.4), u(5, 287.9, 214.55), u(2, 333.05, 200.25)],
					[u(4, 47.4, 161.25), u(5, 70.15, 147.4), u(4, 208.4, 145.4), u(2, 199.4, 194.05), u(4, 86.95, 161.25), u(2, 155.8, 118.25), u(5, 38.15, 136.75), u(5, 46.35, 189.75), u(5, 66.85, 201.15), u(2, 111.5, 211.65), u(4, 147.85, 170.05), u(5, 115.85, 136.75)]
				];
				for (var l = 0; l < this.forestTables.length; l++) this.forestLayer.push([]);
				for (var d = 0; d < this.forestTables.length; d++)
					for (var p = this.forestTables[d], f = 0; f < p.length; f++) {
						var g = p[f],
							v = new PIXI.Sprite(n["village_forest_" + g.t + ".png"]);
						v.anchor.set(.5), v.position.set(2 * g.x, 2 * g.y), v.zIndex = v.y, this.buildingContainer.addChild(v), d > 0 && this.forestLayer[d - 1].push(v)
					}
				for (var C = [{
						x: 360,
						y: 763
					}, {
						x: 240,
						y: 870
					}, {
						x: 506,
						y: 695
					}, {
						x: 226,
						y: 660
					}, {
						x: 587,
						y: 792
					}, {
						x: 600,
						y: 590
					}, {
						x: 397,
						y: 555
					}, {
						x: 459,
						y: 897
					}, {
						x: 128,
						y: 760
					}, {
						x: 137,
						y: 529
					}, {
						x: 480,
						y: 243
					}, {
						x: 587,
						y: 417
					}, {
						x: 260,
						y: 341
					}], b = i.resources.jsons.village.buildings, y = [], _ = 0; _ < C.length; _++) y.push({
					name: "b" + _,
					path: "village_building_" + (_ + 1) + ".png",
					position: C[_],
					data: b[_]
				});
				this.setCameraView(this.cameraViewTable[0]);
				var x = 0,
					S = ["bird", "cat", "cow", "deer", "dog", "elephant", "fox", "giraffe", "mouth", "pig", "rabbit", "rhino", "squirrel"];
				S = w.shuffle(S);
				for (var k = e.getNowSecond(), I = function(t) {
						var e = y[t],
							a = new X(i, n, r, e, k);
						a.position.set(e.position.x, e.position.y), a.visible = 0 === t, a.zIndex = a.y, a.isBuilt && Math.random() < .5 && (a.character = S[x++]);
						var o = function(t) {
							void 0 === t && (t = !1), s.buildings.forEach((function(e) {
								return e.notifyChangedCoin(t)
							}))
						};
						a.on("gainCoin", (function(t) {
							s.addCoin(t), o()
						})), a.on("built", (function() {
							s.villageData.coin -= a.info.data.needCoin, s.emit("changeCoin"), o(!0), s.emit("built"), a.buildAnimation().then((function() {
								return m.timeout(s, .5)
							})).then((function() {
								return a.emphasis(!0)
							})).then((function() {
								return s.emit("popup", {
									building: a,
									first: !0
								})
							})), s.buildIndex >= s.buildings.length - 1 || (s.buildIndex++, s.buildBuilding(s.buildIndex), s.setCameraViewAuto(.5))
						})), a.on("flushData", (function() {
							s.emit("flushData")
						})), a.on("structure", (function() {
							s.emit("popup", {
								building: a,
								first: !1
							})
						})), a.on("construction", (function() {
							s.emit("construction", a)
						})), s.buildingContainer.addChild(a), s.buildings.push(a)
					}, P = 0; P < y.length; P++) I(P);
				for (var M = 0; M < y.length; M++) {
					var A = y[M];
					if (void 0 === r.buildings[A.name]) break;
					this.buildIndex = M
				}
				this.buildIndex >= 0 && (this.buildBuilding(this.buildIndex), this.setCameraViewAuto());
				var E = new PIXI.Container,
					T = !1;
				o.on("pointerdown", (function() {
					T = !0
				}));
				var B = function() {
					T = !1
				};
				o.on("pointerup", B), o.on("pointerupoutside", B), o.on("pointercancel", B), o.on("pointermove", (function(t) {
					if (T) {
						var e = t.data.getLocalPosition(o),
							n = new O(i);
						n.position = e.clone(), E.addChild(n), e.x *= .5, e.y *= .5, s.buildings.forEach((function(t) {
							if (t.isBuilt && t.getButton.visible) {
								var n = t.getButton.getBounds();
								e.x >= n.x && e.y >= n.y && e.x <= n.x + n.width && e.y <= n.y + n.height && (h.play(i, "button"), t.gainCoin())
							}
						}))
					}
				})), this.addChild(o), c.addChild(this.buildingContainer), this.camera.addChild(c), this.addChild(this.camera), this.addChild(E), this.buildingContainer.sortChildren()
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.getNowSecond = function() {
				return Math.floor(.001 * (new Date).getTime())
			}, e.prototype.setCameraView = function(t, e) {
				var i = this;
				void 0 === e && (e = 0);
				var n = new PIXI.Point(t.x + this.center.x, t.y + this.center.y);
				if (e > 0) {
					var r = this.camera.pivot.clone(),
						a = this.camera.scale.x;
					return m.tween(this.camera, "cameraPivot", 0, 1, e, (function(e) {
						i.camera.pivot.x = n.x * e + r.x * (1 - e), i.camera.pivot.y = n.y * e + r.y * (1 - e), i.camera.scale.set(t.s * e + a * (1 - e))
					}), m.Ease.decel)
				}
				return this.camera.pivot = n, this.camera.scale.set(t.s), Promise.resolve()
			}, e.prototype.setCameraViewAuto = function(t) {
				void 0 === t && (t = 0);
				var e = Math.min(this.buildIndex + 1, this.cameraViewTable.length - 1),
					i = this.cameraViewTable[e];
				return this.setCameraView(i, t)
			}, e.prototype.buildBuilding = function(t) {
				for (var e = 0; e < t + 1 && e < this.forestLayer.length; e++) this.forestLayer[e].forEach((function(t) {
					return t.visible = !1
				}));
				for (var i = 0; i <= t + 1 && i < this.buildings.length; i++) this.buildings[i].visible = !0
			}, e.prototype.addCoin = function(t) {
				this.villageData.coin += t.amount, this.villageData.coin > 1e7 && (this.villageData.coin = 9999999), this.emit("changeCoin", t.position)
			}, e.prototype.set5xStorage = function() {
				this.buildings.forEach((function(t) {
					t.isBuilt && t.set5xStorage()
				})), this.emit("flushData")
			}, e
		}(a.Container),
		X = function(t) {
			function e(e, i, n, r, a) {
				var s = this;
				t.call(this), this.$ = e, this.spritesheets = i, this.villageData = n, this._info = r, this.timer = 0, this.chargeSecond = 600, this._coin = 0, this._isBuilt = !1, this._emphasised = !1, this._character = null, this._isBuilt = void 0 !== n.buildings[r.name], this.mainContainer = new PIXI.Container, this.construction = new p(e, i["village_building_construction.png"]), this.structure = new p(e, i[r.path]), this.progressButton = new D(e, n.coin, r.data.needCoin, 0), this.getButton = new p(e, e.resources.spritesheets.ui["btn_get.png"]);
				var o = new PIXI.Sprite(e.resources.spritesheets.ui["pic_coin.png"]);
				this.goko = new A(e), this.storageGauge = new j(0, 1), this.getButton.colliderSize(80, 80), o.anchor.set(.5), o.scale.set(.75), this.goko.scale.set(this.structure.sprite.texture.width / this.goko.width * 1.75), this.structure.y = -this.structure.sprite.height / 2, "b12" === r.name ? this.structure.y += 130 : this.structure.y += 44, this.goko.y = this.structure.y, this.getButton.y = -this.construction.height / 2 - 50, this.progressButton.y = -this.construction.height / 2 - 30, o.y = -7.5, this.storageGauge.y = o.y, this.structure.visible = !1, this.getButton.visible = !1, this.goko.visible = !1, this.structure.setCollider((function(t) {
					var e = s.structure.sprite.width,
						i = s.structure.sprite.height,
						n = 88 / 203;
					t.moveTo(0, -i / 2), t.lineTo(e / 2, i / 2 - e / 2 * n), t.lineTo(e / 3, i / 2 - e / 8 * n), t.lineTo(0, i / 2), t.lineTo(-e / 3, i / 2 - e / 8 * n), t.lineTo(-e / 2, i / 2 - e / 2 * n)
				})), m.scale(this, this.getButton, "getButtonScale", 1, 1.1, .3, m.Ease.decel, 0), this.getButton.on("buttontap", (function() {
					s.gainCoin()
				})), this.structure.on("buttontap", (function() {
					s.emit("structure")
				}));
				this.construction.on("buttontap", (function() {
					s.emit("construction")
				})), this.progressButton.on("buttontap", (function() {
					s.build(B.getNowSecond()), s.emit("built"), s.flushData()
				})), this.mainContainer.addChild(this.goko), this.mainContainer.addChild(this.construction), this.mainContainer.addChild(this.structure), this.mainContainer.addChild(this.progressButton), this.getButton.addOnSprite(this.storageGauge), this.getButton.addOnSprite(o), this.mainContainer.addChild(this.getButton), this.addChild(this.mainContainer), this._isBuilt && this.build(a)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				character: {
					configurable: !0
				},
				enableGetButton: {
					configurable: !0
				},
				maxMultiply: {
					configurable: !0
				},
				isBuilt: {
					configurable: !0
				},
				canBuild: {
					configurable: !0
				},
				maxCoin: {
					configurable: !0
				},
				coin: {
					configurable: !0
				},
				info: {
					configurable: !0
				}
			};
			return e.prototype.flushData = function() {
				this.emit("flushData")
			}, i.character.set = function(t) {
				null === t ? (null !== this._character && this._character.destroy(), this._character = null) : this._character = this.addCharacter(t)
			}, e.prototype.gainCoin = function() {
				var t = {
					amount: this._coin,
					position: this.toGlobal(this.getButton.position)
				};
				this.emit("gainCoin", t);
				var e = this.villageData.buildings[this.info.name];
				e.clicked = B.getNowSecond(), this.timer = 0, e.maxMultiply > 1 && (e.maxMultiply = 1), this.getButton.visible = !1, this._coin = 0, this.storageGauge.max = this.info.data.maxCoin, this.storageGauge.setValue(this.coin), this.flushData()
			}, e.prototype.addCharacter = function(t) {
				var e = this,
					i = new N(this.$, t);
				i.scale.set(.75), i.righty = E.bool();
				var n = [new PIXI.Point(-70, -30), new PIXI.Point(5, -10), new PIXI.Point(80, -40)],
					r = n.map((function(t) {
						return new PIXI.Point(t.x, t.y + e.structure.sprite.height / 2)
					})),
					a = E.int(n.length - 1);
				i.position = r[a].clone();
				var s = function() {
					return m.timeout(e, E.float(2, 20)).then((function() {
						i.walk();
						var t = w.natural(r.length);
						t.splice(a, 1);
						var e = E.array(t);
						a = e;
						var n = r[e];
						i.righty = n.x - i.x >= 0;
						var s = T.len(T.dif(n, i.position));
						return m.moveTo(i, i, "move", n, .02 * s)
					})).then((function() {
						i.righty = E.bool(), i.idle(), s()
					}))
				};
				return s(), this.addChild(i), i
			}, e.prototype.emphasis = function(t) {
				var e = this;
				if (this._emphasised !== t) {
					if (this._emphasised = t, t) {
						this.goko.visible = !0;
						return m.alpha(this, this.goko, "gokoAlpha", 0, 1, .4, m.Ease.quadratic(-.5)), m.scale(this, this.mainContainer, "mainScale", 1, 1.15, .4, m.Ease.quadratic(-.5))
					}
					return m.alpha(this, this.goko, "gokoAlpha", 1, 0, .1), m.scale(this, this.mainContainer, "mainScale", 1.15, 1, .1).then((function() {
						e.goko.visible = !1
					}))
				}
			}, e.prototype.build = function(t) {
				var e = this;
				this._isBuilt = !0, this.construction.visible = !1, this.structure.visible = !0, this.progressButton.visible = !1;
				var i = this._info.data;
				void 0 === this.villageData.buildings[this._info.name] && (this.villageData.buildings[this._info.name] = {
					clicked: t,
					maxMultiply: 1
				});
				var n = this.villageData.buildings[this._info.name],
					r = t - n.clicked,
					a = Math.floor(r / this.chargeSecond);
				n.maxMultiply > 1 && (this.maxMultiply = n.maxMultiply);
				var s = this.maxCoin;
				this.timer = 0, a * i.onceTime < s ? (this._coin = a * i.onceTime, this.timer = r % this.chargeSecond) : this._coin = s, this.enableGetButton = this._coin > 0, this.storageGauge.max = s, this.storageGauge.setValue(this.coin), this.task.on("timer", (function(t) {
					var n = e.maxCoin;
					if (!(e._coin >= n)) {
						var r = t.delta / 60;
						e.timer += r, e.timer >= e.chargeSecond && (e.timer -= e.chargeSecond, e._coin += i.onceTime, e._coin >= n && (e._coin = n, e.timer = 0), e.storageGauge.setValue(e.coin), e.enableGetButton = !0)
					}
				}))
			}, e.prototype.buildAnimation = function() {
				var t = this;
				return this.construction.visible = !0, this.construction.interactiveChildren = !1, this.structure.visible = !1, m.scale(this, this.construction, "constructionScale", 1, 0, .25, m.Ease.quadratic(2)).then((function() {
					t.construction.visible = !1, t.structure.visible = !0;
					return m.scaleX(t, t.structure, "structureScaleX", 0, 1, .5, m.Ease.quadratic(-1)), m.scaleY(t, t.structure, "structureScaleY", 0, 1, .5, m.Ease.quadratic(-2))
				}))
			}, i.enableGetButton.set = function(t) {
				this.getButton.visible = t
			}, e.prototype.set5xStorage = function() {
				(this.maxMultiply = 5, this._coin >= this.info.data.maxCoin) && (this.villageData.buildings[this._info.name].clicked = B.getNowSecond() - this.maxCoinNeedHour(this._info.data) * this.chargeSecond);
				this.storageGauge.max = this.maxCoin
			}, i.maxMultiply.get = function() {
				return this.villageData.buildings[this._info.name].maxMultiply
			}, i.maxMultiply.set = function(t) {
				this.villageData.buildings[this._info.name].maxMultiply = t
			}, e.prototype.maxCoinNeedHour = function(t) {
				return Math.ceil(t.maxCoin / t.onceTime)
			}, e.prototype.notifyChangedCoin = function(t) {
				this.progressButton.setValue(this.villageData.coin, !t)
			}, i.isBuilt.get = function() {
				return this._isBuilt
			}, i.canBuild.get = function() {
				return this.villageData.coin >= this._info.data.needCoin
			}, i.maxCoin.get = function() {
				return this.info.data.maxCoin * this.villageData.buildings[this._info.name].maxMultiply
			}, i.coin.get = function() {
				return this._coin
			}, i.info.get = function() {
				return this._info
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		j = function(t) {
			function e(e, i) {
				void 0 === e && (e = 0), void 0 === i && (i = 100), t.call(this), this._value = e, this._max = i, this.gaugeCircle = new PIXI.Graphics, this.gaugeCircle.lineStyle(5, 16777215), this.gaugeCircle.drawCircle(0, 0, 17.5), this.mainMask = new PIXI.Graphics, this.mainMask.rotation = Math.PI / 2 + Math.PI / 24, this.gaugeCircle.mask = this.mainMask, this.addChild(this.gaugeCircle), this.addChild(this.mainMask), this.setValue(this._value)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				max: {
					configurable: !0
				},
				rate: {
					configurable: !0
				}
			};
			return e.prototype.updateGauge = function() {
				this.mainMask.clear(), this.mainMask.beginFill(16711680, .25), this.mainMask.arc(0, 0, 25, 0, (2 * Math.PI - Math.PI / 12) * this.rate), this.mainMask.lineTo(0, 0), this.mainMask.endFill(), this.gaugeCircle.tint = this._value >= this._max ? 15899711 : 5619181
			}, i.max.get = function() {
				return this._max
			}, i.max.set = function(t) {
				this._max = t, this.updateGauge()
			}, e.prototype.getValue = function() {
				return this._value
			}, e.prototype.setValue = function(t) {
				this._value = t, this.updateGauge()
			}, i.rate.get = function() {
				var t = this._value / this._max;
				return t > 1 ? 1 : t < 0 ? 0 : t
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		D = function(t) {
			function e(e, i, n, r) {
				var a = this;
				void 0 === n && (n = 100), void 0 === r && (r = 0), t.call(this), this.$ = e, this.buildStart = r, this.button = new p(e, e.resources.spritesheets.ui["btn_advancegage.png"]), this.gauge = new j, this.gauge.position.set(this.button.sprite.width / 2, this.button.sprite.height / 2 - 10.5), this._max = n - r, this._value = i, this.storage = new v(e.resources.spritesheets.number, "num_g", ".png"), this.storage.margin = -5, this.storageContainer = new M([{
					body: this.storage,
					margin: 2
				}, {
					body: new PIXI.Sprite(e.resources.spritesheets.number["num_gpercent.png"]),
					scale: 1.05
				}]), this.storageContainer.scale.set(.375), this.button.interactiveChildren = !1, this.storage.on("clocking", (function(t) {
					a.gauge.setValue(t), a.updateGauge()
				})), this.button.on("buttontap", (function() {
					a.emit("buttontap")
				})), this.gauge.addChild(this.storageContainer), this.button.sprite.addChild(this.gauge), this.addChild(this.button), this.setValue(this._value)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				rate: {
					configurable: !0
				}
			};
			return e.prototype.updateGauge = function() {
				this.storageContainer.update(), this.gauge.updateGauge()
			}, e.prototype.changeGauge = function(t, e) {
				void 0 === e && (e = !1), e ? this.storage.animateNumber(t, 1, .5) : (this.gauge.setValue(t), this.storage.number = t, this.updateGauge())
			}, e.prototype.getValue = function() {
				return this._value
			}, e.prototype.setValue = function(t, e) {
				void 0 === e && (e = !1), this._value = t - this.buildStart;
				var i = Math.floor(100 * this.rate);
				this.changeGauge(i, e), this.button.interactiveChildren = this.rate >= 1, this.rate >= 1 && m.scale(this, this.button, "buttonScale", 1, 1.1, .25, m.Ease.decel, 0)
			}, i.rate.get = function() {
				var t = this._value / this._max;
				return t > 1 ? 1 : t < 0 ? 0 : t
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		N = function(t) {
			function e(e, i) {
				var n = this;
				t.call(this), this.$ = e, this.textureName = i, this._righty = !1, this._idling = !0, this.container = new a.Container, this.sprite = new PIXI.Sprite(this.getTexture("01"));
				var r = new PIXI.Point(70, 90),
					s = new PIXI.Graphics;
				s.beginFill(255, .5), s.drawRect(-r.x / 2, -r.y, r.x, r.y), s.endFill(), s.alpha = 0, this.sprite.anchor.set(.5, 1), s.interactive = !0, s.on("pointertap", (function() {
					n._idling && n.jump()
				})), this.container.addChild(this.sprite), this.addChild(this.container), this.addChild(s), this.idle()
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				righty: {
					configurable: !0
				}
			};
			return e.prototype.getTexture = function(t) {
				return this.$.resources.spritesheets.village_character["" + this.textureName + t + ".png"]
			}, e.prototype.idle = function() {
				this._idling = !0, this.container.task.clear(), this.sprite.texture = this.getTexture("01"), m.scaleY(this.container, this.sprite, "spriteScale", 1, .975, .65, m.Ease.cubic, 0)
			}, e.prototype.walk = function() {
				var t = this;
				this._idling = !1, this.container.task.clear();
				var e = [this.getTexture("_walk1"), this.getTexture("_walk2")];
				this.sprite.texture = e[0];
				var i = e.length,
					n = 0;
				this.container.task.on("walk", (function(r) {
					var a = r.delta / 60,
						s = Math.floor(n);
					t.sprite.texture = e[s], (n += a / .33) >= i && (n -= i)
				}))
			}, e.prototype.jump = function() {
				var t = this;
				return this._idling = !1, this.container.task.clear(), this.sprite.texture = this.getTexture("03"), m.scaleY(this.container, this.sprite, "spriteScale", 1, .9, .02, m.Ease.decel).then((function() {
					return m.scaleY(t.container, t.sprite, "spriteScale", .9, 1, .05)
				})).then((function() {
					return m.scaleY(t.container, t.sprite, "spriteScale", 1, 1.025, .02, m.Ease.decel, 2), m.move(t.container, t.sprite, "spriteMove", new PIXI.Point, new PIXI.Point(0, -10), .08, m.Ease.decel, 2)
				})).then((function() {
					return m.scaleY(t.container, t.sprite, "spriteScale", 1, .975, .05, m.Ease.decel, 2)
				})).then((function() {
					return m.timeout(t.container, .5)
				})).then((function() {
					t.idle()
				}))
			}, e.prototype.emphasis = function() {
				var t = this;
				this._idling = !1, this.container.task.clear(), this.sprite.texture = this.getTexture("04");
				return m.timeout(this.container, .1).then((function() {
					return m.scale(t.container, t.sprite, "spriteScale", 1, 1.15, .15, m.Ease.quadratic(-3))
				})).then((function() {
					return m.timeout(t.container, .6)
				})).then((function() {
					return m.scale(t.container, t.sprite, "spriteScale", 1.15, 1, .15)
				})).then((function() {
					t.idle()
				}))
			}, i.righty.get = function() {
				return this._righty
			}, i.righty.set = function(t) {
				this._righty = t, this.sprite.scale.x = t ? -1 : 1
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		L = function(t) {
			function e(e, i) {
				t.call(this), this.$ = e, this.villageData = i, this.coin = new G(e, i), this.coin.position.set(235, 75), this.addChild(this.coin)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				coinIconPosition: {
					configurable: !0
				}
			};
			return i.coinIconPosition.get = function() {
				var t = this.coin.position.clone();
				return t.x += this.coin.iconX, t
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		G = function(t) {
			function e(e, i) {
				t.call(this), this.$ = e, this.villageData = i, this.header = new PIXI.Sprite(e.resources.spritesheets.ui["score_back.png"]), this.icon = new PIXI.Sprite(e.resources.spritesheets.ui["pic_coin.png"]), this.number = new v(e.resources.spritesheets.number, "num_", ".png", i.coin), this.header.anchor.set(.5), this.icon.anchor.set(.5), this.number.anchor.set(.5), this.icon.x = -this.header.width / 2 + this.icon.width / 2 + 10, this.number.x = 15, this.header.addChild(this.icon), this.header.addChild(this.number), this.addChild(this.header)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				iconX: {
					configurable: !0
				}
			};
			return e.prototype.updateCoin = function(t) {
				var e = this;
				return void 0 === t && (t = .6), this.villageData.coin > this.number.number && (h.stop(this.$, "coinadd"), h.play(this.$, "coinadd")), setTimeout((function() {
					return h.stop(e.$, "coinadd")
				}), 1e3 * t), this.number.animateNumber(this.villageData.coin, 1, t)
			}, i.iconX.get = function() {
				return this.icon.x
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		R = function(t) {
			function e(e) {
				t.call(this), this.$ = e, this.main = new PIXI.Container, this.addChild(this.main)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.generate = function(t) {
				var e = this;
				this.main.removeChildren();
				for (var i = 0, n = 0; n < t.length - 1; n++) {
					var r = new PIXI.Sprite(this.$.resources.spritesheets.number["calculation_n" + t[n] + ".png"]),
						a = new PIXI.Sprite(this.$.resources.spritesheets.number["calculation_plus.png"]);
					r.anchor.set(0, .5), a.anchor.set(0, .5), a.scale.set(.8), r.x = i, i += 40, a.x = i, i += 40, this.main.addChild(r), this.main.addChild(a)
				}
				var s = new PIXI.Sprite(this.$.resources.spritesheets.number["calculation_n" + t[t.length - 1] + ".png"]);
				s.anchor.set(0, .5), s.x = i, this.main.addChild(s), this.main.pivot.x = this.main.width / 2;
				var o = .333;
				return this.main.position.set(0, 10), m.alpha(this, this.main, "mainAlpha", 0, 1, o), m.vector(this, this.main, "mainMove", new PIXI.Point(0, -10), o).then((function() {
					return m.timeout(e, o)
				})).then((function() {
					return m.alpha(e, e.main, "mainAlpha", 1, 0, o), m.vector(e, e.main, "mainMove", new PIXI.Point(0, -10), o)
				}))
			}, e
		}(a.Container),
		F = function(t) {
			function e(e) {
				t.call(this), this.$ = e, this.main = new PIXI.Container, this.icon = new PIXI.Sprite(e.resources.spritesheets.ui["pic_coin.png"]), this.number = new v(e.resources.spritesheets.number, "num_b_", ".png", 398), this.icon.anchor.set(0, .5), this.number.anchor.set(0, .5), this.number.padding = 2, this.number.margin = -7, this.icon.scale.set(.85), this.number.x = this.icon.width, this.icon.y = .5, this.main.addChild(this.icon), this.main.addChild(this.number), this.addChild(this.main), this.main.alpha = 0
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.generate = function(t, e) {
				var i = this;
				void 0 === e && (e = !0), this.number.number = t;
				var n = 1 + .5 * Math.min(1, (t - 10) / 90);
				this.main.scale.set(1), this.main.pivot.x = this.main.width / 2, this.main.alpha = 1, e && m.scale(this, this.main, "mainScale", 1.2 * n, n, .15).then((function() {
					return m.alpha(i, i.main, "mainAlpha", 1, 0, .65, m.Ease.accel)
				}))
			}, e
		}(a.Container),
		$ = function(t) {
			function e(e) {
				t.call(this);
				var i = new PIXI.Container,
					n = new PIXI.Sprite(e.resources.images.header_01),
					r = new PIXI.Sprite(e.resources.images.logo);
				n.interactive = !0, r.anchor.set(.5), n.scale.set(2), r.scale.set(2), r.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2), i.addChild(n), i.addChild(r), this.addChild(i)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		q = function(t) {
			function e(e, i) {
				t.call(this);
				for (var n = [], r = new a.Container, s = 70 + .2 * i, o = E.float(2 * Math.PI), h = 12 + .04 * i, c = [], u = 0; u < h; u++) {
					var l = new PIXI.Sprite(e.resources.spritesheets.ui["sr_y.png"]);
					l.anchor.set(.5), r.addChild(l), c.push(l)
				}
				n.push(m.tween(r, null, 0, 1, .3, (function(t) {
					for (var e = 0; e < c.length; e++) {
						var i = c[e];
						i.x = Math.cos(o + e / h * Math.PI * 2) * s * t, i.y = Math.sin(o + e / h * Math.PI * 2) * s * t, i.scale.set(t)
					}
				}), m.Ease.quadratic(-.6)).then((function() {
					return m.tween(r, null, 0, 1, .1, (function(t) {
						for (var e = 0; e < c.length; e++) {
							var i = c[e];
							i.x = Math.cos(o + e / h * Math.PI * 2) * s * (.2 * t + 1), i.y = Math.sin(o + e / h * Math.PI * 2) * s * (.2 * t + 1), i.alpha = 1 - t
						}
					}))
				}))), i >= 100 && m.rotate(r, r, null, 0, 360, 4);
				var d = new a.Container;
				if (i >= 30) {
					for (var p = 100 + .2 * i, f = .1 * i, g = 0; g < f; g++) {
						var v = new O(e, "y"),
							C = E.float(2 * Math.PI),
							b = p * Math.sqrt(Math.random());
						v.x = Math.cos(C) * b, v.y = Math.sin(C) * b, v.alpha = E.float(.3, 1), v.scale.set(E.float(.5, 1)), d.addChild(v)
					}
					n.push(m.timeout(d, .65))
				}
				var y = new a.Container;
				if (i >= 60) {
					var w = new PIXI.Sprite(e.resources.spritesheets.ui["card_white.png"]);
					w.anchor.set(.5), w.blendMode = PIXI.BLEND_MODES.SCREEN, w.alpha = 0;
					n.push(m.timeout(y, .2).then((function() {
						return m.alpha(y, w, null, .5, 0, .3, m.Ease.accel), m.scale(y, w, null, 1, 1.4, .3, m.Ease.decel)
					}))), y.addChild(w)
				}
				var _ = new a.Container;
				if (i >= 90) {
					for (var x = 130 + .3 * i, S = .03 * i, k = [], I = [], P = function(t) {
							var i = new PIXI.Sprite(e.resources.spritesheets.ui[E.bool() ? "starr1_y.png" : "starr2_y.png"]);
							i.anchor.set(.5);
							var n = E.float(.35, .45),
								r = E.float(.4, 1.5),
								a = Math.pow(Math.random(), .4) * x,
								s = E.float(2 * Math.PI),
								o = new PIXI.Point(Math.cos(s) * a, Math.sin(s) * a),
								h = E.float(0, .6),
								c = new PIXI.Point(o.x * h, o.y * h);
							m.scale(_, i, null, 0, r, n, m.Ease.quadratic(-1.5)), I.push(m.move(_, i, null, c, o, n, m.Ease.decel2).then((function() {
								m.timeout(_, E.float(0, .2)).then((function() {
									return m.scale(_, i, null, r, 1.25 * r, .2), m.alpha(_, i, null, 1, 0, .2)
								}))
							}))), _.addChild(i), k.push(i)
						}, M = 0; M < S; M++) P();
					n.push(Promise.all(I))
				}
				var A = new a.Container;
				if (i >= 200) {
					for (var T = .2 * i, B = E.float(2 * Math.PI), X = 15 + .05 * i, j = [], D = 0; D < X; D++) {
						var N = new PIXI.Sprite(e.resources.spritesheets.ui["sr_y.png"]);
						N.anchor.set(.5), N.scale.set(.4), N.blendMode = PIXI.BLEND_MODES.ADD, A.addChild(N), j.push(N)
					}
					n.push(m.tween(A, null, 0, 1, .3, (function(t) {
						for (var e = 0; e < j.length; e++) {
							var i = j[e];
							i.x = Math.cos(B + e / X * Math.PI * 2) * T * t, i.y = Math.sin(B + e / X * Math.PI * 2) * T * t, i.alpha = Math.min(.5, t)
						}
					}), m.Ease.quadratic(-.5)).then((function() {
						return m.tween(A, null, 0, 1, .1, (function(t) {
							for (var e = 0; e < j.length; e++) {
								var i = j[e];
								i.x = Math.cos(B + e / X * Math.PI * 2) * T * (.2 * t + 1), i.y = Math.sin(B + e / X * Math.PI * 2) * T * (.2 * t + 1), i.alpha = .5 * (1 - t)
							}
						}))
					})))
				}
				this.addChild(y), this.addChild(r), this.addChild(A), this.addChild(d), this.addChild(_)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		U = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = 250), t.call(this), this.particleContainer = new PIXI.ParticleContainer(2 * i, {
					position: !1
				});
				for (var r, a, s, o = [{
						weight: 20,
						scale: .3
					}, {
						weight: 8,
						scale: .55
					}, {
						weight: 5,
						scale: 1
					}], h = 0, c = 0; c < o.length; c++) h += o[c].weight;
				for (var u = 0; u < o.length; u++)
					for (var l = o[u], d = i * l.weight / h, p = 0; p < d; p++) r = l.scale, a = void 0, s = void 0, a = new PIXI.Sprite(e.resources.spritesheets.ui["br_b.png"]), (s = new PIXI.Sprite(e.resources.spritesheets.ui["kr_b.png"])).scale.set(r), a.scale.set(.2 * s.scale.x + .5), s.x = E.float(-s.width, e.vars.additional.width), s.y = E.float(-s.height, e.vars.additional.height), a.x = s.x + s.width / 2 - a.width / 2, a.y = s.y + s.height / 2 - a.height / 2, a.alpha = .25, n.particleContainer.addChild(s), n.particleContainer.addChild(a);
				this.addChild(this.particleContainer)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.destroy = function() {
				this.particleContainer.destroy(), t.prototype.destroy.call(this)
			}, e
		}(a.Container),
		Y = function(t) {
			function e(e) {
				var i = this;
				t.call(this), this.kiras = [];
				var n = new o.Container;
				n.scale.set(2);
				var r = n.addCreatejs(new e.resources.animates.skill_shuffle.skill_shuffle);
				this.kiraContainer = new PIXI.Container;
				for (var a = 0; a < 3; a++) {
					var s = new U(e);
					this.kiraContainer.addChild(s), this.kiras.push(s)
				}
				this.kiras[0].alpha = .5, this.kiras[1].alpha = 1, this.kiras[2].alpha = 0, this.kiraContainer.visible = !1;
				var h = new PIXI.Sprite(e.resources.images.ef_aurora);
				h.scale.set(2), h.alpha = 0, r.on("appearStars", (function() {
					i.kiraContainer.visible = !0;
					var t = .5;
					m.alpha(i, i.kiras[0], "kira0Alpha", .5, 0, .25).then((function() {
						return m.alpha(i, i.kiras[0], "kira0Alpha", 0, 1, t, m.Ease.linear, 0)
					})), m.alpha(i, i.kiras[1], "kira1Alpha", 1, 0, t, m.Ease.linear, 0), m.alpha(i, i.kiras[2], "kira2Alpha", 0, 1, t, m.Ease.linear, 0), m.alpha(i, i.kiraContainer, "kirasAlpha", 0, 1, .65).then((function() {
						return m.alpha(i, i.kiraContainer, "kirasAlpha", 1, 0, 1.3)
					}))
				})), r.on("appearAurora", (function() {
					i.emit("flush"), m.move(i, h, "auroraMove", new PIXI.Point(0, -800), new PIXI.Point(0, 1e3), 1.15), m.alpha(i, h, "auroraAlpha", 0, 1, .575).then((function() {
						return m.alpha(i, h, "auroraAlpha", 1, 0, .575)
					}))
				})), r.on("endAnimation", (function() {
					i.emit("end"), i.destroy()
				})), this.addChild(this.kiraContainer), this.addChild(h), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.destroy = function() {
				this.kiras.forEach((function(t) {
					return t.destroy()
				})), t.prototype.destroy.call(this)
			}, e
		}(a.Container),
		V = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = 0), t.call(this);
				var r = new PIXI.Sprite(e.resources.spritesheets.ui["pr_w.png"]);
				r.anchor.set(.5), r.alpha = 0;
				var a = .333,
					s = .2,
					o = 2 - 2 * i;
				i < .5 ? m.alpha(this, r, "spriteAlpha", s * i * 2, s, a * (1 - 2 * i)).then((function() {
					return m.alpha(n, r, "spriteAlpha", s, 0, a)
				})) : m.alpha(this, r, "spriteAlpha", s * o, 0, a * o), m.vector(this, r, "spriteMove", new PIXI.Point(-30 * i, -30), .666 * (1 - i)).then((function() {
					n.task.clear(), n.destroy()
				})), this.addChild(r)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		H = function(t) {
			function e(e) {
				var i = this;
				t.call(this), this.$ = e, this.particleContainer = new PIXI.Container, this.starContainer = new U(e, 330), this.starContainer.y = e.vars.additional.height, this.starContainer.alpha = 0;
				var n = new o.Container;
				n.scale.set(2), this.cjs = n.addCreatejs(new e.resources.animates.skill_hammer.main);
				var r = 0;
				this.task.on("particleEmit", (function(t) {
					var n, a = t.delta / 60;
					r >= .1 && (r -= .1, (n = new V(e)).scale.set(E.float(.4, 1)), n.x = E.float(-n.width / 2, e.vars.additional.width + n.width / 2), n.y = E.float(.85 * e.vars.additional.height - n.height / 2, e.vars.additional.height + n.height / 2), i.particleContainer.addChild(n)), r += a
				})), this.addChild(this.particleContainer), this.addChild(this.starContainer), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.slam = function(t) {
				var e = this;
				this.cjs.play(), m.alpha(this, this.particleContainer, "particleAlpha", 1, 0, .5), m.timeout(this, 1).then((function() {
					return m.alpha(e, e.starContainer, "starAlpha", 1, 0, .8, m.Ease.decel), m.vector(e, e.starContainer, "starMove", new PIXI.Point(0, -300), .8, m.Ease.quadratic(-.5))
				})).then((function() {
					e.starContainer.destroy()
				}));
				var i = new o.Container;
				i.scale.set(2), i.position.set(-320, -690), i.x += t.x, i.y += t.y, i.addCreatejs(new this.$.resources.animates.skill_hammer.hammer).on("slam", (function() {
					e.emit("slam")
				})), this.addChild(i)
			}, e
		}(a.Container),
		W = function(t) {
			function e(e) {
				t.call(this);
				var i = E.int(0, 4),
					n = new PIXI.Sprite;
				n.anchor.set(.5);
				var r = function() {
					var t = Math.floor(i),
						r = (t < 3 ? t : 5 - t) + 1;
					n.texture = e.resources.spritesheets.ui["coin_anime0" + r + ".png"], n.scale.x = t < 3 ? 1 : -1
				};
				r();
				this.task.on("yaw", (function(t) {
					var e = .16666 * t.delta;
					(i += e > 1 ? 1 : e) >= 5 && (i -= 5), r()
				})), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		K = function(t) {
			function e(e, i, n, r) {
				var a = this;
				t.call(this);
				for (var s = Math.min(50 + 10 * (i - 3), 100), o = [], h = 0; h < i; h++) {
					var c = Math.pow(Math.random(), .35) * s,
						u = E.float(2 * Math.PI),
						l = new PIXI.Point;
					l.x = Math.cos(u) * c, l.y = Math.sin(u) * c, o.push(l)
				}
				for (var d = new PIXI.Container, p = new PIXI.Container, f = new PIXI.Container, g = function(t) {
						var i = new W(e);
						i.scale.set(.5), i.position = n.clone(), m.vector(i, i, "move", o[t], .333, m.Ease.decel).then((function() {
							return m.timeout(i, .1 * t)
						})).then((function() {
							return m.moveTo(i, i, "move", r.clone(), .666, m.Ease.decel)
						})).then((function() {
							i.visible = !1, a.emit("landing", t), t === o.length - 1 && (a.emit("endAnimation"), a.task.clear(), a.destroy())
						})), p.addChild(i)
					}, v = 0; v < o.length; v++) g(v);
				d.addChild(f), d.addChild(p), this.addChild(d)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		z = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this);
				for (var a = new PIXI.Point(e.vars.additional.width / 2, e.vars.additional.height / 2), s = [new PIXI.Point(-50, -50), new PIXI.Point(50, 50)], o = 0; o < 8; o++) {
					var h = o / 8 * Math.PI * 2,
						c = new PIXI.Point;
					c.x = 300 * Math.cos(h), c.y = 300 * Math.sin(h), s.unshift(c)
				}
				var u = [new PIXI.Point(200, 0), new PIXI.Point(-200, 0), new PIXI.Point(0, 200), new PIXI.Point(0, -200), new PIXI.Point(0, 0)],
					l = w.shuffle(i ? s : u),
					d = i ? 25 : 50,
					p = l.map((function(t) {
						return new PIXI.Point(t.x + E.float(-1, 1) * d, t.y + E.float(-1, 1) * d)
					})),
					f = E.float(2 * Math.PI),
					g = p.map((function(t) {
						return new PIXI.Point(t.x * Math.cos(f) - t.y * Math.sin(f), t.x * Math.sin(f) + t.y * Math.cos(f))
					})),
					v = g.map((function(t) {
						return new PIXI.Point(.8 * t.x, .8 * t.y)
					})),
					C = new PIXI.Container;
				C.position = a.clone(), i || (C.y += 300);
				for (var b = new PIXI.Container, y = new PIXI.Container, _ = function(t) {
						var i = new W(e),
							a = E.float(1, 1.2);
						i.scale.set(a), m.moveTo(i, i, "move", v[t], .166, m.Ease.decel).then((function() {
							return m.moveTo(i, i, "move", g[t], .25)
						})).then((function() {
							return m.timeout(i, .033 * t)
						})).then((function() {
							var t = T.dif(n, C.position);
							return m.scale(i, i, "scale", a, .42, .25), m.moveTo(i, i, "move", t, .25, m.Ease.quadratic(.5))
						})).then((function() {
							i.alpha = 0, r.emit("landing", t), t === g.length - 1 && (r.emit("endAnimation"), r.task.clear(), r.destroy())
						})), b.addChild(i)
					}, x = 0; x < g.length; x++) _(x);
				if (i)
					for (var S = function(t) {
							var i = t / 8 * Math.PI * 2,
								n = new PIXI.Point;
							n.x = 200 * Math.cos(i), n.y = 200 * Math.sin(i);
							var a = new PIXI.Sprite(e.resources.spritesheets.ui["starr2_y.png"]);
							a.anchor.set(.5), m.move(r, a, "kira" + t + "Move", T.mlt(n, .375), n, .166, m.Ease.decel).then((function() {
								return m.alpha(r, a, "kira" + t + "Alpha", 1, 0, .166), m.moveTo(r, a, "kira" + t + "Move", T.mlt(n, 1.05), .166)
							})), y.addChild(a)
						}, k = 0; k < 8; k++) S(k);
				C.addChild(y), C.addChild(b), this.addChild(C)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		Q = function(t) {
			function e(e) {
				t.call(this), this.$ = e, this.header = new PIXI.Graphics, this.header.beginFill(13991188, 1), this.header.drawRect(0, 0, e.vars.additional.width, 170), this.header.endFill(), this.header.pivot.set(this.header.width / 2, this.header.height / 2), this.header.y = this.$.vars.additional.height / 2 - 12.5, this.text = new PIXI.Sprite(e.resources.spritesheets.ui["tutorial_text_title.png"]), this.text.anchor.set(.5), this.text.position.set(this.header.width / 2, this.header.height / 2), this.header.addChild(this.text), this.addChild(this.header)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.show = function() {
				var t = this;
				this.header.x = this.$.vars.additional.width / 2 + 10;
				var e = .3;
				return m.alpha(this, this.header, "alpha", 0, 1, e), m.vector(this, this.header, "move", new PIXI.Point(-10, 0), e).then((function() {
					return m.timeout(t, 1.35)
				})).then((function() {
					return m.alpha(t, t.header, "alpha", 1, 0, e), m.vector(t, t.header, "move", new PIXI.Point(-10, 0), e)
				}))
			}, e
		}(a.Container),
		Z = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = function() {}), t.call(this);
				var r = new PIXI.Graphics;
				r.beginFill(13991188, 1), r.drawRect(0, 0, e.vars.additional.width, 170), r.endFill(), r.pivot.set(r.width / 2, r.height / 2), r.x = e.vars.additional.width / 2 + 10, r.y = e.vars.additional.height / 2 - 12.5;
				var a = new PIXI.Sprite(e.resources.spritesheets.ui["gametext_start.png"]);
				a.anchor.set(.5), a.position.set(r.width / 2, r.height / 2), r.addChild(a), this.addChild(r);
				var s = .3;
				m.alpha(this, r, "alpha", 0, 1, s), m.vector(this, r, "move", new PIXI.Point(-10, 0), s).then((function() {
					return m.timeout(n, 1.35)
				})).then((function() {
					return m.alpha(n, r, "alpha", 1, 0, s), m.vector(n, r, "move", new PIXI.Point(-10, 0), s)
				})).then((function() {
					i(), n.task.clear(), n.destroy()
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		J = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = function() {}), t.call(this);
				var r = new PIXI.Sprite(e.resources.spritesheets.ui["Timesup.png"]);
				r.anchor.set(.5), r.x = e.vars.additional.width / 2, r.y = -r.height / 2, this.addChild(r), m.moveTo(this, r, "spriteMove", new PIXI.Point(r.x, e.vars.additional.height / 2), .15).then((function() {
					return m.vector(n, r, "spriteMove", new PIXI.Point(0, -20), .05, m.Ease.linear, 2)
				})).then((function() {
					return m.timeout(n, 2)
				})).then((function() {
					return m.alpha(n, r, "spriteAlpha", 1, 0, .5)
				})).then((function() {
					i(), n.task.clear(), n.destroy()
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		tt = function(t) {
			function e(e, i, n) {
				var r = this;
				void 0 === n && (n = function() {}), t.call(this);
				var a = new PIXI.Container,
					s = new PIXI.Container;
				s.position.set(e.vars.additional.width / 2, e.vars.additional.height / 2);
				var o = new A(e);
				o.position = s.position.clone(), o.scale.set(.75);
				var h = new PIXI.Sprite(e.resources.spritesheets.ui["Clearall.png"]);
				h.anchor.set(.5);
				var c = new F(e);
				c.scale.set(1.5), c.generate(i, !1), h.y = -50, c.y = 20, a.addChild(o), s.addChild(h), s.addChild(c), a.addChild(s), this.addChild(a);
				var u = .15;
				m.alpha(this, o, "gokoAlpha", 0, .75, u), m.alpha(this, s, "containerAlpha", 0, 1, .075), m.scale(this, s, "containerScale", 2, 1, u).then((function() {
					return m.timeout(r, 2)
				})).then((function() {
					return m.alpha(r, a, "mainAlpha", 1, 0, .3)
				})).then((function() {
					n(), r.task.clear(), r.destroy()
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		et = function(t) {
			function e(e) {
				t.call(this);
				var i = new s.Sprite(e.resources.spritesheets.text["text_skipad.png"]);
				i.anchor.set(.5), e.vars.env.isAdPlatform && e.vars.env.hasRewardAd && this.addChild(i)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		it = function() {};
	it.reward = function(t) {
		return new Promise((function(e, i) {
			h.muteBGM(t, "bgm"), t.vars.api.viewRewardAdAsync().then((function(i) {
				h.unmuteBGM(t, "bgm"), e()
			})).catch((function(e) {
				h.unmuteBGM(t, "bgm"), e.type === t.vars.enum.errors.AdSkipped ? i(!1) : i(!0)
			}))
		}))
	}, it.interstitial = function(t) {
		return new Promise((function(e) {
			h.muteBGM(t, "bgm");
			var i = function(i) {
				h.unmuteBGM(t, "bgm"), e()
			};
			t.vars.api.viewAdAsync().then(i).catch(i)
		}))
	};
	var nt = function(t) {
			function e(e, i, n, r) {
				t.call(this, e, i), this.character = n, this.fukidashi = new s.Sprite(e.resources.spritesheets.ui["message_window.png"]);
				var a = new s.Sprite(r);
				this.characterContainer = new s.Container, this.character.anchor.set(1, 1), this.fukidashi.anchor.set(.46814, .5), a.anchor.set(.5), this.characterContainer.x = i.width / 2 + i.x, this.characterContainer.y = -i.height / 2 + i.y, this.fukidashi.x = -105, this.fukidashi.y = -i.height / 2 + i.y - 60, this.character.visible = !1, this.fukidashi.visible = !1, this.fukidashi.addChild(a), this.characterContainer.addChild(this.character), this.main.addChildAt(this.fukidashi, 0), this.main.addChildAt(this.characterContainer, 0)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.show = function(t) {
				var e = this;
				return void 0 === t && (t = !0), new Promise((function(i) {
					e._isShow = !0, e.main.visible = !0, e.main.interactiveChildren = !1, t && e.visibleBack(!0), e.dontTap.interactive = !0, e.character.visible = !0, e.fukidashi.visible = !0, e.character.alpha = 0, e.fukidashi.alpha = 0, e.showAnimation(e, e.popup, "popup").then((function() {
						return e.character.alpha = 1, m.move(e, e.character, "characterMove", new s.Point(e.character.x, e.character.height), e.character.position, .15, m.Ease.decel)
					})).then((function() {
						m.alpha(e, e.fukidashi, "fukidashiAlpha", 0, 1, .15);
						return e.fukidashi.x += 20, m.vector(e, e.fukidashi, "fukidashiMove", new s.Point(-20, 0), .15)
					})).then((function() {
						e.main.interactiveChildren = !0, i()
					}))
				}))
			}, e.prototype.hide = function(t) {
				var e = this;
				return void 0 === t && (t = !0), this.preHide(t).then((function() {
					return e.endPreHide()
				}))
			}, e.prototype.preHide = function(t) {
				var e = this;
				return void 0 === t && (t = !0), new Promise((function(i) {
					e.main.interactiveChildren = !1, t && e.visibleBack(!1), e.hideAnimation(e, e.character, "character"), e.hideAnimation(e, e.fukidashi, "fukidashi"), e.hideAnimation(e, e.popup, "popup").then((function() {
						e.main.visible = !1, e.main.interactiveChildren = !0, i()
					}))
				}))
			}, e.prototype.endPreHide = function() {
				this.dontTap.interactive = !1, this._isShow = !1
			}, e
		}(b),
		rt = function(t) {
			function e(e, i, n, r, a) {
				var o = this;
				void 0 === r && (r = 0), void 0 === a && (a = 140);
				var h = new s.Sprite(e.resources.images.board_1);
				h.anchor.set(.5), h.y = 100;
				var c = new s.Sprite(e.resources.spritesheets.character["pig01.png"]);
				c.position.set(-25, 83), t.call(this, e, h, c, e.resources.spritesheets.text["text_chara07.png"]), this.buttons = {};
				var u = new s.Container;
				if (u.y = r, null !== i) {
					var l = new s.Sprite(i.texture);
					l.anchor.set(.5), l.y = -this.popup.height / 2 + i.y, this.popup.addChild(l)
				}
				for (var d = n.length, p = function(t) {
						var e = n[t],
							i = e.button;
						i.y = (t - (d - 1) / 2) * a, i.on("buttontap", (function() {
							o.emit(e.name)
						})), o.buttons[e.name] = i, u.addChild(i)
					}, f = 0; f < d; f++) p(f);
				this.popup.addChild(u)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getButton = function(t) {
				return this.buttons[t]
			}, e
		}(nt),
		at = function(t) {
			function e(e, i) {
				var n = this,
					r = new s.Sprite(e.resources.images.board_5);
				r.anchor.set(.5), r.y = 100;
				var a = new s.Sprite(e.resources.spritesheets.character["deer04.png"]);
				a.position.set(20, 243), a.scale.set(.975), t.call(this, e, r, a, e.resources.spritesheets.text["text_chara08.png"]);
				var o = new s.Container,
					h = new s.Sprite(e.resources.spritesheets.ui["pic_coins.png"]),
					c = new A(e),
					u = new s.Sprite(e.resources.spritesheets.ui["text_win.png"]),
					l = new v(e.resources.spritesheets.number, "num_g", ".png", i.score);
				l.margin = 2;
				var d = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					margin: 5
				}, {
					body: l
				}]);
				d.x = -10;
				var g = new s.Container,
					C = new p(e, e.resources.spritesheets.ui["btn_a_rad.png"]),
					b = new M([{
						body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_ad.png"]),
						scale: 1,
						margin: 3
					}, {
						body: new s.Sprite(e.resources.spritesheets.text["btn_get2.png"])
					}]);
				C.addOnSprite(b);
				var y = new et(e),
					w = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.text["btn_get.png"]);
				h.anchor.set(.5), u.anchor.set(.5), c.scale.set(.5), h.y = -180, c.y = h.y, u.y = -30, d.y = 50, g.y = 200, w.y = -70, C.y = 50, y.y = 110, e.vars.env.isAdPlatform || (o.y = 60, w.icon.texture = e.resources.spritesheets.ui["btn_ok.png"]), C.on("buttontap", (function() {
					g.interactiveChildren = !1, it.reward(e).then((function() {
						l.animateNumber(2 * i.score, 1, .15), n.emit("getCoin", !0)
					})).catch((function() {
						g.interactiveChildren = !0
					}))
				})), w.on("buttontap", (function() {
					g.interactiveChildren = !1, n.emit("getCoin", !1)
				})), o.addChild(c), o.addChild(h), o.addChild(u), o.addChild(d), o.addChild(g), g.addChild(y), g.addChild(w), e.vars.env.isAdPlatform && g.addChild(C), r.addChild(o), c.alpha = 0, h.alpha = 0, u.alpha = 0, d.scale.set(0), g.alpha = 0;
				var _ = .15;
				this.show(!1), m.timeout(this, .3).then((function() {
					return m.alpha(n, c, "gokoAlpha", 0, 1, _), m.alpha(n, h, "coinImageAlpha", 0, 1, _)
				})).then((function() {
					return m.alpha(n, u, "winAlpha", 0, 1, _)
				})).then((function() {
					return m.scale(n, d, "earnCoinContainerScale", 2, 1, _)
				})).then((function() {
					return m.alpha(n, g, "buttonsAlpha", 0, 1, _)
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.hide = function() {
				var e = this;
				return t.prototype.hide.call(this, !1).then((function() {
					e.emit("end"), e.task.clear(), e.destroy()
				}))
			}, e
		}(nt),
		st = function(t) {
			function e(e, i, n, r) {
				var a = this,
					o = new s.Sprite(e.resources.images.board_2);
				o.anchor.set(.5), o.y = 90, t.call(this, e, o, r, e.resources.spritesheets.text[n]);
				var h = new s.Sprite(e.resources.spritesheets.ui[i]);
				this.ok = new p(e, e.resources.spritesheets.ui["btn_a_rad.png"]);
				var c = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_ad.png"]),
					scale: 1.2,
					margin: 5
				}, {
					body: new s.Sprite(e.resources.spritesheets.ui["btn_ok.png"])
				}]);
				this.ok.addOnSprite(c);
				var u = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.text["btn_cancel.png"]);
				h.anchor.set(.5), h.y = -120, this.ok.y = 60, u.y = 190, u.on("buttontap", (function() {
					a.emit("close"), a.hide()
				})), o.addChild(h), o.addChild(u), o.addChild(this.ok)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(nt),
		ot = function(t) {
			function e(e, i, n, r, a, o) {
				var h = this;
				t.call(this, e, n, r, a), this.price = o, this.hasCoin = new G(e, i), this.ok.sprite.removeChildren();
				var c = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					margin: 5
				}, {
					body: new v(e.resources.spritesheets.number, "num_", ".png", o)
				}]);
				this.ok.addOnSprite(c), this.hasCoin.x = -this.popup.width / 2 + this.hasCoin.width / 2 + 30, this.hasCoin.y = -435, this.ok.on("buttontap", (function() {
					h.popup.interactiveChildren = !1, i.coin -= h.price, h.hasCoin.updateCoin().then((function() {
						h.popup.interactiveChildren = !0, h.emit("complete")
					}))
				})), this.popup.addChild(this.hasCoin)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.show = function() {
				var e = this;
				return this.hasCoin.updateCoin(0), this.hasCoin.alpha = 0, m.timeout(this, .3).then((function() {
					return m.alpha(e, e.hasCoin, "hasCoinAlpha", 0, 1, .15)
				})), t.prototype.show.call(this)
			}, e
		}(st),
		ht = function(t) {
			function e(e, i) {
				var n = new s.Sprite(e.resources.spritesheets.character["fox04.png"]);
				n.position.set(0, 67), t.call(this, e, i, "picture_3.png", "text_chara04.png", n, 100)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(ot),
		ct = function(t) {
			function e(e, i) {
				var n = new s.Sprite(e.resources.spritesheets.character["giraffe03.png"]);
				n.position.set(-5, 70), n.scale.set(.8), t.call(this, e, i, "picture_2.png", "text_chara05.png", n, 300)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(ot),
		ut = function(t) {
			function e(e) {
				var i = this,
					n = new s.Sprite(e.resources.spritesheets.character["squirrel03.png"]);
				n.position.set(-20, 60), n.scale.set(1.175), t.call(this, e, "picture_1.png", "text_chara06.png", n);
				var r = new et(e);
				r.y = 125, this.ok.on("buttontap", (function() {
					i.ok.setEnable(!1), it.reward(e).then((function() {
						i.emit("complete")
					})).catch((function() {
						i.ok.setEnable(!0)
					}))
				})), this.popup.addChild(r)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(st),
		lt = function(t) {
			function e(e) {
				var i = this,
					n = new s.Sprite(e.resources.images.board_2);
				n.anchor.set(.5), n.y = 75;
				var r = new s.Sprite(e.resources.spritesheets.character["cow03.png"]);
				r.position.set(0, 85), t.call(this, e, n, r, e.resources.spritesheets.text["text_bosscontinue.png"]), this.screen.visible = !1, this.fukidashi.x += -30;
				var a = new s.Container;
				a.scale.set(.8);
				var h = new o.Container,
					c = h.addCreatejs(new e.resources.animates.cutin.bossStage);
				h.position.set(-e.vars.additional.width / 2, -400), h.scale.set(2), c.gotoAndStop(8);
				var u = new s.Sprite(e.resources.spritesheets.ui["pic_coins.png"]),
					l = new s.Sprite(e.resources.spritesheets.ui["pic_coins.png"]),
					d = new s.Sprite(e.resources.spritesheets.text["text_bossstage_coinupchance.png"]),
					g = new p(e, e.resources.spritesheets.ui["btn_a_rad.png"]),
					v = new M([{
						body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_ad.png"]),
						scale: 1.2,
						margin: 5
					}, {
						body: new s.Sprite(e.resources.spritesheets.text["button_yes.png"])
					}]);
				g.addOnSprite(v);
				var m = new et(e),
					C = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.text["button_no.png"]);
				u.anchor.set(.5), l.anchor.set(.5), d.anchor.set(.5), l.x = 125, u.x = -l.x, a.y = -135, d.y = -15, g.y = 60, C.y = 190, m.y = (g.y + C.y) / 2, g.on("buttontap", (function() {
					g.setEnable(!1), it.reward(e).then((function() {
						i.emit("complete")
					})).catch((function() {
						g.setEnable(!0)
					}))
				})), C.on("buttontap", (function() {
					i.hide().then((function() {
						return i.emit("close")
					}))
				})), a.addChild(u), a.addChild(l), a.addChild(h), n.addChild(m), n.addChild(d), n.addChild(a), n.addChild(g), n.addChild(C), this.show()
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(nt),
		dt = function(t) {
			function e(e) {
				var i = new s.Sprite(e.resources.images.board_2);
				i.anchor.set(.5), i.y = 80;
				var n = new s.Sprite(e.resources.spritesheets.character["bird01.png"]);
				n.position.set(-20, 60), t.call(this, e, i, n, e.resources.spritesheets.ui["text_completed.png"]), this.fukidashi.x += -25;
				var r = new s.Container;
				this.structure = new s.Sprite(e.resources.spritesheets.building["village_building_8.png"]), this.structure.anchor.set(.5), this.has = new v(e.resources.spritesheets.number, "num_g", ".png"), this.max = new v(e.resources.spritesheets.number, "num_g", ".png"), this.has.margin = -2, this.max.margin = -2;
				var a = new s.Sprite(e.resources.spritesheets.number["num_slash.png"]);
				a.tint = 2456166, this.storageContainer = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					scale: 1.4,
					margin: 10
				}, {
					body: this.has,
					margin: 3
				}, {
					body: a,
					scale: 1.3,
					margin: 3
				}, {
					body: this.max
				}]), this.storageContainer.scale.set(1.1), this.buttonsContainer = new s.Container;
				var o = new s.Sprite(e.resources.spritesheets.text["text_increaseexplanation.png"]);
				this.storageUp = new p(e, e.resources.spritesheets.ui["btn_a_rad.png"]);
				var h = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_ad.png"]),
					margin: 5
				}, {
					body: new s.Sprite(e.resources.spritesheets.text["Storage amount.png"])
				}]);
				this.storageUp.addOnSprite(h);
				var c = new et(e);
				this.ok = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.ui["btn_ok.png"]), o.anchor.set(.5), this.goko = new A(e), this.goko.scale.set(.5), this.structure.y = -145, this.storageContainer.y = 0, this.buttonsContainer.y = 155, o.y = -85, c.y = 70, this.ok.y = 195, e.vars.env.isAdPlatform || (r.y = 90), this.character.alpha = 0, this.fukidashi.alpha = 0, this.goko.alpha = 0, i.addChild(this.goko), r.addChild(this.structure), r.addChild(this.storageContainer), i.addChild(r), i.addChild(this.buttonsContainer), this.buttonsContainer.addChild(c), e.vars.env.isAdPlatform && (this.buttonsContainer.addChild(o), this.buttonsContainer.addChild(this.storageUp)), this.buttonsContainer.addChild(this.ok)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.showBuilding = function(t, e) {
				var i = this;
				return new Promise((function(n) {
					i._isShow = !0, i.main.visible = !0, i.main.interactiveChildren = !1, i.visibleBack(!0), i.dontTap.interactive = !0, i.structure.texture = i.$.resources.spritesheets.building[t.info.path], i.max.number = t.maxCoin, i.has.number = t.coin, i.storageContainer.update(), i.storageUp.setEnable(1 === t.maxMultiply), i.structure.visible = !1, i.character.visible = e, i.fukidashi.visible = e, i.storageContainer.alpha = 0, i.buttonsContainer.alpha = 0, i.goko.alpha = 0, i.showAnimation(i, i.popup, "popup").then((function() {
						i.structure.visible = !0;
						var t = 210 / i.structure.texture.height;
						return m.scale(i, i.structure, "structureScale", 1.5 * t, t, .14)
					})).then((function() {
						return m.alpha(i, i.goko, "gokoAlpha", 0, .75, .33), m.alpha(i, i.storageContainer, "storageContainerAlpha", 0, 1, .1)
					})).then((function() {
						if (e) {
							i.character.alpha = 1, i.fukidashi.alpha = 1;
							var t = i.character.height;
							i.character.y += t, i.fukidashi.y += t;
							var n = new s.Point(0, -t);
							return m.vector(i, i.fukidashi, "fukidashiMove", n, .15, m.Ease.decel), m.vector(i, i.character, "characterMove", n, .15, m.Ease.decel)
						}
					})).then((function() {
						return m.alpha(i, i.buttonsContainer, "buttonContainerAlpha", 0, 1, .15)
					})).then((function() {
						i.main.interactiveChildren = !0
					})), i.storageUp.removeListener("buttontap"), i.ok.removeListener("buttontap"), i.storageUp.on("buttontap", (function() {
						i.storageUp.setEnable(!1), it.reward(i.$).then((function() {
							i.hide().then((function() {
								return n(!0)
							}))
						})).catch((function() {
							i.storageUp.setEnable(!0)
						}))
					})), i.ok.on("buttontap", (function() {
						i.hide().then((function() {
							return n(!1)
						}))
					}))
				}))
			}, e
		}(nt),
		pt = function(t) {
			function e(e) {
				var i = this,
					n = new s.Sprite(e.resources.images.board_1);
				n.anchor.set(.5), n.y = 125;
				var r = new s.Sprite(e.resources.spritesheets.character["bird01.png"]);
				r.position.set(-20, 60), t.call(this, e, n, r, e.resources.spritesheets.text["text_construction.png"]), this.fukidashi.x += -25, this.structure = new s.Sprite(e.resources.spritesheets.building["village_building_8.png"]), this.structure.anchor.set(.5), this.structure.tint = 0, this.structure.alpha = .5, this.question = new s.Sprite(e.resources.spritesheets.ui["btn_pic_help.png"]), this.question.anchor.set(.5), this.has = new v(e.resources.spritesheets.number, "num_g", ".png"), this.max = new v(e.resources.spritesheets.number, "num_g", ".png"), this.has.margin = -2, this.max.margin = -2;
				var a = new s.Sprite(e.resources.spritesheets.number["num_slash.png"]);
				a.tint = 2456166, this.storageContainer = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					scale: 1.4,
					margin: 10
				}, {
					body: this.has,
					margin: 3
				}, {
					body: a,
					scale: 1.3,
					margin: 3
				}, {
					body: this.max
				}]), this.storageContainer.scale.set(1.1), this.buttonContainer = new s.Container, this.ok = new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.ui["btn_ok.png"]), this.goko = new A(e), this.goko.scale.set(.5), this.structure.y = -50, this.question.y = this.structure.y, this.storageContainer.y = 90, this.buttonContainer.y = 120, this.ok.y = 190, this.character.alpha = 0, this.fukidashi.alpha = 0, this.goko.alpha = 0, this.ok.on("buttontap", (function() {
					i.hide()
				})), n.addChild(this.goko), n.addChild(this.structure), n.addChild(this.question), n.addChild(this.storageContainer), n.addChild(this.buttonContainer), this.buttonContainer.addChild(this.ok)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.showBuilding = function(t, e) {
				var i = this;
				return new Promise((function(n) {
					i._isShow = !0, i.main.visible = !0, i.main.interactiveChildren = !1, i.visibleBack(!0), i.dontTap.interactive = !0, i.structure.texture = i.$.resources.spritesheets.building[e.info.path], i.max.number = e.info.data.needCoin, i.has.number = Math.min(i.max.number, t.coin), i.storageContainer.update(), i.question.visible = !1, i.structure.visible = !1, i.character.visible = !0, i.fukidashi.visible = !0, i.storageContainer.alpha = 0, i.buttonContainer.alpha = 0, i.goko.alpha = 0, i.showAnimation(i, i.popup, "popup").then((function() {
						i.structure.visible = !0, i.question.visible = !0;
						var t = 210 / i.structure.texture.height;
						return m.scale(i, i.question, "questionScale", 2, 1.5, .14), m.scale(i, i.structure, "structureScale", 1.5 * t, t, .14)
					})).then((function() {
						return m.alpha(i, i.goko, "gokoAlpha", 0, .75, .33), m.alpha(i, i.storageContainer, "storageContainerAlpha", 0, 1, .1)
					})).then((function() {
						i.character.alpha = 1, i.fukidashi.alpha = 1;
						var t = i.character.height;
						i.character.y += t, i.fukidashi.y += t;
						var e = new s.Point(0, -t);
						return m.vector(i, i.fukidashi, "fukidashiMove", e, .15, m.Ease.decel), m.vector(i, i.character, "characterMove", e, .15, m.Ease.decel)
					})).then((function() {
						return m.alpha(i, i.buttonContainer, "buttonContainerAlpha", 0, 1, .15)
					})).then((function() {
						i.main.interactiveChildren = !0
					}))
				}))
			}, e
		}(nt),
		ft = function(t) {
			function e(e, i) {
				t.call(this, e, e.resources.spritesheets.ui["btn_a_rad.png"]);
				var n = new s.Container,
					r = new s.Sprite(e.resources.spritesheets.ui["btn_pic_play.png"]),
					a = new s.Sprite(e.resources.spritesheets.ui["btn_play.png"]),
					o = new mt(e, i);
				r.anchor.set(.5), a.anchor.set(.5), r.y = -2, r.x = -110, a.x = r.x + r.width / 2 + a.width / 2 + 8, o.x = 50, n.addChild(r), n.addChild(a), n.addChild(o), this.addOnSprite(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(p),
		gt = function(t) {
			function e(e) {
				t.call(this, e, e.resources.spritesheets.ui["btn_a_boss.png"]);
				var i = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_play.png"]),
					margin: 8,
					offsetY: 1
				}, {
					body: new s.Sprite(e.resources.spritesheets.ui["btn_bosslevel.png"])
				}]);
				i.y = 15, this.addOnSprite(i)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(p),
		vt = function(t) {
			function e(e) {
				t.call(this, e, e.resources.spritesheets.ui["btn_a_bonus.png"]);
				var i = new M([{
					body: new s.Sprite(e.resources.spritesheets.ui["btn_pic_play.png"]),
					margin: 8,
					offsetY: 0
				}, {
					body: new s.Sprite(e.resources.spritesheets.ui["btn_bonuslevel.png"])
				}]);
				i.y = 17, this.addOnSprite(i)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(p),
		mt = function(t) {
			function e(e, i) {
				t.call(this);
				var n = new s.Sprite(e.resources.spritesheets.ui["Progress_gage.png"]);
				n.anchor.set(.5);
				for (var r = 30.7, a = 16766976, o = 0; o < 4; o++) {
					var h = new s.Graphics;
					h.beginFill(a), h.drawCircle(0, 0, 8.5), h.endFill();
					var c = new s.Graphics;
					c.lineStyle(4, a), c.lineTo(r, 0), h.x = (o - 2) * r, c.x = (o - 2) * r, h.visible = o + 1 <= i, c.visible = o + 2 <= i, n.addChild(c), n.addChild(h)
				}
				var u = new s.Sprite(e.resources.spritesheets.ui["btn_boss_icon.png"]);
				u.anchor.set(.5), u.x = 70, n.addChild(u), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		Ct = function(t) {
			function e(e, i, n, a) {
				var o = this;
				t.call(this), h.stop(e, "bgm");
				var u = new s.Point(e.vars.additional.width / 2, e.vars.additional.height / 2),
					d = new B(e, e.resources.spritesheets.building, i.village),
					p = new s.Container,
					g = new L(e, i.village),
					v = new s.Container,
					C = new f(e, e.resources.spritesheets.ui["btn_d_green.png"], e.resources.spritesheets.ui["btn_pic_volumeon.png"], e.resources.spritesheets.ui["btn_pic_volumeon_off.png"]);
				C.setToggle(e.vars.additional.sound), C.x = e.vars.additional.width - C.width / 2 - 20, C.y = C.height / 2 + 20;
				var b = new f(e, e.resources.spritesheets.ui["btn_d_green.png"], e.resources.spritesheets.ui["btn_pic_help.png"]);
				b.x = e.vars.additional.width - C.width / 2 - 20, b.y = C.height / 2 + 130;
				var y, w = new c(e, 10, -10),
					_ = (i.specialStage === r.BONUS ? (y = new vt(e)).y = -20 : i.specialStage === r.BOSS ? (y = new gt(e)).y = -20 : y = new ft(e, i.stageId % 4 + 1), y);
				_.x = u.x, _.y += e.vars.additional.height - 290;
				var x = function() {
					m.scale(o, _, "playButtonScale", 1, 1.035, .35, m.Ease.quadratic(-4), 2).then((function() {
						return m.timeout(o, .6)
					})).then((function() {
						return x()
					}))
				};
				m.timeout(this, 1).then((function() {
					return x()
				}));
				var k = new f(e, e.resources.spritesheets.ui["btn_d_green.png"], e.resources.spritesheets.ui["btn_pic_present.png"]);
				k.x = e.vars.additional.width - k.width / 2 - 10, k.y = e.vars.additional.height - 290;
				var I = new S(e, i),
					P = new dt(e),
					M = new pt(e);
				if (C.on("buttontap", (function() {
						var t = C.switchToggle();
						e.vars.additional.sound = t
					})), b.on("buttontap", (function() {
						o.emit("tutorial")
					})), k.on("buttontap", (function() {
						I.show()
					})), _.on("buttontap", (function() {
						o.nextScene()
					})), w.on("changeLang", (function(t) {
						o.changeLanguage(t)
					})), d.on("changeCoin", (function(t) {
						if (void 0 === t) g.coin.updateCoin();
						else {
							var i = v.toLocal(t),
								n = new K(e, 3, i, g.coinIconPosition);
							n.once("landing", (function() {
								g.coin.updateCoin()
							})), v.addChild(n)
						}
					})), d.on("flushData", (function() {
						o.emit("flushData")
					})), d.on("built", (function() {
						P.dontTap.interactive = !0
					})), d.on("popup", (function(t) {
						P.showBuilding(t.building, t.first).then((function(e) {
							e && d.set5xStorage(), t.first && t.building.emphasis(!1)
						}))
					})), d.on("construction", (function(t) {
						M.showBuilding(i.village, t)
					})), this.addChild(d), p.addChild(new l(e, .5, 0, 16777215)), p.addChild(C), p.addChild(b), p.addChild(k), p.addChild(_), p.addChild(g), p.addChild(v), p.addChild(w), p.addChild(I), p.addChild(M), p.addChild(P), this.addChild(p), a) {
					p.visible = !1, d.interactiveChildren = !1, d.setCameraView({
						x: 0,
						y: 0,
						s: 1
					});
					var A = new $(e);
					m.timeout(this, 1).then((function() {
						return m.alpha(o, A, "titleCutInAlpha", 1, 0, .3), d.setCameraViewAuto(1)
					})).then((function() {
						return A.destroy(), p.visible = !0, d.interactiveChildren = !0, m.alpha(o, p, "uiAlpha", 0, 1, .3)
					})), this.addChild(A)
				}
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(g),
		bt = function(t) {
			function e(e, i) {
				void 0 === i && (i = 1), t.call(this);
				var n = e.resources.images["header_0" + i];
				this.back = new s.Sprite(n), this.back.scale.set(2), this.addChild(this.back)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container);
	bt.skin = 0;
	var yt = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this), this.$ = e, this.layor = 0, this.selected = !1, this.weight = 0, this._enable = !1, this._show = !0, this._exist = !0, this._show = i, this.effectContainer = new s.Container, this.brightContainer = new s.Container, this.mainContainer = new s.Container, this.pos = new s.Point, this.body = new s.Sprite(e.resources.spritesheets.ui["card_base.png"]), this.black = new s.Sprite(e.resources.spritesheets.ui["card_base.png"]), this.text = new s.Sprite(e.resources.spritesheets.number["card_" + n + ".png"]);
				var a = new s.Sprite(e.resources.spritesheets.ui["card_white_light.png"]),
					o = new s.Sprite(e.resources.spritesheets.ui["card_white.png"]);
				a.anchor.set(.5), o.anchor.set(.5), this.brightContainer.addChild(a), this.brightContainer.addChild(o), this.black.tint = 0, this.black.alpha = .35, this.brightContainer.visible = !1, this.text.anchor.set(.5), this.text.position.set(this.body.width / 2, this.body.height / 2), this.collider = new s.Graphics, this.collider.beginFill(255, .5);
				this.collider.drawRect(0, 0, this.body.width + 0, this.body.height + 0), this.collider.endFill(), this.collider.position.set(-0), this.collider.alpha = 0, this.collider.interactive = !0, this._number = n, this.show = this._show, this.enable = !1, this.collider.on("pointertap", (function() {
					r.emit("tap", r._number)
				})), this.mainContainer.addChild(this.body), this.mainContainer.addChild(this.text), this.mainContainer.addChild(this.black), this.mainContainer.addChild(this.collider), this.addChild(this.mainContainer), this.effectContainer.addChild(this.brightContainer), this.addChild(this.effectContainer), this.mainContainer.pivot.set(this.mainContainer.width / 2, this.mainContainer.height / 2), this.mainContainer.position = this.mainContainer.pivot.clone(), this.effectContainer.position = this.mainContainer.pivot.clone()
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				number: {
					configurable: !0
				},
				enable: {
					configurable: !0
				},
				preWhite: {
					configurable: !0
				},
				show: {
					configurable: !0
				},
				exist: {
					configurable: !0
				}
			};
			return i.number.get = function() {
				return this._number
			}, i.number.set = function(t) {
				this._number = t, this.text.texture = this.$.resources.spritesheets.number["card_" + t + ".png"]
			}, i.enable.get = function() {
				return this._enable
			}, i.enable.set = function(t) {
				t && !this._show && (this.show = !0), this._enable = t, this.black.visible = !t
			}, i.preWhite.set = function(t) {
				this.black.visible = !t && !(this._enable || this.selected)
			}, e.prototype.bright = function() {
				return this.brightContainer.visible = !0, m.alpha(this, this.brightContainer, "bright", 0, 1, .15)
			}, e.prototype.set10 = function() {
				var t = new s.Sprite(this.$.resources.spritesheets.number["card_10.png"]);
				return t.anchor.set(.5), this.brightContainer.addChild(t), m.alpha(this, this, "alpha", 1, 0, .4)
			}, e.prototype.flushNumber = function(t) {
				var e = this;
				this._number = t;
				return m.alpha(this, this.text, "textAlpha", 1, 0, .33).then((function() {
					return e.text.texture = e.$.resources.spritesheets.number["card_" + t + ".png"], m.alpha(e, e.text, "textAlpha", 0, 1, .33)
				}))
			}, e.prototype.break = function() {
				return m.scaleX(this, this.mainContainer, "mainScale", 1, 0, .15)
			}, i.show.set = function(t) {
				this._show = t;
				var e = t ? "card_base.png" : "card_back.png";
				this.body.texture = this.$.resources.spritesheets.ui[e], this.text.visible = t
			}, e.prototype.select = function() {
				this.selected = !0, this._enable = !1
			}, i.exist.get = function() {
				return this._exist
			}, e.prototype.clear = function() {
				this._exist = !1
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		wt = function() {};
	wt.compress = function(t) {
		for (var e = function(t) {
				return wt.ZERO_CODE[t - 1]
			}, i = "", n = 0; n < t.length; n++) {
			for (var r = 0, a = 0; a < t[n].length; a++) {
				var s = t[n][a];
				if (0 !== s) r > 0 && (i += e(r), r = 0), i += s.toString(16).toUpperCase(), a < t[n].length - 1 && t[n][a + 1] > 0 && (i += wt.NUMBER_SPLIT);
				else if (r++, a === t[n].length - 1) {
					i += e(r);
					break
				}
			}
			n < t.length - 1 && (i += wt.PLANE_SPLIT, r = 0)
		}
		return i
	}, wt.decompress = function(t) {
		for (var e = function(t) {
				return wt.ZERO_CODE.indexOf(t) + 1
			}, i = [], n = t.split(wt.PLANE_SPLIT), r = 0; r < n.length; r++) {
			for (var a = n[r].split(""), s = 0; s < a.length - 1; s++) {
				var o = a[s],
					h = a[s + 1];
				0 === e(o) && 0 === e(h) && (a[s] = a[s] + a[s + 1], a.splice(s + 1, 1), s--)
			}
			for (var c = [], u = 0; u < a.length; u++)
				for (var l = a[u].split(wt.NUMBER_SPLIT), d = 0; d < l.length; d++) c.push(l[d]);
			for (var p = c.filter((function(t) {
					return t.length > 0
				})), f = [], g = 0; g < p.length; g++) {
				var v = p[g],
					m = e(v);
				if (0 === m) {
					var C = parseInt(v, 16);
					f.push(C)
				} else
					for (var b = 0; b < m; b++) f.push(0)
			}
			i.push(f)
		}
		return i
	}, wt.ZERO_CODE = "GHIJKLMNOPQRSTUVW", wt.NUMBER_SPLIT = "X", wt.PLANE_SPLIT = "Y";
	var _t = function() {};
	_t.size = function(t) {
		for (var e = 0, i = t.length, n = 0; n < i; n++) {
			var r = Math.floor(Math.log2(t[n])) + 1;
			r > e && (e = r)
		}
		return new PIXI.Point(e, i)
	}, _t.makeArray = function(t, e, i) {
		void 0 === i && (i = !1);
		for (var n = [], r = 0; r < e; r++) {
			for (var a = [], s = 0; s < t; s++) a.push(i);
			n.push(a)
		}
		return n
	}, _t.convertArray2D = function(t, e) {
		void 0 === e && (e = 0);
		for (var i = _t.size(t), n = _t.makeArray(i.x, i.y), r = 0; r < i.y; r++)
			for (var a = Math.max(i.x, e), s = 0; s < a; s++) n[r][s] = Boolean((t[r] >> a - 1 - s) % 2);
		return n
	}, _t.convertNumbers = function(t) {
		for (var e = function(t) {
				for (var e = 0, i = 0; i < t.length; i++) e |= Number(t[i]) << t.length - 1 - i;
				return e
			}, i = [], n = 0; n < t.length; n++) i.push(e(t[n]));
		return i
	};
	var xt = function(t) {
			function e(e, i) {
				var n = this;
				void 0 === i && (i = function() {}), t.call(this), this.animate = new o.Container, this.animate.scale.set(2), this.cjs = this.animate.addCreatejs(e), this.cjs.on("endAnimation", (function() {
					n.animate.task.clear(), n.animate.destroy(), i()
				})), this.addChild(this.animate)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		St = function(t) {
			function e(e, i, n, r) {
				void 0 === n && (n = 100), void 0 === r && (r = 0), t.call(this), this.info = i, this.gauge = new s.Container, this.header = new s.Sprite(e), this._max = n, this._value = r, this.main = new s.Container, this.startCircle = new s.Graphics, this.betweenRect = new s.Graphics, this.endCircle = new s.Graphics;
				var a = i.radius;
				this.startCircle.beginFill(i.color), this.startCircle.drawCircle(a, 0, a), this.startCircle.endFill(), this.rectMaxLength = this.header.width - 2 * (a + i.marginX), this.betweenRect.beginFill(i.color), this.betweenRect.drawRect(0, -a, this.rectMaxLength, 2 * a), this.betweenRect.endFill(), this.betweenRect.x = a, this.endCircle.beginFill(i.color), this.endCircle.drawCircle(a, 0, a), this.endCircle.endFill(), this.endCircle.x = this.betweenRect.width, this.main.addChild(this.betweenRect), this.main.addChild(this.startCircle), this.main.addChild(this.endCircle), this.main.pivot.x = this.betweenRect.x + this.betweenRect.width / 2, this.header.anchor.set(.5), this.mainMask = new s.Graphics, this.mainMask.beginFill(255, .3), this.mainMask.drawRect(0, 0, this.main.width, this.main.height), this.mainMask.endFill(), this.mainMask.pivot.y = this.mainMask.height / 2, this.mainMask.x = -this.mainMask.width / 2, this.main.mask = this.mainMask, this.gauge.addChild(this.header), this.gauge.addChild(this.main), this.gauge.addChild(this.mainMask), this.addChild(this.gauge), this.updateGauge()
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				max: {
					configurable: !0
				},
				rate: {
					configurable: !0
				}
			};
			return e.prototype.updateGauge = function() {
				var t = this.rate;
				this.mainMask.scale.x = t;
				var e = 2 * this.info.radius,
					i = e / (this.rectMaxLength + e);
				if (t > i) {
					var n = (t - i) / (1 - i);
					this.betweenRect.width = this.rectMaxLength * n
				} else this.betweenRect.width = 0;
				this.endCircle.x = this.betweenRect.width
			}, i.max.get = function() {
				return this._max
			}, i.max.set = function(t) {
				this._max = t, this.updateGauge()
			}, e.prototype.getValue = function() {
				return this._value
			}, e.prototype.setValue = function(t) {
				this._value = t, this.updateGauge()
			}, i.rate.get = function() {
				if (0 === this.max) return this._value >= this.max ? 1 : 0;
				var t = this._value / this._max;
				return t > 1 ? 1 : t < 0 ? 0 : t
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		kt = function(t) {
			function e(e) {
				var i = this;
				t.call(this), this.$ = e, this.stopFilter = function() {
					return !1
				}, this._count = 0, this._pause = !1, this.remainTime = 0, this.remainTimeStart = 0, this.stars = [], this.characters = [], this.comboStarBackground = new Pt(e), this.mainContainer = new PIXI.Container, this.characterContainer = new PIXI.Container, this.mainContainer.position.set(e.vars.additional.width / 2, e.vars.additional.height - 235), this.starContainer = new PIXI.Container, this.starContainer.alpha = 0;
				for (var n = 0; n < 4; n++) this.stars.push(new PIXI.Sprite);
				this.stars.forEach((function(t) {
					t.scale.set(.5), t.anchor.set(.5), i.starContainer.addChild(t)
				})), this.stars[0].position.set(-80, -30), this.stars[1].position.set(-90, -10), this.stars[2].position.set(-this.stars[0].x, this.stars[0].y), this.stars[3].position.set(-this.stars[1].x, this.stars[1].y), this.halfCircleLight = new PIXI.Sprite(e.resources.images.effect_half_circle), this.gaugeContainer = new PIXI.Container, this.textContainer = new PIXI.Container, this.number = new v(e.resources.spritesheets.number, "num_b_", ".png"), this.text = new PIXI.Sprite(e.resources.spritesheets.ui["text_combo.png"]), this.gauge = new St(e.resources.spritesheets.ui["conbo_back.png"], {
					color: 16766976,
					radius: 5,
					marginX: 3
				}, 1), this.halfCircleLight.anchor.set(.5, 1), this.number.anchor.set(0, 1), this.text.anchor.set(0, 1), this.number.padding = -5, this.textContainer.y = -15, this.gaugeContainer.y = 40, this.starContainer.y = this.gaugeContainer.y, this.halfCircleLight.y = 60, this.characterContainer.y = 60, this.gaugeContainer.alpha = 0, this.halfCircleLight.alpha = 0;
				this.task.on("timer", (function(t) {
					var e = t.delta / 60,
						n = i._count;
					i.remainTime <= 0 ? i._count = 0 : (i.remainTime >= .5 && i.remainTime - e < .5 ? i._count > 0 && m.alpha(i, i.gaugeContainer, "alpha", 1, 0, .5) : i.remainTime >= 0 && i.remainTime - e < 0 && i.finishCombo(n), i.gauge.setValue(i.remainTime), i.stopFilter() || i._pause || (i.remainTime -= e))
				})), this.addChild(this.comboStarBackground), this.mainContainer.addChild(this.halfCircleLight), this.mainContainer.addChild(this.halfCircleLight), this.mainContainer.addChild(this.characterContainer), this.mainContainer.addChild(this.starContainer), this.textContainer.addChild(this.text), this.textContainer.addChild(this.number), this.gaugeContainer.addChild(this.gauge), this.gaugeContainer.addChild(this.textContainer), this.mainContainer.addChild(this.gaugeContainer), this.addChild(this.mainContainer), this.updateText()
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				count: {
					configurable: !0
				},
				pause: {
					configurable: !0
				}
			};
			return e.prototype.updateText = function() {
				this.text.x = this.number.width + 5, this.textContainer.pivot.x = this.textContainer.width / 2
			}, e.prototype.finishCombo = function(t) {
				var e = this,
					i = function() {
						e.emit("endCombo")
					};
				t % 4 == 0 ? i() : (this.characters.forEach((function(t) {
					return t.hide()
				})), m.timeout(this, .6, "characterAlpha").then((function() {
					return i(), m.alpha(e, e.characterContainer, "characterAlpha", 1, 0, .3)
				})))
			}, e.prototype.forceEndCombo = function() {
				this._count = 0, this.finishCombo(this._count)
			}, e.prototype.combo = function(t) {
				var e = this;
				void 0 === t && (t = 0);
				var i = this._count;
				this.remainTime = Math.max(-3 * this._count / 9 + 5, 2) + t, this.remainTimeStart = this.remainTime, this._count++, this.gauge.max = this.remainTimeStart, this.number.number = this._count, this.updateText();
				for (var n = E.bool(), r = this.$.resources.spritesheets.ui["starr1_y.png"], a = this.$.resources.spritesheets.ui["starr2_y.png"], s = n ? r : a, o = n ? a : r, h = 0; h < this.stars.length; h++) {
					this.stars[h].texture = 1 === h || 2 === h ? o : s
				}
				this.comboStarBackground.show(this._count), m.alpha(this, this.comboStarBackground, "comboStarBackAlpha", 1, 0, this.remainTimeStart, m.Ease.accel);
				e.task.clear("alpha"), e.gaugeContainer.alpha = 1, m.alpha(e, e.halfCircleLight, "halfCircleAlpha", 0, 1, .15).then((function() {
						return m.alpha(e, e.halfCircleLight, "halfCircleAlpha", 1, 0, .4)
					})), e.starContainer.alpha = 1, m.scale(e, e.starContainer, "effectScale", 1, 1.15, .5), m.timeout(e, .166).then((function() {
						return m.alpha(e, e.starContainer, "effectAlpha", 1, 0, .333)
					})),
					function() {
						var t = i % 4;
						if (0 === t) {
							e.characters.splice(0), e.characterContainer.removeChildren(), e.task.clear("hideWait"), e.task.clear("characterAlpha"), e.characterContainer.alpha = 1;
							for (var n = w.shuffle(["bird", "cat", "cow", "deer", "dog", "elephant", "fox", "giraffe", "mouth", "pig", "rabbit", "rhino", "squirrel"]), r = 0; r < 3; r++) {
								var a = new Mt(e.$, n[r]);
								a.scale.set(.7), r > 0 && (a.x = 150 * (1 === r ? 1 : -1)), a.visible = !1, e.characterContainer.addChildAt(a, 0), e.characters.push(a)
							}
						}
						if (t < 3) {
							e.characters[t].visible = !0;
							for (var s = E.sign(), o = 0; o <= t; o++) e.characters[o].show(s)
						} else e.characters[0].hide(), m.timeout(e, .1, "hideWait").then((function() {
							e.characters[1].hide(), e.characters[2].hide()
						})), m.timeout(e, 1, "characterAlpha").then((function() {
							return m.alpha(e, e.characterContainer, "characterAlpha", 1, 0, .3)
						}))
					}()
			}, i.count.get = function() {
				return this._count
			}, i.pause.get = function() {
				return this._pause
			}, i.pause.set = function(t) {
				this._pause = t
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		It = function(t) {
			function e(e, i, n) {
				t.call(this);
				var r = new PIXI.Container,
					a = n ? "starr1_y.png" : "starr2_y.png",
					s = new PIXI.Sprite(e.resources.spritesheets.ui[a]);
				s.anchor.set(.5), s.scale.set(i ? 2 : 1), m.scale(this, r, "beat", 1, 1.1, .5, m.Ease.cubic, 0), r.addChild(s), this.addChild(r)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		Pt = function(t) {
			function e(e) {
				t.call(this), this.stars = [], this.layers = [];
				for (var i = [
						[{
							x: 40,
							y: 790,
							l: !1,
							f: !1
						}, {
							x: 697,
							y: 896,
							l: !1,
							f: !0
						}, {
							x: 45,
							y: 1176,
							l: !1,
							f: !1
						}],
						[{
							x: 542,
							y: 131,
							l: !0,
							f: !0
						}, {
							x: 560,
							y: 210,
							l: !1,
							f: !0
						}, {
							x: 89,
							y: 222,
							l: !0,
							f: !1
						}, {
							x: 713,
							y: 463,
							l: !0,
							f: !1
						}, {
							x: -2,
							y: 649,
							l: !0,
							f: !0
						}, {
							x: 643,
							y: 955,
							l: !0,
							f: !1
						}, {
							x: 119,
							y: 1249,
							l: !1,
							f: !0
						}],
						[{
							x: 195,
							y: 50,
							l: !0,
							f: !0
						}, {
							x: 119,
							y: 112,
							l: !1,
							f: !0
						}, {
							x: 678,
							y: 126,
							l: !0,
							f: !1
						}, {
							x: 202,
							y: 236,
							l: !1,
							f: !0
						}, {
							x: 725,
							y: 270,
							l: !1,
							f: !0
						}, {
							x: 17,
							y: 431,
							l: !1,
							f: !0
						}, {
							x: 722,
							y: 714,
							l: !0,
							f: !0
						}, {
							x: 97,
							y: 994,
							l: !0,
							f: !1
						}, {
							x: 268,
							y: 1267,
							l: !0,
							f: !1
						}, {
							x: 607,
							y: 1262,
							l: !0,
							f: !0
						}]
					], n = 0; n < i.length; n++) {
					var r = i[n],
						s = new a.Container;
					s.alpha = 0;
					for (var o = [], h = 0; h < r.length; h++) {
						var c = r[h],
							u = new It(e, c.l, c.f);
						u.position.set(c.x, c.y), s.addChild(u), o.push(u)
					}
					this.addChild(s), this.layers.push(s), this.stars.push(o)
				}
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.show = function(t) {
				var e = this,
					i = function(t) {
						e.stars.forEach((function(e) {
							e.forEach((function(e) {
								return e.scale.set(t)
							}))
						}))
					};
				if (0 === t) this.layers.forEach((function(t) {
					m.alpha(t, t, "alpha", t.alpha, 0, .3)
				}));
				else if (t <= 3) {
					var n = t - 1;
					this.layers[n];
					for (var r = 0; r < this.layers.length; r++) this.layers[r].alpha = r <= n ? 1 : 0;
					for (var a = function(t) {
							e.stars[t].forEach((function(e) {
								var i = E.float(360),
									r = 200 * E.sign();
								m.rotate(e, e, "rotate", i + r, i, .3, m.Ease.decel), t === n && m.scale(e, e, "scale", 0, 1, .3, m.Ease.quadratic(-2))
							}))
						}, s = 0; s < e.stars.length; s++) a(s)
				} else {
					for (var o = 0; o < this.stars.length; o++) {
						this.stars[o].forEach((function(t) {
							var e = E.float(360),
								i = 200 * E.sign();
							m.rotate(t, t, "rotate", e + i, e, .3, m.Ease.decel)
						}))
					}
					m.tween(this, "starsScale", .75, 1.3, .1, i, m.Ease.accel2), m.tween(this, "starsScale", .75, 1.3, .1, i, m.Ease.accel2).then((function() {
						return m.tween(e, "starsScale", 1.3, .85, .15, i, m.Ease.cubic)
					})).then((function() {
						return m.tween(e, "starsScale", .85, 1, .05, i, m.Ease.decel)
					}))
				}
			}, e
		}(a.Container),
		Mt = function(t) {
			function e(e, i) {
				t.call(this), this.$ = e, this.animalName = i;
				var n = new PIXI.Container;
				this.sprite = new PIXI.Sprite(e.resources.spritesheets.character[this.animalName + "04.png"]), this.sprite.anchor.set(.5, 1);
				this.sprite.height > 300 && n.scale.set(300 / this.sprite.height), n.addChild(this.sprite), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resetShow = function() {
				this.sprite.position.set(0), this.sprite.rotation = 0, this.task.clear("spriteRot"), this.task.clear("spriteScale")
			}, e.prototype.show = function(t) {
				var e = this;
				void 0 === t && (t = 1), this.resetShow();
				var i = this.$.resources.sounds.bgm,
					n = i.duration() / 8,
					r = 8 * t;
				m.scale(this, this.sprite, "spriteScale", .8, 1, .3, m.Ease.decel), m.vector(this, this.sprite, "spriteMove", new PIXI.Point(0, -40), .3, m.Ease.decel).then((function() {
					return m.vector(e, e.sprite, "spriteMove", new PIXI.Point(0, 40), .15).then((function() {
						var t = i.seek() / i.duration() * 8,
							a = n * (1 - t % 1);
						m.scaleY(e, e.sprite, "spriteScale", 1, .95, a, m.Ease.accel), m.rotate(e, e.sprite, "spriteRot", 0, r, a), setTimeout((function() {
							m.scaleY(e, e.sprite, "spriteScale", .95, 1, n / 2, m.Ease.decel, 0), m.rotate(e, e.sprite, "spriteRot", r, -r, n, m.Ease.linear, 0)
						}), 1e3 * a)
					}))
				}))
			}, e.prototype.hide = function() {
				var t = this;
				this.resetShow();
				m.vector(this, this.sprite, "spriteMove", new PIXI.Point(0, -40), .15, m.Ease.decel).then((function() {
					return t.sprite.texture = t.$.resources.spritesheets.character[t.animalName + "03.png"], m.vector(t, t.sprite, "spriteMove", new PIXI.Point(0, 40), .15, m.Ease.accel)
				})).then((function() {
					return m.scaleY(t, t.sprite, "spriteScale", 1, .9, .05)
				})).then((function() {
					return m.scaleY(t, t.sprite, "spriteScale", t.sprite.scale.y, 1, .25)
				}))
			}, e
		}(a.Container),
		At = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this), this.$ = e, this.gameData = i;
				var a = new PIXI.Sprite(e.resources.spritesheets.ui["text_goal.png"]);
				a.anchor.set(.5), a.y = -50, this.gauge = new St(e.resources.spritesheets.ui["goal_back.png"], {
					color: 15218768,
					radius: 21,
					marginX: 4
				}, n), this.infoContainer = new PIXI.Container, this.icon = new PIXI.Sprite(e.resources.spritesheets.ui["pic_coin.png"]), this.score = new v(e.resources.spritesheets.number, "num_", ".png", 0);
				var s = new PIXI.Sprite(e.resources.spritesheets.number["num_slash.png"]),
					o = new v(e.resources.spritesheets.number, "num_", ".png", n);
				this.score.margin = 2, o.margin = 2, this.icon.anchor.set(.5), this.score.anchor.set(n > 0 ? 1 : .5, .5), s.anchor.set(.5, .5), o.anchor.set(0, .5), this.score.scale.set(.95), o.scale.set(.95), this.icon.x = -119, o.x = 14, this.score.x = n > 0 ? -o.x : 0, this.addChild(a), this.addChild(this.gauge), this.score.on("clocking", (function(t) {
					r.gauge.setValue(t)
				})), this.infoContainer.addChild(this.icon), n > 0 && (this.infoContainer.addChild(s), this.infoContainer.addChild(o)), this.infoContainer.addChild(this.score), this.addChild(this.infoContainer)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				iconPosition: {
					configurable: !0
				}
			};
			return i.iconPosition.get = function() {
				return this.infoContainer.toGlobal(this.icon)
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		Et = function(t) {
			function e(i, n, r, o, h, c) {
				t.call(this), this.$ = i, this.gameData = n, this.getCardNumbers = h, this.layorContainer = [], this.cards = [], this.selects = [], this._selectLimit = 6, this._remainCount = 0, this._startRemain = 0, this.selectFrames = [], this.selectedMargin = 80, this.hammerMode = !1, this._norma = 100, this.spCombis = [{
					id: 0,
					name: "ストレート",
					combi: [1, 2, 3, 4],
					score: 200
				}, {
					id: 1,
					name: "ファイブカード",
					combi: [2, 2, 2, 2, 2],
					score: 300
				}], this.cardContainer = new s.Container, this.cardContainer.pivot.set(293.5, 373), this.cardContainer.position.set(i.vars.additional.width / 2, i.vars.additional.height / 2 - 80), this.selectContainer = new s.Container, this.selectContainer.x = i.vars.additional.width / 2, i.vars.env.isAdPlatform || (this.selectContainer.x += this.selectedMargin / 2), this.selectContainer.y = i.vars.additional.height - 100;
				for (var u = 0; u < 7; u++) {
					var l = new s.Sprite(i.resources.spritesheets.ui["card_hand.png"]);
					l.anchor.set(.5), l.alpha = .55, l.x = (u - 3) * this.selectedMargin, l.visible = u < 6, this.selectContainer.addChild(l), this.selectFrames.push(l)
				}
				this.deployContainer = new s.Container, this.addItemBack = new C(i, 0, .65), this.addItemBack.interactive = !0, this.addItemBack.visible = !1, this.hammerItemBack = new C(i, 0, .65), this.hammerItemBack.interactive = !0, this.hammerItemBack.visible = !1, this.clearCardEffectContainer = new s.Container, this.clearCardEffectContainer.x = this.selectContainer.x + 40, this.clearCardEffectContainer.y = this.selectContainer.y - 20, this.sumSprite = new R(i), this.sumSprite.y = i.vars.additional.height - 200, this.gotCoinSprite = new F(i), this.gotCoinSprite.y = i.vars.additional.height - 155;
				var d = e.countCards(r.map);
				this.generateMap(wt.decompress(r.map), this.getCardNumbers(d), c);
				for (var p = 0; p < this.cards.length; p++) this.layorContainer.push(new s.Container);
				var f = this.getAllCards();
				this._remainCount = f.length, this._startRemain = this._remainCount, this._norma = o, this.combo = new kt(i), this.goal = new At(i, n, this._norma), this.goal.position.set(i.vars.additional.width / 2, 85), this.spreadCoinContainer = new a.Container;
				for (var g = f.length - 1; g >= 0; g--) this.deployContainer.addChild(f[g]);
				this.cardContainer.addChild(this.deployContainer);
				for (var v = 0; v < this.layorContainer.length; v++) this.cardContainer.addChild(this.layorContainer[v]);
				this.addChild(this.hammerItemBack), this.addChild(this.cardContainer), this.addChild(this.addItemBack), this.addChild(this.selectContainer), this.addChild(this.clearCardEffectContainer), this.addChild(this.sumSprite), this.addChild(this.gotCoinSprite), this.addChild(this.goal), this.addChild(this.spreadCoinContainer)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				remainCount: {
					configurable: !0
				},
				erasedCount: {
					configurable: !0
				},
				isSelectsFilled: {
					configurable: !0
				},
				isClear: {
					configurable: !0
				}
			};
			return e.prototype.getCardPosition = function(t) {
				var e = this.cardContainer.toGlobal(t);
				return e.x *= 2, e.y *= 2, e.x += t.width / 2, e.y += t.height / 2, e
			}, e.countCards = function(t) {
				for (var e = wt.decompress(t), i = 0, n = 0; n < e.length; n++)
					for (var r = _t.convertArray2D(e[n], 13), a = 0; a < r.length; a++)
						for (var s = 0; s < r[a].length; s++) r[a][s] && i++;
				return i
			}, e.prototype.generateMap = function(t, e, i) {
				for (var n = this, r = 0, a = .05, o = 0; o < t.length; o++) {
					for (var c = this.makeCardsArray(), u = _t.convertArray2D(t[o], 13), l = function(t) {
							for (var l = function(l) {
									if (u[t][l]) {
										var d = e[r % e.length],
											p = Math.random() > i,
											f = new yt(n.$, p, d),
											g = r;
										f.position = n.cardContainer.toLocal(new s.Point(n.$.vars.additional.width / 2 - f.width / 2, .82 * n.$.vars.additional.height - f.height / 2)), setTimeout((function() {
											h.play(n.$, "draw", .2)
										}), g * a * 1e3), m.timeout(n, g * a).then((function() {
											var e = new s.Point((f.width / 2 + 4) * l, (f.height / 2 + 2) * t);
											return m.moveTo(f, f, "startDeploy", e, .2, m.Ease.decel), m.timeout(n, a)
										})).then((function() {
											n.deployContainer.setChildIndex(f, g)
										})), f.pos = new s.Point(l, t), f.layor = o, f.on("tap", (function() {
											if (!n.hammerMode || f.selected) {
												if (f.enable && !f.selected && !n.isSelectsFilled) {
													h.play(n.$, "draw");
													for (var t = [], e = 0; e < n.selects.length; e++) t.push(n.selects[e].number);
													t.push(f.number), n.canMake10Combination(t) && (n.combo.pause = !0), n.select(f).then((function() {
														return n.actionCard(f), !!n.clearSelect() && (n.interactiveChildren = !1, !0)
													}))
												}
											} else n.useHammer(f)
										})), c[t][l] = f, r++
									}
								}, d = 0; d < u[t].length; d++) l(d)
						}, d = 0; d < u.length; d++) l(d);
					this.cards.push(c)
				}
				m.timeout(this, r * a + .1).then((function() {
					n.cardContainer.removeChild(n.deployContainer), n.deployContainer.destroy(), n.includeCardsInLayers(), n.emit("endDeploy")
				}));
				for (var p = 0; p < this.cards.length; p++)
					for (var f = 0; f < this.cards[0].length; f++)
						for (var g = 0; g < this.cards[0][0].length; g++) {
							var v = this.cards[p][f][g];
							if (null !== v) 0 === this.getCardsAround9(g, f, p, !0).length && (v.enable = !0)
						}
			}, e.prototype.select = function(t) {
				var e = this;
				return new Promise((function(i) {
					e.emit("select"), e.interactiveChildren = !1, t.select();
					var n = e.cardContainer.toGlobal(t.position);
					e.cardContainer.removeChild(t), e.selectContainer.addChild(t), t.pivot.set(t.width / 2, t.height / 2);
					var r = e.selectContainer.toLocal(n);
					r.x += t.pivot.x, r.y += t.pivot.y;
					var a = e.nextSelectPos();
					e.selects.push(t), t.position = r;
					t.scale.set(1.1), m.tween(t, "move", 0, 1, .16, (function(e) {
						t.x = a.x * e + r.x * (1 - e), t.y = a.y * e + r.y * (1 - e), t.scale.set((1 - e) * (1.1 - 1) + 1)
					}), m.Ease.accel).then((function() {
						t.pivot.set(0), t.x -= t.width / 2, t.y -= t.height / 2, e.interactiveChildren = !0, i()
					}))
				}))
			}, e.prototype.clearSelect = function() {
				for (var t = this, e = [], i = 0; i < this.selects.length; i++) e.push(this.selects[i].number);
				for (var n = this.getAllCards(), r = [], a = 0; a < n.length; a++) {
					var o = n[a];
					o.enable && !o.selected && r.push(o.number)
				}
				var c = function() {
						if (n.every((function(t) {
								return t.enable || t.selected
							}))) {
							if (r.length < 12) {
								for (var e = [], i = 1; i < Math.pow(2, r.length); i++) {
									var a = i;
									if (y = a, !((16843009 * ((y = (858993459 & (y -= y >> 1 & 1431655765)) + (y >> 2 & 858993459)) + (y >> 4) & 252645135) >> 24) + t.selects.length > t._selectLimit)) {
										for (var s = [], o = 0; o < r.length; o++) a % 2 == 1 && s.push(r[o]), a >>= 1;
										e.push(s)
									}
								}
								for (var h = [], c = 0; c < t.selects.length; c++) h.push(t.selects[c].number);
								for (var u = 0; u < e.length; u++) {
									var l = h.concat(e[u]);
									if (t.canMake10Combination(l)) return !1
								}
							} else {
								for (var d = function(t, e) {
										for (var i = [], n = [], r = 0; r < t; r++) n.push(r);
										var a = function(t, e, n) {
											for (var r = 0; r < t.length; r++)
												if (1 !== n) {
													var s = t.concat();
													s.splice(r, 1), a(s, e.concat(t[r]), n - 1)
												} else i.push(e.concat(t[r]))
										};
										return a(n, [], e), i
									}, p = [], f = 0; f < t.selects.length; f++) p.push(t.selects[f].number);
								for (var g = 1; g <= t._selectLimit - t.selects.length; g++)
									for (var v = d(r.length, g), m = 0; m < v.length; m++) {
										for (var C = p.concat(), b = 0; b < v[m].length; b++) C.push(r[v[m][b]]);
										if (t.canMake10Combination(C)) return !1
									}
							}
							return !0
						}
						var y;
						return !1
					},
					u = this.get10Combination(e);
				if (this.emit("take", u.length > 0), 0 === u.length) return this.isSelectsFilled || this._remainCount === this.selects.length ? this.emit("gameover", "filled") : c() ? this.emit("gameover", "force") : this.selects.length === this._selectLimit - 1 && r.every((function(i) {
					var n = e.concat();
					return n.push(i), !t.canMake10Combination(n)
				})) && this.emit("gameover", "soft"), !1;
				var l = function() {
					for (var e = -1, i = t.spCombis.length - 1; i >= 0; i--) {
						var n = t.spCombis[i].combi;
						if (u.length === n.length) {
							for (var r = [], a = 0; a < u.length; a++) r.push(t.selects[u[a]].number);
							r.sort((function(t, e) {
								return t - e
							})), n.sort((function(t, e) {
								return t - e
							}));
							for (var s = !0, o = 0; o < r.length; o++)
								if (r[o] !== n[o]) {
									s = !1;
									break
								} s && (e = i)
						}
					}
					return e
				}();
				if (-1 !== l) {
					var d;
					switch (l) {
						case 0:
							d = new this.$.resources.animates.special_combi.straight;
							break;
						case 1:
							d = new this.$.resources.animates.special_combi.five_of_a_kind
					}
					var p = new xt(d);
					this.addChild(p), m.timeout(this, .25).then((function() {
						h.play(t.$, "hand")
					}))
				}
				h.play(this.$, "mix");
				var f = 10 * (this.combo.count + 1);
				return u.length > 2 && (f += 50 * (u.length - 2) - 10), l >= 0 && (f += this.spCombis[l].score), this.together(u, (function(e) {
					var i = new s.Point;
					i.x = t.selectContainer.x + e + 40, i.y = t.$.vars.additional.height - 110, t.gotCoinSprite.x = t.selectContainer.x + e + 36, t.gotCoinSprite.generate(f), t.combo.pause && (t.combo.pause = !1);
					var n = l >= 0 ? 1.5 : 0;
					t.combo.combo(n), t.addScore(f), t.emit("erase", {
						combo: t.combo.count,
						point: f
					});
					var r = t.toLocal(t.goal.iconPosition),
						a = Math.min(Math.floor(f / 10), 16),
						o = new K(t.$, a, i, r);
					m.alpha(t.spreadCoinContainer, o, "coinsAlpha", 0, 1, .2), t.spreadCoinContainer.addChild(o);
					var h = new q(t.$, f);
					h.x = e, t.clearCardEffectContainer.addChild(h), t.interactiveChildren = !0, t.canMake10CombinationAllCards() || (t.isClear ? (t.interactiveChildren = !1, t.emit("gameclear")) : c() && t.emit("gameover", "force"))
				})), !0
			}, e.prototype.shiftLeft = function(t, e) {
				m.vector(t, t, "shiftLeft", new s.Point(-this.selectedMargin * e, 0), .1)
			}, e.prototype.together = function(t, e) {
				var i = this;
				void 0 === e && (e = function() {});
				for (var n = [], r = 0; r < t.length; r++) n.push(this.selects[t[r]]);
				for (var a = 1, c = Math.pow(2, 1 / 12), u = 0; u < this.combo.count && u < 9; u++) a *= c;
				for (var l = t.length - 1, d = (this.selects[t[0]].x + this.selects[t[l]].x) / 2, p = [], f = 0; f < t.length; f++) p.push(this.selects[t[f]].number);
				this.sumSprite.x = this.selectContainer.x + d + 36, this.sumSprite.generate(p);
				var g = new o.Container;
				g.addCreatejs(new this.$.resources.animates.erase_effect.effect), this.selectContainer.addChild(g), g.scale.set(1.75), g.alpha = 0, g.x = d + 40 - g.width / 2, g.y = -g.height / 2 - 20, n.forEach((function(t) {
					i.selectContainer.setChildIndex(t, i.selectContainer.children.length - 1)
				}));
				for (var v = function(r) {
						var o = i.selects[t[r]];
						o.clear(), m.vector(o, o, "float", new s.Point(0, -15), .16).then((function() {
							return m.timeout(i, .16)
						})).then((function() {
							if (m.tween(o, "concat", o.x, d, .16, (function(t) {
									return o.x = t
								}), m.Ease.decel), r !== l) o.bright().then((function() {
								return o.visible = !1
							}));
							else {
								for (var s = 0, c = [], u = 0; u < i.selects.length; u++) s >= t.length || u !== t[s] ? c.push(0) : (c.push(-1), s++);
								for (var p = 0, f = 0; f < c.length; f++) - 1 === c[f] ? p++ : c[f] = p;
								for (var v = 0; v < i.selects.length; v++) - 1 !== c[v] && i.shiftLeft(i.selects[v], c[v]);
								o.bright().then((function() {
									i._remainCount -= t.length,
										function(t) {
											h.play(i.$, "pop", 1, a), n.forEach((function(t) {
												return i.unselectCard(t)
											})), t.set10().then((function() {
												n.forEach((function(t) {
													return i.destroyCard(t)
												}))
											}))
										}(o), e(d)
								}));
								var C = .166;
								m.alpha(g, g, "eraseEffectAlpha", 0, 1, C).then((function() {
									return m.timeout(g, .332)
								})).then((function() {
									return m.alpha(g, g, "eraseEffectAlpha", 1, 0, .498)
								})).then((function() {
									g.task.clear(), g.destroy()
								}))
							}
						}))
					}, C = 0; C < t.length; C++) v(C)
			}, e.prototype.destroyCard = function(t) {
				t.clear(), t.task.clear(), t.destroy()
			}, e.prototype.unselectCard = function(t) {
				var e = this.selects.indexOf(t);
				return e >= 0 && this.selects.splice(e, 1), e >= 0
			}, e.prototype.includeCardsInLayers = function() {
				for (var t = 0; t < this.layorContainer.length; t++)
					for (var e = this.layorContainer[t], i = 0; i < this.cards[t].length; i++)
						for (var n = 0; n < this.cards[t][i].length; n++) {
							var r = this.cards[t][i][n];
							null != r && e.addChild(r)
						}
			}, e.prototype.nextSelectPos = function() {
				var t = this.selects.length;
				return this.selectFrames[t].position.clone()
			}, e.prototype.inMap = function(t, e, i) {
				return !(i < 0 || i >= this.cards.length) && (!(0 === this.cards.length || e < 0 || e >= this.cards[0].length) && !(0 === this.cards[0].length || t < 0 || t >= this.cards[0][0].length))
			}, e.prototype.searchCard = function(t, e, i, n) {
				if (void 0 === n && (n = !0), !this.inMap(t, e, 0)) return null;
				for (var r = 2 * Number(n) - 1, a = i + r; a < this.cards.length && a >= 0; a += r) {
					var s = this.cards[a][e][t];
					if (s instanceof yt) return s
				}
				return null
			}, e.prototype.isCard = function(t, e) {
				return !(t.y < 0 || t.y >= this.cards.length || t.x < 0 || t.x >= this.cards[0].length) && null !== this.cards[e][t.y][t.x]
			}, e.prototype.isOverlap = function(t, e) {
				for (var i = -1; i <= 1; i++)
					for (var n = -1; n <= 1; n++) {
						var r = new s.Point(t.x + i, t.y + n);
						if (this.isCard(r, e)) return !0
					}
				return !1
			}, e.prototype.isTop = function(t) {
				var e = t.layor;
				if (e === this.cards.length - 1) return !0;
				for (var i = e + 1; i < this.cards.length; i++)
					if (this.isOverlap(t.pos, i)) return !1;
				return !0
			}, e.prototype.getAllCards = function() {
				for (var t = [], e = 0; e < this.cards.length; e++)
					for (var i = 0; i < this.cards[e].length; i++)
						for (var n = 0; n < this.cards[e][i].length; n++) {
							var r = this.cards[e][i][n];
							r instanceof yt && r.exist && t.push(r)
						}
				return t
			}, e.prototype.getCardsAround9 = function(t, e, i, n) {
				var r = this;
				void 0 === n && (n = !0);
				for (var a = [], s = function(t, e, s) {
						if (r.inMap(t, e, s)) {
							var o = r.searchCard(t, e, i, n);
							o instanceof yt && a.push(o)
						}
					}, o = -1; o <= 1; o++)
					for (var h = -1; h <= 1; h++) s(t - h, e - o, i);
				return a
			}, e.prototype.get10Combination = function(t) {
				for (var e, i = this, n = [], r = 3; r < Math.pow(2, t.length); r++) e = r, 16843009 * ((e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) >> 24 >= 2 && n.push(r);
				for (var a = function(t, e) {
						for (var i = [], n = 0; n < t.length; n++) e % 2 == 1 && i.push(t[n]), e >>= 1;
						return i
					}, s = function(t) {
						for (var e = [], i = t, n = 0; n <= Math.log2(t); n++) i % 2 == 1 && e.push(n), i >>= 1;
						return e
					}, o = [], h = 0; h < n.length; h++) {
					for (var c = a(t, n[h]), u = 0, l = 0; l < c.length; l++) u += c[l];
					10 === u && o.push(s(n[h]))
				}
				if (0 == o.length) return [];
				for (var d = function(e) {
						for (var n = -1, r = i.spCombis.length - 1; r >= 0; r--) {
							var a = i.spCombis[r].combi;
							if (e.length === a.length) {
								for (var s = [], o = 0; o < e.length; o++) s.push(t[e[o]]);
								s.sort((function(t, e) {
									return t - e
								})), a.sort((function(t, e) {
									return t - e
								}));
								for (var h = !0, c = 0; c < s.length; c++)
									if (s[c] !== a[c]) {
										h = !1;
										break
									} h && (n = r)
							}
						}
						return n
					}, p = function(e) {
						for (var i = 0, n = 0; n < e.length; n++) {
							var r = t[e[n]];
							r > i && (i = r)
						}
						return i
					}, f = 0, g = -1, v = 0, m = 0, C = 0; C < o.length; C++) {
					var b = p(o[C]);
					b > v && (m = C, v = b);
					var y = d(o[C]);
					y >= 0 && y > g && (f = C, g = y)
				}
				return -1 === g ? o[m] : o[f]
			}, e.prototype.make10Table = function() {
				for (var t = this._selectLimit, e = function(t) {
						for (var e = 0, i = 0; i < t.length; i++)
							if ((e += t[i]) > 10) return 1;
						return 10 === e ? 0 : -1
					}, i = [], n = function(t) {
						for (var n = [], r = 0; r < t; r++) n.push(1);
						var a = function(n, r) {
							for (var s = 0 === r ? 1 : n[r - 1]; s <= 9; s++) {
								var o = n.concat();
								o[r] = s;
								var h = e(o);
								if (!(h < 1)) break;
								r === t - 1 ? 0 === h && i.push(o) : a(o, r + 1)
							}
						};
						a(n, 0)
					}, r = 2; r <= t; r++) n(r);
				return i
			}, e.prototype.table2Bucket = function(t) {
				for (var e = [], i = 1; i <= 9; i++) e.push(0);
				for (var n = 0; n < t.length; n++) e[t[n] - 1]++;
				return e
			}, e.prototype.canMake10Combination = function(t) {
				if (1 === t.length) return !1;
				for (var e = this.table2Bucket(t), i = this.make10Table(), n = [], r = 0; r < i.length; r++) n.push(this.table2Bucket(i[r]));
				for (var a = function(t, e) {
						for (var i = 0; i < e.length; i++)
							if (t[i] < e[i]) return !1;
						return !0
					}, s = 0; s < n.length; s++)
					if (a(e, n[s])) return !0;
				return !1
			}, e.prototype.canMake10CombinationAllCards = function() {
				for (var t = this.getAllCards(), e = [], i = 0; i < t.length; i++) e.push(t[i].number);
				return this.canMake10Combination(e)
			}, e.prototype.makeCardsArray = function() {
				for (var t = new s.Point(13, 13), e = [], i = 0; i < t.y; i++) {
					for (var n = [], r = 0; r < t.x; r++) n.push(null);
					e.push(n)
				}
				return e
			}, e.prototype.setHammerMode = function(t) {
				void 0 === t && (t = !0), this.hammerMode = t, this.isSelectsFilled || this.getAllCards().forEach((function(e) {
					e.selected || (e.preWhite = t)
				}))
			}, e.prototype.useHammer = function(t) {
				this.hammerMode && (t.interactiveChildren = !1, this.getAllCards().forEach((function(t) {
					return t.preWhite = !1
				})), t.preWhite = !0, this.setChildIndex(this.hammerItemBack, this.children.length - 1), this.hammerMode = !1, t.position = this.cardContainer.toGlobal(t.position), this.cardContainer.removeChild(t), this.emit("hammerSelect", t))
			}, e.prototype.breakCard = function(t) {
				var e = this;
				h.play(this.$, "pop"), t.select(), this.actionCard(t), t.break().then((function() {
					e._remainCount--, e.destroyCard(t), e.clearSelect()
				}))
			}, e.prototype.addSelectLimit = function() {
				this._selectLimit++, this.selectFrames[this.selectFrames.length - 1].visible = !0
			}, e.prototype.shuffleCardNumbers = function() {
				for (var t = this, e = this.getAllCards().filter((function(t) {
						return !t.selected
					})), i = this.getCardNumbers(e.length), n = 0; n < e.length; n++) {
					e[n].flushNumber(i[n])
				}
				this.canMake10CombinationAllCards() || m.timeout(this, .5).then((function() {
					t.emit("gameover", "force")
				}))
			}, e.prototype.actionCard = function(t) {
				var e = this,
					i = t.pos.x,
					n = t.pos.y,
					r = t.layor;
				this.getCardsAround9(i, n, r, !1).forEach((function(t) {
					var i = t.pos.x,
						n = t.pos.y,
						r = t.layor,
						a = e.getCardsAround9(i, n, r, !0);
					t.enable = 0 === a.length || a.every((function(t) {
						return t.selected
					}))
				}))
			}, e.prototype.addScore = function(t, e) {
				var i = this;
				void 0 === e && (e = 1), this.gameData.score += t, m.timeout(this, e).then((function() {
					h.stop(i.$, "coinadd"), h.play(i.$, "coinadd");
					setTimeout((function() {
						return h.stop(i.$, "coinadd")
					}), 600), i.goal.score.animateNumber(i.gameData.score, 1, .6)
				}))
			}, i.remainCount.get = function() {
				return this._remainCount
			}, i.erasedCount.get = function() {
				return this._startRemain - this._remainCount
			}, i.isSelectsFilled.get = function() {
				return this.selects.length === this._selectLimit
			}, i.isClear.get = function() {
				return this.gameData.score >= this._norma
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container);
	Et.PROBABILITY_TABLE = [9, 9, 9, 9, 8, 7, 6, 5, 4];
	var Tt = function(t) {
			function e(e, i) {
				var n = this;
				t.call(this), this.stopFilter = function() {
					return !1
				}, this.clocking = !1, this._time = i;
				var r = new s.Sprite(e.resources.spritesheets.ui["score_back.png"]),
					a = new s.Sprite(e.resources.spritesheets.ui["pic_time.png"]),
					o = new v(e.resources.spritesheets.number, "num_", ".png", i);
				o.margin = 4, r.anchor.set(.5), a.anchor.set(.5), o.anchor.set(.5), o.scale.set(1.2), r.alpha = .6, a.x = -60, o.x = 20, this.task.on("timer", (function(t) {
					if (n.clocking && !(n._time <= 0 || n.stopFilter())) {
						var e = t.delta / 60;
						n._time - e <= 0 ? (n._time = 0, n.emit("timesUp")) : (n._time -= e, n.emit("update")), o.number = Math.ceil(n._time)
					}
				})), this.addChild(r), this.addChild(a), this.addChild(o)
			}
			t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
			var i = {
				time: {
					configurable: !0
				}
			};
			return i.time.get = function() {
				return this._time
			}, e.prototype.start = function() {
				this.clocking = !0
			}, e.prototype.stop = function() {
				this.clocking = !1
			}, Object.defineProperties(e.prototype, i), e
		}(a.Container),
		Ot = function(t) {
			function e(e, i) {
				t.call(this);
				var n = new PIXI.Sprite(e.resources.spritesheets.ui["skill_money_back.png"]);
				n.anchor.set(.5);
				var r = new M([{
					body: new PIXI.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					margin: 10
				}, {
					body: new v(e.resources.spritesheets.number, "num_", ".png", i)
				}]);
				r.scale.set(.825), n.addChild(r), this.addChild(n)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		Bt = function(t) {
			function e(e, i, n, c, u, l) {
				var d = this;
				t.call(this), _.resetQueue(), c.score = 0, h.playBGM(e, "bgm");
				var g = new s.Point(e.vars.additional.width / 2, e.vars.additional.height / 2),
					v = 1;
				l.mode === r.BOSS ? v = 5 : l.mode === r.BONUS && (v = 2);
				var b, y = new bt(e, v),
					S = Et.countCards(u.map);
				b = l.mode === r.BONUS ? function(t) {
					for (var e = [], i = [2, 1, 1], n = [
							[
								[4, 4, 2],
								[4, 3, 3]
							],
							[
								[1, 2, 3, 4],
								[3, 3, 3, 1]
							],
							[
								[2, 2, 2, 2, 2]
							]
						], r = [], a = t; a > 7;) {
						var s = E.array(n[E.weight(i)]);
						r.push(s), a -= s.length
					}
					for (var o = E.array([
							[
								[3]
							],
							[
								[4]
							],
							[
								[5]
							],
							[
								[3, 3]
							],
							[
								[4, 3]
							]
						][a - 3]), h = 0; h < o.length; h++) {
						var c = o[h],
							u = E.array(n[c - 3]);
						r.push(u), a -= u.length
					}
					for (var l = w.shuffle(r), d = 0; d < l.length; d++) e.push.apply(e, l[d]);
					return e
				} : function(t) {
					for (var e = [], i = 0; i < t; i++) e.push(E.weight(Et.PROBABILITY_TABLE) + 1);
					return e
				};
				var k = l.mode === r.BONUS ? 0 : .15,
					I = new Et(e, c, u, function() {
						if (l.mode === r.BONUS) return 0;
						var t, e = .5 * ((t = S) * (t + 1) / 2);
						return 10 * Math.round(e / 10)
					}(), b, k),
					P = new a.Container,
					M = new s.Sprite(e.resources.images.spotlight_black);
				M.scale.set(2), M.interactive = !0, M.visible = !1, M.alpha = 0;
				var A = new ct(e, n),
					T = new ht(e, n),
					O = new ut(e),
					B = new f(e, e.resources.spritesheets.ui["btn_b_orange.png"], e.resources.spritesheets.ui["btn_pic_shuffle.png"]);
				B.x = 80, B.y = e.vars.additional.height - 220;
				var X = new f(e, e.resources.spritesheets.ui["btn_b_orange.png"], e.resources.spritesheets.ui["btn_pic_hammer.png"]);
				X.x = e.vars.additional.width - B.x, X.y = B.y;
				var j = new p(e, e.resources.spritesheets.ui["card_expansion.png"]);
				j.x = e.vars.additional.width / 2 + 240 + 3, j.y = e.vars.additional.height - 100;
				var D = new Ot(e, A.price);
				D.y = -70, B.addOnSprite(D);
				var N = new Ot(e, T.price);
				N.y = -70, X.addOnSprite(N);
				var G = function() {
					B.setEnable(n.coin >= A.price), X.setEnable(n.coin >= T.price)
				};
				G();
				var R = new f(e, e.resources.spritesheets.ui["btn_b_lightgreen.png"], e.resources.spritesheets.ui["btn_pic_pause.png"]);
				R.position.set(e.vars.additional.width - 60, 65);
				var F = new rt(e, null, [{
						name: "back",
						button: new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.text["btn_resume.png"])
					}, {
						name: "title",
						button: new f(e, e.resources.spritesheets.ui["btn_a_green.png"], e.resources.spritesheets.text["btn_mainmenu.png"])
					}], 0, 165),
					$ = l.mode === r.BOSS || l.mode === r.BONUS,
					q = l.options && l.options.time ? l.options.time : 100,
					U = new Tt(e, q);
				U.x = g.x, U.y = 150;
				var V = function() {
					return F.isShow || A.isShow || O.isShow || T.isShow || wt
				};
				U.stopFilter = V, I.combo.stopFilter = V;
				var W = function() {
						return m.alpha(d, I.combo, "comboAlpha", 1, 0, .15)
					},
					K = function() {
						return m.alpha(d, I.combo, "comboAlpha", 0, 1, .15)
					},
					Q = !1,
					et = !1,
					nt = new C(e, 0);
				nt.interactive = !0, nt.visible = !1;
				var st = function() {
						var t = new L(e, n);
						d.addChild(t);
						var a, s = function(e) {
								return new Promise((function(i) {
									0 !== e ? (n.coin += e, n.coin > 1e7 && (n.coin = 9999999), t.coin.updateCoin().then(i)) : i()
								}))
							},
							o = function() {
								var t;
								t = i.specialStage === r.BONUS ? new vt(e) : new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.ui["btn_ok.png"]);
								var n = new x(e, i, t),
									a = n.earn();
								return m.timeout(d, 2).then((function() {
									return s(a)
								})).then((function() {
									d.sendScore((function() {
										n.setEnableOk(!0)
									}))
								})), n.on("ok", (function() {
									d.nextScene()
								})), d.addChild(n), n
							};
						if (c.score > 0)(a = new at(e, c)).on("getCoin", (function(i) {
							_.addQueue(_.Kind.TOTAL_REWARD, c.score);
							var n = new z(e, i, t.coinIconPosition);
							n.once("landing", (function() {
								s(c.score * (i ? 2 : 1))
							})), n.on("endAnimation", (function() {
								var t = o();
								t.alpha = 0, m.alpha(d, a, "resultAlpha", 1, 0, .15).then((function() {
									return m.alpha(d, t, "missionAlpha", 0, 1, .15)
								}))
							})), d.addChild(n)
						})), d.addChild(a);
						else {
							var h = o();
							m.alpha(d, h, "missionAlpha", 0, 1, .15)
						}
					},
					ot = function() {
						l.mode === r.BONUS || I.isClear ? dt() : pt()
					},
					dt = function() {
						if (!et) {
							et = !0;
							var t = function() {
								l.mode === r.NORMAL ? (i.stageId++, i.stageId % 4 == 0 && (i.specialStage = r.BOSS)) : l.mode === r.BOSS ? i.specialStage = r.BONUS : l.mode === r.BONUS && (i.specialStage = r.NORMAL), _.addQueue(_.Kind.STAGE_CLEAR, 1);
								var t = new bt(e, 6),
									n = new bt(e, 7);
								n.visible = !1, m.timeout(d, .5).then((function() {
									return h.play(e, "clear")
								})), m.alpha(d, t, "clearBackgroundAlpha", 0, 1, .166);
								var a = new xt(new e.resources.animates.cutin.gameclear, (function() {
									n.visible = !0, m.alpha(d, t, "clearBackgroundAlpha", 1, 0, .166).then(st)
								}));
								d.addChild(n), d.addChild(t), d.addChild(a)
							};
							if (I.remainCount <= 0) {
								h.play(e, "hand");
								var n = new tt(e, 300, t),
									a = d.toLocal(I.goal.iconPosition),
									s = new z(e, !0, a);
								m.alpha(d, s, "coinsAlpha", 0, 1, .2), I.addScore(300, .866), d.addChild(n), d.addChild(s)
							} else t()
						}
					},
					pt = function() {
						if (!et) {
							et = !0, Q = !0;
							var t = new C(e, 0),
								i = new bt(e, 7);
							i.alpha = 0, t.fadeIn(.6, .5);
							var n = function() {
									m.alpha(d, i, "clearBackgroundAlpha", 0, 1, .166), st()
								},
								a = new xt(new e.resources.animates.cutin.gameover, (function() {
									if (l.mode === r.BOSS && e.vars.env.isAdPlatform) {
										var t = new lt(e);
										t.on("complete", (function() {
											d.emit("retryBoss")
										})), t.on("close", (function() {
											n()
										})), d.addChild(t)
									} else m.timeout(d, 1).then((function() {
										n()
									}))
								}));
							d.addChild(t), d.addChild(i), d.addChild(a)
						}
					},
					ft = !1;
				this.interactiveChildren = !1;
				var gt = function() {
						ft ? (d.interactiveChildren = !0, $ && U.start()) : ft = !0
					},
					mt = new Z(e, gt);
				I.on("endDeploy", gt), l.mode === r.BOSS ? mt.addChild(new xt(new e.resources.animates.cutin.bossStage)) : l.mode === r.BONUS && mt.addChild(new xt(new e.resources.animates.cutin.bonusStage)), A.on("complete", (function() {
					Q = !1, W(), A.preHide(), G();
					var t = new Y(e);
					t.on("flush", (function() {
						m.timeout(d, .5).then((function() {
							return I.shuffleCardNumbers()
						}))
					})), t.on("end", (function() {
						K(), A.endPreHide()
					})), d.addChild(t)
				}));
				var Ct = !1,
					yt = function() {
						j.interactiveChildren = !1, j.setEnable(!0), Q = !1, Ct = !0, W(), O.preHide();
						var t = new o.Container;
						t.scale.set(2), t.position.set(-22, 8);
						var i = t.addCreatejs(new e.resources.animates.skill_add.skill_add);
						i.on("take", (function() {
							I.addSelectLimit(), j.destroy()
						})), i.on("endAnimation", (function() {
							K(), O.endPreHide(), t.destroy()
						})), d.addChild(t)
					};
				O.on("complete", (function() {
					yt()
				}));
				var wt = !1;
				T.on("complete", (function() {
					wt = !0, W(), T.hide();
					var t = new H(e);
					I.setHammerMode(!0);
					var i = new C(e, 0);
					i.interactive = !0, M.visible = !0, m.alpha(d, M, "screenAlpha", 0, .3, .5);
					var n = new s.Sprite(e.resources.spritesheets.text["text_chara_breakcard.png"]);
					n.anchor.set(.5), n.alpha = 0, n.position.set(g.x, 200), t.cjs.on("chooseCard", (function() {
						m.alpha(d, n, "chooseCardAlpha", 0, 1, .15), m.scale(d, n, "chooseCardScale", 1.1, 1, .15)
					})), t.cjs.on("wait", (function() {
						i.interactive = !1
					})), I.once("hammerSelect", (function(e) {
						m.alpha(d, n, "chooseCardAlpha", 1, 0, .15);
						var r = e;
						i.interactive = !0, t.addChild(r);
						var a = t.toLocal(r.position);
						r.position = a, t.slam(a), t.cjs.play(), G(), t.on("slam", (function() {
							I.breakCard(r)
						}))
					})), t.cjs.on("fadeout", (function() {
						m.alpha(d, M, "screenAlpha", .3, 0, .33)
					})), t.cjs.on("endAnimation", (function() {
						K(), M.visible = !1, wt = !1, i.destroy(), t.destroy(), n.destroy()
					})), d.addChild(i), d.addChild(t), d.addChild(n)
				})), I.on("erase", (function(t) {
					t.combo >= 7 && _.addQueue(_.Kind.COMBO, 1)
				})), I.on("gameclear", (function() {
					U.stop(), nt.visible = !0, m.timeout(d, 2).then((function() {
						dt()
					}))
				})), I.on("gameover", (function(t) {
					U.stop(), nt.visible = !0, m.timeout(d, 1).then((function() {
						e.vars.env.isAdPlatform && "force" != t && !Ct ? (nt.visible = !1, Q = !0, O.show()) : ot()
					}))
				}));
				U.on("timesUp", (function() {
					nt.visible = !0;
					var t = new J(e, ot);
					d.addChild(t)
				})), X.on("buttontap", (function() {
					T.visible = !0, T.show()
				})), B.on("buttontap", (function() {
					A.show()
				})), j.on("buttontap", (function() {
					j.setEnable(!1), it.reward(e).then((function() {
						yt()
					})).catch((function() {
						j.setEnable(!0)
					}))
				})), O.on("close", (function() {
					Q && (nt.visible = !0, m.timeout(d, .5).then(ot))
				})), R.on("buttontap", (function() {
					F.show()
				})), F.on("back", (function() {
					F.hide()
				})), F.on("title", (function() {
					h.stop(e, "bgm"), d.quitGame()
				})), this.addChild(y), this.addChild(I.combo), this.addChild(R), this.addChild(B), this.addChild(X), e.vars.env.isAdPlatform && this.addChild(j), $ && this.addChild(U), this.addChild(M), this.addChild(I), this.addChild(P), this.addChild(O), this.addChild(T), this.addChild(A), this.addChild(F), this.addChild(mt), this.addChild(nt)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(g),
		Xt = function(t) {
			this.image = {}, this.sheet = {}, this.imagedefine = {}, this.sheetdefine = {}, this.$ = t, this.loaderOptions = {
				basepath: t.vars.env.basepath,
				version: t.vars.env.version + ""
			}
		};
	Xt.prototype.resourceTakeout = function(t) {
		var e = {};
		for (var i in t) e[i] = t[i].data;
		return e
	}, Xt.prototype.defineImages = function(t) {
		this.imagedefine = t
	}, Xt.prototype.defineSpritesheets = function(t) {
		this.sheetdefine = t
	}, Xt.prototype.loadAllResources = function() {
		var t = this,
			e = new a.TextureLoader,
			i = new a.SpritesheetLoader,
			n = {},
			r = {},
			s = this.$.vars.api.getLanguage(),
			o = [];
		for (var h in this.imagedefine) n[h] = this.imagedefine[h].replace(/\?/, s);
		for (var c in this.sheetdefine) r[c] = this.sheetdefine[c].replace(/\?/, s);
		return o.push(e.loadAllAsync(n, this.loaderOptions).then((function(e) {
			t.image = t.resourceTakeout(e)
		}))), o.push(i.loadAllAsync(r, this.loaderOptions).then((function(e) {
			t.sheet = t.resourceTakeout(e)
		}))), Promise.all(o)
	}, Xt.prototype.loadImage = function(t, e) {
		var i = this;
		return (new a.TextureLoader).loadAsync(e, this.loaderOptions).then((function(e) {
			i.$.resources.images[t] = e.data
		}))
	};
	var jt = function(t) {
		function e(e, i, n) {
			t.call(this), this.$ = e, this.commonData = i, this.gameData = n, this.sceneContainer = new a.Container, this.screenContainer = new a.Container, this.scene = new Dt, this.sceneContainer.addChildAt(this.scene, 0), this.addChild(this.sceneContainer), this.addChild(this.screenContainer)
		}
		return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.changeScene = function(t) {
			this.scene = t, this.sceneContainer.addChildAt(this.scene, 0)
		}, e.prototype.startGame = function() {
			var t = this;
			return new Promise((function(i) {
				t.nextScene().then((function() {
					e.INITIAL_GAME ? i() : t.$.vars.api.callAsync("startGame").then(i), e.INITIAL_GAME = !0
				}))
			}))
		}, e.prototype.playGame = function() {
			var t = this;
			return this.nextScene().then((function() {
				return t.$.vars.api.callAsync("playGame")
			}))
		}, e.prototype.quitGame = function() {
			var t = this;
			return new Promise((function(e) {
				t.nextScene().then((function() {
					return t.$.vars.api.callAsync("quitGame")
				})).then((function() {
					return t.$.vars.api.viewAdAsync().then(e).catch(e)
				}))
			}))
		}, e.prototype.setData = function(t, e, i) {
			var n = this;
			return new Promise((function(r) {
				var a = function() {
					return i().then(r)
				};
				n.$.vars.api.setDataAsync(t, e, "always").then(a).catch(a)
			}))
		}, e.prototype.sendScoreManual = function(t, e, i, n) {
			var r = this,
				a = function() {
					return new Promise((function(e) {
						r.$.vars.api.sendScoreAsync(t, n).then((function() {
							return r.$.vars.api.callAsync("finishPlay").then(e)
						})).catch((function() {
							return a()
						}))
					}))
				};
			return this.setData(i, e, a)
		}, e.prototype.sendScore = function(t) {
			return this.sendScoreManual(this.gameData.score, this.commonData, e.DataName.NORMAL, t)
		}, e.prototype.flushDataManual = function(t, e) {
			var i = this,
				n = function() {
					return new Promise((function(t) {
						i.$.vars.api.flushDataAsync().then(t).catch(n)
					}))
				};
			return this.setData(e, t, n)
		}, e.prototype.flushData = function() {
			return this.flushDataManual(this.commonData, e.DataName.NORMAL)
		}, e.prototype.nextScene = function() {
			return this.faderColor()
		}, e.prototype.faderColor = function() {
			var t = this;
			return new Promise((function(e) {
				t.scene.interactiveChildren = !1;
				var i = new Nt(t.$);
				i.fadeIn().then((function() {
					t.scene.task.clear(), t.scene.destroy(), e(), i.fadeOut()
				})), t.screenContainer.addChild(i)
			}))
		}, e.prototype.faderAlpha = function() {
			var t = this;
			return new Promise((function(e) {
				var i = t.scene;
				i.interactiveChildren = !1, e();
				var n = new Lt(i);
				n.fade().then((function() {
					i.task.clear(), i.destroy()
				})), t.screenContainer.addChild(n)
			}))
		}, e
	}(a.Container);
	jt.DataName = {
		NORMAL: "saveData"
	}, jt.INITIAL_GAME = !1;
	var Dt = function(t) {
			function e() {
				t.call(this)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(g),
		Nt = function(t) {
			function e(e, i) {
				void 0 === i && (i = 0), t.call(this), this.time = .13, this.graphic = new s.Graphics, this.graphic.beginFill(i), this.graphic.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), this.graphic.endFill(), this.graphic.alpha = 0, this.addChild(this.graphic)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.fadeIn = function() {
				var t = this;
				return new Promise((function(e) {
					var i = 0;
					t.graphic.alpha = 0, t.task.clear("fade"), t.task.on("fade", (function(n) {
						var r = n.delta / 60,
							a = i / t.time;
						if (i >= t.time) return t.task.clear("fade"), t.graphic.alpha = 1, void e();
						t.graphic.alpha = a, i += r
					}))
				}))
			}, e.prototype.fadeOut = function() {
				var t = this;
				return new Promise((function(e) {
					var i = 0;
					t.graphic.alpha = 1, t.task.clear("fade"), t.task.on("fade", (function(n) {
						var r = n.delta / 60,
							a = i / t.time;
						if (i >= t.time) return t.task.clear("fade"), t.graphic.alpha = 0, e(), t.task.clear(), void t.destroy();
						t.graphic.alpha = 1 - a, i += r
					}))
				}))
			}, e
		}(a.Container),
		Lt = function(t) {
			function e(e) {
				t.call(this), this.target = e
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.fade = function() {
				var t = this;
				return new Promise((function(e) {
					var i = 0;
					t.target.alpha = 1, t.task.clear("fade"), t.task.on("fade", (function(n) {
						var r = n.delta / 60,
							a = i / .165;
						if (i >= .165) return t.task.clear("fade"), t.target.alpha = 0, e(), t.task.clear(), void t.destroy();
						t.target.alpha = 1 - a, i += r
					}))
				}))
			}, e
		}(a.Container),
		Gt = function() {};
	Gt.createSolid = function(t) {
		return Gt.correction(t, (function(t) {
			return {
				r: 255,
				g: 255,
				b: 255
			}
		}))
	}, Gt.shiftHSV = function(t, e, i, n) {
		void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0);
		return Gt.correction(t, (function(t) {
			var r = Rt.rgb2Hsv(t.r, t.g, t.b),
				a = Rt.hsv2Rgb(r.h + e, r.s + i, r.v + n);
			return {
				r: a.r,
				g: a.g,
				b: a.b
			}
		}))
	}, Gt.gamma = function(t, e) {
		return Gt.correction(t, (function(t) {
			var i = function(t) {
				return 255 * Math.pow(t / 255, 1 / e)
			};
			return {
				r: i(t.r),
				g: i(t.g),
				b: i(t.b)
			}
		}))
	}, Gt.correction = function(t, e) {
		var i = t.width,
			n = t.height,
			r = document.createElement("canvas"),
			a = r.getContext("2d");
		if (a) {
			r.width = i, r.height = n;
			var o = t.baseTexture.resource.source,
				h = t.frame;
			a.drawImage(o, -h.x, -h.y);
			for (var c = a.getImageData(0, 0, i, n), u = c.data, l = 0; l < u.length; l += 4) {
				var d = e({
					r: u[l + 0],
					g: u[l + 1],
					b: u[l + 2]
				});
				u[l + 0] = d.r, u[l + 1] = d.g, u[l + 2] = d.b
			}
			return a.putImageData(c, 0, 0), s.Texture.from(r)
		}
		return s.Texture.EMPTY
	}, Gt.outlinePath = function(t, e) {
		void 0 === e && (e = 1);
		var i = new s.Graphics,
			n = t.width,
			r = t.height,
			a = document.createElement("canvas"),
			o = a.getContext("2d");
		if (o) {
			a.width = n, a.height = r;
			var h = t.baseTexture.resource.source,
				c = t.frame;
			o.drawImage(h, -c.x, -c.y);
			for (var u = o.getImageData(0, 0, n, r).data, l = [], d = -1; d <= r; d++) {
				for (var p = [], f = -1; f <= n; f++) - 1 === d || d === r || -1 === f || f === n ? p.push(!1) : p.push(u[4 * (d * n + f) + 3] >= e);
				l.push(p)
			}
			for (var g = [], v = 0; v < l.length - 1; v++) {
				for (var m = [], C = 0; C < l[v].length - 1; C++) m.push(!0);
				g.push(m)
			}
			for (var b = 0; b < g.length; b++)
				for (var y = 0; y < g[b].length; y++) g[b][y] = l[b][y] !== l[b][y + 1] || l[b][y] !== l[b + 1][y];
			for (var w = [], _ = 0; _ < l.length - 1; _++) {
				for (var x = [], S = 0; S < l[_].length - 1; S++) x.push(!1);
				w.push(x)
			}
			var k = function(t, e) {
					I(P, new s.Point(t, e))
				},
				I = function(t, e) {
					if (e.x < 0 || e.y < 0 || e.x >= g[0].length || e.y >= g.length) return !1;
					if (!g[e.y][e.x] || w[e.y][e.x]) return !1;
					w[e.y][e.x] = !0, t.push(e);
					var i = function(i, n) {
						I(t, new s.Point(e.x + i, e.y + n))
					};
					return i(1, 0), i(1, 1), i(0, 1), i(-1, 1), i(-1, 0), i(-1, -1), i(0, -1), i(1, -1), !0
				},
				P = [];
			t: for (var M = 0; M < g.length; M++)
				for (var A = 0; A < g[M].length; A++)
					if (g[M][A] && !w[M][A]) {
						k(A, M);
						break t
					}
			for (var E = [], T = 0; T < P.length; T++) E.push(P[T].x), E.push(P[T].y);
			var O = new s.Polygon(E);
			i.beginFill(255, .5), i.drawPolygon(O), i.endFill()
		}
		return i
	};
	var Rt = function() {};
	Rt.rgb2Hsv = function(t, e, i) {
		var n = {
				h: 0,
				s: 0,
				v: 0
			},
			r = Math.max(t, e, i);
		if (0 === r) return n;
		var a = Math.min(t, e, i);
		switch (n.v = r, n.s = 255 * (r - a) / r, r) {
			case t:
				n.h = 60 * (e - i) / (r - a);
				break;
			case e:
				n.h = 60 * (i - t) / (r - a) + 120;
				break;
			case i:
				n.h = 60 * (t - e) / (r - a) + 240
		}
		return n.h = (n.h % 360 + 360) % 360, n
	}, Rt.hsv2Rgb = function(t, e, i) {
		var n = {
			r: i,
			g: i,
			b: i
		};
		if (0 === e) return n;
		t = (t % 360 + 360) % 360;
		var r = Math.floor(t / 60),
			a = t / 60 - r,
			s = i * (1 - e / 255),
			o = i * (1 - e / 255 * a),
			h = i * (1 - e / 255 * (1 - a));
		switch (r) {
			case 0:
				n.r = i, n.g = h, n.b = s;
				break;
			case 1:
				n.r = o, n.g = i, n.b = s;
				break;
			case 2:
				n.r = s, n.g = i, n.b = h;
				break;
			case 3:
				n.r = s, n.g = o, n.b = i;
				break;
			case 4:
				n.r = h, n.g = s, n.b = i;
				break;
			case 5:
				n.r = i, n.g = s, n.b = o
		}
		return n
	};
	var Ft = function(t) {
			function e(e, i, n) {
				var r = this;
				t.call(this);
				var o = new s.Point(e.vars.additional.width / 2, e.vars.additional.height / 2),
					c = new bt(e, 1),
					u = new f(e, e.resources.spritesheets.ui["btn_b_orange.png"], e.resources.spritesheets.ui["btn_pic_back.png"]);
				u.x = u.width / 2 + 25, u.y = u.height / 2 + 125;
				var l = [{
						map: "LA0L",
						norma: 10,
						textPath: "tutorial_text_2cards.png",
						numbers: [3, 7]
					}, {
						map: "L150L",
						norma: 50,
						textPath: "tutorial_text_3cards.png",
						numbers: [2, 3, 5]
					}, {
						map: "L2A8L",
						norma: 100,
						textPath: "tutorial_text_4cards.png",
						numbers: [2, 1, 5, 2]
					}, {
						map: "S",
						norma: 10,
						textPath: "",
						numbers: [],
						movie: !0
					}],
					d = function(t) {
						t.length;
						return function(e) {
							return t
						}
					},
					p = function(t) {
						return new Promise((function(i) {
							n.score = 0;
							var r = new Et(e, n, {
									map: t.map
								}, t.norma, d(t.numbers), 0),
								a = new s.Sprite(e.resources.spritesheets.ui["card_expansion.png"]);
							a.anchor.set(.5), a.x = o.x + 240 + 3, a.y = e.vars.additional.height - 100;
							var h = new s.Sprite(e.resources.spritesheets.text[t.textPath]);
							h.anchor.set(.5), h.x = o.x, h.y = 300, m.alpha(r, r, "alpha", 0, 1, .1), r.combo.visible = !1;
							var c = new $t(e);
							if (c.position.set(e.vars.additional.width / 2, .75 * e.vars.additional.height), c.alpha = 0, t.movie) r.interactiveChildren = !1, i(r);
							else {
								m.scale(v, c, "handScale", 1, 1.1, .65, m.Ease.decel, 0);
								var u = r.getAllCards();
								u.forEach((function(t) {
									return t.interactiveChildren = !1
								}));
								var l = 0,
									p = function(t) {
										var e = u[t];
										e.interactiveChildren = !0;
										var i = r.getCardPosition(e);
										i.y += 50, m.moveTo(v, c, "handMove", i, .2, m.Ease.decel)
									};
								setTimeout((function() {
									m.alpha(v, c, "handAlpha", 0, 1, .2), p(0)
								}), 500), r.on("select", (function() {
									++l < t.numbers.length ? p(l) : m.alpha(v, c, "handAlpha", 1, 0, .2)
								})), r.on("erase", (function() {
									0 === r.remainCount && y.show().then((function() {
										return m.timeout(v, .1)
									})).then((function() {
										return m.alpha(r, r, "alpha", 1, 0, .1)
									})).then((function() {
										i(r), r.destroy(), r.combo.destroy()
									}))
								}))
							}
							e.vars.env.isAdPlatform && r.addChild(a), r.addChild(c), r.addChild(h), v.addChild(r.combo), v.addChild(r)
						}))
					},
					g = function(t, i, n) {
						return new Promise((function(h) {
							var c = new a.Container,
								u = new s.Sprite(e.resources.spritesheets.text[t]);
							u.anchor.set(.5), u.x = o.x, u.y = i;
							var l = new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.ui["btn_ok.png"]);
							l.x = o.x, l.y = n, l.interactiveChildren = !1, m.alpha(c, c, "alpha", 0, 1, .1).then((function() {
								l.interactiveChildren = !0
							})), l.on("buttontap", (function() {
								l.interactiveChildren = !1, m.alpha(c, c, "alpha", 1, 0, .1).then((function() {
									c.destroy(), h()
								}))
							})), c.addChild(l), c.addChild(u), r.addChild(c)
						}))
					},
					v = new a.Container,
					b = function(t, i, n, r) {
						t.clear(), t.beginFill(255, .5), t.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), t.beginHole(), t.drawRoundedRect(e.vars.additional.width / 4 - n / 2, i - r / 2, n, r, 15), t.endHole(), t.endFill()
					},
					y = new Q(e);
				y.show().then((function() {
					return p(l[0])
				})).then((function() {
					return p(l[1])
				})).then((function() {
					return p(l[2])
				})).then((function() {
					return g("tutorial_text_the morecoinsyouearn.png", 600, 1e3)
				})).then((function() {
					return p(l[3])
				})).then((function(t) {
					var i = new C(e, 0);
					i.fadeIn(.4, .35), r.addChild(i);
					var n = new s.Graphics,
						a = new s.Point(240, 60);
					return b(n, 35, a.x, a.y), i.mask = n, g("tutorial_text_requiredcoins.png", 600, 1e3).then((function() {
						var t = new s.Point(300, 80),
							e = m.tween(r, "rectMove", 0, 1, .5, (function(e) {
								var i = 590 * e + 35 * (1 - e),
									r = t.x * e + a.x * (1 - e),
									s = t.y * e + a.y * (1 - e);
								b(n, i, r, s)
							}), m.Ease.decel);
						b(n, 590, t.x, t.y);
						var i = g("tutorial_text_fail.png", 600, 1e3);
						return Promise.all([e, i])
					})).then((function() {
						return i.fadeOut(.4)
					})).then((function() {
						i.destroy(), n.destroy()
					})).then((function() {
						return t
					}))
				})).then((function(t) {
					return g("tutorial_text_combosandcombinations.png", 600, 1e3).then((function() {
						return m.alpha(v, t, null, 1, 0, .2)
					})).then((function() {
						t.destroy(), t.combo.destroy()
					}))
				})).then((function() {
					return new Promise((function(t) {
						var i = new a.Container;
						i.interactiveChildren = !1;
						var c = function() {
							var t = "KA0GA0K",
								r = 30,
								a = "tutorial_text_combo.png",
								l = [3, 7, 8, 2];
							n.score = 0;
							var p = new Et(e, n, {
									map: t
								}, r, d(l), 0),
								f = new s.Sprite(e.resources.spritesheets.ui["card_expansion.png"]);
							f.anchor.set(.5), f.x = o.x + 240 + 3, f.y = e.vars.additional.height - 100;
							var g = new s.Sprite(e.resources.spritesheets.text[a]);
							g.anchor.set(.5), g.x = o.x, g.y = 300, m.alpha(i, i, "movieAlpha", 0, 1, .1);
							var C = new $t(e);
							C.position.set(e.vars.additional.width / 2, .75 * e.vars.additional.height), C.alpha = 0;
							var b = p.getAllCards(),
								y = function(t, n) {
									void 0 === n && (n = 0);
									var r = b[t],
										a = p.getCardPosition(r);
									return a.y += 50, m.moveTo(i, C, "handMove", a, .2, m.Ease.decel).then((function() {
										return m.timeout(i, n)
									})).then((function() {
										return function(t) {
											var n = b[t];
											return m.scale(i, C, "handScale", 1, .8, .1).then((function() {
												m.scale(i, C, "handScale", .8, 1, .1), h.play(e, "draw"), p.select(n).then((function() {
													return p.clearSelect()
												}))
											}))
										}(t)
									}))
								};
							m.timeout(i, .5).then((function() {
								m.alpha(i, C, "handAlpha", 0, 1, .2), y(0, .3).then((function() {
									return y(1)
								})).then((function() {
									return m.alpha(i, C, "hand", 1, 0, .2).then((function() {
										return m.timeout(i, .6)
									})).then((function() {
										return m.alpha(i, C, "hand", 0, 1, .2)
									}))
								})).then((function() {
									return y(2)
								})).then((function() {
									return y(3)
								})).then((function() {
									return m.alpha(i, C, "hand", 1, 0, .2)
								})).then((function() {
									return u.visible || (u.visible = !0, u.alpha = 0, m.timeout(i, 1.5).then((function() {
										return m.alpha(i, u, "okAlpha", 0, 1, .1)
									}))), m.timeout(i, 2.5)
								})).then((function() {
									return m.alpha(i, i, "movieAlpha", 1, 0, .2)
								})).then((function() {
									p.destroy(), p.combo.destroy(), c()
								}))
							})), e.vars.env.isAdPlatform && p.addChild(f), p.addChild(C), p.addChild(g), i.addChild(p.combo), i.addChild(p), v.addChild(i)
						};
						c();
						var u = new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.ui["btn_ok.png"]);
						u.x = o.x, u.y = 800, u.visible = !1, u.on("buttontap", (function() {
							m.alpha(i, u, "okAlpha", 1, 0, .1), m.alpha(i, i, "movieContainerAlpha", 1, 0, .1).then((function() {
								u.destroy(), i.destroy(), t()
							}))
						})), r.addChild(u)
					}))
				})).then((function() {
					return new Promise((function(t) {
						var i = new a.Container;
						i.interactiveChildren = !1;
						var c = function() {
							var t = "K2A8G554K",
								r = 750,
								a = "tutorial_text_Combinations.png",
								l = [1, 2, 3, 4, 2, 2, 2, 2, 2];
							n.score = 0;
							var p = new Et(e, n, {
									map: t
								}, r, d(l), 0),
								f = new s.Sprite(e.resources.spritesheets.ui["card_expansion.png"]);
							f.anchor.set(.5), f.x = o.x + 240 + 3, f.y = e.vars.additional.height - 100;
							var g = new s.Sprite(e.resources.spritesheets.text[a]);
							g.anchor.set(.5), g.x = o.x, g.y = 300, m.alpha(i, i, "movieAlpha", 0, 1, .1), p.combo.visible = !1;
							var C = new $t(e);
							C.position.set(e.vars.additional.width / 2, .75 * e.vars.additional.height), C.alpha = 0;
							var b = p.getAllCards(),
								y = function(t, n) {
									void 0 === n && (n = 0);
									var r = b[t],
										a = p.getCardPosition(r);
									return a.y += 50, m.moveTo(i, C, "handMove", a, .2, m.Ease.decel).then((function() {
										return m.timeout(i, n)
									})).then((function() {
										return function(t) {
											var n = b[t];
											return m.scale(i, C, "handScale", 1, .8, .1).then((function() {
												m.scale(i, C, "handScale", .8, 1, .1), h.play(e, "draw"), p.select(n).then((function() {
													return p.clearSelect()
												}))
											}))
										}(t)
									}))
								};
							m.timeout(i, 1).then((function() {
								m.alpha(i, C, "handAlpha", 0, 1, .2), y(0, .3).then((function() {
									return y(1)
								})).then((function() {
									return y(2)
								})).then((function() {
									return y(3)
								})).then((function() {
									return m.alpha(i, C, "hand", 1, 0, .2).then((function() {
										return m.timeout(i, 1.6)
									})).then((function() {
										return m.alpha(i, C, "hand", 0, 1, .2)
									}))
								})).then((function() {
									return p.combo.forceEndCombo(), y(4)
								})).then((function() {
									return y(5)
								})).then((function() {
									return y(6)
								})).then((function() {
									return y(7)
								})).then((function() {
									return y(8)
								})).then((function() {
									return m.alpha(i, C, "hand", 1, 0, .2)
								})).then((function() {
									return u.visible || (u.visible = !0, u.alpha = 0, m.timeout(i, 1.5).then((function() {
										return m.alpha(i, u, "okAlpha", 0, 1, .1)
									}))), m.timeout(i, 2.5)
								})).then((function() {
									return m.alpha(i, i, "movieAlpha", 1, 0, .2)
								})).then((function() {
									p.destroy(), p.combo.destroy(), c()
								}))
							})), e.vars.env.isAdPlatform && p.addChild(f), p.addChild(C), p.addChild(g), i.addChild(p.combo), i.addChild(p), v.addChild(i)
						};
						c();
						var u = new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.ui["btn_ok.png"]);
						u.x = o.x, u.y = 1e3, u.visible = !1, u.on("buttontap", (function() {
							m.alpha(i, u, "okAlpha", 1, 0, .1), m.alpha(i, i, "movieContainerAlpha", 1, 0, .1).then((function() {
								u.destroy(), i.destroy(), t()
							}))
						})), r.addChild(u)
					}))
				})).then((function() {
					r.nextScene()
				})), u.on("buttontap", (function() {
					r.nextScene()
				})), this.addChild(c), this.addChild(v), i.tutorialFlag && this.addChild(u), this.addChild(y)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(g),
		$t = function(t) {
			function e(e) {
				t.call(this);
				var i = new s.Sprite(e.resources.spritesheets.ui["tutorial_hand.png"]);
				i.anchor.set(.4567, .1632), i.scale.set(1.75), this.addChild(i)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		qt = function(t) {
			function e(e) {
				var i = this;
				t.call(this), this.$ = e, this.forestLayer = [], this.forestTables = [];
				var n = new s.Point(e.vars.additional.width / 2, e.vars.additional.height / 2);
				this.buildingContainer = new s.Container, this.buildingContainer.sortableChildren = !0, this.camera = new a.Container, this.camera.position = n.clone(), this.camera.pivot.set(n.x, n.y + 80), this.camera.scale.set(1.9);
				var r = new s.Sprite(e.resources.images.header_04),
					o = function(t, e, i) {
						return {
							t: t,
							x: e,
							y: i
						}
					};
				this.forestTables = [
					[o(5, 228.85, 412.5), o(3, 309.35, 497.6), o(5, 57.9, 610.65), o(5, 18.85, 631.45), o(2, 73.9, 632.55), o(5, 127.5, 489.5), o(4, 7.9, 175.9), o(5, 247.4, 78.25), o(5, 279.4, 87.9), o(5, 124.1, 96.8), o(3, 86.65, 116.75), o(2, 356.05, 153.9), o(5, 225.55, 3.6), o(5, 196.85, 10.6), o(5, 51.85, 1.75), o(5, 34.85, 78.25), o(5, 98.85, 61.65), o(2, -4.7, 89.25), o(2, 59.3, 61.8), o(3, 42.5, 28.4), o(2, -1.65, 54.15), o(3, 10.5, 2.15), o(2, 105.9, 38.75), o(3, 95.9, 5.15), o(3, 151.65, 15.6), o(3, 332.55, 116.75), o(2, 321.8, 77.4), o(3, 378.05, 87.75), o(3, 336.4, 30.4), o(2, 369.75, 54.15), o(3, 281.15, 52.65), o(2, 209.55, 51.15), o(3, 176, 75.9), o(5, 18.85, 153.9), o(5, 16, 201.15), o(4, 185.9, 317.05), o(4, 135.15, 250.05), o(2, 341.85, 241.55), o(2, 35.85, 226.05), o(3, 277.35, 246.4), o(3, 367.7, 321.05), o(5, 164.85, 489.5), o(5, 147.85, 466.2), o(5, 163.85, 453.3), o(2, 350.05, 466.8), o(5, 283.2, 540.4), o(5, 351.2, 520.2), o(5, 121.9, 622.05), o(5, 161.55, 601.05), o(5, 131.85, 592.65), o(3, 83.35, 583.55), o(3, 24.4, 558.7), o(2, 82.85, 546.6), o(2, 140.1, 527.2), o(5, 253.05, 528.65), o(5, 264.65, 500.45), o(5, 302.05, 463), o(5, 257.55, 473.95), o(2, 333.05, 429.2), o(2, 212.85, 503.4), o(2, 152.15, 565.65), o(2, 17.85, 607.7), o(2, 24.9, 518.15), o(3, 79, 457.7), o(2, 76.1, 509.7), o(4, 228.85, 311.05), o(5, 7.9, 363.2), o(2, 10, 470.65), o(2, 12.1, 416.3), o(4, 19.85, 331.05), o(4, 48, 313.6), o(4, 232.15, 243.05), o(3, 327.5, 357.55), o(3, -10.35, 307.05)],
					[o(5, 153.9, 418.7), o(3, 105.4, 424.5)],
					[o(5, 257.55, 350.5), o(3, 299.7, 321.05), o(5, 257.55, 319.05)],
					[o(4, 95.5, 334.7)],
					[o(3, 281.15, 392), o(2, 350.05, 393.5)],
					[o(2, 359.4, 282.05), o(2, 309.85, 282.05), o(3, 245.35, 285.55)],
					[o(1, 155.8, 284.05), o(5, 208.4, 268.55)],
					[o(5, 188.1, 426.8), o(2, 212.85, 459.2), o(3, 269.55, 435.45)],
					[o(5, 27.1, 383), o(4, 46.35, 354.5), o(3, 75.6, 384.95)],
					[o(3, 83.35, 246.4), o(2, 88.15, 292.05), o(3, 18.35, 260.65)],
					[o(2, 216.15, 101.65), o(2, 268.05, 126.25)],
					[o(1, 289.15, 167.4), o(5, 287.9, 214.55), o(2, 333.05, 200.25)],
					[o(4, 47.4, 161.25), o(5, 70.15, 147.4), o(4, 208.4, 145.4), o(2, 199.4, 194.05), o(4, 86.95, 161.25), o(2, 155.8, 118.25), o(5, 38.15, 136.75), o(5, 46.35, 189.75), o(5, 66.85, 201.15), o(2, 111.5, 211.65), o(4, 147.85, 170.05), o(5, 115.85, 136.75)]
				];
				for (var h = 0; h < this.forestTables.length; h++) this.forestLayer.push([]);
				for (var c = 0; c < this.forestTables.length; c++)
					for (var u = this.forestTables[c], l = 0; l < u.length; l++) {
						var d = u[l],
							f = new s.Sprite(e.resources.spritesheets.building["village_forest_" + d.t + ".png"]);
						f.anchor.set(.5), f.position.set(2 * d.x, 2 * d.y), f.zIndex = f.y, this.buildingContainer.addChild(f), c > 0 && this.forestLayer[c - 1].push(f)
					}
				this.building = new s.Sprite(e.resources.spritesheets.building["village_building_construction.png"]), this.building.anchor.set(.5), this.building.position.set(n.x, 763), this.building.zIndex = this.building.y, this.progressButton = new D(e, 0, 100, 0), this.getButton = new p(e, e.resources.spritesheets.ui["btn_get.png"]);
				var g = new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]);
				g.anchor.set(.5), this.progressButton.y = -this.building.height / 2 - 30, this.getButton.y = -this.building.height / 2 - 50, g.y = -7.5, this.progressButton.interactiveChildren = !1, this.getButton.visible = !1, this.getButton.on("buttontap", (function() {
					i.getButton.visible = !1, i.emit("gainCoin", i.building.toGlobal(i.getButton.position))
				})), this.getButton.addOnSprite(g), this.building.addChild(this.getButton), this.building.addChild(this.progressButton), this.buildingContainer.addChild(this.building), r.addChild(this.buildingContainer), this.camera.addChild(r), this.addChild(this.camera), this.buildingContainer.sortChildren()
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.buildBuilding = function() {
				var t = this;
				return this.progressButton.setValue(100, !0), m.timeout(this, .6).then((function() {
					return t.progressButton.visible = !1, m.scale(t, t.building, "buildingScale", 1, 0, .25, m.Ease.quadratic(2))
				})).then((function() {
					t.building.texture = t.$.resources.spritesheets.building["village_building_1.png"], t.building.y += -22;
					return m.scaleX(t, t.building, "buildingScaleX", 0, 1, .5, m.Ease.quadratic(-1)), m.scaleY(t, t.building, "buildingScaleY", 0, 1, .5, m.Ease.quadratic(-2))
				}))
			}, e.prototype.avaliable = function() {
				this.getButton.visible = !0, m.scale(this, this.getButton, "getButtonScale", 1, 1.1, .3, m.Ease.decel, 0), m.alpha(this, this.getButton, "getButtonAlpha", 0, 1, .4)
			}, e
		}(a.Container),
		Ut = function(t) {
			function e(e) {
				var i = this;
				t.call(this);
				var n = new s.Point(e.vars.additional.width / 2, e.vars.additional.height / 2),
					r = new s.Graphics;
				r.beginFill(0, .35), r.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height), r.beginHole(), r.drawRoundedRect(e.vars.additional.width / 2 - 220, 400, 440, 400, 10), r.endHole(), r.endFill();
				var a = new qt(e),
					o = new s.Container,
					c = new s.Sprite(e.resources.spritesheets.ui["score_back.png"]),
					u = new s.Sprite(e.resources.spritesheets.ui["pic_coin.png"]),
					l = new v(e.resources.spritesheets.number, "num_", ".png", 0);
				c.anchor.set(.5), u.anchor.set(.5), l.anchor.set(.5), l.margin = 5, c.position.set(235, 75), u.x = -c.width / 2 + u.width / 2 + 10, l.x = 15, c.addChild(u), c.addChild(l);
				var d = function(t) {
						h.play(e, "coinadd");
						return setTimeout((function() {
							return h.stop(e, "coinadd")
						}), 600), l.animateNumber(t, 1, .6)
					},
					p = new s.Container,
					g = new s.Sprite(e.resources.spritesheets.text["tutorial_text_developvillage.png"]);
				g.anchor.set(.5), g.x = n.x, g.y = 300;
				var C = new f(e, e.resources.spritesheets.ui["btn_a_rad.png"], e.resources.spritesheets.ui["btn_ok.png"]);
				C.x = n.x, C.y = 1e3;
				var b = new $t(e);
				b.position.set(n.x + 25, n.y - 140), b.alpha = 0, m.scale(this, b, "handScale", 1, 1.1, .65, m.Ease.decel, 0);
				var y = function(t) {
						m.alpha(i, g, "textAlpha", 1, 0, .2).then((function() {
							return g.texture = e.resources.spritesheets.text[t], m.alpha(i, g, "textAlpha", 0, 1, .2)
						}))
					},
					w = ["tutorial_text_completebuilding.png", "tutorial_text_buildingsperiodically.png", "tutorial_text_last.png"],
					_ = function(t) {
						t ? m.alpha(i, C, "okAlpha", 0, 1, .2).then((function() {
							return C.interactiveChildren = !0
						})) : (C.interactiveChildren = !1, m.alpha(i, C, "okAlpha", 1, 0, .2))
					},
					x = 0;
				C.on("buttontap", (function() {
					switch (x) {
						case 0:
							y(w[x]), _(!1), d(100), a.buildBuilding().then((function() {
								return _(!0)
							})), x++;
							break;
						case 1:
							y(w[x]), _(!1), a.avaliable(), m.alpha(i, b, "handAlpha", 0, 1, .2), x++;
							break;
						case 2:
							y(w[x]), x++;
							break;
						case 3:
							i.nextScene()
					}
				})), a.on("gainCoin", (function(t) {
					m.alpha(i, b, "handAlpha", 1, 0, .2);
					var n = o.toLocal(t),
						r = new s.Point(c.x + u.x, c.y),
						a = new K(e, 3, n, r);
					a.once("landing", (function() {
						d(150).then((function() {
							return _(!0)
						}))
					})), o.addChild(a)
				})), this.addChild(a), this.addChild(c), this.addChild(o), this.addChild(r), p.addChild(g), p.addChild(C), p.addChild(b), this.addChild(p)
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(g),
		Yt = function(t) {
			function e(e) {
				var i = this;
				t.call(this), e.resources.images.header_02 = Gt.gamma(Gt.shiftHSV(e.resources.images.header_01, -104, 35, 36), 2.5), e.resources.images.header_05 = Gt.shiftHSV(Gt.gamma(e.resources.images.header_01, 2.32), 196, 82, -40), e.resources.images.header_06 = Gt.shiftHSV(e.resources.images.header_07, -115, -104, 116);
				var n = function() {
					var t = new Xt(e);
					t.defineImages({}), t.defineSpritesheets({
						text: "assets/languages/?/text.json"
					}), t.loadAllResources().then((function() {
						for (var i in t.image) e.resources.images[i] = t.image[i];
						for (var n in t.sheet) e.resources.spritesheets[n] = t.sheet[n];
						h()
					}))
				};
				this.scale.set(.5), e.vars.additional.width = 2 * e.width, e.vars.additional.height = 2 * e.height, e.vars.additional.sound = !0, e.resources.sounds.coinadd.loop(!0);
				var s = {
						stageId: 0,
						specialStage: r.NORMAL,
						tutorialFlag: !1,
						daily: {
							lastDay: 20000101,
							missions: _.getMissions()
						},
						village: {
							coin: 0,
							buildings: {}
						}
					},
					o = {
						score: 0
					};
				e.vars.data.saveData && Object.assign(s, e.vars.data.saveData), _.setCharaIds(s), _.getDateNumber() !== s.daily.lastDay && _.reload(e, s);
				var h = function(t) {
					var h = function(t) {
							void 0 === t && (t = !1);
							var r = new Ct(e, s, o, t);
							r.on(g.Event.NEXT, (function() {
								p.playGame().then((function() {
									return u()
								}))
							})), r.on(g.Event.LANGUAGE, (function(t) {
								p.nextScene().then((function() {
									p.destroy(), i.removeChildren(),
										function(t) {
											e.vars.api.changeLanguageAsync(t).then(n)
										}(t)
								}))
							})), r.on("tutorial", (function() {
								p.nextScene().then(l)
							})), r.on("flushData", (function() {
								p.flushData()
							})), p.changeScene(r)
						},
						c = function(t, i) {
							var n = new Bt(e, s, s.village, o, t, i);
							return n.on(g.Event.QUIT, (function() {
								p.quitGame().then((function() {
									return h()
								}))
							})), n.on(g.Event.SEND_SCORE, (function(t) {
								void 0 === t && (t = function() {}), p.sendScore().then(t)
							})), n.on(g.Event.NEXT, (function() {
								s.specialStage === r.BONUS ? p.playGame().then((function() {
									return u()
								})) : p.nextScene().then((function() {
									return h()
								}))
							})), n.on("retryBoss", (function() {
								p.nextScene().then((function() {
									i.options.time = Math.min(999, i.options.time + 60);
									var e = c(t, i);
									p.changeScene(e)
								}))
							})), n
						},
						u = function(t) {
							void 0 === t && (t = {
								mode: r.NORMAL
							});
							var i = e.resources.jsons.stage,
								n = i.stages,
								o = w.loop(n, s.stageId, i.tutorial),
								h = s.specialStage;
							if (h === r.BOSS || h === r.BONUS) {
								t.mode = h;
								for (var u = [], l = i.tutorial; l < n.length; l++) u.push(n[l]);
								n = u
							}
							var d = "assets/sounds/bgm.mp3";
							t.mode === r.BOSS ? (d = "assets/sounds/bgm_boss.mp3", o = E.array(n), t.options = {
								time: i.boss.time
							}) : t.mode === r.BONUS && (d = "assets/sounds/bgm_bonus.mp3", o = E.array(n), t.options = {
								time: i.bonus.time
							}), (new a.SoundLoader).loadAsync(d, {
								basepath: e.vars.env.basepath,
								version: e.vars.env.version + ""
							}).then((function(i) {
								e.resources.sounds.bgm = i.data;
								var n = c(o, t);
								t.mode === r.BOSS && (s.specialStage = r.NORMAL, p.flushData()), p.changeScene(n)
							}))
						},
						l = function() {
							var t = new Ft(e, s, o);
							return t.on(g.Event.NEXT, (function() {
								p.nextScene().then((function() {
									s.tutorialFlag ? h() : (s.tutorialFlag = !0, p.flushData(), d())
								}))
							})), p.changeScene(t), t
						},
						d = function() {
							var t = new Ut(e);
							t.on(g.Event.NEXT, (function() {
								p.nextScene().then((function() {
									return h(!0)
								}))
							})), p.changeScene(t)
						},
						p = new jt(e, s, o);
					i.addChild(p), s.tutorialFlag ? h(!0) : l()
				};
				e.vars.api.callAsync("startGame").then((function() {
					n()
				}))
			}
			return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
		}(a.Container),
		Vt = a.Content.create();
	Vt.setConfig({
		width: 360,
		height: 640
	}), Vt.defineImages({
		logo: "assets/images/logo.png",
		header_01: "assets/images/header_01.png",
		header_07: "assets/images/header_07.png",
		header_04: "assets/images/header_04.png",
		board_1: "assets/images/board_1.png",
		board_2: "assets/images/board_2.png",
		board_5: "assets/images/board_5.png",
		ef_lightup2: "assets/images/ef_lightup2.png",
		ef_aurora: "assets/images/ef_aurora.png",
		spotlight_black: "assets/images/spotlight_black.png",
		effect_half_circle: "assets/images/effect_half_circle.png"
	}), Vt.defineSpritesheets({
		number: "assets/spritesheets/number.json",
		ui: "assets/spritesheets/ui.json",
		character: "assets/spritesheets/character.json",
		village_character: "assets/spritesheets/village_character.json",
		building: "assets/spritesheets/building.json",
		lang: "assets/languages/languages.json",
		langui: "assets/languages/languageui.json"
	}), Vt.defineSounds({
		bgm: "assets/sounds/bgm.mp3",
		button: "assets/sounds/se_button.mp3",
		draw: "assets/sounds/se_carddraw.mp3",
		mix: "assets/sounds/se_card10mix.mp3",
		pop: "assets/sounds/se_cardpop.mp3",
		hand: "assets/sounds/se_cardhand.mp3",
		clear: "assets/sounds/se_stageclear.mp3",
		coinadd: "assets/sounds/se_coinadd.mp3"
	}), Vt.defineJsons({
		stage: "assets/jsons/stages.json",
		village: "assets/jsons/village.json"
	}), Vt.defineLibraries({
		root: Yt
	}), o.defineAnimatesTo(Vt, {
		erase_effect: {
			id: "EB9FF321E13B69429FA2973CF75879C7",
			basepath: "assets/animations/",
			filepath: "erase_effect.js"
		},
		special_combi: {
			id: "054EB6C997D02949A3DA804039DED842",
			basepath: "assets/animations/",
			filepath: "special_combi.js"
		},
		skill_shuffle: {
			id: "8CD2B45195AC9246974B8852E4F89651",
			basepath: "assets/animations/",
			filepath: "skill_shuffle.js"
		},
		skill_add: {
			id: "394C84341852DD44B2D1D2AED466E69B",
			basepath: "assets/animations/",
			filepath: "skill_add.js"
		},
		skill_hammer: {
			id: "87BAAC54BB61134F907FD7FC94A51ECF",
			basepath: "assets/animations/",
			filepath: "skill_hammer.js"
		},
		cutin: {
			id: "417544034E6B4D4C9610C3AB9CB9B5D5",
			basepath: "assets/animations/",
			filepath: "cutin.js"
		}
	}), SCG.startAsync({
		Content: Vt,
		width: 360,
		height: 640
	})
}(Pixim, PIXI, Pixim.animate);