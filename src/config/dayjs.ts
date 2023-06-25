import * as dayjs from 'dayjs';
require('dayjs/locale/es');
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es');

export default () => ({});
