import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短视频',
  groups: [
    {
      key: 0,
      name: '局部广告-卡片广告',
      activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '@LynxFlattenUI[id=null][text="开宝箱得金币"]',
          snapshotUrls: ['https://i.gkd.li/i/20094124'],
        },
        {
          key: 2,
          fastQuery: true,
          action: 'back',
          matches: '@LynxFlattenUI[id=null][text="恭喜获得开宝箱奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/20094120',
        },
      ],
    },
  ],
});
