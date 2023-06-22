(() => {
    'use strict';

    const getAPI = async () => {
        const params = {
            app: 23
        };
        const resp = await kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params);
        const action5 = [];
        const options = resp.properties.Table.fields.Action5.options;
        for (const element of Object.keys(options)) {
            const num = options[element].index;
            action5[num] = element;
        }
        return action5;
    };

    const insertTable = (event, action5Array) => {
        const subtableArry = event.record.Table.value;
        subtableArry.shift();
        action5Array.forEach((elem) => {
            subtableArry.push({
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
    };
    
    kintone.events.on('app.record.create.show',async (event) =>  {
        const record = event.record;
        const data = await getAPI();
        insertTable(event, data);
        getAPI();
        return event;
    });
})();