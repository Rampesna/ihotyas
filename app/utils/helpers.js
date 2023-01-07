const moment = require('moment');

exports.reformatDatetimeTo_YYYY_MM_DD_HH_MM_SS = (
    datetime,
) => {
    return moment(datetime).format('YYYY-MM-DD HH:mm:ss');
};
