import { ExampleFile, FileType } from '../../../../shared/models';

export const cellTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'cell-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/cell-template-usage/cell-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

