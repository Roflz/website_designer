import React from 'react';
import clsx from 'clsx';

export interface ImageWithEffectsProps {
  src: string;
  alt?: string;
  overlay?: 'gradient' | 'color';
  overlayColor?: string; // Tailwind classes, e.g. 'from-primary/80 to-secondary/80' or 'bg-black/40'
  shadow?: string; // e.g. 'xl', '2xl', etc.
  rounded?: string; // e.g. 'xl', 'full', etc.
  zoomOnHover?: boolean;
  blurBackground?: boolean;
  aspectRatio?: string; // e.g. '16/9', '1/1', etc.
  className?: string;
  style?: React.CSSProperties;
}

const aspectRatioClass = (ratio?: string) => {
  if (!ratio) return '';
  // Tailwind aspect-[16/9] syntax
  return `aspect-[${ratio}]`;
};

const ImageWithEffects: React.FC<ImageWithEffectsProps> = ({
  src,
  alt = '',
  overlay,
  overlayColor,
  shadow = 'xl',
  rounded = 'xl',
  zoomOnHover = false,
  blurBackground = false,
  aspectRatio,
  className,
  style,
}) => {
  return (
    <div
      className={clsx(
        'relative w-full',
        aspectRatioClass(aspectRatio),
        className
      )}
      style={style}
    >
      {/* Blurred background */}
      {blurBackground && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className={clsx(
            'absolute inset-0 w-full h-full object-cover blur-lg scale-105 z-0',
            rounded && `rounded-${rounded}`
          )}
        />
      )}
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={clsx(
          'relative z-10 w-full h-auto object-cover transition-transform duration-300',
          rounded && `rounded-${rounded}`,
          shadow && `shadow-${shadow}`,
          zoomOnHover && 'hover:scale-105 hover:shadow-2xl',
          blurBackground && 'mix-blend-normal'
        )}
        style={{ display: blurBackground ? 'inline-block' : undefined }}
      />
      {/* Overlay */}
      {overlay === 'gradient' && overlayColor && (
        <div
          className={clsx(
            'absolute inset-0 z-20 pointer-events-none',
            rounded && `rounded-${rounded}`,
            `bg-gradient-to-br ${overlayColor}`
          )}
        />
      )}
      {overlay === 'color' && overlayColor && (
        <div
          className={clsx(
            'absolute inset-0 z-20 pointer-events-none',
            rounded && `rounded-${rounded}`,
            overlayColor
          )}
        />
      )}
    </div>
  );
};

export default ImageWithEffects; 