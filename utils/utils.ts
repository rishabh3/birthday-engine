export function getResourcePath(filePath: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const cleanBase = basePath.replace(/\/$/, "");   // remove trailing /
  const cleanPath = filePath.replace(/^\/+/, "");  // remove leading /

  return `${cleanBase}/${cleanPath}`;
}