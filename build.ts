import * as esbuild from 'esbuild';
import * as dts from 'esbuild-plugin-d.ts'

// 定义构建选项
const options: esbuild.BuildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/index.js',
    platform: 'node',
    target: 'node14',
    // plugins:[dts()],
    // 指定类型声明文件的输出路径
    outdir: 'dist/types',
};

// 执行构建
esbuild.build(options).catch(() => process.exit(1));