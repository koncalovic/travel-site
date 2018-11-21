import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
// import waypoints from '../../node_modules/waypoints/lib/jquery.waypoints.js';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothSrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		// this.lazyImages.load(function() {
		// 	Waypoint.refreshAll();
		// });
	}

	addSmoothSrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		 var that = this;
		 new Waypoint({
		 	element: this.headerTriggerElement[0],
		 	handler: function(direction) {
		 		if(direction == "down") {
		 			that.siteHeader.addClass("site-header--dark");
		 		} else {
		 			that.siteHeader.removeClass("site-header--dark");
		 		}
		 	}
		 });
	}

	createPageSectionWaypoints() {
		 var that = this;
		 this.pageSections.each(function() {
		 	var currentPageSection = this;
		 	new Waypoint({
		 		element: currentPageSection,
		 		handler: function(direction) {
		 			if (direction == "down") {
		 				var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
		 				that.headerLinks.removeClass("is-current-link");
		 				$(matchingHeaderLink).addClass("is-current-link");	
		 			}		
		 		},
		 		offset: "18%"
		 	});

		 		new Waypoint({
		 		element: currentPageSection,
		 		handler: function(direction) {
		 			if (direction == "up") {
		 				var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
		 				that.headerLinks.removeClass("is-current-link");
		 				$(matchingHeaderLink).addClass("is-current-link");	
		 			}		
		 		},
		 		offset: "-40%"
		 	});
		 })
	}
}

export default StickyHeader;