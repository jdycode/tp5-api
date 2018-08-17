<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use Lcobucci\JWT\ValidationData;
use Mrgoon\AliSms\AliSms;
use think\Cache;
use think\Controller;
use think\Db;
use think\Request;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Parser;
use think\Validate;

class MemberController extends BaseController
{
    /**
     * @api {get} /api/v1/member/login 用户登录
     * @apiVersion 1.0.0
     * @apiName login
     * @apiGroup member
     *
     * @apiDescription login
     *
     * @apiParam  {String} username=admin 用户名
     * @apiParam  {String} password=123456 密码
     *
     */

    public function login($username, $password)
    {
        $admin = Db::name('members')->field('id,username,password')->where('username', $username)->find();
//        return  json($admin);
        //判断用户是否存在
        if ($admin && password_verify($password, $admin['password'])) {
            unset($admin['password']);
            //生成Token令牌
            $token = (new Builder())->setIssuer(config('url'))//发行者
            ->setExpiration(time() + 3600 * 24 * 7)// 令牌过期时间
            ->set('admin', $admin)// 配置用户ID
            ->getToken(); // 得到Token
//给用户添加Token
            $admin['token'] = (string)$token;
//            halt($admin);
            //验证通过
            api_json(1, '登录成功', $admin);
        }
        api_json(0, '登录失败');
    }

    /**
     * @api {get} /api/v1/member/detail 用户详情
     * @apiVersion 1.0.0
     * @apiName detail
     * @apiGroup member
     *
     * @apiDescription 用户详情
     * @apiHeader {string} token 令牌
     *
     */

    public function detail()
    {
        $admin = Db::name('members')->where('id', $this->admin->id)->find();
        unset($admin['password']);
//        halt($admin);

        return api_json(1, '成功', $admin);
    }

    /**
     * @api {get} /api/v1/member/sms 短信验证
     * @apiVersion 1.0.0
     * @apiName sms
     * @apiGroup member
     *
     * @apiDescription 短信验证
     * @apiParam  {String} tel 电话
     *
     */

    public function sms($tel)
    {
        $code = rand(10000, 99999);
        //把验证码存起来
        Cache::set("tel_" . $tel, $code, 3600 * 24);
        //设置验证码过期时间
        $aliSms = new AliSms();
        $response = $aliSms->sendSms($tel, 'SMS_140660142', ['code' => $code], config('sms'));
        if ($response->Message === "OK") {
            api_json(1, '验证码发送成功');
        }
        api_json(0, $response->message);
    }

    /**
     * @api {post} /api/v1/member/reg  用户注册
     * @apiVersion 1.0.0
     * @apiName reg
     * @apiGroup member
     *
     * @apiDescription 用户注册
     *
     * @apiParam  {String} username 用户名
     * @apiParam  {String} password 密码
     * @apiParam  {String} tel 电话
     * @apiParam  {String} sms 验证码
     *
     */

    public function reg(Request $request)
    {
        //得到所有数据
        $data = $request->post();
//        halt($data);
        //验证手机号码
        $validate = Validate::make($data, [
            'username' => 'required',
            'sms' => 'required',
            'tel' => [
                'required',
                'regex:/^o?(13|14|15|17|18|19)[0-9]{9}$/',
                'unique:members'],
            'password' => 'required|min:6'
        ]);
        if ($validate === false) {
            api_json(-1, '你输入不规范', $data);
        }
        //取出验证码
        $code = Cache::get("tel_" . $data['tel']);
        //判断验证码是否一致

        if ((string)$code !== $data['sms']) {
            api_json(-1, '验证码错误');
        }
        //密码加密
        $data['password'] = password_hash($data['password'], 1);
        //数据入库
        unset($data['sms']);
        $result = Db::name('members')->insert($data);

        api_json(1, '注册成功', $data);
    }

    /**
     * @api {post} /api/v1/member/forget  重置密码
     * @apiVersion 1.0.0
     * @apiName forget
     * @apiGroup member
     *
     * @apiDescription 重置密码
     *
     * @apiParam  {String} username 用户名
     * @apiParam  {String} password 密码
     * @apiParam  {String} tel 电话
     * @apiParam  {String} sms 验证码
     *
     */

    public function forget(Request $request)
    {
        //得到所有数据
        $data = $request->post();
        //接收手机号码
        $tel = $request->post('tel');
//        halt($tel);
        //得到单前用户对象
        $member = Db::name('members')->where('tel', $tel)->find();
//       halt($member);
        //取出验证码
        $code = Cache::get("tel_" . $data['tel']);
//        halt($code);
        //判断验证码是否一致

        if ((string)$code !== $data['sms']) {
            api_json(-1, '验证码错误');
        }
        //判断用户是否存在
        if ($member) {
            //密码加密
            $data['password'] = password_hash($data['password'], 1);
            unset($data['sms']);
//            halt($data);
            //数据入库
            Db::name('members')->where('tel', $data['tel'])->update($data);
            api_json(1, '密码重置成功', $data);
        }
    }

}