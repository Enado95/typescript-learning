import { Company } from './Company';
import { User } from './User';

import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const custMap = new CustomMap('map');

custMap.addMaker(user);
custMap.addMaker(company);
