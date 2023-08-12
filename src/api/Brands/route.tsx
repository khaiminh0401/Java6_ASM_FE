import { Brand } from "src/common/model/Brand";
import { useFetch } from "src/util/CustomHook";
const hostURL = "/api/brand/";
export async function findAll_Brands() {
    const brands = await useFetch.get(hostURL);
    return brands.data;
}
export async function findById_Brands(id: string | null) {
    const brands = await useFetch.get(hostURL + id);
    return brands.data;
}
export async function save_Brands(data: Brand) {
    const brands = await useFetch.post(hostURL + "save", data);
    return brands.data;
}
export async function delete_Brands(id: string | null) {
    const brands = await useFetch.delete(hostURL + id);
    return brands.data;
}
export async function update_Brands(id: string | null, data: Brand) {
    const brands = await useFetch.put(hostURL + id, data);
    return brands.data;
}