var teacher = {
    getModel: function (name) {
        switch (name.toLowerCase()) {
            case "create":
                return {
                    model: {
                        name: {
                            displayName: "名称",
                            placeholder: "请输入名称"
                        },
                        gender: {
                            type: "radio",
                            displayName: "性别",
                            placeholder: "选择您的性别",
                            items: [
                                {value: 0, text: '男'},
                                {value: 1, text: '女'}
                            ]
                        },
                        phone: {
                            displayName: "电话",
                            placeholder: "填入您的联系电话"
                        },
                        show_phone: {
                            type: "switch",
                            displayName: "是否显示您的联系电话"
                        },
                        is_personal: {
                            type: "switch",
                            displayName: "是否为公司"
                        },
                        introduction: {
                            type: 'textarea',
                            displayName: "简介",
                            placeholder: "请输入描述信息"
                        }
                    },
                    acceptButton: {
                        value: "确定"
                    },
                    onsubmit: "return newTeacher()"
                };

            case "find":
                return {
                    model: []
                }

            case "show":
                return {
                    model: {}
                }
        }
    }
};

module.exports = teacher;