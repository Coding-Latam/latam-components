import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/tailwind-output.css',
  namespace: 'latamcomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  testing: {
    browserHeadless: 'new',
  },
  // plugins: [tailwind(), tailwindHMR()],
};
