import axios from "axios";
import { SAMPLE_GROUPS } from "./sampleGroup";
export const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:7188/api/v1"
    : "idontknow";

/**
 * Feature: API lấy paging dữ liệu
 * @returns Danh sách dữ liệu
 * Author: Lê Minh Quang (19/08/2023)
 */
export const getPagingRecord = async (
  tableName,
  keyword,
  pageSize = 20,
  pageNumber = 1,
  filterObj
) => {
  const res = await axios.post(
    `${baseUrl}/${tableName}/Paging?keyword=${keyword}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
    filterObj
  );

  return res.data;
};

export const getNewEmployeeCode = async () => {
  const res = await axios.get(`${baseUrl}/Employees/NewEmployeeCode`);
  return res.data;
};

/**
 * Feature: Lấy nhân viên theo ID
 * @returns Dữ liệu
 * Author: Lê Minh Quang (19/08/2023)
 */
export const getRecordById = async (id, tableName) => {
  const res = await axios.get(`${baseUrl}/${tableName}/${id}`);
  return res.data;
};

/**
 * Feature: Tạo bản ghimới
 * @returns ID bản ghi mới
 * Author: Lê Minh Quang (19/08/2023)
 */
export const createRecord = async (data, tableName) => {
  const res = await axios.post(`${baseUrl}/${tableName}/`, data);
  return res;
};

/**
 * Feature: Cập nhật nhân viên
 * @returns ID bản ghi mới
 * Author: Lê Minh Quang (19/08/2023)
 */
export const updateRecord = async (data, tableName, id) => {
  const res = await axios.put(`${baseUrl}/${tableName}/${id}`, data);
  return res;
};

/**
 * Feature: Xóa nhân viên
 * Author: Lê Minh Quang (19/08/2023)
 */
export const deleteRecordAsync = async (id, tableName) => {
  await axios.delete(`${baseUrl}/${tableName}/${id}`);
};

/**
 * Feature: Xóa nhiều nhân viên
 * Author: Lê Minh Quang (19/08/2023)
 */
export const deleteManyRecordAsync = async (idList, tableName) => {
  await axios.delete(`${baseUrl}/${tableName}/DeleteMany`, { data: idList });
};

export const getGroupConfigs = async () => {
  return SAMPLE_GROUPS;
};

/**
 * Feature: Tạo excel
 * @returns ID bản ghi mới
 * Author: Lê Minh Quang (19/08/2023)
 */
export const exportExcel = async (keyword = "", filterObj = {}) => {
  const res = await axios.post(
    `${baseUrl}/Employees/Excel?keyword=${keyword}`,
    { ...filterObj },
    { responseType: "blob" }
  );
  const url = window.URL.createObjectURL(
    new Blob([res.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })
  );

  const link = window.document.createElement("a");
  link.href = url;
  link.download = "Xuat_khau_Danh_sach_nguoi_nop_thue";
  document.body.appendChild(link);
  link.click();

  // Remove anchor from body
  document.body.removeChild(link);
  return res;
};
