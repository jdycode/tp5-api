<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

/**
 * 封装API接口返回数据
 * @param int $status  状态 -1：令牌有误  0：失败 1：
 * @param string $mag  消息
 * @param null $data  数据
 */
function api_json($status =0,$mag='失败',$data=null){
    $result = [
        'status'=>$status,
        'msg'=>$mag,
        'data'=>$data
    ];
    exit(json_encode($result));
}