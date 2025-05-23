import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.smart',
  name: '360智慧生活',
  groups: [
    {
      key: 1,
      name: '局部广告-云录像会员广告',
      desc: '点击关闭',
      rules: [
        {
          position: {
            left: 'width * 0.9402',
            top: 'width * 0.0590',
          },
          activityIds: 'com.qihoo.main.flutter.SmartHomeFlutterActivity',
          matches:
            '@View[id="root"][visibleToUser=true] > View > [text^="服务时间"] +6 [desc="支付宝"]',
          exampleUrls: 'https://e.gkd.li/1106858a-bb22-4583-b238-fe270733b5fe',
          snapshotUrls: 'https://i.gkd.li/i/18354637',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.qihoo.main.flutter.SmartHomeFlutterActivity',
          matches: '[vid="sh_app_upgrade_dialog_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/19a460f5-5fe0-41b1-8def-65e23804a8fd',
          snapshotUrls: 'https://i.gkd.li/i/19499314',
        },
      ],
    },
  ],
});
