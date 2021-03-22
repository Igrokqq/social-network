import { join } from 'path';

const API_BASE_URL = 'http://localhost:3000/';
const HTTP_METHODS = {
  POST: 'post'
};

const _transformUrl = (url: string): string => (process.env.NODE_ENV === 'development' ? `${API_BASE_URL}${url}` : join(API_BASE_URL, url));
const _isSerialized = (payload: unknown): boolean => typeof payload === 'string';

export default {
  post(url: string, payload: unknown, options = {}): Promise<string> {
    return fetch(_transformUrl(url), {
      ...options,
      method: HTTP_METHODS.POST,
      headers: {
        'Access-Control-Allow-Origin': API_BASE_URL,
        'Accept-Content-Type': 'application/json',
        'Content-Type': 'application/json'
      },
      body: _isSerialized(payload) ? payload as string : JSON.stringify(payload)
    })
      .then((response: Response): Promise<string | never> => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      });
  }
};
