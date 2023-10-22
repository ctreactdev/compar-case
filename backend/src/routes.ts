import { UserController } from "./controller/UserController"
import { ProductController } from "./controller/ProductController"


export const Routes = [{
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all"
},
{
    method: "get",
    route: "/products/:product_id",
    controller: ProductController,
    action: "one"
},]