module.exports = function (w) {

  return {
    files: [
      'src/*Node.ts'
    ],

    tests: [
      'test/*NodeSpec.ts'
    ],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.ts': w.compilers.typeScript({module: 'commonjs'})
    }

    // By default TypeScript compiler renames .coffee files to .js files.
    // If you'd like to not do it and for example use your own renaming strategy,
    // you may pass 'noRename' option to TS compiler
    //  '**/*.ts': w.compilers.typeScript({ noRename: true })
    // and may use preprocessors to rename files the way you like:
    //preprocessors: {
    //  '**/*.ts': file => file.rename(file.path + '.js').content
    //}

  };
};
