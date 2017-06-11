'use strict';

module.exports = function (Employee) {
    Employee.getAssetAmountForEmployee = function (id, cb) {
        var filter = {
            include: {
                relation: 'assets',
                scope: {
                    fields: ['purchasePrice']
                }
            }
        }

        Employee.findById(id, filter, function (err, empl) {
            if (err) {
                console.log(err);
                return;
            }

            var emplObj = empl.toJSON();
            var totalAmount = 0;
            emplObj.assets.forEach(asset => {
                totalAmount += asset.purchasePrice;
            });
            cb(null, totalAmount);
        });
    };

    Employee.remoteMethod('getAssetAmountForEmployee', {
        description: 'Returns asset amount for employee',
        accepts: {
            arg: 'id',
            type: 'string',
            required: true
        },
        http: {
            path: '/:id/getAssetAmountForEmployee',
            verb: 'get'
        },
        returns: {
            arg: 'amount',
            type: 'number'
        }
    })
};
