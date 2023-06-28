(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const action5 = ['あくなき探求', '不屈の心体', '理想への共感', '心を動かす', '知識を増やす', '公明正大'];
    const arryRow = [];

    for (let i = 0; i < action5.length; i++) {
      arryRow[i] = {
        value: {
          'Action5': {
            type: 'DROP_DOWN',
            value: action5[i]
          },
          '状況': {
            type: 'CHECK_BOX',
            value: ['未振り返り']
          },
          '課題': {
            type: 'MULTI_LINE_TEXT',
            value: ''
          }
        }
      };
      event.record.Table.value[i] = arryRow[i];
    };
    return event;
  });
})();