import axios from 'axios';

const main_url = "https://books-backend.p.goit.global/api-docs/";
const category_list = '/books/category-list';
const top_books = '/books/top-books';

axios.defaults.baseURL= main_url;

export async function getcategorylist()
{
    const {data} = await axios.get(category_list);
    return data.map(({list_name}) => list_name);
}
export async function gettopbooks()
{
    const {data} = await axios.get(top_books);
    return data;
}


