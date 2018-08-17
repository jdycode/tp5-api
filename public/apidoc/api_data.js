define({ "api": [
  {
    "type": "get",
    "url": "/api/v2/member/detail",
    "title": "用户详情",
    "version": "2.0.0",
    "name": "detail",
    "group": "member",
    "description": "<p>用户详情</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v2/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v2/member/detail"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/member/detail",
    "title": "用户详情",
    "version": "1.0.0",
    "name": "detail",
    "group": "member",
    "description": "<p>用户详情</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>令牌</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v1/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v1/member/detail"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v2/member/forget",
    "title": "重置密码",
    "version": "2.0.0",
    "name": "forget",
    "group": "member",
    "description": "<p>重置密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v2/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v2/member/forget"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/member/forget",
    "title": "重置密码",
    "version": "1.0.0",
    "name": "forget",
    "group": "member",
    "description": "<p>重置密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v1/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v1/member/forget"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v2/member/login",
    "title": "用户登录",
    "version": "2.0.0",
    "name": "login",
    "group": "member",
    "description": "<p>login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "admin",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "123456",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v2/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v2/member/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/member/login",
    "title": "用户登录",
    "version": "1.0.0",
    "name": "login",
    "group": "member",
    "description": "<p>login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "admin",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "123456",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v1/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v1/member/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v2/member/reg",
    "title": "用户注册",
    "version": "2.0.0",
    "name": "reg",
    "group": "member",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v2/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v2/member/reg"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/v1/member/reg",
    "title": "用户注册",
    "version": "1.0.0",
    "name": "reg",
    "group": "member",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v1/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v1/member/reg"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v2/member/sms",
    "title": "短信验证",
    "version": "2.0.0",
    "name": "sms",
    "group": "member",
    "description": "<p>短信验证</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v2/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v2/member/sms"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/member/sms",
    "title": "短信验证",
    "version": "1.0.0",
    "name": "sms",
    "group": "member",
    "description": "<p>短信验证</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          }
        ]
      }
    },
    "filename": "Application/api/controller/v1/MemberController.php",
    "groupTitle": "member",
    "sampleRequest": [
      {
        "url": "http://www.api.com/api/v1/member/sms"
      }
    ]
  }
] });
