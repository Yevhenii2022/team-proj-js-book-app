import axios from 'axios';

const BASE_URL = "https://books-backend.p.goit.global/api-docs/";
const CATEGORY_LIST = '/books/category-list';
const TOP_BOOKS = '/books/top-books';

axios.defaults.baseURL= BASE_URL;

export async function getCategoryList()
{
    const {data} = await axios.get(CATEGORY_LIST);
    return data.map(({list_name}) => list_name);
}
export async function getTopBooks()
{
    const {data} = await axios.get(TOP_BOOKS);
    return data;
}


