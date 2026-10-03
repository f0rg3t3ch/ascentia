/**
 * A photo from public/images/. Pass `srcSet`/`sizes` (build them with the
 * `responsivePhoto()` off useLang()) so the browser picks the width that
 * matches the slot instead of downloading the largest file.
 */
export default function Photo({ src, srcSet, sizes, alt, className = '', width, height, eager = false }) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      width={width}
      height={height}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}
