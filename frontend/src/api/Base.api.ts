import { join } from 'path';

const API_BASE_URL = 'http://localhost:3000/';
const HTTP_METHODS = {
  POST: 'post',
  PUT: 'put'
};
const initialOptions = {
  headers: {}
};

const _transformUrl = (url: string): string => (process.env.NODE_ENV === 'development' ? `${API_BASE_URL}${url}` : join(API_BASE_URL, url));
const _isSerialized = (payload: unknown): boolean => typeof payload === 'string';

export default {
  get(url: string, options = initialOptions): Promise<any | never> {
    return fetch(_transformUrl(url), options)
      .then((response: Response): Promise<any | never> => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      });
  },
  post(url: string, payload: unknown, { headers, ...options } = initialOptions): Promise<any | never> {
    return fetch(_transformUrl(url), {
      ...options,
      method: HTTP_METHODS.POST,
      headers: {
        ...headers,
        'Access-Control-Allow-Origin': API_BASE_URL,
        'Accept-Content-Type': 'application/json',
        'Content-Type': 'application/json'
      },
      body: _isSerialized(payload) ? payload as string : JSON.stringify(payload)
    })
      .then((response: Response): Promise<any | never> => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      });
  },
  put(url: string, payload: unknown, { headers, ...options } = initialOptions): Promise<any> {
    return fetch(_transformUrl(url), {
      ...options,
      method: HTTP_METHODS.PUT,
      headers: {
        ...headers,
        'Access-Control-Allow-Origin': API_BASE_URL,
        'Accept-Content-Type': 'application/json',
        'Content-Type': 'application/json'
      },
      body: _isSerialized(payload) ? payload as string : JSON.stringify(payload)
    })
      .then((response: Response): Promise<any | never> => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      });
  }
};
