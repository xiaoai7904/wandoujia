import Utils from "./utils/Utils";
import Observer from "./observer/Observer";
import Http from "./http/Http";
export * from "./request";
export * from "./types";
export { Utils, Observer, Http };

export enum RouterNameEnum {
  // 首页
  HOME = "home",
  // 登录
  LOGIN = "login",
  // 注册
  REGISTER = "register",
  // 找回密码
  FORGETPASSWORD = "forgetPassword",
  // 欢迎页
  WELCOME = "welcome",
  // 我要投资
  INVEST = "invest",
  // 个人中心
  MY = "my",
  // 投资详情
  INVESTDETAILS = "investDetails",
  // 优惠劵
  DISCOUNT = "discount",
  // 特权卷
  PRIVILEGE = "privilege",
  // 关于我们
  ABOUT = "ABOUT",
  // 我的
  SERVICE = "service",
  // 账户概览
  OVERVIEW = "overview",
  // 我的投资
  MYINVEST = "myInvest",
  //  付息还本记录
  INTERESTRECORD = "interesterRecord",
  // 资金明细
  INCOME = "income",
  // 身份认证
  AUTH = "auth",
  // 资料修改
  MODIFY = "modify",
  // 修改登录密码
  MODIFYLOGINPASSWORD = "modifyLoginPassword",
  // 修改支付密码
  MODIFYPAYPASSWORD = "modifyPayPassword",
  // 我的银行卡
  BANK = "bank",
  // 充值
  RECHARGE = "recharge",
  // 消息
  MESSAGE = "message",
  // 签到
  CHECKIN = "checkIn",
  // 代理
  AGENT = "agent",
  // 代理规则
  AGENTRULE = "agentRule",
  // 支付
  PAY = "pay",
  // ========================

  // 充值详情
  RECHARGEDETAILS = "rechargeDetails",
  // 充值记录
  RECHARGERECORD = "rechargeRecord",
  // 提现
  WITHDRAW = "withdraw",
  // 提现记录
  WITHDRAWRECORD = "withdrawRecord",
  // 余额宝
  BALANCEBAO = "balanceBao",
  // 余额宝转入转出记录
  BALANCEBAORECORD = "balanceBaoRecord",
  // 我的佣金
  COMMISSION = "commission",
  // 账户明显
  ACCOUNTDETAILS = "accountDetails",
  // 团队业绩
  TEAMPERFORMANCE = "teamPerformance",
  // 个人信息
  PERSONALINFO = "personalInfor",
  // 个人信息-修改名称
  PERSONALINFOUPDATENAME = "personalInforUpdateName",
  // 个人信息-修改密码
  PERSONALINFOUPDATEPASSWORD = "personalInforUpdatePassword",
}

// 语言标识
export const XA_LANG = `XA_LANG`;
// 登陆状态
export const XA_LOGIN_STATUS = "XA_LOGIN_STATUS";
// Token
export const XA_TOKEN = "XA_TOKEN";
// loginExpired
export const XA_LOGIN_EXPIRED = "XA_LOGIN_EXPIRED";
// 记住密码
export const XA_PASSWORD = "XA_PASSWORD";
// 用户信息
export const XA_USERINFO = "XA_USERINFO";
