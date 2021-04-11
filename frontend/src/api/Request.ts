const { REACT_APP_SERVER_BASE_URL }: NodeJS.ProcessEnv = process.env;

const initialHeaders: {[key: string]: string} = {
  'Access-Control-Allow-Origin': REACT_APP_SERVER_BASE_URL || '',
  'Accept-Content-Type': 'application/json',
  'Content-Type': 'application/json'
};

export const get = async function (url: string, options: RequestInit = {}): Promise<unknown> {
  const response: Response = await fetch(`${REACT_APP_SERVER_BASE_URL}/${url}`, {
    ...options,
    headers: {
      ...initialHeaders,
      ...options.headers
    }
  });

  return response.json();
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
