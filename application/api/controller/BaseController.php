<?php

namespace app\api\controller;

use think\Controller;
use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Parser;
class BaseController extends Controller
{
    public $admin;
    public function _initialize()
    {
        //设置header头
        header("Access-Control-Allow-Origin: *");
        //验证token
        $controller = \request()->controller();
        $controller = explode('.',$controller)[1];
//        halt($controller);
        $action = \request()->action();
        $url = strtolower($controller.'/'.$action);
        //设置白名单
        if (!in_array($url,config('allow_url'))) {
            //得到token
            //如果header有token就取header中的  没有就取get 或 post中的
            $token = \request()->header('token')??input('token');
//            echo $token;
//            exit();
            //把token字符串转化成token对象
            if ($token===null){
                exit(api_json(-2,'令牌不存在'));
            }
            $token = (new Parser())->parse((string)$token);
            //验证token
            $data = new ValidationData();
            $data->setIssuer(config('url'));
            //判断token
            if ($token->validate($data)===false) {
                api_json(-1,'令牌有误');
            }
            //获取之前存的数据
         $this->admin = $token->getClaim('admin');
        }
           parent::_initialize();
    }


}
