import React from 'react';

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Result University</h1>
//             <h3 className="centered" style={{ color: '#666666' }}>
//                 Университет Frontend & AI разработки
//             </h3>
//         </section>
//     )
// }

const e = React.createElement;

export default function IntroSection() {
    return e(
        'section', 
        null, 
        [
            e('h1', {className: 'centered'}, 'Result University'),
            e('h3', {className: 'centered', style: { color: '#666666' }}, 'Университет Frontend & AI разработки')
        ]
    )
}