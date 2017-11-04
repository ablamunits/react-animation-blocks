import * as React from 'react';
import { Animation } from '../animation/animation';
import { KeyFrame } from '../keyframe/keyframe.i';

export type OpacityAnimationProps = {
	in: boolean;
	children?: any;
};

export const OpacityAnimation: React.SFC<OpacityAnimationProps> = (props) => {
	const opacityKeyframes: KeyFrame[] = [
		{opacity: 0},
		{opacity: 1}
	];

	const opacityAnimationOptions: any = {
		duration: 2000,
		easing: 'ease-in-out',
		direction: props.in ? 'normal' : 'reverse',
		fill: 'forwards'
	};

	return (
		<Animation keyFrames={opacityKeyframes} options={opacityAnimationOptions}>
			{props.children}
		</Animation>
	);
};
