import 'react';

declare module 'react' {
  interface CSSProperties {
    '--background-color'?: string;
    '--opacity'?: number;
  }
}
