import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        rules: {
            'react/self-closing-comp': [
                'error',
                { component: true, html: true },
            ],
        },
    },
]

export default eslintConfig
