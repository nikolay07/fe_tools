import { createLogger } from '../logger';

it('Should return stored logs', () => {
    const logger = createLogger('user-log');

    expect(logger.getLogs()).toEqual([]);
});

it('Should save log message', () => {
    const logger = createLogger('user-log');
    logger.log('login success');

    expect(logger.getLogs()).toEqual(['log - user-log - login success']);
});

it('Should save errors', () => {
    const logger = createLogger('user-log');
    logger.error('login failed');

    expect(logger.getLogs()).toEqual(['log - user-log - login failed']);
});