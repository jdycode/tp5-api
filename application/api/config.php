<?php
//配置文件
return [
//个人域名
    'url' => 'http://www.api.com',
    //白名单
    'allow_url' => [
        'member/login',
        'member/sms',
        'member/reg',
        'member/forget'
    ],
//短信验证
    'sms' => [
        'access_key' => '',
        'access_secret' => '',
        'sign_name' => ''
    ],
];
