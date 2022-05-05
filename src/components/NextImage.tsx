import Image, { ImageProps } from 'next/image';
import * as React from 'react';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width: string | number;
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export const NextImage = ({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps) => {
  const blurClasses = `animate-pulse ${blurClassName}`.trim();
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );
  const imageClassName = `${imgClassName} ${
    status === 'loading' && blurClasses
  }`;

  return (
    <figure style={{ width: `${width}px` }} className={className}>
      <Image
        className={imageClassName}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        layout='responsive'
        {...rest}
      />
    </figure>
  );
};
