import { container } from '@common/container';
import { router } from '@infrastructure/http/router/router.container';

container.add(router);

export { container as http };
