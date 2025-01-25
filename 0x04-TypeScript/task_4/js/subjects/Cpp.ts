/// <reference path="Educator.ts" />
/// <reference path="Modules.ts" />

namespace Modules {
  export interface Educator {
    expertiseInCpp?: number;
  }

  export class CppModule extends Module {
    listRequirements = (): string => 'These are the requirements for C++';

    findAvailableEducator = (): string => {
      if (!this.educator?.expertiseInCpp) return 'No educator available';

      return `Educator on Duty: ${this.educator}`;
    }
  }
}
