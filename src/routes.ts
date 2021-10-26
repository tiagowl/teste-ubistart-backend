import {getAllProductsAction} from "./controller/GetAllProductsAction";
import {getProductByIdAction} from "./controller/GetProductById";
import {updateProduct} from './controller/UpdateProduct';


/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/products",
        method: "get",
        action: getAllProductsAction
    },
    {
        path: "/products/:id",
        method: "get",
        action: getProductByIdAction
    },
    {
        path: "/products/:id",
        method: "put",
        action: updateProduct
    }
];