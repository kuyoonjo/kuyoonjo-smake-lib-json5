import { resolve } from 'path';
import { LLVM } from 'smake';

export abstract class LibJson5 {
  static config(llvm: LLVM) {
    llvm.includedirs = [
      ...llvm.includedirs,
      resolve(__dirname, '..', 'include').replace(/\\/g, '/'),
    ];
  }
}
