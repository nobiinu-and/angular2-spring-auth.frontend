import { BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

// すべてのリクエストで必要な設定を管理する
export class RestApiDefaultRequestOptions extends BaseRequestOptions {
  headers = new Headers({
    'X-Requested-With': 'XMLHttpRequest'
  });
  withCredentials = true;

  // BaseRequestOptionsのmergeはヘッダをマージしてくれないので、自前でマージする
  merge(options?: RequestOptionsArgs): RequestOptions {
    if (options.headers) {
      options.headers = this.mergeHeaders(options.headers);
    }
    return super.merge(options);
  }

  mergeHeaders(optionHeaders: Headers): Headers {
    if (!optionHeaders) {
      return null;
    }

    let mergedHeaders = new Headers();

    this.headers.forEach((values, name) => {
        mergedHeaders.set(name, values.join(' '));
    });

    optionHeaders.forEach((value, name) => {
      mergedHeaders.set(name, value.join(' '));
    });

    return mergedHeaders;
  }
}
