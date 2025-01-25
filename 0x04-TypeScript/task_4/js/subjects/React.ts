/// <reference path="Educator.ts" />
/// <reference path="Modules.ts" />

namespace Modules {
  export interface Educator {
    expertiseInReact?: number;
  }

  export class ReactModule extends Module {
    listRequirements = (): string => 'These are the prerequisites for React';

    findAvailableEducator = (): string => {
      if (!this.educator?.expertiseInReact) return 'No educator available';

      return `Educator Assigned: ${this.educator}`;
    }
  }
}
