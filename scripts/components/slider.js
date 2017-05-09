(function($r, $){
    var Slider = function (selector, data) {
        var
            count       = 0,
            element     = $r(selector),
            cardWidth   = element.find('.card').size('width')+41,
            app = new Vue({
                el:     selector,
                data:   data
            });

        function filter (app, element, filterName) {
            return function() {
                var filter = element.find('.select-' + filterName).value();

                if(filter != app.filters[filterName]) {
    		            count = 0;
                    element.find('.packages .container').setTranslateX(0);
                    app.filters[filterName] = filter;
                }
            };
        }

        function loaded (element) {
            return element.find('.wait-ani').class('wait-ani hidden');
        }

        element.find('.right_arrow').on('click', function(e, t) {
            e.preventDefault();

            var
                packagesWidth   = element.find('.packages').size('width'),
                containerWidth  = element.find('.packages .container').size('width'),
                x               = element.find('.packages .container').getTranslate().x;

            if(containerWidth > packagesWidth && containerWidth+x > packagesWidth) {
                count++;
                element.find('.packages .container').animate({
                    style:      'x',
                    startPoint: x,
                    endPoint:   count*cardWidth*-1,
                    delta:      element.find(false).setDelta('easeOut',{
                        name: 'backbow',
                        progress: 1
                    }),
                    duration:   0.5
                });
            }

            return false;
        });

        element.find('.left_arrow').on('click', function(e, t) {
            e.preventDefault();

            var x = element.find('.packages .container').getTranslate().x;

            if(count > 0) {
                count--;
                element.find('.packages .container').animate({
                    style:      'x',
                    startPoint: x,
                    endPoint:   count*cardWidth*-1,
                    delta:      element.find(false).setDelta('easeOut',{
                        name: 'backbow',
                        progress: 1
                    }),
                    duration:   0.5
                });
            }

            return false;
        });

        $('.select-date').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('.select-date').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YY') + ' - ' + picker.endDate.format('DD/MM/YY'));
            filter(app, element, 'date')();
        });

        $('.select-date').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
            filter(app, element, 'date')();
        });

        element.find('.select-dest').on('change', filter(app, element, 'dest'));
        element.find('.select-type').on('change', filter(app, element, 'type'));

        loaded(element);

        return {
            app: app,
            filter: filter
        };
    };

    window.Slider = Slider;
})($r, $);
