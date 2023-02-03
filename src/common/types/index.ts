export type RequestResponse<T> = {
  code: number;
  data: T;
  message: string;
};

export type ListType<T> = {
  list: T[];
  total: number;
  currentPage: number;
};

export type LoginFormType = {
  mobile: string;
  password: string;
};
export type UpdateLoginPasswordFormType = {
  code: string;
  password: string;
  password2: string;
};
export type FindLoginPasswordType = {
  code: string;
  password: string;
  password2: string;
  mobile: string;
  username: string;
};
export type LoginStoreType = {
  loading: boolean;
  form: LoginFormType;
  updateLoginPasswordForm: UpdateLoginPasswordFormType;
  findLoginPasswordForm: FindLoginPasswordType;
  rememberPassword: boolean;
  // 欢迎页面checkbox值
  welcomeCheckBox: boolean;
  // 欢迎页面checkerror
  welcomeCheckError: boolean;
};

export type UserInfoType = {
  // 客户渠道号
  channel: string;
  // 创建时间
  createDate: string;
  id: string;
  // 邀请码
  inviteCode: string;
  // 手机号
  mobile: string;
  // 注册ip
  registerIp: string;
  // 状态
  status: number;
  superiorUa: number;
  superiorUb: number;
  superiorUc: number;
  // 用户名
  username: string;
};

export type UserBalanceType = {
  // 可用余额
  assets: number;
  // 等待回收
  await: number;
  // 我的资产
  balance: number;
  // 累计收益
  cumulative: number;
};
export type LoginResultType = {
  token: string;
  expired?: string;
};

export type RegisterFormType = {
  // 客户渠道号
  channel: string;
  // 短信验证码
  code: string;
  // 手机号
  mobile: string;
  // 密码
  password: string;
  // 真实姓名
  username: string;
};

export type RegisterStoreType = {
  registerLoading: boolean;
  form: RegisterFormType;
  check: boolean;
  checkError: boolean;
  codeCountEnd: boolean;
};

export type ProjectItemType = {
  // 项目转化
  conversion: number;
  // 项目周期
  cycle: number;
  // 周期类型（1:每天返还,2:到期返还）
  cycleType: number;
  // 项目id
  investId: number;
  // 项目名称
  investName: string;
  // 担保机构
  mechanism: string;
  // 是否需要特权劵(1：不需要 2：需要)
  privilegeType: number;
  // 进度金额，如果project_type等于1 无需理会
  progressAmount: number;
  // 项目描述
  projectDescribe: string;
  // 项目说明
  projectExplain: string;
  // 项目类型（1:固定金额投资,2:进度周期投资）
  projectType: number;
  // 还款方式
  repaymentMode: string;
  // 项目规模金额(分为单位)
  scaleAmount: number;
  // 项目分类id
  typeId: number;
  // 每日收益
  dailyProfit: number;
  // 设备简称
  abbreviation: string;
  // 总利润
  totalProfit: number;
  // 成本/每人/rs
  totalCost: number;
  // 投资设备每份
  startAmount: number;
  // 是否到期退本金(1:不是 2是)
  expirePrincipalType: number;
  // 每日返本金+收益/rs (expire_principal_type =2无需理会)
  principalProfit: number;
  // 图片
  img: string;
};

export type CouponItemType = {
  // 优惠券使用金额单位分
  amount: number;
  // 优惠券描述
  couponDescribe: string;
  // 优惠券表目id
  couponId: number;
  // 优惠券名称
  couponName: string;
  // 结束时间
  endDate: string;
  // 投资项目实体
  investId: number;
  // 生效时间
  openDate: string;
};

export type DiscountItemType = {
  // 优惠券使用金额单位分
  amount: number;
  // 优惠券实体
  coupon: CouponItemType;
  // 优惠券id
  couponId: number;
  // 使用情况（1未使用 2已使用）
  couponUsage: number;
  // 派发时间
  distributeDate: string;
  // 结束时间
  endDate: string;
  // 是否过期(1未过期 2已过期)
  overdue: number;
  userCouponId: number;
};
