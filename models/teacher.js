var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var teacherSchema = new mongoose.Schema({
    account_id: {type: ObjectId, index: 1},
    name: {type: String},
    gender: {type: Number},
    phone: {type: String},
    show_phone: {type: Boolean, default: true},
    portrait: {type: String},
    is_personal: {type: String},
    is_valid: {type: String},
    introduction: {type: String},
    certificates: [{type: String}],
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

mongoose.model('Teacher', teacherSchema);
