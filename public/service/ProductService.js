export const ProductService = {
  getProductsData() {
    return [
      {
        id: '1000',
        title:"Пройдите сурдологический комплекс!",
        description: 'Product Description',
        image: '/IMG/slider-1.png',
        link:""
      },
      {
        id: '1001',
        title:"лор-операции",
        description: 'для иногородних',
        image: '/IMG/slider-2.jpg',
        link:"узнайте подробнее"
      },
      {
        id: '1002',
        title:"безопасные лор-операции",
        description: 'лучшие лор-хирургии',
        image: '/IMG/slider-bg-1.jpg',
        link:"узнайте подробнее"
      },
      {
        id: '1003',
        title:"поможем услышать мир",
        description: 'подбор и настройка слухавых аппаратов',
        image: '/IMG/slider-3.jpg',
        link:""
      },
        {
            id: '1004',
            title:"пройдите информативный сурдологический комплекс!",
            description: '',
            image: '/IMG/slider-bg-2.jpg',
            link:""
        },
        {
            id: '1005',
            title:"большая забота",
            description: 'детский лор-врач с огромным опытом работы',
            image: '/IMG/slider-bg-3.jpg',
            link:""
        },
    ];
  },

  getProductsWithOrdersData() {
    return [

    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

};
