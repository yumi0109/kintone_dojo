(() => {
  'use strict';

  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;
    console.log(record);
    const action5 = ['あくなき探求', '不屈の心体', '理想への共感', '心を動かす', '知識を増やす', '公明正大'];

    action5.forEach((elem) => {
      record.Table.value.push({
        value: {
          Action5: {
            type: 'DROP_DOWN',
            value: elem
          },
          状況: {
            type: 'CHECK_BOX',
            value: ['未振り返り']
          },
          課題: {
            type: 'MULTI_LINE_TEXT',
            value: ''
          }
        }
      });
    });

    record.Table.value.shift();
    return event;
  });
})();