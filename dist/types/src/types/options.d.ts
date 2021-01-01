import { Breadcrumb } from '../core/breadcrumb';
import { BreadcrumbPushData } from './breadcrumb';
import { ReportDataType } from './transportData';
declare type CANCEL = null | undefined | boolean;
export declare type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';
export declare enum EMethods {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}
interface IRequestHeaderConfig {
    url: HttpMethod;
    method: string;
}
declare type TSetRequestHeader = (key: string, value: string) => {};
export interface IBeforeAppAjaxSendConfig {
    setRequestHeader: TSetRequestHeader;
}
export interface InitOptions extends SilentEventTypes, HooksTypes {
    dsn?: string;
    disabled?: boolean;
    apikey?: string;
    debug?: boolean;
    enableTraceId?: boolean;
    includeHttpUrlTraceIdRegExp?: RegExp;
    traceIdFieldName?: string;
    filterXhrUrlRegExp?: RegExp;
    maxBreadcrumbs?: number;
}
export interface HooksTypes {
    configReportXhr?(xhr: XMLHttpRequest): void;
    beforeDataReport?(event: ReportDataType): PromiseLike<ReportDataType | null> | ReportDataType | CANCEL;
    beforePushBreadcrumb?(breadcrumb: Breadcrumb, hint: BreadcrumbPushData): BreadcrumbPushData | CANCEL;
    beforeAppAjaxSend?(config: IRequestHeaderConfig, setRequestHeader: IBeforeAppAjaxSendConfig): void;
    backTrackerId?(): string | number;
}
export interface SilentEventTypes {
    silentXhr?: boolean;
    silentFetch?: boolean;
    silentConsole?: boolean;
    silentDom?: boolean;
    silentHistory?: boolean;
    silentError?: boolean;
    silentUnhandledrejection?: boolean;
    silentHashchange?: boolean;
    silentVue?: boolean;
}
export {};
