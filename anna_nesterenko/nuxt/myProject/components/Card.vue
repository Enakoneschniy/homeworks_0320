<template>

  <div class="container">
    <div class="row">

       <nuxt-link v-for="product of products" :key="product.image" class="col-lg-4 col-md-6 col-sm-12 mp-gallery-item" to="#" >
         <img :src ="product.image"  :alt="product.alt">
         <div>
           <div class="d-flex justify-content-between align-items-center mp-margin-bt">
             <h4 class="mp-title">{{product.title}}</h4>
             <p class="mp-price">{{product.price}}</p>
           </div>
           <p class="mp-description">{{product.description}}</p>
         </div>
       </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  data: () => ({
    products: [
      {
        image: require('../assets/img-2.jpg'),
        alt: 'img-2',
        title: 'Item - 0',
        description: 'Lorem ipsum1...',
        price: 250,
        id: 1
      },
      {
        image: require('../assets/img-3.jpg'),
        alt: 'img-3',
        title: 'Item - 2',
        description: 'Lorem ipsum2...',
        price: 270,
        id: 2
      },
      {
        image: require('../assets/img-10.jpg'),
        alt: 'img-3',
        title: 'Item - 3',
        description: 'Lorem ipsum3...',
        price: 340,
        id: 3
      },
      {
        image: require('../assets/img-4.jpg'),
        alt: 'img-4',
        title: 'Item - 4',
        description: 'Lorem ipsum4...',
        price: 650,
        id: 4
      },
      {
        image: require('../assets/img-5.jpg'),
        alt: 'img-5',
        title: 'Item - 5',
        description: 'Lorem ipsum5...',
        price: 650,
        id: 5
      },
      {
        image: require('../assets/img-6.jpg'),
        alt: 'img-6',
        title: 'Item - 6',
        description: 'Lorem ipsum6...',
        price: 950,
        id: 6
      },
      {
        image: require('../assets/img-7.jpg'),
        alt: 'img-7',
        title: 'Item - 7',
        description: 'Lorem ipsum7...',
        price: 950,
        id: 7
      },
      {
        image: require('../assets/img-9.jpg'),
        alt: 'img-8',
        title: 'Item - 8',
        description: 'Lorem ipsum8...',
        price: 80,
        id: 8
      },
      {
        image: require('../assets/img-11.jpg'),
        alt: 'img-11',
        title: 'Item - 11',
        description: 'Lorem ipsum11...',
        price: 950,
        id: 11
      }
    ]
  })
}
</script>

<style scoped>
  .mp-gallery-item {
    text-decoration: none;
    width: 28vw;
    height: auto;
    padding: 15px;
    display: block;
    box-sizing: border-box;
    box-shadow: -2px 6px 19px 0 rgba(0, 0, 0, 0.46);
    position: relative;
    margin-bottom: 10%;
  }

  .row .mp-gallery-item:last-child {
    margin-right: 0;
  }

  .mp-gallery-item img {
    display: block;
    width: 100%;
    height: 35vw;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .mp-margin-bt {
    margin-bottom: 10px;
  }

  .mp-title {
    color: #862a5c;
  }

  .mp-price {
    padding: 6px;
    margin: 0;
    background: #f6d198;
    border-radius: 5px;
    color: white;
  }

  .mp-description {
    color: #007892;
  }

</style>
