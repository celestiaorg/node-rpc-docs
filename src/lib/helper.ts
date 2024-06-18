/* eslint-disable @typescript-eslint/no-explicit-any */
import { Method } from './types';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://github.com/celestiaorg.png',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const getExampleRequest = (pkg: string, method: Method): string => {
  return JSON.stringify(
    {
      id: 1,
      jsonrpc: '2.0',
      method: pkg + '.' + method.name,
      params: method.params.map((param: any) =>
        param.schema && param.schema.examples
          ? param.schema.examples[0]
          : undefined
      ),
    },
    null,
    2
  );
};

export const getExampleResponse = (method: Method): string => {
  return JSON.stringify(
    {
      id: 1,
      jsonrpc: '2.0',
      result:
        method.result.description == 'Null' || !method.result.schema.examples
          ? []
          : [method.result.schema.examples[0]],
    },
    null,
    2
  );
};
