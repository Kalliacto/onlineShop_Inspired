export const API_URL = 'http://localhost:8024';
export const GOODS_URL = `${API_URL}/api/goods`; //получить список всех товаров с пагинацией
export const GOODS_URL_ID = `${API_URL}/api/goods/{id}`; //получить товар по его ID
export const CATEGORY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;

//GET /api/goods?[param]