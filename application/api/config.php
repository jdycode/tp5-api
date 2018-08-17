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
        'access_key' => 'LTAIZB5XDmEyaNfT',
        'access_secret' => 'oCsoy06A0M9b8Mb52mUeOjTZ9AUE73',
        'sign_name' => '蒋达勇'
    ],
];