import nextPlugin from '@next/eslint-plugin-next'
import configs from '@status-im/eslint-config'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/.next',
      '**/node_modules',
      'src/app/(payload)/admin/importMap.js',
      // Out of scope for get.status.app CMS MVP — kept for a later expansion.
      'src/collections/BuilderHub.ts',
      'src/collections/BuilderResources.ts',
      'src/collections/Circles.ts',
      'src/collections/Ideas.ts',
      'src/collections/Rfps.ts',
      'src/services/content-workflow/save-builder-*.ts',
      'src/services/content-workflow/save-circle-*.ts',
      'src/services/content-workflow/save-idea-as-pr.ts',
      'src/services/content-workflow/save-rfp-as-pr.ts',
    ],
  },
  ...configs,
  {
    files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
