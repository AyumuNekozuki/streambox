import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ja';

dayjs.extend(LocalizedFormat)
dayjs().format('L LT')
// dayjs.locale('ja')

export default ({ app }, inject) => {
  inject('dayjs', ((string) => dayjs(string)))
}

