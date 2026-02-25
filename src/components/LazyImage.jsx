import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

export default function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={cn("overflow-hidden", wrapperClassName)}>
      {isInView && (
        <img
          src={src}
          alt={alt || ""}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
      {(!isInView || !isLoaded) && (
        <div
          className={cn(
            "animate-pulse bg-muted",
            className
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
