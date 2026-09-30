import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      // Variáveis não utilizadas
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Evita usar any sem necessidade
      '@typescript-eslint/no-explicit-any': 'warn',

      // Não permite console.log
      'no-console': 'warn',

      // === Estilo ===

      // Aspas simples
      quotes: ['error', 'single'],

      // Sem ponto e vírgula
      semi: ['error', 'never'],

      // Espaços
      'object-curly-spacing': ['error', 'always'],

      // === Boas práticas ===

      // Comparação sempre com ===
      eqeqeq: 'error',

      // Evita var
      'no-var': 'error',

      // Prefere const quando possível
      'prefer-const': 'error',
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
    ],
  },
)