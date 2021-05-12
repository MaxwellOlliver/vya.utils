import { parseISO } from 'date-fns';
import { format } from 'date-fns/esm';
import { ptBR } from 'date-fns/esm/locale';

export function flexFormat(dateParam, output) {
  const ymd = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/g;
  const dmy = /^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/g;

  if (!['YMD', 'DMY'].includes(output)) {
    output = 'YMD';
  }
  let date = dateParam;
  if (output === 'YMD' && ymd.test(dateParam)) {
    return date;
  }

  if (output === 'DMY' && dmy.test(dateParam)) {
    return date;
  }

  if (dmy.test(dateParam)) {
    const dateSplitted = dateParam.split('/');
    const dateApplyPattern = `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`;

    date = format(parseISO(dateApplyPattern), 'yyyy-MM-dd', {
      locale: ptBR,
    });
  } else if (ymd.test(dateParam)) {
    date = format(parseISO(dateParam), 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }

  return date;
}
