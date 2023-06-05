import add from '@/utils/add';
import subtract from '@/utils/subtract';
import multiply from '@/utils/multiply';
import divide from '@/utils/divide';

const a = add(10, 4);
const b = subtract(10, 4);
const c = multiply(10, 4);
const d = divide(10, 4);
console.log('add:', a);
console.log('subtract:', b);
console.log('multiply:', c);
console.log('divide:', d);

// import f from './common';

// f.then((res) => {
//   // const data1 = res[0];
//   // const data2 = res[1];
//   // const data3 = res[2];
//   // const data4 = res[3];
//   // console.log(data1, data2, data3, data4);
// });

// import('@/utils/subtract.js').then((m) => {
//   console.log('subtract:', m.default(8, 4));
// });
// import('@/utils/add').then((m) => {
//   console.log('add:', m.default(8, 4));
// });

// import('@/utils/multiply').then((m) => {
//   console.log('multiply:', m.default(8, 4));
// });

// import('@/utils/divide').then((m) => {
//   console.log('divide:', m.default(8, 4));
// });
