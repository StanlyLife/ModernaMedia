import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';


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
            opacity: 0
        }),
        ], {optional: true}),
        query(':enter',[
            animate('300ms ease'),
            style({
                opacity: 1
                })
            ], 
            {optional: true}),
    ]),
]);