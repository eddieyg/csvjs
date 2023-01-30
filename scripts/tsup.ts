import { defineConfig, Options } from 'tsup'

export function tsupNomalConfig(cover?: Options) {
  return defineConfig({
    entry: ['./src/index.ts'],
    format: [
      'cjs',
      'esm',
    ],
    dts: true,
    clean: true,
    ...cover,
  })
}
