"use strict";
jQuery(document).ready(function ($) {

    /*-----------------------------------------------------------------------------------*/
    /* Variables (element selectors) */
    /*-----------------------------------------------------------------------------------*/
    var selector_wrapper = $("#site-home"), // Main wrapper
        selector_window = $(window), // window
        selector_show = ".show", // selector show
        selector_hide = ".hide", // selector hide
        class_show = "show", // show class
        class_hide = "hide", // Hde class
        class_preLoader = "preloader", // Preloader class
        selector_sticky_header = $("#sticky-header"), // Sticky header selector
        selector_form = $("#myForm"), // Ajax form selector
        form_submit = selector_form.find("#form-submit-btn i.fa"), // Submit button icon
        form_clear = selector_form.find(".value-clear"), // Form input values clear class
        mobileButton = ".nav-mobile", // Mobile navigation
        selector = ".site-nav", // Header navigation
        offCanvas = ".nav-off-canvas", // Off canvas selector
        active = "active", // Active class
        subMenu = ".site-sub-menu"; // sub menu

    /*-----------------------------------------------------------------------------------*/
    /* Template JS */
    /*-----------------------------------------------------------------------------------*/
    var Template_JS = {

        /*-----------------------------------------------------------------------------------*/
        /* Pre-loader: This is used to show the full page pre-loader.
         * As long as the website does not load completely
         * Source: http://gasparesganga.com/labs/jquery-loading-overlay/ */
        /*-----------------------------------------------------------------------------------*/
        pre_loader: function () {

            // Pre-loader initialize (Plugin Options)
            $.LoadingOverlay(class_show, {
                color: "white", // Background Color. Default white color. You can also used hex color code. Like (#ffffff)
                fade: false, // Animate the overlay div. Options (true, false)
                image: "images/loader-purple.gif", // Animate GIF image Path
                zIndex: 1000 // z-index value. Overlay div always stay top of the website content. Value is in integer
            });

            // Windows load function
            selector_window.on("load", function () {
                // Hid the pre-loader after content load
                $.LoadingOverlay(class_hide);
                // remove the pre-loader class
                selector_wrapper.removeClass(class_preLoader);
            });

        },

        /*-----------------------------------------------------------------------------------*/
        /* Quick view section changeable options
         * Source: http://idangero.us/swiper/api/ */
        /*-----------------------------------------------------------------------------------*/
        quick_view_section: function () {

            /* Plugin initialize (Unique ID selector) */
            new Swiper("#quick-view-slider", {

                // Changeable options
                loop: true, // Set to true to enable continuous loop mode.
                initialSlide: 1, // Index number of initial slide.
                pagination: "#quick-view-paging", // String with CSS selector or HTML element of the container with pagination
                nextButton: "#quick-view-next", // String with CSS selector or HTML element of the element that will work like "next" button after click on it
                prevButton: "#quick-view-prev", // String with CSS selector or HTML element of the element that will work like "prev" button after click on it
                paginationClickable: true, // If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
                slidesPerView: 5, // Number of slides per view (slides visible at the same time on slider's container).
                spaceBetween: 20, // Distance between slides in px.

                // Responsive breakpoints
                breakpoints: {
                    // when window width is <= 500px
                    "500": {
                        slidesPerView: 1, // Number of slides per view (slides visible at the same time on slider's container).
                        spaceBetweenSlides: 0 // Distance between slides in px.
                    },
                    // when window width is <= 767px
                    "767": {
                        slidesPerView: 2, // Number of slides per view (slides visible at the same time on slider's container).
                        spaceBetweenSlides: 20 // Distance between slides in px.
                    },
                    // when window width is <= 992px
                    "991": {
                        slidesPerView: 3, // Number of slides per view (slides visible at the same time on slider's container).
                        spaceBetweenSlides: 20 // Distance between slides in px.
                    }
                }
            });
        },

        /*-----------------------------------------------------------------------------------*/
        /* Team Section changeable options
         * Source: http://idangero.us/swiper/api/ */
        /*-----------------------------------------------------------------------------------*/
        team_section: function () {

            /* Plugin initialize (Unique ID selector) */
            new Swiper("#team-slider", {

                // Changeable options
                loop: true, // Set to true to enable continuous loop mode.
                initialSlide: 0, // Index number of initial slide.
                pagination: "#team-paging", // String with CSS selector or HTML element of the container with pagination
                nextButton: "#team-next", // String with CSS selector or HTML element of the element that will work like "next" button after click on it
                prevButton: "#team-prev", // String with CSS selector or HTML element of the element that will work like "prev" button after click on it
                paginationClickable: true, // If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
                slidesPerView: 3, // Number of slides per view (slides visible at the same time on slider's container).
                spaceBetween: 20, // Distance between slides in px.
                speed: 1000, // Duration of transition between slides (in ms)
                autoplay: 1000,
                grabCursor: true,

                // Responsive breakpoints
                breakpoints: {
                    // when window width is <= 500px
                    "600": {
                        slidesPerView: 1, // Number of slides per view (slides visible at the same time on slider's container).
                        spaceBetweenSlides: 0 // Distance between slides in px.
                    },
                    // when window width is <= 767px
                    "991": {
                        slidesPerView: 2, // Number of slides per view (slides visible at the same time on slider's container).
                        spaceBetweenSlides: 20 // Distance between slides in px.
                    }
                }
            });
        },

        testimonial_section: function () {

            /* Plugin initialize (Unique ID selector) */
            new Swiper("#testimonial-slider", {

                // Changeable options
                loop               : true,                  // Set to true to enable continuous loop mode.
                initialSlide       : 0,                     // Index number of initial slide.
                pagination         : "#testimonial-paging", // String with CSS selector or HTML element of the container with pagination
                nextButton         : "#testimonial-next",   // String with CSS selector or HTML element of the element that will work like "next" button after click on it
                prevButton         : "#testimonial-prev",   // String with CSS selector or HTML element of the element that will work like "prev" button after click on it
                paginationClickable: true,                  // If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
                slidesPerView      : 1,                     // Number of slides per view (slides visible at the same time on slider's container).
                spaceBetween       : 20,                    // Distance between slides in px.
                speed              : 1000,                  // Duration of transition between slides (in ms)
                autoplay           : 3000,                  // Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
                grabCursor         : true,
            });
        },

        /*-----------------------------------------------------------------------------------*/
        /* Sticky Header changeable options
         * Source: https://github.com/garand/sticky */
        /*-----------------------------------------------------------------------------------*/
        sticky_header: function () {

            // Plugin initialize
            selector_sticky_header.sticky({
                topSpacing: 0 // Pixels between the page top and the element's top.
            });
        },


        /*-----------------------------------------------------------------------------------*/
        /* Scroll top changeable options
         * Source: https://github.com/markgoodyear/scrollup */
        /*-----------------------------------------------------------------------------------*/
        scroll_top: function () {

            // Plugin initialize
            $.scrollUp({
                scrollDistance: 300, // Distance from top/bottom before showing element (px)
                scrollFrom: "top", // 'top' or 'bottom'
                scrollSpeed: 1000, // Speed back to top (ms)
                easingType: "linear", // Scroll to top easing (see http://easings.net/)
                animation: "fade", // Fade, slide, none
                animationSpeed: 400, // Animation in speed (ms)
                scrollText: "<i class='fa fa-angle-up'></i>", // Text for element, can contain HTML (font awesome icon)
                zIndex: 10000 // Z-Index for the overlay
            });
        },


        /*-----------------------------------------------------------------------------------*/
        /* Internal scroll links changeable option */
        /*-----------------------------------------------------------------------------------*/
        internal_scroll_links: function (scroll_speed) {

            // Change the scroll speed. Value is in milliseconds
            scroll_speed = 1000;

            // click function
            $("header .site-nav a[href^='#']").on("click", function (e) {

                // Stop default behaviour
                e.preventDefault();

                // Get the target
                var target = this.hash,
                    $target = $(target);

                // scroll animate
                $("html, body").stop().animate({
                    "scrollTop": $target.offset().top
                }, scroll_speed);
            });
        },


        /*-----------------------------------------------------------------------------------*/
        /* Ajax Contact Form
         * Send the contact email without page reload
         * Go to (php > form.php) file. And change the email address where you want to
         * received the mails */
        /*-----------------------------------------------------------------------------------*/
        ajax_contact_form: function () {

            // Set up an event listener for the contact form.
            selector_form.on("submit", function (event, self) {

                // Stop the browser from submitting the form.
                event.preventDefault();

                // this
                self = $(this);

                // show the progress bar
                form_submit.css("display", "inline-block");

                // Submit the form using AJAX.
                $.ajax({
                        type: "POST", // Post type
                        url: self.attr("action"), // Form action url
                        data: self.serialize() // serialize the form data
                    })
                    // Mail success
                    .done(function () {

                        // alert on success
                        alert("Your mail was sent successfully");

                        // Clear the form input values.
                        form_clear.val("");

                        // hide the progress bar
                        form_submit.css("display", "none");
                    })

                    // Mail not success
                    .fail(function (data) {

                        // Set the message text.
                        if (data.responseText !== "") {
                            alert("Error");
                        }

                        // hide the progress bar
                        form_submit.css("display", "none");
                    });
            });
        },


        /*-----------------------------------------------------------------------------------*/
        /* Header Navigation for mobile view
         * Changeable options */
        /*-----------------------------------------------------------------------------------*/
        header_navigation: function (current) {

            // Changeable options
            this.offCanvas_show_speed = 500; // Off canvas menu show speed. Value is in milliseconds
            this.offCanvas_hide_speed = 500; // Off canvas menu hide speed. Value is in milliseconds
            this.slide_down_speed = 400; // Down down slide down speed. Value is in milliseconds
            this.slide_up_speed = 400; // Drop down slide up speed. Value is in milliseconds

            // this
            current = this;

            // Menu mobile button icon change
            this.icon_change = function (selector) {

                // variables
                var getCloseClass = selector.find(selector_hide).attr("class");
                var getShowClass = selector.find(selector_show).attr("class");
                selector.find(selector_show).attr("class", getCloseClass).removeClass(class_hide).addClass(class_show);
                selector.find(selector_hide).attr("class", getShowClass).removeClass(class_show).addClass(class_hide);
            };

            /*-----------------------------------------------------------------------------------*/
            /* Click function to show the off canvas menu */
            /*-----------------------------------------------------------------------------------*/
            $(selector).find(mobileButton).on("click", function (self) {

                // variable
                self = $(this);

                // check if the has class active
                if (!$(selector).find(offCanvas).hasClass(active)) {

                    // show the menu
                    $(selector).find(offCanvas).animate({
                            "left": "0"
                        }, current.offCanvas_show_speed, function () {

                            // Call icon change function
                            current.icon_change(self);

                        })
                        // active class
                        .addClass(active);
                } else {

                    // hide the menu
                    $(selector).find(offCanvas).animate({
                            "left": "-1000px"
                        }, current.offCanvas_hide_speed, function () {

                            // Call icon change function
                            current.icon_change(self);
                        })
                        // remove class
                        .removeClass(active);
                }

                // Stop default behaviour
                return false;

            });


            /*-----------------------------------------------------------------------------------*/
            /* Out side click to close the off canvas menu */
            /*-----------------------------------------------------------------------------------*/
            selector_window.on("mouseup", function (event) {

                // Check if the mouse not on menu
                if (!$(selector).is(event.target) &&
                    $(selector).has(event.target).length === 0 &&
                    $(selector).find(offCanvas).hasClass(active)) {

                    // hide the menu
                    $(selector).find(offCanvas).animate({
                            "left": "-1000px"
                        }, current.offCanvas_hide_speed, function () {

                            // Call icon change function
                            current.icon_change($(mobileButton));

                        })
                        // remove class
                        .removeClass(active);

                }
            });


            /*-----------------------------------------------------------------------------------*/
            /* Off canvas close button */
            /*-----------------------------------------------------------------------------------*/

            // Append the close button inside the off canvas menu
            $(selector).find(offCanvas).prepend("<div class='offCanvasClose'><i class='fa fa-close'></i></div>");

            // Close button click event
            $(selector).find(".offCanvasClose").on("click", function () {

                // Check if the has class active
                if ($(selector).find(offCanvas).hasClass(active)) {

                    // Hide the menu
                    $(selector).find(offCanvas).animate({
                            "left": "-1000px"
                        }, current.offCanvas_hide_speed, function () {

                            // Call icon change function
                            current.icon_change($(mobileButton));

                        })
                        // remove class
                        .removeClass(active);
                }

                // Stop the link default behaviour
                return false;
            });


            /*-----------------------------------------------------------------------------------*/
            /* Mobile view drop down */
            /*-----------------------------------------------------------------------------------*/
            $(selector).find(subMenu).parent("li").on("click", function (event) {

                // stop bubbling
                event.stopPropagation();

                // check if the sub menu is hidden
                if ($(this).children(subMenu).is(":hidden") && $(selector).find(mobileButton).is(":visible")) {

                    // show the sub menu
                    $(this).children(subMenu).slideDown(current.slide_down_speed);

                    // Check if the sub menu is visible
                } else if ($(this).children(subMenu).is(":visible") && $(selector).find(mobileButton).is(":visible")) {

                    // hide the sub menu
                    $(this).children(subMenu).slideUp(current.slide_up_speed);
                }

            });
        }
    };

    /*-----------------------------------------------------------------------------------*/
    /* wow animation */
    /*-----------------------------------------------------------------------------------*/
    new WOW().init();

    /*-----------------------------------------------------------------------------------*/
    /* Call Functions */
    /*-----------------------------------------------------------------------------------*/
    Template_JS.pre_loader(); // Call pre-loader function
    Template_JS.quick_view_section(); // Call quick view section function
    Template_JS.team_section(); // Call team section function
    Template_JS.testimonial_section();      // Call testimonial section function
    Template_JS.sticky_header(); // Call sticky header function
    Template_JS.scroll_top(); // Call scroll top function
    Template_JS.internal_scroll_links(); // Call internal scroll link function
    Template_JS.ajax_contact_form(); // Call ajax contact form function
    Template_JS.header_navigation(); // Call header navigation function
    Template_JS.twitter_feed(); // Call twitter feed function

});