import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className='container'>
            <h4 className='center'>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo metus eget finibus congue. Pellentesque convallis ac lorem at pretium. Nunc et pretium lectus, nec sagittis lorem. Ut ornare, nulla vitae pellentesque porttitor, arcu mauris consequat ligula, ac efficitur purus nibh ut odio. Maecenas vulputate nisl nec faucibus blandit. </p>
        </div>
    );
}

export default Rainbow(About);