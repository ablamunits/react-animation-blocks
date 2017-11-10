import * as React from 'react';
import { OpacityAnimationDemo } from '../src/opacity-animation/opacity.demo';
import { ScaleAnimationDemo } from '../src/scale-animation/scale.demo';
import { HeightAnimationDemo } from '../src/height-animation/height.demo';

export const DemoPage = () => {
	return (
		<div className='demo-page'>
			<OpacityAnimationDemo/>
			<ScaleAnimationDemo/>
			<HeightAnimationDemo/>
		</div>
	);
};
