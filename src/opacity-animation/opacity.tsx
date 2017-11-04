import * as React from 'react';
import { Animation } from '../animation/animation';

export type OpacityAnimationProps = {
	in: boolean;
	onComplete?: () => void;
	children?: any;
};

export const OpacityAnimation: React.SFC<OpacityAnimationProps> = (props) => {
	const opacityKeyframes: AnimationKeyFrame[] = [
		{opacity: 0},
		{opacity: 1}
	];

	const opacityOptions: AnimationEffectTiming = {
		duration: 2000,
		easing: 'ease-in-out',
		direction: props.in ? 'normal' : 'reverse',
		fill: 'forwards'
	};

	const animationProps = {
		keyFrames: opacityKeyframes,
		options: opacityOptions,
		onFinish: props.onComplete
	};

	return (
		<Animation {...animationProps}>
			{props.children}
		</Animation>
	);
};
