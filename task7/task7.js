(() => {
  'use strict';
  const field = ['app.record.create.change.日付',
    'app.record.create.change.サイボウズ製品',
    'app.record.create.change.管理番号',
    'app.record.edit.change.日付',
    'app.record.edit.change.サイボウズ製品',
    'app.record.edit.change.管理番号',
    'app.record.create.show',
    'app.record.edit.show'];

  kintone.events.on(field, (event) => {
    const day = event.record.日付.value;
    const productName = event.record.サイボウズ製品.value;
    const controlNumber = event.record.管理番号.value ? event.record.管理番号.value : '';
    let cybozuProducts = '';
    switch (productName) {
      case 'kintone':
        cybozuProducts = 'KN';
        break;
      case 'Garoon':
        cybozuProducts = 'GR';
        break;
      case 'サイボウズ Office':
        cybozuProducts = 'OF';
        break;
      case 'Mailwise':
        cybozuProducts = 'MW';
        break;
      default:
        break;
    }
    let YYYYMMDD = dateFns.format(day, 'YYYYMMDD');
    event.record.重複禁止項目_文字列.value = `${YYYYMMDD}-${cybozuProducts}-${controlNumber}`;
    return event;
  });

  kintone.events.on([
    'app.record.create.show',
    'app.record.edit.show'
  ],(event) => {
    event.record.重複禁止項目_文字列.disabled = true;
    return event;
  });
})();