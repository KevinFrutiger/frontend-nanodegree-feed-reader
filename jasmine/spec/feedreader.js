/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have property "URL" defined and it\'s not empty', function() {
            for(var key in allFeeds) {
                expect(allFeeds[key].url).toBeDefined();
                expect(allFeeds[key].url).not.toBe('');
            }
        });

        it('have property "name" defined and it\'s not empty', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].name).toBeDefined();
                expect(allFeeds[key].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        var $body = $('body');

        it ('is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

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

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('at least one .entry element in the .feeder element ' +
            'after loadFeed() runs', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        var previousContent = '';
        var $feed = $('.feed');

        beforeEach(function(done) {
            previousContent = $feed.html();
            loadFeed(1, done);
        });

        it('loadFeed() changes feed content', function(done) {
            expect($feed.html()).not.toEqual(previousContent);
            done();
        });
    });
}());
