import { Http } from "@/common";

/**
 * 登录
 * @param params {
  "mobile": "手机号",
  "password": "密码"
}
 * @returns Promise<any>
 */
export function LoginRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/login", params);
}

/**
 * 注册
 * @param params {
  "channel": 客户渠道号,
  "code": 短信验证码,
  "mobile": 手机号,
  "password": 密码,
  "username": 真实姓名
}
 * @returns Promise<any>
 */
export function RegisterRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/register", params);
}

/**
 * 退出
 * @param params {}
 * @returns Promise<any>
 */
export function LogoutRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/logout", params);
}

/**
 * 短信验证码
 * @param params { mobile: 手机号码 }
 * @returns Promise<any>
 */
export function VerificationCodeRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/verificationCode", params);
}

/**
 * 获取用户余额
 * @param params { }
 * @returns Promise<any>
 */
export function getBalanceRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/balance", params);
}

/**
 * 获取用户ID
 * @param params { }
 * @returns Promise<any>
 */
export function GetUserIdRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/userId", params);
}

/**
 * 获取用户信息
 * @param params { }
 * @returns Promise<any>
 */
export function GetUserInfoRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/userInfo", params);
}

/**
 * 优惠券列表
 * @param params { }
 * @returns Promise<any>
 */
export function GetCouponListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/coupon/list", params);
}

/**
 * 投资项目类型列表
 * @param params { }
 * @returns Promise<any>
 */
export function GetProjectListRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/project/list", params);
}

/**
 * 投资项目数据
 * @param params {limit:每页显示记录数,page:当前页码，从1开始,typeId:分类id }
 * @returns Promise<any>
 */
export function GetProjectPageRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/project/page", params);
}

/**
 * 投资项目数据
 * @param params {limit:每页显示记录数,page:当前页码，从1开始,typeId:分类id }
 * @returns Promise<any>
 */
export function GetProjectIdRequest<T, R>(id: string | number) {
  return Http.of().get<T, R>("/api/project/" + id);
}

/**
 * 更新登录密码
 * @param params {code:短信验证码,password:密码,password2:密码二次验证 }
 * @returns Promise<any>
 */
export function UpdateLoginPasswordRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/updatePws", params);
}

/**
 * 获取用户余额
 * @param params {}
 * @returns Promise<any>
 */
export function GetUserBalanceRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/balance", params);
}

/**
 * 获取推广链接
 * @param params {}
 * @returns Promise<any>
 */
export function GetLinkRequest<T, R>(params = {} as T) {
  return Http.of().get<T, R>("/api/fission/link", params);
}

/**
 * 下单
 * @param params {amount:投资金额(单位分),couponId:优惠券id，如果没使用优惠券可不填写,couponType:是否使用优惠券(1使用 2不使用)，investId：投资理财项id,password:支付密码 }
 * @returns Promise<any>
 */
export function PayRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/project/placeAnOrder", params);
}

/**
 * 找回密码
 * @param params {code:短信验证码,mobile:手机号,password:密码,password2:密码二次验证,username:真实姓名 }
 * @returns Promise<any>
 */
export function FindPasswordRequest<T, R>(params = {} as T) {
  return Http.of().post<T, R>("/api/retrieve", params);
}

/**
 * 获取下单优惠卷
 * @param params {}
 * @returns Promise<any>
 */
export function GetCouponIdRequest<T, R>(id: string | number) {
  return Http.of().get<T, R>("/api/coupon/" + id);
}