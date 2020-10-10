<?php
/**
 * +----------------------------------------------------------------------
 * | 首页控制器
 * +----------------------------------------------------------------------
 *                      .::::.
 *                    .::::::::.            | AUTHOR: siyu
 *                    :::::::::::           | EMAIL: 407593529@qq.com
 *                 ..:::::::::::'           | QQ: 407593529
 *             '::::::::::::'               | DATETIME: 2019/04/03
 *                .::::::::::
 *           '::::::::::::::..
 *                ..::::::::::::.
 *              ``::::::::::::::::
 *               ::::``:::::::::'        .:::.
 *              ::::'   ':::::'       .::::::::.
 *            .::::'      ::::     .:::::::'::::.
 *           .:::'       :::::  .:::::::::' ':::::.
 *          .::'        :::::.:::::::::'      ':::::.
 *         .::'         ::::::::::::::'         ``::::.
 *     ...:::           ::::::::::::'              ``::.
 *   ```` ':.          ':::::::::'                  ::::..
 *                      '.:::::'                    ':'````..
 * +----------------------------------------------------------------------
 */
namespace app\admin\controller;

use think\facade\App;
use think\facade\Cache;
use think\facade\Config;
use think\facade\Db;
use think\facade\Request;
use think\facade\View;

class Index extends Base
{
    // 首页
    public function index()
    {
        //系统信息
        $mysqlVersion = Db::query('SELECT VERSION() AS ver');
        $config = [
            'url'             => $_SERVER['HTTP_HOST'],
            'document_root'   => $_SERVER['DOCUMENT_ROOT'],
            'server_os'       => PHP_OS,
            'server_port'     => $_SERVER['SERVER_PORT'],
            'server_ip'       => isset($_SERVER['SERVER_ADDR']) ? $_SERVER['SERVER_ADDR'] : '',
            'server_soft'     => $_SERVER['SERVER_SOFTWARE'],
            'php_version'     => PHP_VERSION,
            'mysql_version'   => $mysqlVersion[0]['ver'],
            'max_upload_size' => ini_get('upload_max_filesize'),
            'version'         => App::version(),
            'siyu_version'    => Config::get('app.siyu_version'),
        ];

        // 查找一周内注册用户信息
        $user = \app\common\model\Users::where('create_time', '>', time() - 60 * 60 * 24 * 7)->count();

        // 查找待处理留言信息
        $message = \app\common\model\Message::where('status', '0')->count();

        // 查找是否有在线留言的模型id
        $messageModuleId = \app\common\model\Module::where('table_name', 'message')->value('id');
        $messageCatUrl = url('Message/index');
        if ($messageModuleId) {
            // 查询留言模块第一个栏目ID
            $messageCatId = \app\common\model\Cate::where('module_id', $messageModuleId)->value('id');
            if (!is_null($messageCatId)) {
                // 生成URL
                $messageCatUrl = url('Message/index', ['cate_id' => $messageCatId]);
            }
        }
        $view = [
            'config'        => $config,
            'user'          => $user,
            'message'       => $message,
            'messageCatUrl' => $messageCatUrl,
        ];
        View::assign($view);
        return View::fetch();
    }

    // 清除缓存
    public function clear()
    {
        $path = App::getRootPath() . 'runtime';
        if ($this->_deleteDir($path)) {
            $result['msg'] = '清除缓存成功!';
            $result['error'] = 0;
        } else {
            $result['msg'] = '清除缓存失败!';
            $result['error'] = 1;
        }
        $result['url'] = (string)url('login/index');
        return json($result);
    }

    // 预览
    public function preview(string $module, string $id)
    {
        // 查询当前模块信息
        $model = '\app\common\model\\' . $module;
        $info = $model::find($id);
        if ($info) {
            // 查询所在栏目信息
            $cate = \app\common\model\Cate::find($info['cate_id']);
            if ($cate->module->getData('model_name') == 'Page') {
                if ($cate['cate_folder']) {
                    $url = $cate['cate_folder'] . '.' . Config::get('route.url_html_suffix');
                } else {
                    $url = $module . Config::get('route.pathinfo_depr') . 'index.' . Config::get('route.url_html_suffix') . '?cate=' . $cate['id'];
                }
            } else {
                if ($cate['cate_folder']) {
                    $url = $cate['cate_folder'] . Config::get('route.pathinfo_depr') . $id . '.' . Config::get('route.url_html_suffix');
                } else {
                    $url = $module . Config::get('route.pathinfo_depr') . 'info.' . Config::get('route.url_html_suffix') . '?cate=' . $cate['id'] . '&id=' . $id;
                }
            }
            if (isset($url) && !empty($url)) {
                // 检测是否开启了域名绑定
                if (Config::get('app.domain_bind')) {
                    $url = Request::rootDomain() . '/' . $url;
                } else {
                    $url = '/index/' . $url;
                }
            }
        }
        return redirect($url);
    }

    // 执行删除
    private function _deleteDir($R)
    {
        Cache::clear();
        $handle = opendir($R);
        while (($item = readdir($handle)) !== false) {
            // log目录不可以删除
            if ($item != '.' && $item != '..' && $item != 'log') {
                if (is_dir($R . DIRECTORY_SEPARATOR . $item)) {
                    $this->_deleteDir($R . DIRECTORY_SEPARATOR . $item);
                } else {
                    if ($item != '.gitignore') {
                        if (!unlink($R . DIRECTORY_SEPARATOR . $item)) {
                            return false;
                        }
                    }
                }
            }
        }
        closedir($handle);
        return true;
        //return rmdir($R); // 删除空的目录
    }

}
