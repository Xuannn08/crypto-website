// export class Carts extends Base {
//   protected url = "/";
//   list(pagination: IPagination, query?: any) {
//     return this.doGet<any, IListResponse<CartType>>(this.url, {
//       ...this.toPaginationQuery(pagination),
//       ...query,
//     });
//   }

//   create(dto: CartType<"form">): Promise<ICommonResponse> {
//     return this.http.post(`${this.url}`, dto);
//   }
//   get(id: string): Promise<CartType> {
//     return this.http.get(`${this.url}/${id}`);
//   }

//   update(
//     dto: CartType<"form">[]
//   ): Promise<ICommonResponse & { items: CartType[] }> {
//     return this.http.put(`${this.url}`, { items: dto });
//   }
// }
