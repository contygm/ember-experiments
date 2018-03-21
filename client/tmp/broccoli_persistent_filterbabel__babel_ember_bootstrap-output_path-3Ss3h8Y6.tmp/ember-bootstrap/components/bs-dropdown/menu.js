define('ember-bootstrap/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _menu.default.extend({
    tagName: '',

    isOpen: Ember.computed({
      get: function get() {
        return false;
      },
      set: function set(key, value) {
        var update = this.get('_popperApi.update');
        update && update();
        return value;
      }
    }),

    flip: true,

    _popperApi: null,

    popperPlacement: Ember.computed('direction', 'align', function () {
      var placement = 'bottom-start';

      var _getProperties = this.getProperties('direction', 'align'),
          direction = _getProperties.direction,
          align = _getProperties.align;

      if (direction === 'up') {
        placement = 'top-start';
        if (align === 'right') {
          placement = 'top-end';
        }
      } else if (direction === 'left') {
        placement = 'left-start';
      } else if (direction === 'right') {
        placement = 'right-start';
      } else if (align === 'right') {
        placement = 'bottom-end';
      }
      return placement;
    }),

    popperModifiers: Ember.computed('inNav', 'flip', function () {
      return {
        // @todo add offset config
        applyStyle: {
          enabled: !this.get('inNav')
        },
        flip: {
          enabled: this.get('flip')
        }
      };
    }),

    actions: {
      registerPopperApi: function registerPopperApi(api) {
        this.set('_popperApi', api);
      }
    }
  });
});