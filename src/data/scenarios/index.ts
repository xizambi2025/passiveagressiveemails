export type { Scenario } from './types';

import { clientScenarios } from './clients';
import { coworkerScenarios } from './coworkers';
import { managerScenarios } from './managers';
import { supplierScenarios } from './suppliers';
import { meetingScenarios } from './meetings';
import { deadlineScenarios } from './deadlines';
import { invoiceScenarios } from './invoices';
import { corporateBuzzwordScenarios } from './corporate-buzzwords';
import { employeeScenarios } from './employees';
import { freelancerScenarios } from './freelancers';
import { miscScenarios } from './misc';
import { extraScenarios } from './extra';
import { bonusScenarios } from './bonus';
import type { Scenario } from './types';

export const scenarios: Scenario[] = [
  ...clientScenarios,
  ...coworkerScenarios,
  ...managerScenarios,
  ...supplierScenarios,
  ...meetingScenarios,
  ...deadlineScenarios,
  ...invoiceScenarios,
  ...corporateBuzzwordScenarios,
  ...employeeScenarios,
  ...freelancerScenarios,
  ...miscScenarios,
  ...extraScenarios,
  ...bonusScenarios,
];

export {
  clientScenarios,
  coworkerScenarios,
  managerScenarios,
  supplierScenarios,
  meetingScenarios,
  deadlineScenarios,
  invoiceScenarios,
  corporateBuzzwordScenarios,
  employeeScenarios,
  freelancerScenarios,
  miscScenarios,
  extraScenarios,
  bonusScenarios,
};
