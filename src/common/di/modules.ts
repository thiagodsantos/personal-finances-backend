import { container } from 'common/di/container';

import { account } from 'common/di/modules/account/account.container';

container.add(account);

export { container as modules };
