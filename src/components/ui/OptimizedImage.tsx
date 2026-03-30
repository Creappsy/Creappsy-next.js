import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fill = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  const isUnsplash = src.includes("unsplash.com");
  const isPexels = src.includes("pexels.com");
  const isExternal = isUnsplash || isPexels;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={cn("object-cover", className)}
      priority={priority}
      unoptimized={isExternal}
    />
  );
}
