import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  // NOTE: classNameBindings the property which needs to be camelCase
  // HOWEVER, when class is applied, it will be hyphenated aka not-current
  //
  classNameBindings: ['notCurrent', 'hasValue'],
  notCurrent: Ember.computed('day.currentMonth', function () {
    return !this.get('day.isCurrentMonth');
  }),

  hasValue: Ember.computed.notEmpty('day.value')
});