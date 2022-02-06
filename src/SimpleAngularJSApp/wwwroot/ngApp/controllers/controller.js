var SimpleAngularJSApp;
(function (SimpleAngularJSApp) {
    var ItemsController = (function () {
        function ItemsController() {
            this.items = [
                { id: 1, name: 'Widget' },
                { id: 2, name: 'Midget' },
                { id: 3, name: 'Tidget' }
            ];
        }
        return ItemsController;
    }());
    angular.module('SimpleAngularJSApp').controller('ItemsController', ItemsController);
})(SimpleAngularJSApp || (SimpleAngularJSApp = {}));
//# sourceMappingURL=controller.js.map