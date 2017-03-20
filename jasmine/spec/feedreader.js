/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that each feed in the allFeeds object
         * has a URL defined and that the URL is not empty.
         */
        it('have non-empty URLs', function() {
            expect(allFeeds.length).toBeGreaterThan(0);
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        /* Test that each feed in the allFeeds object
         * has a name defined and that the name is not empty.
         */
        it('have non-empty names', function() {
            expect(allFeeds.length).toBeGreaterThan(0);
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });


    });


    describe('The menu', function() {

        /* Test that the menu element is hidden by default.
         * through the HTML and the CSS
         */
        it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* Test that the menu changes visibility when the menu icon is clicked.
          */
         it('changes visibility when menu icon is clicked', function() {
             expect($('body').hasClass('menu-hidden')).toBeTruthy(); // should start being hidden
             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBeFalsy();
             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBeTruthy();
         });
    });


    describe('Initial Entries', function(){
        // use of beforeEach() with a call to the asynchronous function,
        // passing 'done' as the callback function, marks when the test should start
        // (when done is called within the calling function)
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('.feed contains at least one .entry after loadFeed is called', function(done) {
            var entries = $('.feed').find('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done(); // call to done() marks end of this test
        });
    });

    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstFeeds;
        var secondFeeds;

        beforeEach(function(done) {
            loadFeed(0, function () {
                firstFeeds = $('.feed');
                loadFeed(1, function () {
                    secondFeeds = $('.feed');
                    done();
                });
            });
        });


        it('is different from Previous Feed Selection', function(done) {
            // TODO: fix test
            expect(firstFeeds).not.toBeUndefined();
            expect(secondFeeds).not.toBeUndefined();
            expect(firstFeeds).not.toEqual(secondFeeds);
            expect({a:'a'}).toEqual({a:'a'});
            done();
        });


    });




}());
