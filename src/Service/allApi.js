import { commonRequest } from "./commonRequest";

export const login = async (body) => {
  return commonRequest("POST", "admin/signin", body);
};

export const getAttributes = async () => {
  return commonRequest("GET", "admin/getAttribute");
};

export const createAttribute = async (body) => {
  return commonRequest("POST", "admin/createAttributes", body);
};

export const getProducts = async () => {
  return commonRequest("GET", "user/getProducts");
};

export const getProductsWithAttributes = async () => {
  return commonRequest("GET", "user/getProductsWithAttributes");
};

export const newProduct = async (body) => {
  return commonRequest("POST", "admin/products", body, "multipart/form-data");
};

export const getAllCategories = async () => {
  return commonRequest("GET", "user/getCategories");
};

export const createCategory = async (body) => {
  return commonRequest("POST", "admin/categories", body, "multipart/form-data");
};

export const createOrder = async (body) => {
  return commonRequest("POST", "user/createOrder/1", body);
};

export const getColourAttributes = async () => {
  return commonRequest("GET", "admin/getColour");
};

export const getSizeAttributes = async () => {
  return commonRequest("GET", "admin/getSize");
};

export const createAttributeVariations = async (id, body) => {
  return commonRequest("POST", `admin/AttributeVariations/${id}`, body);
};

export const getAttributeVariations = async (id) => {
  return commonRequest("GET", `admin/getAttributeVariations/${id}`);
};

export const createCompainAttribute = async (id, body) => {
  return commonRequest(
    "POST",
    `admin/createCompainAttribute/${id}`,
    body,
    "multipart/form-data"
  );
};
