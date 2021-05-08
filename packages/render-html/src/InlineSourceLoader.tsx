import React, { useEffect } from 'react';
import { SourceLoaderProps } from './internal-types';
import RenderTTree from './RenderTTree';
import { RenderHTMLSourceInline } from './shared-types';

export type InlineSourceLoaderProps = {
  source: RenderHTMLSourceInline;
} & SourceLoaderProps;

function useInlineSourceLoader({
  source,
  onHTMLLoaded
}: InlineSourceLoaderProps) {
  const html = source.html;
  useEffect(() => {
    html && onHTMLLoaded?.call(null, html);
  }, [html, onHTMLLoaded]);
  return source;
}

export default function InlineSourceLoader(props: InlineSourceLoaderProps) {
  const { html } = useInlineSourceLoader(props);
  return React.createElement(RenderTTree, {
    html,
    baseUrl: props.source.baseUrl
  });
}
