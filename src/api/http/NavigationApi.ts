import request from '@/api/http/axios'
import { INav } from '@/api/data/InterData'
import { get } from './funApi'

export class NavigationApi {
  /**
   * 查询总数
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type  查询条件
   * @param chche 缓存
   * @returns
   */
  static getCount(identity: number, type: string, chche: boolean) {
    // return request(
    //   {
    //     url: `/api/SnNavigation/GetSunAsync?identity=${identity}&type=${type}&cache=${chche}`,
    //     method: 'get'
    //   },
    //   {
    //     qiXiao_cancel: false
    //   }
    // )
    return get(`/api/SnNavigation/GetSunAsync?identity=${identity}&type=${type}&cache=${chche}`, false)
  }

  /**
   * 模糊查询
   * @param identity  无条件:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param name 查询字段
   * @param chche 缓存
   */
  static getContains(identity: number, type: string, name: string, chche = false): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetContainsAsync?identity=${identity}&type=${type}&name=${name}&cache=${chche}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   * 条件查询
   * @param identity 分类:1 || 用户:2
   * @param type 查询条件
   * @param cache 缓存
   */
  static getTypeAsync(identity: number, type: string, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetTypeAsync?identity=${identity}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   * 主键查询
   * @param id 主键
   * @param cache 缓存
   */
  static getByIdAsync(id: any, cache = false): Promise<any> {
    return request(
      {
        url: `/api/SnNavigation/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   *
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param page 当前页码
   * @param pagesize 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isDesc 是否倒序[true/false]
   * @param cache 缓存
   */
  static getPaging(
    identity: number,
    type: string,
    page: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    return request(
      {
        url: `/api/SnNavigation/GetPagingAsync?identity=${identity}&type=${type}&pageIndex=${page}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   * @description: 新增数据
   * @param {any} data
   */
  static add(data: INav) {
    return request(
      {
        url: '/api/SnNavigation/AddAsync',
        method: 'post',
        data: data
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   * @description: 更新数据
   * @param {INav} resultData
   */
  static update(resultData: INav) {
    return request(
      {
        url: '/api/SnNavigation/UpdateAsync',
        method: 'put',
        data: resultData
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  /**
   * @description: 删除
   * @param {number} id
   * @return {*}
   */
  static del(id: number) {
    return request(
      {
        url: `/api/SnNavigation/DelAsync?id=${id}`,
        method: 'delete'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }

  // ==================分类===========================

  /**
   * @description: 查询导航表分类的内容
   */
  static getNavTypeAll(cache = false) {
    return request(
      {
        url: `/api/SnNavigationType/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      },
      {
        loading: false
      }
    )
  }
}
