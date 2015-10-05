var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var enrollmentSchema = new mongoose.Schema({
    account_id: {type: ObjectId, index: 1},
    title: {type: String},
    icon: {type: String},
    is_personal: {type: String},
    type: {type: String},
    sub_type: {type: String},
    keyword: {type: String},
    target: {type: String},
    location: {type: String},
    description: {type: String},
    images: [{type: String}],
    contacts: {type: String},
    phone: {type: String},
    enroll_state: {type: String},
    enroll_open: {type: Date, default: Date.now},
    enroll_close: {type: Date, default: Date.now},
    enroll_count: {type: Number, default: 1},
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

mongoose.model('Enrollment', enrollmentSchema);
