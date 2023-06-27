(() => {
  'use strict';
  const field = ['app.record.create.change.日付',
    'app.record.create.change.サイボウズ製品',
    'app.record.create.change.管理番号',
    'app.record.edit.change.日付',
    'app.record.edit.change.サイボウズ製品',
    'app.record.edit.change.管理番号'];

  kintone.events.on(['app.record.create.show', 'app.record.edit.show', field], (event) => {
    event.record.重複禁止項目_文字列.disabled = true;
    const day = event.record.日付.value;
    const productName = event.record.サイボウズ製品.value;
    const controlNumber = event.record.管理番号.value ? event.record.管理番号.value : '';
    let cybozuProducts = '';
    if (productName === 'kintone') {
      cybozuProducts = 'KN';
    } else if (productName === 'Garoon') {
      cybozuProducts = 'GR';
    } else if (productName === 'サイボウズ Ofiice') {
      cybozuProducts = 'OF';
    } else if (productName === 'Mailwise') {
      cybozuProducts = 'MW';
    }
    let YYYYMMDD = dateFns.format(day, 'YYYYMMDD');
    event.record.重複禁止項目_文字列.value = `${YYYYMMDD}-${cybozuProducts}-${controlNumber}`;
    return event;
  });
})();