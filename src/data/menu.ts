interface TreeNode {
  label: string
  value: string
  children: TreeNode[] | null
}

export const menuTree: TreeNode[] = [
  {
    label: 'サービス',
    value: '1',
    children: [
      { label: 'サービス一覧', value: '1-1', children: null },
      { label: 'ComiruBASIC', value: '1-2', children: null },
      { label: 'ComiruFREE', value: '1-3', children: null },
      { label: 'ComiruAir', value: '1-4', children: null },
      { label: 'ComiruHR', value: '1-5', children: null },
    ],
  },
  {
    label: 'プラン一覧',
    value: '2',
    children: null,
  },
  {
    label: '基本機能',
    value: '3',
    children: [
      {
        label: 'Comiru',
        value: '3-1',
        children: [
          { label: '専用アプリ＆LINE連携', value: '3-1-1', children: null },
          { label: '指導報告書', value: '3-1-2', children: null },
          { label: 'お知らせ', value: '3-1-3', children: null },
          { label: '入退室管理', value: '3-1-4', children: null },
          { label: '請求書', value: '3-1-5', children: null },
          { label: '口座振替', value: '3-1-6', children: null },
          { label: 'カード決済', value: '3-1-7', children: null },
          { label: '成績管理', value: '3-1-8', children: null },
          { label: '座席管理', value: '3-1-9', children: null },
          { label: '見込顧客獲得', value: '3-1-10', children: null },
          { label: 'Web申込み', value: '3-1-11', children: null },
          { label: '口コミ収集＆掲載', value: '3-1-12', children: null },
        ],
      },
      {
        label: 'ComiruAir',
        value: '3-2',
        children: [
          { label: 'オンライン授業支援', value: '3-2-1', children: null },
        ],
      },
      {
        label: 'ComiruHR',
        value: '3-3',
        children: [
          { label: '講師人事労務管理', value: '3-3-1', children: null },
        ],
      },
    ],
  },
  {
    label: '導入事例',
    value: '4',
    children: null,
  },
  {
    label: 'お役立ち資料',
    value: '5',
    children: null,
  },
  {
    label: 'セミナー一覧',
    value: '6',
    children: null,
  },
  {
    label: 'ヘルプ',
    value: '7',
    children: [
      {
        label: 'Comiru',
        value: '7-1',
        children: [
          { label: '導入までの流れ', value: '7-1-1', children: null },
          { label: 'よくある質問', value: '7-1-2', children: null },
        ],
      },
      {
        label: 'ComiruAir',
        value: '7-2',
        children: [
          { label: 'よくある質問', value: '7-2-1', children: null },
        ],
      },
      {
        label: 'お問い合わせ',
        value: '7-3',
        children: null,
      },
    ],
  },
  {
    label: '塾講師ログイン',
    value: '8',
    children: null,
  },
]
