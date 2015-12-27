/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    describe('RSS Feeds', function() {

        /* allFeeds is defined and not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Every feed has a url property that's not empty. */
        it('have property "URL" defined and it\'s not empty', function() {
            for(var key in allFeeds) {
                expect(allFeeds[key].url).toBeDefined();
                expect(allFeeds[key].url).not.toBe('');
            }
        });

        /* Every feed has a name property that's not empty. */
        it('have property "name" defined and it\'s not empty', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].name).toBeDefined();
                expect(allFeeds[key].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        var $body = $('body');

        /* The menu is hidden by default. */
        it ('is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

        /* The menu displays when the menu icon is clicked. */
        it ('shows when menu icon clicked ' +
            'and hides when menu icon clicked again', function() {

            var $menuIcon = $('.menu-icon-link');

            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);

            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function(){

        // Caution: Calling loadFeed ONCE for all specs in suite.
        beforeAll(function(done) {
            loadFeed(0, done);
        });

        /* loadFeed() adds at least one entry under the feed element. */
        it('at least one .entry element in the .feed element ' +
            'after loadFeed() runs', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });


        /** Additional specs above required **/

        /* First entry has heading that has text. */
        it('first .entry element has an <h2> that has text', function(done) {
            expect($('.entry h2').length).toBeGreaterThan(0);

            if ($('.entry h2').length > 0) {
                expect($('.entry h2').first().text()).not.toBe('');
            }

            done();
        });

        /* First entry has an .author element that has text. */
        it('first .entry element has an .author element that has text',
            function(done) {
                expect($('.entry .author').length).toBeGreaterThan(0);

                if($('.entry .author').length > 0) {
                    expect($('.entry .author').first().text()).not.toBe('');
                }

                done();
        });

    });

    describe('New Feed Selection', function() {

        var previousContent = '';
        var $feed = $('.feed');

        beforeEach(function(done) {
            previousContent = $feed.html();
            loadFeed(2, done);
        });

        /* loadFeed() changes the feed content. */
        it('loadFeed() changes feed content', function(done) {
            expect($feed.html()).not.toEqual(previousContent);
            done();
        });
    });
}());
