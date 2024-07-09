import { container } from '@common/container';

import { Logger } from '@common/logger';
import { WinstonLogger } from '@common/logger/winston';

container.register(Logger, WinstonLogger);

export { container as logger };
