(() => {
  'use strict';
  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
    const content = event.record.重複禁止項目.value;
    const recordId = event.recordId;
    const query = `重複禁止項目 = "${content}" and レコード番号 != "${recordId}" `
    const query2 = `重複禁止項目 = "${content}"`
    console.log(event)
    const params = {
      app: kintone.app.getId(),
      fields: ['重複禁止項目'],
      query: recordId? query:query2
    };

    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
      if (resp.records.length === 0) {
        return event;
      }
      const ansertResult = window.confirm('レコードが重複しています。このまま保存しますか？');
      if (ansertResult) {
        return event;
      } else {
        return false;
      }
    });
  });
})();