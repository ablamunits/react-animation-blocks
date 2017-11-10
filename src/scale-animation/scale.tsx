import * as React from 'react';
import { Animation } from '../animation/animation';

export type ScaleAnimationProps = {
	animateIn: boolean;
	duration?: number;
	onComplete?: () => void;
	className?: string;
	children?: any;
};

export const ScaleAnimation: React.SFC<ScaleAnimationProps> = (props) => {
	const scaleKeyframes: AnimationKeyFrame[] = [
		{transform: 'scale(0)'},
		{transform: 'scale(1)'}
	];

	const scaleOptions: AnimationEffectTiming = {
		duration: props.duration || 300,
		easing: 'ease-in-out',
		direction: props.animateIn ? 'normal' : 'reverse',
		fill: 'forwards'
	};

	const animationProps = {
		animationName: 'scale-animation',
		animateIn: props.animateIn,
		keyFrames: scaleKeyframes,
		options: scaleOptions,
		onFinish: props.onComplete,
		className: props.className,
	};

	return (
		<Animation {...animationProps}>
			{props.children}
		</Animation>
	);
};
