import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Optional } from '@angular/core';


//:enter is new page
//:leave is old page

// export const slideInAnimation =
// trigger('routeAnimations', [
//     transition('* <=> *', slideTo('left')),
// ]);

// function slideTo() {
//     const optional = {optional: true};
//     return [
//         query(':enter, :leave')
//     ]
// }
export const slideInAnimation =
trigger('routeAnimations', [
    transition('* <=> *', [
    //     style({ 
    //     position: 'relative',
    // }),
        query(':enter, :leave', [
        style({
            position: 'Absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            background: '#fff',
            transform: 'opacity(0)'
        }),
        ], {optional: true}),
        query(':enter',[
            animate('300ms ease'),
            style({
                transform: 'opacity(1)'
                })
            ], 
            {optional: true}),
    ]),
]);