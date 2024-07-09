import { container } from '@common/container';
import { account } from '@infrastructure/modules/account/account.container';

container.add(account);

export { container as modules };
