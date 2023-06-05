import add from '@/utils/add';
import subtract from '@/utils/subtract';
import multiply from '@/utils/multiply';
export default function (a, b) {
  return add(a, b) + subtract(a, b) + multiply(a, b);
}
