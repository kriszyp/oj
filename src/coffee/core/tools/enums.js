// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    'use strict';
    OJ.enums.register('unknown', 'unknown');
    OJ.enums.register('tryParse', function(OJEnum, enumMember, caseSensitive) {
      'use strict';
      var ret;
      ret = OJ.enums.unknown;
      if (OJ.contains(OJEnum, enumMember)) {
        ret = OJEnum[enumMember];
      } else if (false === caseSensitive) {
        OJ.each(OJEnum, function(member) {
          if (OJ.contains(OJEnum, member) && OJ.to.string(member).toLowerCase() === OJ.to.string(enumMember).toLowerCase()) {
            ret = member;
          }
        });
      }
      return ret;
    });
    OJ.enums.register('inputTypes', {
      button: {
        id: 0,
        name: 'button',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      checkbox: {
        id: 1,
        name: 'checkbox',
        placeholder: false,
        autocomplete: false,
        value: {
          required: true,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      color: {
        id: 2,
        name: 'color',
        placeholder: false,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      date: {
        id: 3,
        name: 'date',
        placeholder: false,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      datetime: {
        id: 4,
        name: 'datetime',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      'datetime-local': {
        id: 5,
        name: 'datetime-local',
        placeholder: false,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      email: {
        id: 6,
        name: 'email',
        placeholder: true,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      file: {
        id: 7,
        name: 'file',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: false
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      hidden: {
        id: 8,
        name: 'hidden',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      image: {
        id: 9,
        name: 'image',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      month: {
        id: 10,
        name: 'month',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      number: {
        id: 11,
        name: 'number',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      password: {
        id: 12,
        name: 'password',
        placeholder: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      radio: {
        id: 13,
        name: 'radio',
        placeholder: false,
        autocomplete: false,
        value: {
          required: true,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      range: {
        id: 14,
        name: 'range',
        placeholder: false,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      reset: {
        id: 15,
        name: 'reset',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      search: {
        id: 16,
        name: 'search',
        placeholder: true,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      submit: {
        id: 17,
        name: 'submit',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      tel: {
        id: 18,
        name: 'button',
        placeholder: true,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      },
      text: {
        id: 19,
        name: 'text',
        placeholder: true,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      time: {
        id: 20,
        name: 'time',
        placeholder: false,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      url: {
        id: 21,
        name: 'url',
        placeholder: true,
        autocomplete: true,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '200px',
        defaultsize: '25'
      },
      week: {
        id: 22,
        name: 'week',
        placeholder: false,
        autocomplete: false,
        value: {
          required: false,
          allowed: true
        },
        defaultwidth: '',
        defaultsize: '25'
      }
    });
    OJ.enums.register('rateIntervalTypes', {
      Hourly: 'Hourly',
      WeeklyByDay: 'WeeklyByDay',
      MonthlyByDate: 'MonthlyByDate',
      MonthlyByWeekAndDay: 'MonthlyByWeekAndDay',
      YearlyByDate: 'YearlyByDate'
    });
    OJ.enums.register('domElementEvent', {
      click: 'click',
      change: 'change',
      vclick: 'vclick',
      tap: 'tap'
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=enums.map
