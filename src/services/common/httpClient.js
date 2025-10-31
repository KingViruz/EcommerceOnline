import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_MENSAJERIA_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,  
});

export const httpClientThisProject = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false, 
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


//token invalido
httpClient.interceptors.response.use(
  (response) => {
    // El backend siempre responde 200 por eso revisamos body tristemente
    const body = response.data;

    const isTokenError =
      body &&
      body.status === 400 &&
      typeof body.message === 'string' &&
      body.message.toLowerCase().includes('invalid or expired token');

    if (isTokenError) {
      // limpiar todo lo que guardaste
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      console.log('Token vencido - redirigiendo al login…');
      window.location.replace('/auth/login');          
    }

    return response;
  },
  (error) => {
    // Aca solo caen errores de red o HTTP realmente 4xx/5xx
    return Promise.reject(error);
  }
);