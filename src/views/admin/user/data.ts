const columns: any = [
  {
    title: '主键',
    width: 20,
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'ip',
    width: 40,
    dataIndex: 'ip'
  },
  {
    title: '用户',
    dataIndex: 'name',
    align: 'center',
    width: 40
  },
  {
    title: 'email',
    dataIndex: 'email',
    align: 'center',
    width: 60
  },
  {
    title: 'brief',
    dataIndex: 'brief',
    align: 'center',
    width: 60
  },
  {
    title: 'nickname',
    dataIndex: 'nickname',
    align: 'center',
    width: 40
  },
  {
    title: 'pwd',
    dataIndex: 'pwd',
    width: 60,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: 'photo',
    dataIndex: 'photo',
    width: 60,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: 'timeCreate',
    dataIndex: 'timeCreate',
    width: 60,
    ellipsis: true // 超过宽度将自动省略
  },
  {
    title: 'timeModified',
    dataIndex: 'timeModified',
    width: 60,
    ellipsis: true // 超过宽度将自动省略
  },

  {
    title: '操作',
    dataIndex: 'edit',
    align: 'center',
    key: '编辑',
    fixed: 'right',
    width: 40
  },
  {
    title: '操作',
    dataIndex: 'del',
    align: 'center',
    key: '删除',
    fixed: 'right',
    width: 40
  }
]

export { columns }
