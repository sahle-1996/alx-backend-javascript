/// <reference path="Educator.ts" />
/// <reference path="Modules.ts" />

namespace Modules {
  export interface Educator {
    expertiseInJava?: number;
  }

  export class JavaModule extends Module {
    listRequirements = (): string => 'These are the requirements for Java';

    findAvailableEducator = (): string => {
      if (!this.educator?.expertiseInJava) return 'No educator available';

      return `Educator on Duty: ${this.educator}`;
    }
  }
}
