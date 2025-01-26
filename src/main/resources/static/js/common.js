
(function($, document, window) {
	$(document).ready(function($) {/* Add scroll recognition class */
		$(window).scroll(function() {
			var scroll = $(this).scrollTop();
			if ($(this).scrollTop() > 160) {
				$('body').addClass('header_scrolled');
			} else {
				$('body').removeClass('header_scrolled');
			}
		});
	});
})(jQuery, document, window);

(function() {
	var N = this;
	N.N2_ = N.N2_ || {
		r: [],
		d: []
	}, N.N2R = N.N2R || function() {
		N.N2_.r.push(arguments)
	}, N.N2D = N.N2D || function() {
		N.N2_.d.push(arguments)
	}
}).call(window);
if (!window.n2jQuery) {
	window.n2jQuery = {
		ready: function(cb) {
			console.error('n2jQuery will be deprecated!');
			N2R(['$'], cb)
		}
	}
}
window.nextend = {
	jQueryFallback: 'vendor/jquery/jquery.js',
	localization: {},
	ready: function(cb) {
		console.error('nextend.ready will be deprecated!');
		N2R('documentReady', function($) {
			cb.call(window, $)
		})
	}
};
	N2R('documentReady', function($) {
		N2R([ "documentReady", "smartslider-frontend",
				"smartslider-backgroundanimation",
				"smartslider-simple-type-frontend" ], function() {
			new N2Classes.SmartSliderSimple('#n2-ss-2', {
				"admin" : false,
				"callbacks" : "",
				"background.video.mobile" : 1,
				"alias" : {
					"id" : 0,
					"smoothScroll" : 0,
					"slideSwitch" : 0,
					"scroll" : 1,
					"scrollSpeed" : 400
				},
				"align" : "normal",
				"isDelayed" : 0,
				"load" : {
					"fade" : 1,
					"scroll" : 0
				},
				"playWhenVisible" : 1,
				"playWhenVisibleAt" : 0.5,
				"responsive" : {
					"hideOn" : {
						"desktopLandscape" : false,
						"desktopPortrait" : false,
						"tabletLandscape" : false,
						"tabletPortrait" : false,
						"mobileLandscape" : false,
						"mobilePortrait" : false
					},
					"onResizeEnabled" : true,
					"type" : "fullwidth",
					"downscale" : 1,
					"upscale" : 1,
					"minimumHeight" : 0,
					"maximumSlideWidth" : {
						"desktopLandscape" : 3000,
						"desktopPortrait" : 3000,
						"tabletLandscape" : 3000,
						"tabletPortrait" : 3000,
						"mobileLandscape" : 3000,
						"mobilePortrait" : 3000
					},
					"forceFull" : 1,
					"forceFullOverflowX" : "body",
					"forceFullHorizontalSelector" : "body",
					"constrainRatio" : 1,
					"sliderHeightBasedOn" : "real",
					"decreaseSliderHeight" : 0,
					"focusUser" : 1,
					"focusEdge" : "auto",
					"breakpoints" : [ {
						"device" : "tabletPortrait",
						"type" : "max-screen-width",
						"portraitWidth" : 1199,
						"landscapeWidth" : 1199
					}, {
						"device" : "mobilePortrait",
						"type" : "max-screen-width",
						"portraitWidth" : 700,
						"landscapeWidth" : 900
					} ],
					"enabledDevices" : {
						"desktopLandscape" : 0,
						"desktopPortrait" : 1,
						"tabletLandscape" : 0,
						"tabletPortrait" : 1,
						"mobileLandscape" : 0,
						"mobilePortrait" : 1
					},
					"sizes" : {
						"desktopPortrait" : {
							"width" : 2800,
							"height" : 1300,
							"max" : 3000,
							"min" : 1200
						},
						"tabletPortrait" : {
							"width" : 701,
							"height" : 325,
							"max" : 1199,
							"min" : 701
						},
						"mobilePortrait" : {
							"width" : 320,
							"height" : 148,
							"max" : 900,
							"min" : 320
						}
					},
					"normalizedDeviceModes" : {
						"unknown" : "desktopPortrait",
						"desktopPortrait" : "desktopPortrait",
						"desktopLandscape" : "desktopPortrait",
						"tabletLandscape" : "desktopPortrait",
						"tabletPortrait" : "tabletPortrait",
						"mobileLandscape" : "tabletPortrait",
						"mobilePortrait" : "mobilePortrait"
					},
					"overflowHiddenPage" : 0,
					"focus" : {
						"offsetTop" : "#wpadminbar",
						"offsetBottom" : ""
					}
				},
				"controls" : {
					"mousewheel" : 0,
					"touch" : "horizontal",
					"keyboard" : 1,
					"blockCarouselInteraction" : 1
				},
				"lazyLoad" : 0,
				"lazyLoadNeighbor" : 0,
				"blockrightclick" : 0,
				"maintainSession" : 0,
				"autoplay" : {
					"enabled" : 1,
					"start" : 1,
					"duration" : 4000,
					"autoplayLoop" : 1,
					"allowReStart" : 0,
					"pause" : {
						"click" : 0,
						"mouse" : "0",
						"mediaStarted" : 0
					},
					"resume" : {
						"click" : 0,
						"mouse" : "0",
						"mediaEnded" : 1,
						"slidechanged" : 0
					},
					"interval" : 1,
					"intervalModifier" : "loop",
					"intervalSlide" : "current"
				},
				"perspective" : 1500,
				"layerMode" : {
					"playOnce" : 0,
					"playFirstLayer" : 1,
					"mode" : "skippable",
					"inAnimation" : "mainInEnd"
				},
				"bgAnimationsColor" : "RGBA(51,51,51,1)",
				"bgAnimations" : {
					"global" : [ {
						"type" : "Flat",
						"tiles" : {
							"delay" : 0,
							"sequence" : "ForwardDiagonal"
						},
						"main" : {
							"type" : "both",
							"duration" : 1,
							"zIndex" : 2,
							"current" : {
								"ease" : "easeOutCubic",
								"opacity" : 0
							}
						}
					} ],
					"color" : "RGBA(51,51,51,1)",
					"speed" : "normal"
				},
				"mainanimation" : {
					"type" : "fade",
					"duration" : 800,
					"delay" : 0,
					"ease" : "easeOutQuad",
					"parallax" : 0,
					"shiftedBackgroundAnimation" : 0
				},
				"carousel" : 1,
				"dynamicHeight" : 0,
				"initCallbacks" : function($) {
				}
			})
		});
		N2R([ "documentReady", "smartslider-frontend",
				"smartslider-backgroundanimation",
				"smartslider-simple-type-frontend" ], function() {
			new N2Classes.SmartSliderSimple('#n2-ss-3', {
				"admin" : false,
				"callbacks" : "",
				"background.video.mobile" : 1,
				"alias" : {
					"id" : 0,
					"smoothScroll" : 0,
					"slideSwitch" : 0,
					"scroll" : 1,
					"scrollSpeed" : 400
				},
				"align" : "normal",
				"isDelayed" : 0,
				"load" : {
					"fade" : 1,
					"scroll" : 0
				},
				"playWhenVisible" : 1,
				"playWhenVisibleAt" : 0.5,
				"responsive" : {
					"hideOn" : {
						"desktopLandscape" : false,
						"desktopPortrait" : false,
						"tabletLandscape" : false,
						"tabletPortrait" : false,
						"mobileLandscape" : false,
						"mobilePortrait" : false
					},
					"onResizeEnabled" : true,
					"type" : "fullwidth",
					"downscale" : 1,
					"upscale" : 1,
					"minimumHeight" : 0,
					"maximumSlideWidth" : {
						"desktopLandscape" : 2500,
						"desktopPortrait" : 2500,
						"tabletLandscape" : 2500,
						"tabletPortrait" : 2500,
						"mobileLandscape" : 2500,
						"mobilePortrait" : 2500
					},
					"forceFull" : 1,
					"forceFullOverflowX" : "body",
					"forceFullHorizontalSelector" : "body",
					"constrainRatio" : 1,
					"sliderHeightBasedOn" : "real",
					"decreaseSliderHeight" : 0,
					"focusUser" : 1,
					"focusEdge" : "auto",
					"breakpoints" : [ {
						"device" : "tabletPortrait",
						"type" : "max-screen-width",
						"portraitWidth" : 1199,
						"landscapeWidth" : 1199
					}, {
						"device" : "mobilePortrait",
						"type" : "max-screen-width",
						"portraitWidth" : 700,
						"landscapeWidth" : 900
					} ],
					"enabledDevices" : {
						"desktopLandscape" : 0,
						"desktopPortrait" : 1,
						"tabletLandscape" : 0,
						"tabletPortrait" : 1,
						"mobileLandscape" : 0,
						"mobilePortrait" : 1
					},
					"sizes" : {
						"desktopPortrait" : {
							"width" : 750,
							"height" : 900,
							"max" : 3000,
							"min" : 750
						},
						"tabletPortrait" : {
							"width" : 701,
							"height" : 841,
							"max" : 1199,
							"min" : 701
						},
						"mobilePortrait" : {
							"width" : 320,
							"height" : 384,
							"max" : 900,
							"min" : 320
						}
					},
					"normalizedDeviceModes" : {
						"unknown" : "desktopPortrait",
						"desktopPortrait" : "desktopPortrait",
						"desktopLandscape" : "desktopPortrait",
						"tabletLandscape" : "desktopPortrait",
						"tabletPortrait" : "tabletPortrait",
						"mobileLandscape" : "tabletPortrait",
						"mobilePortrait" : "mobilePortrait"
					},
					"overflowHiddenPage" : 0,
					"focus" : {
						"offsetTop" : "#wpadminbar",
						"offsetBottom" : ""
					}
				},
				"controls" : {
					"mousewheel" : 0,
					"touch" : "horizontal",
					"keyboard" : 1,
					"blockCarouselInteraction" : 1
				},
				"lazyLoad" : 0,
				"lazyLoadNeighbor" : 0,
				"blockrightclick" : 0,
				"maintainSession" : 0,
				"autoplay" : {
					"enabled" : 1,
					"start" : 1,
					"duration" : 4000,
					"autoplayLoop" : 1,
					"allowReStart" : 0,
					"pause" : {
						"click" : 0,
						"mouse" : "0",
						"mediaStarted" : 0
					},
					"resume" : {
						"click" : 0,
						"mouse" : "0",
						"mediaEnded" : 1,
						"slidechanged" : 0
					},
					"interval" : 1,
					"intervalModifier" : "loop",
					"intervalSlide" : "current"
				},
				"perspective" : 1500,
				"layerMode" : {
					"playOnce" : 0,
					"playFirstLayer" : 1,
					"mode" : "skippable",
					"inAnimation" : "mainInEnd"
				},
				"bgAnimationsColor" : "RGBA(51,51,51,1)",
				"bgAnimations" : {
					"global" : [ {
						"type" : "Flat",
						"tiles" : {
							"delay" : 0,
							"sequence" : "ForwardDiagonal"
						},
						"main" : {
							"type" : "both",
							"duration" : 1,
							"zIndex" : 2,
							"current" : {
								"ease" : "easeOutCubic",
								"opacity" : 0
							}
						}
					} ],
					"color" : "RGBA(51,51,51,1)",
					"speed" : "normal"
				},
				"mainanimation" : {
					"type" : "fade",
					"duration" : 800,
					"delay" : 0,
					"ease" : "easeOutQuad",
					"parallax" : 0,
					"shiftedBackgroundAnimation" : 0
				},
				"carousel" : 1,
				"dynamicHeight" : 0,
				"initCallbacks" : function($) {
				}
			})
		})
	});