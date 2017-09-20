import xFetch from './xFetch';

/**
 * [getAll description]
 * @return {[type]} [description]
 */
export async function getAll() {
  return xFetch('/api/todos');
}
