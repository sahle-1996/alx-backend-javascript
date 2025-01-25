/// <reference path="Educator.ts" />

namespace Modules {
  export class Module {
    educator: Educator;

    assignEducator = (educator: Educator): void => {
      this.educator = educator;
    }
  }
}
