import * as api from '@lp-labs/significant-digit-rounder';
import { roundSignificant } from '@lp-labs/significant-digit-rounder';
console.log(roundSignificant(1234.56, 3));
// @ts-expect-error invalid argument must be rejected by declarations
api.roundSignificant('10', 2);
