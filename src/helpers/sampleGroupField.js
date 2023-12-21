import { FIELD_TYPES } from "./FieldTypes";
import { SAMPLE_DROPDOWN_OPTIONS } from "./sampleDropdownListOptions";

export const SAMPLE_FIELDS = [
  {
    GroupFieldID: 0,
    Label: "Mã sản phẩm",
    FieldName: "ID",
    FieldType: FIELD_TYPES.TEXTFIELD,
    IsRequired: true,
    Placeholder: "",
    Column: 1,
    MaxLength: 50,
    ErrorText: "Deptrai",
  },
  {
    GroupFieldID: 1,
    Label: "Tên sản phẩm",
    FieldName: "ProductName",
    FieldType: FIELD_TYPES.TEXTFIELD,
    IsRequired: true,
    Placeholder: "",
    Column: 1,
    MaxLength: 50,
    ErrorText: "Deptrai",
  },
  {
    GroupFieldID: 2,
    Label: "Hãng sản phẩm",
    FieldName: "ProductType",
    FieldType: FIELD_TYPES.DROPDOWN,
    Column: 1,
    Placeholder: "",
    DropdownListID: 1,
    DropdownList: SAMPLE_DROPDOWN_OPTIONS,
  },
  {
    GroupFieldID: 3,
    Label: "Giá sản phẩm",
    FieldName: "ProductPrice",
    FieldType: FIELD_TYPES.TEXTFIELD,
    IsRequired: true,
    Column: 1,
    Placeholder: "",
  },
  {
    GroupFieldID: 4,
    Label: "Kích thước sản phẩm",
    FieldName: "ProductSize",
    FieldType: FIELD_TYPES.TEXTFIELD,
    Column: 1,
    Placeholder: "",
  },
  {
    GroupFieldID: 5,
    Label: "Nguồn gốc sản phẩm",
    FieldName: "ProductOrigin",
    FieldType: FIELD_TYPES.DROPDOWN,
    Column: 1,
    Placeholder: "",
  },
  {
    GroupFieldID: 6,
    Label: "Vật liệu sản phẩm",
    FieldName: "ProductMaterial",
    FieldType: FIELD_TYPES.TEXTFIELD,
    IsRequired: true,
    Column: 2,
    Placeholder: "",
  },
  {
    GroupFieldID: 7,
    Label: "Năm sản xuất",
    FieldName: "ProductYear",
    FieldType: FIELD_TYPES.TEXTFIELD,
    Column: 2,
    Placeholder: "",
  },
  {
    GroupFieldID: 8,
    Label: "Cân nặng sản phẩm",
    FieldName: "ProductWeight",
    FieldType: FIELD_TYPES.TEXTFIELD,
    Column: 2,
    Placeholder: "",
  },
  {
    GroupFieldID: 9,
    Label: "Số lượng sản phẩm",
    FieldName: "ProductQuantity",
    FieldType: FIELD_TYPES.TEXTFIELD,
    IsRequired: true,
    Column: 2,
    Placeholder: "",
  },
  {
    GroupFieldID: 10,
    Label: "Ảnh sản phẩm",
    FieldName: "ProductImage",
    FieldType: FIELD_TYPES.IMAGEPICKER,
    IsRequired: false,
    Column: 2,
    Placeholder: "",
  },
];

// {
//     ID: 1,
//     ProductName: "TV1",
//     ProductBrand: "Sony",
//     ProductPrice: "5000.0",
//     ProductSize: "123",
//     ProductOrigin: "VietNam",
//     ProductMaterial: "Metal",
//     ProductYear: "2023",
//     ProductWeight: 15.8,
//     ProductQuantity: 30,
//     ProductImage: "testimage",
//   },
