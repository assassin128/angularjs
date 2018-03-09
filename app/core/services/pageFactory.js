angular.module('BlankApp').factory('pageFactory', [pageFactory]);

function pageFactory() {
    var title = 'default';
    return {
        title: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = newTitle;
        }
    };
}