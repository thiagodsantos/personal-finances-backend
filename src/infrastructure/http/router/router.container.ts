import { container } from '@common/container';

import { ExpressRouter } from '@common/http/router/express';
import { Router } from '@common/http/router';

container.register(Router, ExpressRouter);

export { container as router };
