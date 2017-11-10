import * as React from 'react';
import { Animation, AnimationProps, BaseAnimationProps } from '../animation/animation';

export type OpacityAnimationProps = BaseAnimationProps;

export const OpacityAnimation: React.SFC<OpacityAnimationProps> = (props) => {
	const opacityKeyframes: AnimationKeyFrame[] = [
		{opacity: 0},
		{opacity: 1}
	];

	return (
		<Animation animationName='opacity-animation' keyFrames={opacityKeyframes} {...props}>
			{props.children}
		</Animation>
	);
};
