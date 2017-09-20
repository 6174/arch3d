import xFetch from '../../common/xFetch';

export async function getAll() {
  return xFetch('/api/todos');
}
