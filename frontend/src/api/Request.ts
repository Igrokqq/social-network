const { REACT_APP_SERVER_BASE_URL }: NodeJS.ProcessEnv = process.env;

const initialHeaders: {[key: string]: string} = {
  'Access-Control-Allow-Origin': REACT_APP_SERVER_BASE_URL || '',
  'Accept-Content-Type': 'application/json',
  'Content-Type': 'application/json'
};

const isSuccessStatusCode = (status: number): boolean => status >= 200 && status < 300;

export const get = async function (url: string, options: RequestInit = {}): Promise<unknown> {
  const response: Response = await fetch(`${REACT_APP_SERVER_BASE_URL}/${url}`, {
    ...options,
    headers: {
      ...initialHeaders,
      ...options.headers
    }
  });

  if (response.ok && isSuccessStatusCode(response.status)) {
    return response.json();
  }

  return Promise.reject(response);
};

export const post = async function (url: string, options: RequestInit = {}): Promise<unknown> {
  const response: Response = await fetch(`${REACT_APP_SERVER_BASE_URL}/${url}`, {
    ...options,
    headers: {
      ...initialHeaders,
      ...options.headers,
    },
    method: 'POST',
  });

  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response);
};

export const put = async function (url: string, options: RequestInit = {}): Promise<unknown> {
  const response: Response = await fetch(`${REACT_APP_SERVER_BASE_URL}/${url}`, {
    ...options,
    headers: {
      ...initialHeaders,
      ...options.headers,
    },
    method: 'PUT'
  });

  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response);
};
