/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = async () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
};
