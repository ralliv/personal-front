/// <reference types="vite/client" />
interface MarkdownAttributes {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl?: string;
}

declare module "*.md" {
  import { ComponentType } from "react";

  const attributes: MarkdownAttributes;
  const html: string;
  const ReactComponent: ComponentType;

  export { attributes, html, ReactComponent };
  export default ReactComponent;
}
