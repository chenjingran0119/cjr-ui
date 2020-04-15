import Button from './button'
import Input from './input'
import Ele from './ele'


const components = [
  Button,
  Input,
  Ele
];
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.use(component));
  // Vue.prototype._ = _;
};
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
  Button,
  Input,
  Ele
  // install(Vue) {
  //   Vue.use(Button)
  //   Vue.use(Input)
  //   Vue.use(Ele)
  // },
}
